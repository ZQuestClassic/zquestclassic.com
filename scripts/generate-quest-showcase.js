const host = 'https://data.zquestclassic.com';
const manifest = await (await fetch(`${host}/manifest.json`)).json();

const quests = Object.values(manifest)
	.filter(quest => quest.id.startsWith('quests/'))
	.filter(quest => quest.approval !== false)
	.filter(quest => quest.rating.score >= 4.5)
	.filter(quest => quest.images.length)
	.sort((a, b) => b.rating.score - a.rating.score);

for (const quest of quests) {
	const author = quest.authors.map(a => a.name).join(', ');
	console.log(`    - name: "${quest.name}"`);
	console.log(`      author: "${author}"`);
	console.log(`      img: ${host}/${quest.id}/${quest.images[0]}`);
	console.log(`      url: ${quest.projectUrl}`);
}
