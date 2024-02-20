function getTree(array) {
	const root = { children: [] };
	const lastByRank = {
		0: root,
	};
	for (let i = 0; i < array.length; i++) {
		const o = array[i];

		let parent;
		let j = o.rank - 1;
		while (j >= 0) {
			if (lastByRank[j]) {
				parent = lastByRank[j];
				break;
			}
			j -= 1;
		}

		const node = { el: o.el, text: o.text, children: [] };
		parent.children.push(node);
		lastByRank[o.rank] = node;
	}

	return root;
}

function makeId(text) {
	const id = text
		.toLowerCase()
		.replace(/%[0-9a-z]{2}/gi, '')
		.replace(/\s+/g, '-');
	if (!id) return '';
	if (id[0] >= '0' && id[0] <= '9') return 'v' + id;
	return id;
}

function handleNode(node, parentEl, prefix = []) {
	const el = document.createElement('li');
	let label = node.text?.trim() || '';
	if (label === 'Visual Studio Code Extension') label = 'VS Code Extension';
	if (label === 'ZScript Standard Library (std.zh)') label = 'std.zh';
	const newPrefix = [...prefix, makeId(label)];
	if (label) {
		const id = newPrefix.filter(Boolean).join('-');
		const aEl = document.createElement('a');
		aEl.textContent = label;
		aEl.href = `#${id}`;
		node.el.id = id;
		el.append(aEl);
	}
	parentEl.append(el);
	if (!node.children.length) return;

	const ul = document.createElement('ul');
	el.append(ul);
	for (const child of node.children) {
		handleNode(child, ul, newPrefix);
	}
}

window.onload = function () {
	if (document.querySelector('main').classList.contains('narrow')) {
		return;
	}
	if (location.pathname === '/releases/') {
		return;
	}
	if (location.pathname === '/docs/how-to-play/') {
		return;
	}

	const contentEl = document.body.querySelector('.content');
	let hids = 'h1,h2,h3,h4';
	if (location.pathname === '/docs/2.55/' || location.pathname.startsWith('/news/')) {
		hids = 'h2,h3,h4';
	}
	if (location.pathname === '/changelog/') {
		hids = 'h1.version';
	}
	const h1Els = [...contentEl.querySelectorAll(hids)].filter(el => !el.hasAttribute('data-exclude-nav'));
	const flat = h1Els.map(el => {
		return { el, text: el.textContent, rank: Number(el.tagName.substring(1)) };
	});
	if (flat.length <= 1) return;

	const tree = getTree(flat);
	const rootNavEl = document.createElement('ul');
	handleNode(tree, rootNavEl);
	document.querySelector('.toc').append(rootNavEl);

	const el = location.hash && document.querySelector(location.hash.replaceAll('.', '\\.'));
	if (el) el.scrollIntoView();

	var toc = document.querySelector('.toc');
	var tocMarker = document.querySelector('.toc-marker');
	var tocPath = document.querySelector('.toc-marker path');
	var tocItems;

	// Factor of screen size that the element must cross
	// before it's considered visible
	var TOP_MARGIN = 0,
		BOTTOM_MARGIN = 0;

	var pathLength;

	var lastPathStart,
		lastPathEnd;

	window.addEventListener('resize', drawPath, false);
	window.addEventListener('scroll', sync, false);

	drawPath();

	function drawPath() {
		tocItems = [].slice.call(toc.querySelectorAll('li'));

		// Cache element references and measurements
		tocItems = tocItems.map(function (item) {
			var anchor = item.querySelector('a');
			var target = document.getElementById(anchor.getAttribute('href').slice(1));

			return {
				listItem: item,
				anchor: anchor,
				target: target
			};
		});

		// Remove missing targets
		tocItems = tocItems.filter(function (item) {
			return !!item.target;
		});

		var path = [];
		var pathIndent;

		tocItems.forEach(function (item, i) {

			var x = item.anchor.offsetLeft - 5,
				y = item.anchor.offsetTop,
				height = item.anchor.offsetHeight;

			if (i === 0) {
				path.push('M', x, y, 'L', x, y + height);
				item.pathStart = 0;
			}
			else {
				// Draw an additional line when there's a change in
				// indent levels
				if (pathIndent !== x) path.push('L', pathIndent, y);

				path.push('L', x, y);

				// Set the current path so that we can measure it
				tocPath.setAttribute('d', path.join(' '));
				item.pathStart = tocPath.getTotalLength() || 0;

				path.push('L', x, y + height);
			}

			pathIndent = x;

			tocPath.setAttribute('d', path.join(' '));
			item.pathEnd = tocPath.getTotalLength();

		});

		pathLength = tocPath.getTotalLength();

		sync();

		tocMarker.classList.remove('hidden');
	}

	function sync() {

		var windowHeight = window.innerHeight;

		var pathStart = pathLength,
			pathEnd = 0;

		var visibleItems = 0;

		tocMarker.setAttribute('height', toc.querySelector('ul').clientHeight);

		const viz = [];

		tocItems.forEach(function (item) {
			var targetBounds = item.target.getBoundingClientRect();
			if (targetBounds.bottom > windowHeight * TOP_MARGIN && targetBounds.top < windowHeight * (1 - BOTTOM_MARGIN)) {
				viz.push(item);
				visibleItems += 1;
			}
		});

		if (viz.length === 0) return;

		tocItems.forEach(function (item) {
			if (viz.includes(item)) {
				pathStart = Math.min(item.pathStart, pathStart);
				pathEnd = Math.max(item.pathEnd, pathEnd);

				visibleItems += 1;

				item.listItem.classList.add('visible');

				const rect = item.anchor.getBoundingClientRect()
				if (!(rect.top <= window.innerHeight && rect.bottom >= 0)) {
					// item.anchor.scrollIntoView({behavior: 'smooth'});
					// item.anchor.scrollIntoView(true);
					toc.scrollTop += rect.y;
				}
			}
			else {
				item.listItem.classList.remove('visible');
			}
		});

		// Specify the visible path or hide the path altogether
		// if there are no visible items
		if (visibleItems > 0 && pathStart < pathEnd) {
			if (pathStart !== lastPathStart || pathEnd !== lastPathEnd) {
				tocPath.setAttribute('stroke-dashoffset', '1');
				tocPath.setAttribute('stroke-dasharray', '1, ' + pathStart + ', ' + (pathEnd - pathStart) + ', ' + pathLength);
				tocPath.setAttribute('opacity', 1);
			}
		}
		else {
			tocPath.setAttribute('opacity', 0);
		}

		lastPathStart = pathStart;
		lastPathEnd = pathEnd;

	}

};
