const { DateTime } = require("luxon");
const markdownItAnchor = require("markdown-it-link-attributes");


const pluginRss = require("@11ty/eleventy-plugin-rss");
const pluginSyntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const pluginBundle = require("@11ty/eleventy-plugin-bundle");
const pluginNavigation = require("@11ty/eleventy-navigation");
const { EleventyHtmlBasePlugin } = require("@11ty/eleventy");

const pluginDrafts = require("./eleventy.config.drafts.js");
const pluginImages = require("./eleventy.config.images.js");

module.exports = function(eleventyConfig) {
	eleventyConfig.setUseGitIgnore(false);

	// Copy the contents of the `public` folder to the output folder
	// For example, `./public/css/` ends up in `_site/css/`
	eleventyConfig.addPassthroughCopy({
		"./public/": "/",
		"./node_modules/prismjs/themes/prism-okaidia.css": "/css/prism-okaidia.css",
		"./content/**/*.png": true,
	});

	// Run Eleventy when these files change:
	// https://www.11ty.dev/docs/watch-serve/#add-your-own-watch-targets

	// Watch content images for the image pipeline.
	eleventyConfig.addWatchTarget("content/**/*.{svg,webp,png,jpeg}");

	// App plugins
	eleventyConfig.addPlugin(pluginDrafts);
	eleventyConfig.addPlugin(pluginImages);

	// Official plugins
	eleventyConfig.addPlugin(pluginRss);
	eleventyConfig.addPlugin(pluginSyntaxHighlight, {
		preAttributes: { tabindex: 0 }
	});
	eleventyConfig.addPlugin(pluginNavigation);
	eleventyConfig.addPlugin(EleventyHtmlBasePlugin);
	eleventyConfig.addPlugin(pluginBundle);

	// Filters
	eleventyConfig.addFilter("readableDate", (dateObj, format, zone) => {
		return dateObj.toLocaleString(undefined, {year: 'numeric', month: 'long', day: '2-digit'});
	});

	eleventyConfig.addFilter('htmlDateString', (dateObj) => {
		// dateObj input: https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-date-string
		return DateTime.fromJSDate(dateObj, {zone: 'utc'}).toFormat('yyyy-LL-dd');
	});

	eleventyConfig.addFilter('previousRelease', (tag, releases, channel) => {
		const allFromChannel = releases.filter(r => r.data.channel === channel && !r.data.since_last_stable);
		const index = allFromChannel.findIndex(r => r.data.tag_name === tag);
		return allFromChannel[index - 1];
	});

	eleventyConfig.addFilter('nextRelease', (tag, releases, channel) => {
		const allFromChannel = releases.filter(r => r.data.channel === channel && !r.data.since_last_stable);
		const index = allFromChannel.findIndex(r => r.data.tag_name === tag);
		return allFromChannel[index + 1];
	});

	eleventyConfig.addFilter('latestStableRelease', (releases) => {
		return releases.findLast(r => !r.data.prerelease);
	});

	eleventyConfig.addFilter('latestNightlyRelease', (releases) => {
		return releases.findLast(r => r.data.prerelease && r.data.channel === '3' && !r.data.since_last_stable);
	});

	eleventyConfig.addFilter('latest255Release', (releases) => {
		const tag = require('./public/releases/2.55.json').tagName;
		return releases.findLast(r => r.data.tag_name === tag && !r.data.since_last_stable);
	});

	eleventyConfig.addFilter('changelogPageReleases', (releases) => {
		const result = releases.filter(r => {
			if (r.data.prerelease) return false;
			if (r.data.tag_name.includes('2.55-alpha-')) {
				const v = Number(r.data.tag_name.replace('2.55-alpha-', ''));
				return v >= 108;
			}
			return true;
		})
		const nightly = releases.find(r => r.data.since_last_stable);
		if (nightly)
			result.push(nightly);
		return result;
	});

	// Get the first `n` elements of a collection.
	eleventyConfig.addFilter("head", (array, n) => {
		if(!Array.isArray(array) || array.length === 0) {
			return [];
		}
		if( n < 0 ) {
			return array.slice(n);
		}

		return array.slice(0, n);
	});

	// Return the smallest number argument
	eleventyConfig.addFilter("min", (...numbers) => {
		return Math.min.apply(null, numbers);
	});

	eleventyConfig.addFilter("json", (content) => {
		return JSON.stringify(content);
	});

	// Return all the tags used in a collection
	eleventyConfig.addFilter("getAllTags", collection => {
		let tagSet = new Set();
		for(let item of collection) {
			(item.data.tags || []).forEach(tag => tagSet.add(tag));
		}
		return Array.from(tagSet);
	});

	eleventyConfig.addFilter("filterTagList", function filterTagList(tags) {
		return (tags || []).filter(tag => ["all", "nav", "post", "posts"].indexOf(tag) === -1);
	});

	// Customize Markdown library settings:
	eleventyConfig.amendLibrary("md", mdLib => {
		mdLib.use(markdownItAnchor, {
			// permalink: markdownItAnchor.permalink.ariaHidden({
			// 	placement: "after",
			// 	class: "header-anchor",
			// 	symbol: "#",
			// 	ariaHidden: false,
			// }),
			level: [1,2,3,4],
			slugify: eleventyConfig.getFilter("slugify"),
			attrs: {
				target: "_blank",
				rel: "noopener"
			},
		});
	});

	// https://github.com/11ty/eleventy/issues/853#issuecomment-770751129
	eleventyConfig.addShortcode('renderlayoutblock', (name) => {
		return (this.layoutblock || {})[name];
    });
    eleventyConfig.addPairedShortcode('layoutblock', (content, name) => {
        if (!this.layoutblock) this.layoutblock = {};
        this.layoutblock[name] = content;
    });

	// Features to make your build faster (when you need them)

	// If your passthrough copy gets heavy and cumbersome, add this line
	// to emulate the file copy on the dev server. Learn more:
	// https://www.11ty.dev/docs/copy/#emulate-passthrough-copy-during-serve

	// eleventyConfig.setServerPassthroughCopyBehavior("passthrough");

	return {
		// Control which files Eleventy will process
		// e.g.: *.md, *.njk, *.html, *.liquid
		templateFormats: [
			"md",
			"njk",
			"html",
			"liquid",
		],

		// Pre-process *.md files with: (default: `liquid`)
		markdownTemplateEngine: "njk",

		// Pre-process *.html files with: (default: `liquid`)
		htmlTemplateEngine: "njk",

		// These are all optional:
		dir: {
			input: "content",          // default: "."
			includes: "../_includes",  // default: "_includes"
			data: "../_data",          // default: "_data"
			output: "_site"
		},

		// -----------------------------------------------------------------
		// Optional items:
		// -----------------------------------------------------------------

		// If your site deploys to a subdirectory, change `pathPrefix`.
		// Read more: https://www.11ty.dev/docs/config/#deploy-to-a-subdirectory-with-a-path-prefix

		// When paired with the HTML <base> plugin https://www.11ty.dev/docs/plugins/html-base/
		// it will transform any absolute URLs in your HTML to include this
		// folder name and does **not** affect where things go in the output folder.
		pathPrefix: "/",
	};
};
