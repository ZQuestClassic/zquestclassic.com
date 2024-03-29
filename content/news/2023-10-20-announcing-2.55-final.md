---
title: Announcing the final release of 2.55, and what's next
description: 
date: 2023-10-19T23:18:20-07:00
---

> NOTE (Nov. 5): the release date has been [pushed to ~mid December](/news/2023-11-05-2.55-release-update-and-contest/).

We will be wrapping up development on 2.55, and aim to release it on November 7th. While a few quality-of-life features may land in 2.55 between now and its final release, there will be a freeze on adding extra capabilities to the engine - so, no new combos, items or enemies. In that sense, 2.55 is feature complete. Tileset maintainers should be confident that if their tileset supports all feature available today, they have a "2.55 tileset". As necessary, we will patch 2.55 to fix serious bugs even after the "final" release, but there will be no new features of any kind after the final release.

See the [2.55 summary doc](/docs/2.55/) for an almost-comprehensive summary of all the new stuff added in 2.55.

So what's next for ZQuest Classic? 3.0!

## New versioning policy

2.55 was first released as alpha in late 2018, and all releases since have been labeled alphas (or, more recently, nightlies). In the past year, a lot has been done to prevent regressions in the engine. While feature development has recently seen a huge uptick, the number of bugs introduced has not similarly grown. This can be attributed to the addition of many automated tests - especially replay tests. Thanks to these tests, recent alphas have been the most stable of the 2.55 series, while including more new features than ever. As long as we continue to invest in automated tests - and we will - we can keep frequent stable releases of ZC coming. Given that, we'll be adopting a new versioning policy.

Releases after 2.55 will be either stable or a nightly. The new versioning scheme consists of three numbers: `major.minor.patch` (this is a variation of [semver](https://semver.org/)).

* Stable releases are `major.minor.0` (patch is always zero, so we'll omit it when referring to stable releases). Ex: `3.1` is the second stable release of major version 3.
* Each nightly release increments the patch component of the last stable release, and also includes the date. Ex: `3.1.1-nightly+2024-01-01` is the first nightly after the `3.1.0` stable release.
* We aim to release a stable version on every first Monday of the month, but will release more often as needed to fix critical bugs in order to keep the latest stable release the safest way to experience ZC.
* We will apply reasonable scrutiny to the commits that are merged to the main branch the week before a planned stable release, heavily preferring merging only safe bug fixes.

## 3.0

Soon after the 2.55 release, we will release 3.0. This first release won't be much different from 2.55, but here are some important changes to expect:

* New icons, a logo, and even a title song made just for ZQuest Classic
* We'll be dropping the classic quests from the distribution, and including some more quests made by the community
* A separate nightly release channel to start a public beta for the Z3-scrolling engine rewrite. It's a bit too risky to merge this to the main branch just yet, but it's time to start getting feedback from the community on this big change

## What cool stuff to expect

Here are some big projects that we're hoping to work on over the next year.

### Z3 scrolling

Over a year in development, Z3-scrolling adds Regions to the DMap editor, allowing quest designers to stitch together multiple screens for the player to traverse as a single area in which the camera follows them around - just like A Link To The Past! Expect more information when the beta is released alongside 3.0. For now, enjoy [this Z3 video Moosh made](https://www.youtube.com/watch?v=KaoIiORMurk&ab_channel=Moosh).

### Editor automation

The part of ZC with the least amount of automated testing is the editor. To improve stablity here, in the works is a way to interface with the editor from an external process, such as a Python script. While this is being made with writing automated tests in mind, a possiblity may be providing power users with the capablity to create their own editor plugins. If you're interested in this possiblity, please share what sort of things you'd like to be possible with this feature.

### More languages for scripting

ZScript has taken ZC far, but we can't reasonbly match the ergonomics and capabilities of real programming languages. So let's support those as well! It's early days, but in experimentation is support for compiling real languages - like Rust, Go, C#, C++, ... (anything that [can compile to WebAssembly](https://github.com/appcypher/awesome-wasm-langs#contents)). In addition to using languages some may already be familiar with, this opens up the entire world of software libraries for inclusion in your quest.

More on this... much later.

### More GUI rewrites

Some large components of the editor GUI still use the old GUI code. Some big ones we plan to recreate in the better GUI include the enemy editor and the screen warps dialog

### Enemy improvements

Along with redesigning the enemy editor, we'll be looking at all the enemies and what additional customization could be provided for each. Please send Deedee best wishes in this endeavor.

### Slope polish

Slopes are a pretty major addition, but there are flaws; the biggest being clipping. Deedee plans to take a look at them to give them a much-needed polish touchup.

### JIT-compiled ZScript / ZASM

Normally, ZASM (the result of compiling ZScript) is interpreted by the engine one instruction at a time in a virtual machine. This introduces a lot of overhead for things computers should be really fast at (like math). JIT (Just-In-Time) compilation is when an interpreted bytecode is compiled to machine instructions that your CPU can execute directly. There is already an experimental JIT compiler for ZASM in 2.55, but it is off by default. It offers [huge speed ups of 5-20x](https://github.com/ZQuestClassic/ZQuestClassic/blob/main/docs/jit.md).

It hasn't been enabled by default yet because it currently requires compiling all scripts up front, or pausing the game when an uncompiled script is needed, which can introduce significant delays. With a bit more work, the JIT compiler will be made to compile in the background and swap out the ZASM interpreter when done compiling a script. Once the delays are removed, this will be enabled by default, and all scripts will become much faster.

## So long 2.55!

<img src="/img/link-wave.gif" alt="Link waving from Wind Waker" width="100%" height="100%"/>
