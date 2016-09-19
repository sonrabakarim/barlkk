---
title: Choose Hugo Over Jekyll
date: 2016-09-19T10:36:32-05:00
author: Josh Habdas
excerpt: In a sea of choice, which static site generator will you choose?
categories:
  - opinion
tags:
  - hugo
  - static websites
  - static site generators
  - jekyll
  - themes
  - cyberculture
header:
    overlay_image: photo-1457203112846-f9f76625f7c4_1280.jpg
    overlay_filter: 0.5
    teaser: photo-1457203112846-f9f76625f7c4_512.jpg
---

Many are familiar with the idea of static site generators like Jekyll. But Jekyll isn't the only one out there. In fact, [there are hundreds](https://staticsitegenerators.net/) of static site generators available. With so many to choose from it can be difficult to decide which to use.

After trying a number of them myself over the years _The One_ I've zeroed in on is none other than [Hugo](https://gohugo.io). My primary reasons for choosing Hugo include the following:

- **It has zero dependencies.** Once you get a hold of the Hugo binary you're ready to roll. Many other static site generators require a complex environment and dependencies to run. For Jekyll, that means Ruby and RubyGems. For Hexo, you'll need Node and NPM. For Hugo, all you need is Hugo.
- **It's easy to set-up.** If you're a OS X user, simply `brew install hugo` and you can start a new website with the `hugo new site` command. Hugo pre-built binaries are available for FreeBSD, Windows and Linux as well.
- **It's extremely fast.** Unlike Jekyll, which [can take hours](https://mademistakes.com/articles/using-jekyll-2016/#posts-for-all-the-things) to compile a site with 1,000 pages, Hugo has been shown to generate up to [5,000 webpages in under 10 seconds](https://youtu.be/CdiDYZ51a2o).
- **It's ultra flexible.** Unlike Jekyll, which was blog-focused until [Collections](https://jekyllrb.com/docs/collections/) were bolted on, Hugo was built from the ground up with freedom of content structure in mind.
- **It's actually fun.** To prove this last point I decided to create a theme for Hugo called [After Dark](https://comfusion.github.io/after-dark/) (pictured below). The theme creation process took about two days, and making it reminded me of the joys of coding for the Web circa 1995. Back when flying toasters were all the rage.

[![After Dark theme for Hugo screenshot](/images/after-dark-framed.png)](https://comfusion.github.io/after-dark/)

So give Hugo a try. And, while you're at it, check out the [After Dark theme](https://comfusion.github.io/after-dark/) for a [culture jamming](https://en.wikipedia.org/wiki/Vaporwave) take on content publishing in the new millennium.
