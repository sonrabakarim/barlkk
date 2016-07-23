---
title: Awesome React Boilerplates
author: Josh Habdas
date: 2015-08-04T15:08:31-05:00
modified: 2016-07-16
excerpt: Awesome React starter kits to kick your app development into high gear.
categories: [reference]
tags: [react, react native, native, programming, web platform]
header:
  overlay_image: circular-837510_1280.jpg
  overlay_filter: 0.5
  teaser: circular-837510_500x333.jpg
---

Not interested in reinventing the wheel? Neither am I. Here's a short list of awesome boilerplates -- sometimes knows as starter kits or seeds -- for getting React applications off the ground in a hurry. These application templates were not taken from any list, however <a rel="nofollow" href="https://github.com/sindresorhus/awesome">awesome</a> that list might be. Rather, they've gained enough mindshare to find me outside [*The Stream*](https://medium.com/matter/the-web-we-have-to-save-2eb1fe15a426)[^1]. They're open source and waiting for you to clone, fork and build upon for your next React project.

Contributions via comments welcome. The best React and React Native Boilerplates will be moved into the article body and the `nofollow` removed.
{: .notice }

# React

Application boilerplates for creating React apps.

**[express-react-redux-starter](https://github.com/DimitriMikadze/express-react-redux-starter)**
<br>I wanted to spike on a simple game of [5x5 Tic-Tac-Toe](https://github.com/jhabdas/tictactoe/) recently and was able to use this kit to build out the game board using functional stateless components, and without having to yank out tons of boilerplate. It had just the things I needed to start building, and nothing more.

**[simple-static-react-aframe](https://github.com/Jon-Biz/simple-static-react-aframe)**
<br>It's refreshing to see a new use case for a boilerplate. This boilerplate gets you set-up to build a VR website with React and Aframe. Check out the mobile demo and start building the next Pokémon Go.

**[react-redux-universal-hot-example](https://github.com/erikras/react-redux-universal-hot-example/)**
<br>A starter boilerplate for a universal webapp using express, react, redux, webpack, and react-transform

**[react-starter-kit](https://github.com/kriasoft/react-starter-kit)**
<br>Everything you need to build a front-end for a SEO-friendly React website. Supports text-only browsing and focuses heavily on Node.js and the surrounding ecosystem of NPM libraries. For an example isomporhpic application I've built using this kit check out [lumpenradio-com](https://github.com/jhabdas/lumpenradio-com) or my [Isomporhpic Rendering with React](/talks/isomorphic-rendering-react/) talk.

**[react-redux-starter-kit](https://github.com/davezuko/react-redux-starter-kit)**
<br>By former colleague (and one hell of a coder) this kit is designed to get you up and running with a bunch of awesome new front-end technologies. It's a bit heavy for those new to React, and doesn't have the benefits of Isomorphic rendering, but there's plenty of info to take away from studying it.

**[react-boilerplate](https://github.com/mxstbr/react-boilerplate)**
<br>From the documentation, "A highly scalable, offline-first foundation with the best developer experience and a focus on performance and best practices." I haven't personally tried this seed yet but it's got enough umph behind it to make it worth bringing to your attention.

**[react-slingshot](https://github.com/coryhouse/react-slingshot)**
<br>React Slingshot is a comprehensive starter kit for rapid application development using React. Includes React + Redux starter kit with Babel, hot reloading, testing, linting and a working example app, all built in.

**[Este](https://github.com/este/este)**
<br>A React/Flux dev stack and starter kit for [Universal JavaScript apps](https://medium.com/@mjackson/universal-javascript-4761051b7ae9). Renders pages <abbr title="Single Page App">SPA</abbr> style (using `script` tags) and, therefore, is not as SEO friendly as React Starter Kit.

**[re-base](https://github.com/tylermcginnis/re-base)**
<br>Inspired by Relay, combines the benefits of React and Firebase by allowing each component to specify its own data dependency. Forget about your data persistence and focus on what really matters, your application's state.

**[electron-react-boilerplate](https://github.com/chentsulin/electron-react-boilerplate)**
<br>Electron application boilerplate based on react, react-router, webpack, react-hot-loader for rapid application development

**[relay-starter-kit](https://github.com/relayjs/relay-starter-kit)**
<br>Barebones starting point for a Relay application. [Uses](https://github.com/relayjs/relay-starter-kit/blob/37f1d13613db732b2d924a55cecf89c255ce0f40/package.json#L14) the Babel Relay Plug-in and [linked to](https://facebook.github.io/relay/docs/guides-babel-plugin.html#content) from the official Relay documentation so it's likely to gain traction as a starting point for new apps.

**[jspm-react](https://github.com/tinkertrain/jspm-react)**
<br>Configured starter repo to build web apps with React and ES6 modules using JSPM. Not actively maintained, though the author is still accepting pull requests.

# React Native

Application boilerplates for creating React Native applications.

**[ignite](https://github.com/infinitered/ignite)**
<br>The unfair starting CLI, Generator, and more for React Native. I looked over this and, though I haven't used it yet for a project, it has one of my favorite developer affordances: Generators. It also takes a different approach from most boilerplates in that you do not have to fork the repo. Just generate it from the base! Includes redux sagas and some config to get going with Fastlane for CI.

**[pepperoni](http://getpepperoni.com/)**
<br>An well-built open source starter for React Native iOS and Android projects jam packed with lots of tasty ingredients. I created a small app with this and, while the linting rules are a little persnickety for my taste (plus semicolons, who needs them?) the overall developer experience was good.

**[snowflake](https://github.com/bartonhammond/snowflake)**
<br>A React-Native starter kit using Redux, Parse.com, Jest given to us by the affable [Barton Hammond](https://github.com/bartonhammond). Includes all sorts of goodies, including Parse, which is planned to be replaced with [Serverless](serverless.com), which uses AWS Lambdas and helps get you in the public cloud. Oh là là!

**[react-native-webpack-starter-kit](https://github.com/jhabdas/react-native-webpack-starter-kit)**
<br>Build your React Native app with Webpack and Babel.

**[react-native-es6-babel](https://github.com/roman01la/react-native-babel)**
<br>Configuration to build React Native apps with ES6 using webpack and Babel

**[react-native-es6-reflux](https://github.com/filp/react-native-es6-reflux)**
<br>Boilerplate for iOS app development with React Native, ES6 and Reflux

**[react-native-tabbed](https://github.com/rxb/react-native-tabbed)**
<br>An unassumingly but sweet base for a native app with tabbed navigation and modal window support. Builds on the work of [`react-native-navbar`](https://github.com/Kureev/react-native-navbar). See it in use with [React Native Icons](https://github.com/corymsmith/react-native-icons) in my [Smartphone Symphony](https://github.com/jhabdas/SmartphoneSymphony) app.

[^1]: "The Stream" is a kind of slot machine used to [hijack your mind](https://medium.com/swlh/how-technology-hijacks-peoples-minds-from-a-magician-and-google-s-design-ethicist-56d62ef5edf3).
