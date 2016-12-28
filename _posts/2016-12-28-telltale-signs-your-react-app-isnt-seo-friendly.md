---
title: "Telltale Signs Your React App Isn't SEO Friendly"
date: 2016-12-28 12:17:00
modified:
excerpt: Is Your React App Invisible to Google?
categories:
  - reference
tags:
  - react
  - SEO
header:
  overlay_image: /images/vgoiy1gzzyg-atlas-green.jpg
  overlay_filter: 0.5
  teaser: Is Your React App Invisible to Google?
---


As you may or may not be aware NPM and React have caused a Cambrian explosion in the number of [Awesome React Boilerplates](/awesome-react-boilerplates/). But did you know many of those boilerplates and the web apps that build upon them aren't at all SEO friendly, and possibly even [invisible to Google](https://github.com/davezuko/react-redux-starter-kit/issues/819)? Sites experiencing SEO issues are more likely to be buried deeper in Search results and unlikely to see the Organic visitors they'd otherwise enjoy sans marketing efforts.

In this post we'll explore some of the telltale signs your React app isn't SEO friendly. Don't hold your breath.

## Identify SEO Issues

First off, identifying issues with site search indexability doesn't require an SEO expert. In fact, anyone can do it. Simply try any of the following methods to determine if your React site is experiencing potential issues with SEO.

### Fetch as Google

From Google Search Console run [Fetch as Google](https://www.google.com/webmasters/tools/googlebot-fetch) tool against a verified site and choose the *Fetch and Render* option. This will cause Googlebot to crawl the specified page and show you what it sees. Once finished, if you see a blank or partially rendered page your app website may be invisible to Google.

### Browse with Elinks

Another telltale sign your site is experiencing SEO issues is to simply browse it with [ELinks](http://elinks.or.cz/) or [LYNX](http://lynx.browser.org/). These browsers tend to block automatic cookies and shun JavaScript downloads. If your site **is SEO-friendly** like the *React Production Starter* featured on [Awesome React Boilerplates](/awesome-react-boilerplates/) you should see something like this:

![LYNX browser showing Isomorphic React App](/uploads/versions/lynx-12roads---x----1684-1132x---.png)

Otherwise your React site will take the form of a black hole as shown on slide 6 of my [Isomorphic Rendering with React](/talks/isomorphic-rendering-react/) talk.

### Disable JavaScript

Yet another way for testing for SEO issues in your React app is to disable JavaScript in the browser. To do so simply navigate to the page you'd like to test and disable JavaScript. If the page doesn't load at all with JavaScript disabled you're site's SEO likely needs some fixing-up.

Tip: If you're using Chrome you can disable JavaScript for a single browser tab from the Settings pane in [Chrome Dev Tools](https://developers.google.com/web/tools/chrome-devtools/). Thanks to my friend Anton, creator of [Artsembler](https://artsembler.com/), for the reminder!

## All Is Lost

Almost. And I'm not talking about the [stellar Robert Redford film](http://letterboxd.com/film/all-is-lost/). I mean once you start building React apps without SEO friendliness from the start **it's almost impossible to go back** without starting from scratch.

I know, I know. Google and Bing both crawl Ajax pages. I've used this rationalization myself in the past when my websites weren't SEO friendly. But did you know, when crawlers Ajax crawl, they do so at a slower rate? Yup, that means your site may still be crawled but never at full speed. And did you know there are thousands of less sophisticated crawlers out there that can no longer see your site at all? Maybe that's what you want so you can't be scraped, but what if you want to be scraped to game the Search engines using a smart keyword tool? That would be a bad day indeed for any content publisher on the Web.

## Addressing the Problem

Assuming you're reading this you're probably already sweating your SEO. If you'd like to discover your options to fix SEO issues with your React site please [contact me to schedule a free consultation](/contact/).