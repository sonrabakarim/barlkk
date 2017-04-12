---
title: JAMstack Frameworks, Tools and Tips
author: Josh Habdas
date: 2017-01-18T11:07:47+08:00
modified: 2017-04-12T16:50:00+08:00
excerpt: An assortment of shiny things for building your JAMstack sites.
categories: [reference]
tags: [open source, css, frameworks, boilerplate]
header:
  overlay_image: circular-837510_1280.jpg
  overlay_filter: 0.5
  teaser: circular-837510_500x333.jpg
redirect_from:
  - /legit-css-frameworks/
  - /jamstack/css-framework-tool-library/
---
{% include toc %}

<a target="_intro" href="https://www.netlify.com/blog/2017/03/16/smashing-magazine-just-got-10x-faster/" rel="noreferrer nofollow noopener">Building the next Smashing Magazine?</a> Web development frameworks and tools are a dime a dozen. Since the dawn of jQuery there are literally thousands of them at your fingertips. So which do you choose to build with? Here are some of my personal top picks.

**Note:** If you have something to add, or simply want to yell at me for linking to something you hate, scroll to the bottom and drop in a comment. No good deed goes unpunished.
{: .notice--info}

## Website Frameworks

Use these to help build your site faster, and help prevent you from creating ginormous bowls of spaghetti.

### Full-featured

These frameworks pretty much have it all, and then some.

