import fs from 'fs';
import {Octokit} from 'octokit';
import {Octokit as OctokitCI} from '@octokit/action';

async function getRelease(id) {
	const ghResponse = await octokit.rest.repos.getRelease({
		owner: 'ZQuestClassic',
		repo: 'ZQuestClassic',
		release_id: id,
	});
	return ghResponse.data;
}

function parseChangelog(body, getMainChangelog = true) {
	const lines = body.trim().split('\n');

	let description = '';
	if (lines[0].startsWith('The one')) {
		description = lines[0];
	}

	let keepCount = 0;
	let deleteMode = false;
	const content = lines
		.filter(line => {
			if (deleteMode) {
				if (line.startsWith('#')) deleteMode = false;
				else return false;
			}

			if (line.includes('The following are the changes')) {
				keepCount += 1;
				return false;
			}
			if (line.includes('-------')) return false;
			if (line.startsWith('The one ')) return false;
			if (line.startsWith('To download this release')) return false;

			if (line.startsWith('#') && line.includes('Download')) {
				deleteMode = true;
				return false;
			}

			return getMainChangelog ? keepCount <= 1 : keepCount == 2;
		})
		.join('\n');
	
	return {description, content};
}

function parseAssets(release) {
	let assets = [];
	for (const asset of release.assets) {
		if (asset.name.endsWith('web.zip'))
			continue;

		let platform;
		if (asset.name.includes('windows-x64'))
			platform = 'windows-x64';
		if (asset.name.includes('windows-x86'))
			platform = 'windows-win32';
		if (asset.name.includes('mac'))
			platform = 'mac';
		if (asset.name.includes('linux'))
			platform = 'linux';
		// Old
		if (asset.name.includes('ubuntu'))
			platform = 'linux';
		if (asset.name.includes('Win'))
			platform = 'windows-win32';
		if (release.assets.length === 1)
			platform = 'windows-win32';

		assets.push({
			url: asset.browser_download_url,
			name: asset.name,
			platform,
		});
	}
	assets = assets.map(asset => {
		return `\n  - url: ${asset.url}\n    name: ${asset.name}\n    platform: ${asset.platform}`;
	}).join('\n');
	return assets;
}

async function handleRelease(id) {
	const release = await getRelease(id);
	if (release.assets.length === 0) {
		return;
	}
	if (release.assets.some(a => a.name === 'zquest.exe')) {
		return;
	}

	console.log(id, release.tag_name);

	const title = (release.name || '').trim() || release.tag_name;
	const assets = parseAssets(release);

	let channel;
	if (release.tag_name.includes('z3')) {
		channel = 'z3';
	} else if (release.tag_name.startsWith('3')) {
		channel = '3';
	} else if (release.tag_name.startsWith('nightly-') || release.tag_name.startsWith('2.55')) {
		channel = '2.55';
	} else {
		console.error(release.tag_name);
		throw new Error();
	}

	let {description, content} = parseChangelog(release.body);
	// TODO
	if (release.tag_name == '2.55.0') {
		content = `[View a summary of what's new in 2.55](https://zquestclassic.com/docs/2.55/).\n` + content;
	}

	const output = `---
title: ${title}
description: ${description}
date: ${release.created_at}
assets: ${assets}
prerelease: ${release.prerelease}
id: ${release.id}
tag_name: '${release.tag_name}'
channel: '${channel}'
tags:
  - releases
---

${content}
`;

	const folder = `content/releases/${release.tag_name}`;
	fs.mkdirSync(folder, {recursive: true});
	fs.writeFileSync(`${folder}/index.md`, output);
}

async function update(amount) {
	let page = 1;
	let per_page;
	if (amount === 'all') {
		per_page = 100;
	} else {
		per_page = Math.min(100, amount);
	}

	let count = 0;
	while (true) {
		const ghResponse = await octokit.rest.repos.listReleases({
			owner: 'ZQuestClassic',
			repo: 'ZQuestClassic',
			per_page,
			page,
		});
		const releases = ghResponse.data;
		if (releases.length === 0) break;
	
		for (const {id} of releases) {
			await handleRelease(id);
			if (++count === amount) return;
		}
		page++;
	}
}

const octokit = process.env.CI ? new OctokitCI() : new Octokit({auth: process.env.GH_PAT});
if (!process.env.CI) {
	const {
	  data: { login },
	} = await octokit.rest.users.getAuthenticated();
	console.log(`Auth'd as %s`, login);
}

let mode = process.argv[2] || 'recent';
if (mode === 'all') {
	update('all');
} else if (mode === 'recent') {
	update(5);
}

// Update release channel json files, used by zupdater.
{
	const ghResponse = await octokit.rest.repos.listReleases({
		owner: 'ZQuestClassic',
		repo: 'ZQuestClassic',
	});
	const releases = ghResponse.data;
	
	function writeReleaseChannelJson(channel, pattern) {
		const release = releases.find(r => r.tag_name.match(pattern));
		if (!release) return;

		fs.writeFileSync(`public/releases/${channel}.json`, JSON.stringify({
			channel,
			tagName: release.tag_name,
			assets: release.assets.map(a => ({
				name: a.name,
				url: a.browser_download_url,
				size: a.size,
			})),
		}, null, 2));
	}
	
	writeReleaseChannelJson('2.55', /^(2\.55|nightly-)/);
	writeReleaseChannelJson('3', /^3\./);
	writeReleaseChannelJson('latest', /^3\./);
}
{
	const ghResponse = await octokit.rest.repos.listReleases({
		owner: 'connorjclark',
		repo: 'ZeldaClassic',
	});
	const releases = ghResponse.data;
	
	function writeReleaseChannelJson(channel, pattern) {
		const release = releases.find(r => r.tag_name.match(pattern));
		if (!release) return;

		fs.writeFileSync(`public/releases/${channel}.json`, JSON.stringify({
			channel,
			tagName: release.tag_name,
			assets: release.assets.map(a => ({
				name: a.name,
				url: a.browser_download_url,
				size: a.size,
			})),
		}, null, 2));
	}
	
	writeReleaseChannelJson('z3', /z3/);
}

{
	const latest255 = JSON.parse(fs.readFileSync('public/releases/2.55.json', 'utf-8'));
	const ghResponse = await octokit.rest.repos.getReleaseByTag({
		owner: 'ZQuestClassic',
		repo: 'ZQuestClassic',
		tag: latest255.tagName,
	});
	const release = ghResponse.data;

	let redirects = fs.readFileSync('_redirects', 'utf-8').split('\n');
	const index = redirects.findIndex(l => l.startsWith('# nightly page'));
	redirects[index + 1] = `/releases/nightly/ https://zquestclassic.com/releases/${release.tag_name}/ 302`;
	fs.writeFileSync('_redirects', redirects.join('\n'));
}
