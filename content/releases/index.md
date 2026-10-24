---
layout: layouts/base.njk
eleventyNavigation:
	key: Get ZC!
	order: 1
---

{% set release_list = collections.releases %}
{% set latest_stable_release = release_list | latestStableRelease %}
{% set latest_nightly_release = release_list | latestNightlyRelease %}
<!-- TODO: remove when 3.0 is out -->
{% set latest_255_release = release_list | latest255Release %}

<style>
	main {
		font-size: larger;
	}

	h2 {
		text-align: center;
	}

	.latest-releases {
		display: flex;
		text-align: center;
		justify-content: space-between;
		flex-wrap: wrap;
		margin-bottom: 50px;
	}

	.latest-release {
		flex: 1;
    	margin: 20px;
	}
	.latest-release .download {
		display: flex;
		margin: 10px 0;
		padding: 0;
		font-weight: bold;
		height: 4em;
	}
	.latest-release .download span {
		display: grid;
    	place-content: center;
	}
	.latest-release .download .cta {
		flex-grow: 1;
		padding: 40px 32px;
	}
	.latest-release.stable .download .cta {
		background-color: #1c501c;
		color: white;
	}
	.latest-release.nightly .download .cta {
		background-color: #644c86;
		color: white;
	}
	.latest-release .download .name {
		background-color: #423f56;
		transition: background-color 0.1s;
    	color: floralwhite;
		padding: 40px 32px;
		/* width: 40%; */
	}
	.latest-release .download:hover .name {
		background-color: #4d4964;
	}

	.latest-release a.download {
		text-decoration: none;
		cursor: pointer;
	}
	.latest-release a {
		display: inline-block;
	}
	.latest-release.failed a:not([href]) {
		cursor: not-allowed;
	}
	
	
	.loading .meta {
		display: none;
	}


	.loading .meta {
		display: none;
	}

	/* main {
		max-width: 50vw;
	} */
</style>

<h2>Download ZQuest Classic</h2>

<div class="warning"></div>

<div class="latest-releases">

<div class="latest-release stable">
<a class="download">
	<span class="cta">Download Stable</span><span class="name">{{ latest_stable_release.data.title }}</span>
</a>
<span class="meta">
	<a class="release-notes" href="{{ latest_255_release.url }}">Release Notes</a>
</span>
</div>

<div class="latest-release nightly">
<a class="download">
	<span class="cta">Download Nightly</span><span class="name">{{ latest_nightly_release.data.title | replace("Nightly ", "") }}</span>
</a>
<span class="meta">
	<a class="release-notes" href="{{ latest_nightly_release.url }}">Release Notes</a>
</span>
</div>

</div>

<h2>How to play a quest</h2>

<div>
	<div>To learn how to play a quest, see <a target="_blank" href="https://docs.zquestclassic.com/about/how-to-play">these instructions</a>.</div>
</div>

<h2 id="supported-operating-systems">Supported operating systems</h2>

<div>
	<div>Windows 7+</div>
	<div>MacOS 12+</div>
	<div>Linux: x86-64 with glibc 2.35+ (Ubuntu 22.04, Debian 12, Fedora 36, SteamOS 3, or newer), or the <a href="https://flathub.org/apps/com.zquestclassic.ZQuest">flatpak</a>. Nightlies are also built for ARM (AArch64)</div>
</div>

<script>
const platform = Website.getPlatform();
const stableAssets = {{ latest_255_release.data.assets | json | safe }};
const nightlyAssets = {{ latest_nightly_release.data.assets | json | safe }};

function renderRelease(nightly, channel) {
	const el = document.querySelector(nightly ? '.nightly': '.stable');
	const assets = nightly ? nightlyAssets : stableAssets;
	const assetForThisPlatform = Website.findAssetForChannel(assets, channel);

	const downloadEl = el.querySelector('.download');
	if (assetForThisPlatform) {
		downloadEl.href = assetForThisPlatform.url;
	} else {
		el.classList.add('failed');
	}

	// ARM can't always be detected from the browser, so link the other
	// architecture next to the default download.
	const otherArch = {
		'linux': {platform: 'linux-aarch64', label: 'ARM64'},
		'linux-aarch64': {platform: 'linux', label: 'x86-64'},
		'windows-x64': {platform: 'windows-arm64', label: 'ARM64'},
		'windows-arm64': {platform: 'windows-x64', label: 'x64'},
	}[assetForThisPlatform?.platform];
	const otherArchAsset = otherArch && assets.find(asset => asset.platform === otherArch.platform);
	if (otherArchAsset) {
		const otherArchEl = document.createElement('a');
		otherArchEl.textContent = otherArch.label;
		otherArchEl.href = otherArchAsset.url;
		el.querySelector('.meta').append(' | ', otherArchEl);
	}

	if (channel.startsWith('linux') && !nightly) {
		const flatpakEl = document.createElement('a');
		flatpakEl.textContent = 'Flatpak';
		flatpakEl.href = 'https://flathub.org/apps/com.zquestclassic.ZQuest';
		el.querySelector('.meta').append(' | ', flatpakEl);
	}
}

function setToFailed(message) {
	document.querySelector('.warning').textContent = message;
}

(async () => {
	const channel = await Website.getChannelWithArch();
	renderRelease(false, channel);
	renderRelease(true, channel);
	if (!channel) {
		setToFailed(`Not supported for ${platform}, try the web version instead!`);
	}
})();

</script>

<h2>Web version (experimental)</h2>

An experimental web version is available here: [play](https://web.zquestclassic.com/play/) or [create](https://web.zquestclassic.com/create/).

Gamepads supported.

Supported browsers allow for installing the web version as a Web App, allowing you to open it quickly as a standalone
app from your desktop or home screen.

<h2>All Releases</h2>

<style>
	ol.release-list {
		list-style: none;
		display: grid;
		grid-template-columns: repeat(3, auto);
		place-items: center;
		gap: 20px;
		text-align: center;
	}

	li.release-list-item {
		display: contents;
	}

	.release-list-date {
		justify-self: flex-end;
	}
</style>

<div>
	<a href=/changelog/>Single-page changelog</a>
</div>


<ol class="release-list">
{% for release in release_list | reverse -%}
	{%- if not release.data.prerelease -%}
		<li class="release-list-item{% if release.url == url %} release-list-item-active{% endif %}">
			<a href="{{ release.url }}" class="release-list-link">{% if release.data.title %}{{ release.data.title }}{% else %}<code>{{ release.url }}</code>{% endif %}</a>
			<time class="release-list-date" datetime="{{ release.date | htmlDateString }}">{{ release.date | readableDate("LLLL dd yyyy") }}</time>
			<span>{{ release.data.description }}</span>
		</li>
	{% endif %}
{% endfor %}
</ol>

Older releases can be found in archives:

- [Archive 1](https://discord.com/channels/876899628556091432/903985751967010866) (Discord channel)
- [Archive 2](https://drive.google.com/drive/folders/0BzEkEDDDx6UYbFJvUG1DeVZGZkk?resourcekey=0-ivzkQQ3cEi0EGT8sSKcYxw)
- [Archive 3](https://drive.google.com/drive/folders/1CUWvk7nvCgvcSFO3vQpCMhrP7KoYb20U)