**[Foundation](http://foundation.zurb.com/)**
<br>Created and managed by Zurb, I've been tracking Foundation for several years and used it to build [ChicagoGangHistory.com](http://chicagoganghistory.com), which receives 75% of its traffic from mobile. Foundation makes it easy to build professional mobile-first and fully responsive websites.

It can be downloaded in several different varieties, including prepackaged builds as well as more customizable and extendable versions as well. In addition to powering hundreds of well-known websites, there's a version to [build responsive email templates](http://foundation.zurb.com/emails.html) as well.

**Update 2017-04-12:** Foundation 6 supports ARIA and RTL languages, and is also 50% smaller than Foundation 5.
{: .notice--info}

**[Bootstrap](http://getbootstrap.com/)**
<br>This framework needs little introduction. Born out of Twitter, Bootstrap is one of the most well-known and widely deployed CSS frameworks out there. I once used this at Sears to build out their product detail page back when Backbone was still a thing. After a few years with no new versions, the Bootstrap team seems to have gotten things together and is starting releasing updates on a more frequent cadence.

We _all_ know about Bootstrap. Like Foundation, Bootstrap features a [web-based customizer](http://getbootstrap.com/customize/) --- enabling you to select only the parts you need to help reduce overall page weight and download size. And if you choose to download everything in pieces, you can achieve _smashing_ performance using HTTP/2 [server push](https://www.smashingmagazine.com/2017/04/guide-http2-server-push/) for the CSS and using [Fetch Inject](https://github.com/jhabdas/fetch-inject) to asynchronously download all scripts as fast as computerly possible.

**[Semantic UI](http://semantic-ui.com/)**
<br>Though it hasn't gained the mindshare of the Foundations and Bootstraps of the world, Semantic UI is not something to be overlooked. Semantic UI takes a different approach to building interfaces, making it possible to mix and match many of their UI components to create truly custom layouts that can do a lot more than meets the eye until you start working with it. I once used the Semantic UI to build a SPA using the React-port when it was still called [Stardust](https://github.com/TechnologyAdvice/stardust) and was thoroughly impressed with the flexibility and power of the interfaces I could build with Semantic UI.

**[Material Design for Bootstrap](http://fezvrasta.github.io/bootstrap-material-design/)**
<br>It's hard to ignore a repo with **more than 17,000** stargazers. Material Design Bootstrap is Material Design "theme" for Bootstrap 3 and 4, and brings together the best of two worlds together under a single umbrella.

**[Materialize](http://materializecss.com/)**
<br>Yet another Material Design framework, Materialize gives you the same Googly design feel as the others but also includes JavaScript widgets that don't require a complex single page application to function.

**[UIkit](https://getuikit.com/)**
<br>UIkit brands itself as "A lightweight and modular front-end framework
for developing fast and powerful web interfaces." They've got through a number of iterations already, use semantic versioning and maintain a [CHANGELOG](https://getuikit.com/changelog) to help keep you abreast of what's happening.

### Micro

Teeny-tiny, lightweight frameworks for when you just need to get <s>shit</s> schtuff done.

**[Bulma](http://bulma.io/)**
<br>This one had completely escaped my radar until it [popped up in the comments](#comment-3148163230) thanks to Victor Bastos. It's CSS only, and supports a very simple method of building very beautiful and flexible layouts, with a reasonable level of opinion of design.

**[mini.css](https://chalarangelo.github.io/mini.css/)**
<br>As [the author points out](#comment-3138394169) mini.css isn't exactly a full-featured framework, but it's not a micro framework either. Regardless, I took a look at the doc site and was surprised to see such comprehensive documentation and even quick reference guide with code snippets and links to functional Pens, something you don't see often in the other frameworks. Mini lives up to its name with a pretty lightweight footprint -- clocking in at just 7kb gzipped. And if you're using [Brotli compression](http://google-opensource.blogspot.com/2015/09/introducing-brotli-new-compression.html) that figure would be even smaller.

**[hack.css](http://hackcss.com/)**
<br>hack.css describes itself as a "dead simple css framework", and it truly is. I used this tiny little framework to build the [After Dark theme for Hugo](https://comfusion.github.io/after-dark/). It pairs well with the [Bytesize](http://danklammer.com/bytesize-icons/) SVG icon set by Dan Klammer for those looking for a l33t web experience.

**[Material Design Lite](https://getmdl.io)**
<br>Does a lot of what Materialize can do, but _doesn't rely on JavaScript_ to function. A great place to start for those who want to apply Material Design concepts their [Hugo or Jekyll static websites](/best-jamstack-site-generator/).

**[Milligram](https://milligram.github.io/)**
<br>A minimalist CSS framework for desktop and mobile development, Milligram provides the basics to get a site set-up without using a full-featured framework.

**[Primer](http://primercss.io/)**
<br>The CSS toolkit and guidelines that power GitHub. Need I say more?

**[Pure.css](http://purecss.io/)**
<br>Created by Yahoo, Pure CSS can be added piecemeal to accomplish simple layout and styling tasks on a site without going all-in on a framework -- perfect for building quick prototypes or when you don't want to add a lot of opinion to your site. Check out the docs to see what it can do.

**[Spectre](https://picturepan2.github.io/spectre/)**
<br>Spectre brands itself as a lightweight, responsive and modern CSS framework for faster and extensible development. The doc site is very nicely laid out and there's some pretty nifty-looking <abbr title="Chinese-Japanese-Korean">CJK</abbr> support baked-in. They're also planning on adding support for email templates, something I haven't seen anyone except for Foundation do. [Thanks to @roemhildtg](#comment-3106269595) for bringing it to my attention in the comment section below.

## Animation and Visualization

Libraries to help you really move your users. Some may depend on JavaScript, some may not. I shamelessly plucked some of these straight from Speckyboy, so you may also want to check out their article titled [CSS Animation Tools, Frameworks & Tutorials](https://speckyboy.com/css-animation/).

### Advanced

Complex frameworks typically use advanced HTML5 techniques to achieve interactive effects. Some of these require a license for use in commercial projects, so be sure to read licenses carefully.

**[GreenSock Animation Platform (a.k.a GSAP)](https://greensock.com/gsap)**
<br>Does things you'll _never_ achieve with CSS ([ever](https://css-tricks.com/myth-busting-css-animations-vs-javascript/)) and has a members site full of demos that'll literally blow you away. Just search the Web for "TweenMax" and get a glimpse of what animation on the Web can really do. If you want this kind of experience on your sites, you're going to have to pay for it.

**[Sequence](http://www.sequencejs.com/)**
<br>For creating sliders, presentations, banners, and other step-based applications. Sequence provides a number of free and premium themes to help you create an engaging app or wizard in no time at all.

**[Whitestorm](https://whsjs.io/)**
<br>A super gnarly physics library for interactive 3D physics animations. Checkout out [some of the examples](https://whs-dev.surge.sh/examples/).

**[three](https://threejs.org/)**
<br>A lightweight cross-browser JavaScript library/API used to create and display animated 3D computer graphics on a Web browser. Three.js scripts may be used in conjunction with the HTML5 canvas element, SVG or WebGL.

**[A-Frame](https://aframe.io/)**
<br>A web framework for building virtual reality experiences
Make WebVR with HTML and Entity-Component. Works on Vive, Rift, desktop, mobile platforms. For an example React boilerplate using A-Frame, check out [Awesome React Boilerplates](/awesome-react-boilerplates).

**[D3](https://d3js.org/)**
<br>JavaScript library for manipulating documents based on data. D3 helps you bring data to life using HTML, SVG, and CSS.

### Easier

**[Animatic](http://lvivski.com/animatic/)**
<br>Animatic gives you the ability to use delays and durations normally, even for pure CSS animations. It uses CSS transforms and 3d-transforms together with Javascript to create animation.

**[Animate Plus](https://github.com/bendc/animateplus)**
<br>Animate Plus is a CSS and SVG animation library for modern browsers. Animate Plus is performant and lightweight (2.8KB gzipped), making it particularly well-suited for mobile. I tried using this library to create a title rotation animation but got stuck in callback hell as it [doesn't support promises](https://github.com/bendc/animateplus/issues/19). Hopefully that changes in the future.

**[animo](https://github.com/ThrivingKings/animo)**
<br>Animo is a powerful little tool for managing transitions and animations with JavaScript. It's composed of a number of smaller plugins, one of which is an animate plug-in which returns promises enabling animation sequencing and can be paired with [Animate.css](#simple) for dead simple keyframe animation.

### Easiest

CSS-only frameworks for super-simple animation effects. Perfect for beginners looking to add a little movement to their pages.

**[CSShake](https://elrumordelaluz.github.io/csshake/)**
<br>Some CSS classes to move your DOM! Drop it in, add some classes and do your best to determine if the page is shaking or you've just had too much coffee.

**[Animate.css](https://daneden.github.io/animate.css/)**
<br>Just-add-water CSS animations. Handy for providing feedback to users, such as shaking a button when a form is invalid.

## Iconography

Icons and icon-related tools to help bring your site some flair. Use them to create social icons, export SVG images, do sprite things and all around just add value to help move eyeballs through your pages.

**[Material Icons](https://material.io/icons/)**
<br>Icon set for Material Design. Lots of them, and there's a _very_ handy toolbar for downloading these in SVG, PNG or Icon Font format. Let Ross Phillips show you how to use them to create some very [lightweight social share buttons](http://cloudcannon.com/tutorials/2017/02/01/lightweight-social-share-buttons/pretty).

**[Bytesize Icons](https://github.com/danklammer/bytesize-icons)**
<br>A "Tiny style-controlled SVG iconset". Like the name suggests, this icon set is fairly small. But the minimalist design makes these perfect for applications where you don't want draw too much attention away from your content. I use some of these icons in [After Dark](https://comfusion.github.io/after-dark/), my retro dark theme for Hugo.

**[Font Custom](https://github.com/FontCustom/fontcustom)**
<br>Generate custom icon webfonts from the comfort of the command line. Use only what you need, with Font Custom. I originally learned about this one while working with the [Feeling Responsive](https://github.com/Phlow/feeling-responsive) theme. It can be a little tricky to use at first, but the payoff is worth it.

**[Font Awesome](http://fontawesome.io/)**
<br>Everyone and their dog knows about Font Awesome. But did you know you can [download the entire set to your page asynchronously](https://github.com/jhabdas/fetch-inject#loading-css-asynchronously) using Fetch Inject? Here's how you would do it:

```js
fetchInject([
  'https://cdn.jsdelivr.net/fontawesome/4.7.0/css/font-awesome.min.css'
])
```

## CSS Toolkits

**[Susy](http://susy.oddbird.net/)**
<br>Used to create Michael Rose's popular [Minimal Mistakes](https://mmistakes.github.io/minimal-mistakes/) Jekyll theme, Susy is a responsive toolkit for use with Sass.

**[Breakpoint](http://breakpoint-sass.com/)**
<br>Really Simple, Organized, Media Queries with Sass. I've been using Breakpoint in my JAMstack projects since I saw it used by Michael Rose in [Minimal Mistakes](https://mmistakes.github.io/minimal-mistakes/). It's a super-simple way to organize your media queries and make sure they always do what you want. What's more, they're totally Keanu-approved (but probably not really).

**[Basscss](http://basscss.com/)**
<br>A low-level CSS toolkit. Basscss provides a base for desktop and mobile development, is composable and provides a number of community-supported add-ons.

## Other Libraries

**[PhotoSwipe](http://photoswipe.com/)**
<br>A composite JavaScript gallery, no dependencies. Use it to create the most beautiful photo gallery you could imagine, replete with social sharing and full screen buttons. As the documentation states, you're going to need to know some JavaScript to get this thing working. But there are some code snippets and Pens to get you going, and the maintainer actively helps answer questions on the GitHub repo.

**[Fetch Inject](https://github.com/jhabdas/fetch-inject)**
<br>So now you've got all these nifty frameworks and tools at your disposal. How are you going to load them performantly into your website without [exploding website complexity](https://medium.com/@jhabdas/webpack-is-your-achilles-heel-d3cd80821a4f) with a bundler? That's why I built it. Check out the docs for more detail.

**[fontfaceobserver](https://github.com/bramstein/fontfaceobserver)**
<br>Web font loading. Simple, small and efficient. I actually haven't used this yet. But I'm leaving it here so I don't forget to come back to it. You've been forewarned.
