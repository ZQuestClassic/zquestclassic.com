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
	const lines = release.body.trim().split('\n');

	let description = '';
	if (lines[0].startsWith('The one with')) {
		description = lines[0];
	}

	let assets = [];
	for (const asset of release.assets) {
		if (asset.name.endsWith('web.zip'))
			continue;

		let channel;
		if (asset.name.includes('windows-x64'))
			channel = 'windows-x64';
		if (asset.name.includes('windows-x86'))
			channel = 'windows-win32';
		if (asset.name.includes('mac'))
			channel = 'mac';
		if (asset.name.includes('linux'))
			channel = 'linux';
		// Old
		if (asset.name.includes('ubuntu'))
			channel = 'linux';
		if (asset.name.includes('Win'))
			channel = 'windows-win32';
		if (release.assets.length === 1)
			channel = 'windows-win32';

		assets.push({
			url: asset.browser_download_url,
			name: asset.name,
			channel,
		});
	}
	assets = assets.map(asset => {
		return `\n  - url: ${asset.url}\n    name: ${asset.name}\n    channel: ${asset.channel}`;
	}).join('\n');

	let keepCount = 0;
	let deleteMode = false;
	const body = lines
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

			if (line.startsWith('# Downloads available')) {
				deleteMode = true;
				return false;
			}

			return keepCount <= 1;
		})
		.join('\n');
	const output = `---
title: ${title}
description: ${description}
date: ${release.created_at}
assets: ${assets}
prerelease: ${release.prerelease}
id: ${release.id}
tag_name: ${release.tag_name}
tags:
  - releases
---

${body}
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
	writeReleaseChannelJson('3', /^3\.0/);
	writeReleaseChannelJson('latest', /^3\.0/);
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
