---
title: Legit CSS Frameworks
author: Josh Habdas
date: 2017-01-18T11:07:47+08:00
excerpt: An evergreen list of free and open source CSS frameworks worthy of your time.
categories: [reference]
tags: [open source, css, frameworks, boilerplate]
header:
  overlay_image: circular-837510_1280.jpg
  overlay_filter: 0.5
  teaser: circular-837510_500x333.jpg
---
{% include toc %}

CSS frameworks are a dime a dozen and new ones are appearing all the time. You're smart enough not to build your own when there are so many great options already available and maintained by the open source community. Rather than listing everything out there I've selected only a handful of well-maintained CSS frameworks I'd recommend to others for building websites.

Contributions via comments welcome. Legit CSS Frameworks will be moved into the article body and the `nofollow`[^1] removed.
{: .notice--info }

## Full-featured frameworks

These CSS frameworks pretty much have it all, and then some.

**[Foundation](http://foundation.zurb.com/)**
<br>Created and managed by Zurb, I've been tracking Foundation for several years and used it to build [ChicagoGangHistory.com](http://chicagoganghistory.com), which receives 75% of its traffic from mobile. Foundation makes it easy to build professional mobile-first and fully responsive websites. Unlike other open source CSS frameworks, Foundation is constantly being upgraded.

It can be downloaded in several different varieties, including prepackaged builds as well as more customizable and extendable versions as well. In addition to powering hundreds of well-known websites, there's a version to [build responsive email templates](http://foundation.zurb.com/emails.html) as well.

**[Bootstrap](http://getbootstrap.com/)**
<br>This framework needs little introduction. Born out of Twitter, Bootstrap is one of the most well-known and widely deployed CSS frameworks out there. I used this at Sears to build out their new product detail pages back when Backbone was still being used to create <abbr="Single-Page Apps">SPAs</abbr>. After a few years with no new versions, the Bootstrap team seems to have gotten things together and is starting releasing updates on a more frequent cadence.

Like Foundation, Bootstrap features a [web-based customizer](http://getbootstrap.com/customize/) enabling individuals to select just the parts of the framework they want to use, which helps reduce overall page weight when the kitchen sink is not what you need. One gripe many have with Bootstrap is that it's hard to make sites stand apart from other Bootstrap sites as many of them look alike.

**[Semantic UI](http://semantic-ui.com/)**
<br>Though it hasn't gained the mindshare of the Foundations and Bootstraps of the world, Semantic UI is not something to be overlooked. Semantic UI takes a different approach to building interfaces, making it possible to mix and match many of their UI components to create truly custom layouts that can do a lot more than meets the eye until you start working with it. I used Semantic UI to build a React-based SaaS during my time at TechnologyAdvice when it was still called [Stardust](https://github.com/TechnologyAdvice/stardust) and was thoroughly impressed with the speed and power of the interfaces I could build.

**[Material UI](http://material-ui.com)**
<br>Though I've covered Material UI in my list of [Awesome React Components](/awesome-react-components) it's worth mentioning here as this framework set the bar early for building component-based Web apps using React. Material UI is a well-thought-out framework for building responsive applications for the Web using Google's [Material Design ethos](https://material.io/guidelines/).

**[Materialize](http://materializecss.com/)**
<br>Yet another Material Design framework, Materialize gives you the same Google design feeling as the others but also includes JavaScript widgets which don't require React to function. So if you're looking to build responsive Websites with Material Design, with interactivity beyond what Material Design Lite provides, this may be the framework for you.

## Micro frameworks

Teeny-tiny frameworks for when you just need to get <s>shit</s> stuff done.

**[Material Design Lite](https://getmdl.io)**
<br>Does a lot of what Materialize can do, but _doesn't rely on JavaScript_ to function. A great place to start for those who want to apply Material Design concepts their [Hugo or Jekyll static websites](https://habd.as/choose-hugo-over-jekyll/). Unfortunately, like Bootstrap, Material design can be limiting in its ability to help you differentiate the look-and-feel of your site. But perhaps those are the training wheels you're looking for to prevent potential design snafus.

**[Pure CSS](http://purecss.io/)**
<br>Created by Yahoo, Pure CSS is a great addition to accomplish simple layout and styling tasks on a site without going all-in on a larger framework. Check out the docs to see what it can do.

**[hack.css](http://hackcss.com/)**
<br>hack.css describes itself as a "dead simple css framework", and it truly is. I used this tiny little framework, which does not package itself with a CSS reset or normalize ([and for good reason](https://github.com/egoist/hack/issues/35)), to build the [After Dark theme for Hugo](https://comfusion.github.io/after-dark/). Pairs well with the [Bytesize](http://danklammer.com/bytesize-icons/) SVG icon set by Dan Klammer.

[^1]: `nofollow` links indicate the linked document is not endorsed by the author of this one, for example if it has no control over it, if it is a bad example or if there is commercial relationship between the two (sold link). This link type may be used by some search engines that use popularity ranking techniques.
