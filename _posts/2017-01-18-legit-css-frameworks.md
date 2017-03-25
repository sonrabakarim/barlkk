---
title: Legit CSS Frameworks
author: Josh Habdas
date: 2017-01-18T11:07:47+08:00
modified: 2017-03-25
excerpt: An evergreen list of free and open source CSS and animation frameworks worth checking out.
categories: [reference]
tags: [open source, css, frameworks, boilerplate]
header:
  overlay_image: circular-837510_1280.jpg
  overlay_filter: 0.5
  teaser: circular-837510_500x333.jpg
---
{% include toc %}

CSS frameworks are a dime a dozen, and new ones are appearing all the time. If you're smart enough not to build your own when there are so many great open source options available, this list is for you. Rather than listing everything out there I've selected only a handful of well-maintained or noteworthy CSS frameworks I'd recommend to others.

Contributions via comments welcome. The best CSS Frameworks will be moved into the article body and the `nofollow`[^1] removed.
{: .notice--info }

## Full-featured frameworks

These CSS frameworks pretty much have it all, and then some.

**[Foundation](http://foundation.zurb.com/)**
<br>Created and managed by Zurb, I've been tracking Foundation for several years and used it to build [ChicagoGangHistory.com](http://chicagoganghistory.com), which receives 75% of its traffic from mobile. Foundation makes it easy to build professional mobile-first and fully responsive websites.

It can be downloaded in several different varieties, including prepackaged builds as well as more customizable and extendable versions as well. In addition to powering hundreds of well-known websites, there's a version to [build responsive email templates](http://foundation.zurb.com/emails.html) as well.

**Update 2017-02-05:** I'm starting to work with [@Phlow](https://github.com/Phlow/) and another contributor on GitHub to port his wonderful theme [Feeling Responsive](https://github.com/Phlow/feeling-responsive) from Foundation 5 to Foundation 6 and was astonished to learn not only does Foundation 6 support ARIA and RTL languages, it's also 50% smaller than Foundation 5. Wow!
{: .notice--info}

**[Bootstrap](http://getbootstrap.com/)**
<br>This framework needs little introduction. Born out of Twitter, Bootstrap is one of the most well-known and widely deployed CSS frameworks out there. I used this at Sears to build out their new product detail pages back when Backbone was still being used to create <abbr="Single-Page Apps">SPAs</abbr>. After a few years with no new versions, the Bootstrap team seems to have gotten things together and is starting releasing updates on a more frequent cadence.

Like Foundation, Bootstrap features a [web-based customizer](http://getbootstrap.com/customize/) enabling individuals to select just the parts of the framework they want to use, which helps reduce overall page weight when the kitchen sink is not what you need. One gripe many have with Bootstrap is that it's hard to make sites stand apart from other Bootstrap sites as many of them look alike.

**[Semantic UI](http://semantic-ui.com/)**
<br>Though it hasn't gained the mindshare of the Foundations and Bootstraps of the world, Semantic UI is not something to be overlooked. Semantic UI takes a different approach to building interfaces, making it possible to mix and match many of their UI components to create truly custom layouts that can do a lot more than meets the eye until you start working with it. I used the Semantic UI to build a React-based SaaS during my time at TechnologyAdvice when the React-port was still called [Stardust](https://github.com/TechnologyAdvice/stardust) and was thoroughly impressed with the speed and power of the interfaces I could build.

**[Material UI](http://material-ui.com)**
<br>Though I've covered Material UI in my list of [Awesome React Components](/awesome-react-components) it's worth mentioning here as this framework set the bar early for building component-based Web apps using React. Material UI is a well-thought-out framework for building responsive applications for the Web using Google's [Material Design ethos](https://material.io/guidelines/).

**[Materialize](http://materializecss.com/)**
<br>Yet another Material Design framework, Materialize gives you the same Google design feeling as the others but also includes JavaScript widgets which don't require React to function. So if you're looking to build responsive Websites with Material Design, with interactivity beyond what Material Design Lite provides, this may be the framework for you.

**[UIkit](https://getuikit.com/)**
<br>UIkit brands itself as "A lightweight and modular front-end framework
for developing fast and powerful web interfaces." They've got through a number of iterations already, and maintain a [Changelog](https://getuikit.com/changelog) to help keep you updated on what's happening.

## Micro frameworks

Teeny-tiny, lightweight CSS frameworks for when you just need to get <s>shit</s> schtuff done.

**[Bulma](http://bulma.io/)**
<br>This one had completely escaped my radar until it [popped up in the comments](https://habd.as/legit-css-frameworks/#comment-3148163230) thanks to Victor Bastos. It's CSS only, and wow that's a damn sexy docs site. I cannot wait to give this one a spin!!!

**[hack.css](http://hackcss.com/)**
<br>hack.css describes itself as a "dead simple css framework", and it truly is. I used this tiny little framework, which does not package itself with a CSS reset or normalize ([and for good reason](https://github.com/egoist/hack/issues/35)), to build the [After Dark theme for Hugo](https://comfusion.github.io/after-dark/). Pairs well with the [Bytesize](http://danklammer.com/bytesize-icons/) SVG icon set by Dan Klammer.

**[Material Design Lite](https://getmdl.io)**
<br>Does a lot of what Materialize can do, but _doesn't rely on JavaScript_ to function. A great place to start for those who want to apply Material Design concepts their [Hugo or Jekyll static websites](https://habd.as/choose-hugo-over-jekyll/). Unfortunately, like Bootstrap, Material design can be limiting in its ability to help you differentiate the look-and-feel of your site. But perhaps those are the training wheels you're looking for to prevent potential design snafus.

**[mini.css](https://chalarangelo.github.io/mini.css/)**
<br>As [the author points out](https://habd.as/legit-css-frameworks/#comment-3138394169) mini.css isn't exactly a full-featured framework, but it's not a micro framework either. Regardless, I took a look at the doc site and was surprised to see such comprehensive documentation and even quick reference guide with code snippets and links to functional Pens. mini lives up to its name with a pretty lightweight footprint -- clocking in at just 7kb compressed. That's awesome!

**[Milligram](https://milligram.github.io/)**
<br>A minimalist CSS framework for desktop and mobile development, Milligram provides the basics to get a site set-up without using a full-featured framework.

**[Primer](http://primercss.io/)**
<br>The CSS toolkit and guidelines that power GitHub. Need I say more?

**[Pure.css](http://purecss.io/)**
<br>Created by Yahoo, Pure CSS can be added piecemeal to accomplish simple layout and styling tasks on a site without going all-in on the kitchen sink. Check out the docs to see what it can do.

**[Spectre](https://picturepan2.github.io/spectre/)**
<br>Spectre brands itself as a ligtweight, responsive and modern CSS framework for faster and extensible development. The doc site is very nicely laid out and there's some pretty nifty-looking <abbr title="Chinese-Japanese-Korean">CJK</abbr> support baked-in. They're also planning on adding support for email templates, something I haven't seen anyone except for Foundation do. [Thanks to @roemhildtg](https://habd.as/legit-css-frameworks/#comment-3106269595) for bringing it to my attention in the comment section below.

## Animation and visualization frameworks

Frameworks and libraries to help you really move your users. Some may depend on JavaScript, but all of them use CSS.

## Complex

**[Sequence.js](http://www.sequencejs.com/)**
<br>For creating sliders, presentations, banners, and other step-based applications. Sequence provides a number of free and premium themes to help you create an engaging app or wizard in no time at all.

**[WhitestormJS](https://whsjs.io/)**
<br>A super gnarly physics library for interactive 3D physics animations. Checkout out [some of the examples](https://whs-dev.surge.sh/examples/).

**[three.js](https://threejs.org/)**
<br>A lightweight cross-browser JavaScript library/API used to create and display animated 3D computer graphics on a Web browser. Three.js scripts may be used in conjunction with the HTML5 canvas element, SVG or WebGL.

**[A-Frame](https://aframe.io/)**
<br>A web framework for building virtual reality experiences
Make WebVR with HTML and Entity-Component. Works on Vive, Rift, desktop, mobile platforms. For an example React boilerplate using A-Frame, check out [Awesome React Boilerplates](/awesome-react-boilerplates).

**[D3.js](https://d3js.org/)**
<br>JavaScript library for manipulating documents based on data. D3 helps you bring data to life using HTML, SVG, and CSS.

### Simple

**[CSShake](https://elrumordelaluz.github.io/csshake/)**
<br>Some CSS classes to move your DOM! Drop it in, add some classes and do your best to determine if the page is shaking or you've just had too much coffee.

**[Animate.css](https://daneden.github.io/animate.css/)**
<br>Just-add-water CSS animations. Handy for providing feedback to users, such as shaking a button when a form is invalid.

[^1]: `nofollow` links indicate the linked document is not endorsed by the author of the linking site. For example, if the author doesn't trust it, does not wish to pass authority, or if there is commercial relationship between the two, a link is more likely to be nofollowed. `nofollow` links play a role in the passage of authority and page rank in Search engine algorithms.

## CSS Toolkits

**[Basscss](http://basscss.com/)**
<br>A low-level CSS toolkit. Basscss provides a base for desktop and mobile development, is composable and provides a number of community-supported add-ons.

**[Susy](http://susy.oddbird.net/)**
<br>Used to create Michael Rose's popular [Minimal Mistakes](https://mmistakes.github.io/minimal-mistakes/) Jekyll theme, Susy is a responsive toolkit for use with Sass.
