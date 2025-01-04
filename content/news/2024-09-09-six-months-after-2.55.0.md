---
title: Six months after 2.55.0
description: 
date: 2024-09-09T18:00:00-08:00
---

We released 2.55 about 6 months ago now, and since then we've fixed many bugs and added a handful of QoL improvements to bring us to 2.55.6. Check out the [changelog](/changelog/) to see a full list of improvements.

## 2.55 contest

The contest for 2.55 got [some really interesting submissions](https://www.purezc.net/forums/index.php?showtopic=78652). The winner was Joaish with ["The Deep"](https://www.purezc.net/index.php?page=quests&id=810).

<img src="/img/the_deep/q810s1.png" alt="The Deep" width="100%" height="100%"/>

> "You have lost your way in The Deep, a vast interconnected cavern system far below the surface. Explore various themed areas and utilize unique mechanics as you find your way home."

"The Deep" is an incredibly enjoyable Metroidvania-style quest, and serves as a wonderful example of what is possible in ZQuest Classic _without using any scripts_. You can find a copy of "The Deep" in the 2.55 download - give it a spin, and when you're done open up the `.qst` file to learn how it was made!

Thanks and congrats to Joaish!

<style>
	.image-container {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
	}
	.image-container img {
		max-width: 400px;
		width: 50%;
	}
</style>
<div class="image-container">
	<img src="/img/the_deep/q810s2.png" alt="The Deep"/>
	<img src="/img/the_deep/q810s3.png" alt="The Deep"/>
	<img src="/img/the_deep/q810s4.png" alt="The Deep"/>
	<img src="/img/the_deep/q810s5.png" alt="The Deep"/>
</div>

## New contributor - Jambu

Jambu has been hard at work modernizing one of the older dialogs in the editor - the enemy editor. He's also been extending the capabilities of the enemy editor by making their weapons more configurable, and fixing ancient bugs like enemy shields using the wrong side when facing left/right.

When you get a chance, please thank Jambu for gallantly charging into the ZC code mines!

## 3.0 release update

We've also been making steady progress on 3.0 and releasing frequent prerelease builds, with [800+ changes](https://gist.github.com/connorjclark/4a29fbaaca79d0044694ee65dfd4f78e) since the first 3.0 prerelease. This includes many bug fixes, new features, editor improvements, and code quality refactors to make ZC simpler to maintain and new features easier to add.

But there's still a few major features to finish before calling 3.0 "done". Here's a quick rundown.

* Z3 scrolling - more on this later. I hope to have something resembling a beta by end of November.
* Enemy improvements - Jambu is all over this.
* Enabling JIT compilation by default for 5-20x more efficient ZScript - the largest blocker for this was compilation time, but that has been reduced significantly (~85% reduction). This just needs a little more improvement to prevent any interruption to gameplay.
* Adding JSON support to ZScript - with the addition of WebSockets, communicating with external services makes many new ideas for quests possible now. But without support for JSON this is very tedious. In addition, we might just add support for generic dictionaries (like Python dicts/JavaScript objects).

There is no hard release date, but we'll re-evaluate what needs to be in 3.0 if we reach the new year without making significant progress towards these goals. In the meantime, let us know what bugs and features to prioritize in our Discord `#bug-reports` and `#feature-requests` channels by clicking the `This!` button next to the stuff you care most about - and keep sharing new ideas with us.

### ZScript

Some additional improvements to ZScript are now in the `3.0` prerelease.

#### Visual Studio Code extension

The [VS Code Extension](https://marketplace.visualstudio.com/items?itemName=cjamcl.zquest-lsp) got a few major updates:

* A symbol outline of the current script, showing all variables, functions, classes, namespaces, etc.
* Tooltips on hover, shown if a variable/class/whatever was declared with a comment. This supports markdown
* "Go to Definition" to jump to where something is defined. You can right-click to see this option, or CTRL/CMD+click on something

#### Garbage collection

Objects created by scripts are now automatically deleted when they are no longer reachable from any script.

This removes needing to manually delete objects you create (either with the `delete` operator or `Free()`), and mostly removes any reason to
ever call `Own()`.

Related to this change is a simpler way to create some internal objects, like for bitmaps: `Game->CreateBitmap(w, h)` -> `new bitmap(w, h)`.

See the new ["Object Memory Management"](https://github.com/ZQuestClassic/ZQuestClassic/blob/d989ec304d8fb60bd819ddf76599df18d1dec7a8/resources/docs/ZScript_Additions.txt#L454) section in `ZScript_Additions.txt` for further details.

#### Web playground

There's now an online editor for [ZScript](https://web.zquestclassic.com/zscript/), which can be used to quickly check if some code is valid or to explore the documentation of internal functions / the `std` library. There's also a sharing feature.

I had some thoughts of using this tool to embed scripts in tutorials on this website, and maybe even integrate it with the web version of ZC to create interactive tutorials to help learn the editor and ZScript. That's a big project, but tutorials are something ZC needs a lot more of!

## Happy questing! 🏹

<div style="text-align: center">
	<img src="/img/link-happy.gif" alt="Link happily dancing" width="100%" height="100%"/>

	Attribution: [Zujinn](https://gifer.com/en/6mx)
</div>
