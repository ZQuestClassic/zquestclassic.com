function getPlatform() {
	// 2022 way of detecting. Note : this userAgentData feature is available only in secure contexts (HTTPS)
	if (typeof navigator.userAgentData !== 'undefined' && navigator.userAgentData != null) {
		return navigator.userAgentData.platform;
	}
	// Deprecated but still works for most of the browser
	if (typeof navigator.platform !== 'undefined') {
		if (typeof navigator.userAgent !== 'undefined' && /android/.test(navigator.userAgent.toLowerCase())) {
			// android device’s navigator.platform is often set as 'linux', so let’s use userAgent for them
			return 'android';
		}
		return navigator.platform;
	}
	return 'unknown';
}

function getChannel() {
	const platform = Website.getPlatform();
	const isOSX = /mac/.test(platform.toLowerCase());
	const isWindows = /win/.test(platform.toLowerCase());
	const isLinux = /linux/.test(platform.toLowerCase());
	const isIOS = ['iphone', 'ipad', 'ipod'].indexOf(platform.toLowerCase()) !== -1;
	const isAndroid = /android/.test(platform.toLowerCase());
	const isMobile = isIOS || isAndroid;

	let channel = '';
	if (!isMobile) {
		if (isWindows) channel = 'windows-x64';
		if (isOSX) channel = 'mac';
		// Firefox reports "Linux aarch64" here, but Chrome always reports x86_64,
		// so ARM is only detectable sometimes. The download pages link both.
		if (isLinux) channel = /aarch64|arm64/.test(platform.toLowerCase()) ? 'linux-aarch64' : 'linux';
	}
	
	return channel;
}

function sortAssets(assets) {
	const platformChannel = Website.getChannel();
	// Prefix match, so other builds for the same OS (ex: linux-aarch64) come next.
	const matches = a => platformChannel && a.platform?.startsWith(platformChannel);
	return [
		...assets.filter(a => matches(a)),
		...assets.filter(a => !matches(a)),
	];
}

async function getReleaseInfo(tag) {
	const url = 'https://api.github.com/repos/ZQuestClassic/ZQuestClassic/releases/tags/' + tag;
	const r = await fetch(url);
	const json = await r.json();
	return json;
}

document.addEventListener('DOMContentLoaded', () => {
	for (const el of document.querySelectorAll('time')) {
		const date = new Date(el.dateTime);
		el.textContent = date.toLocaleString(undefined, {year: 'numeric', month: 'long', day: '2-digit'});
	}
});

window.Website = {
	getPlatform,
	getChannel,
	sortAssets,
	getReleaseInfo,
};
