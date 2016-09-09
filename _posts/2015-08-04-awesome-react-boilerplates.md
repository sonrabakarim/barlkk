---
title: Awesome React Boilerplates
author: Josh Habdas
date: 2015-08-04T15:08:31-05:00
modified: 2016-09-09
excerpt: Awesome React starter kits to kick your app development into high gear.
categories: [reference]
tags: [react, react native, native, programming, web platform]
header:
  overlay_image: circular-837510_1280.jpg
  overlay_filter: 0.5
  teaser: circular-837510_500x333.jpg
---
{% include toc %}

Not interested in reinventing the wheel? Neither am I. Here's a short list of awesome boilerplates -- sometimes known as starter kits or seeds -- for getting React applications off the ground in a hurry. These application templates were not taken from any list, however <a rel="nofollow" href="https://github.com/sindresorhus/awesome">awesome</a> that list might be. Rather, they've gained enough mindshare to find me outside [*The Stream*](https://medium.com/matter/the-web-we-have-to-save-2eb1fe15a426)[^1]. They're open source and waiting for you to generate, clone, fork and build upon in your next React project.

Contributions via comments welcome. The best React and React Native Boilerplates will be moved into the article body and the `nofollow` removed.
{: .notice }

# React

Application boilerplates for creating React apps. And wow are there're a lot of good ones to choose from.

**[react-production-starter](https://github.com/jaredpalmer/react-production-starter)**
<br>React Redux boilerplate with isomorphic rendering, async react-router routes, async redux reducers, async data fetching, and code-splitting. Also _includes a Dockerfile_ to get the app up and running in a flash.

**[scalable-react-boilerplate](https://github.com/RyanCCollins/scalable-react-boilerplate)**
<br>Finally, a simple starter kit for scalable apps. Includes a Slush template generator, CLI code generators, a rig for use of CSS modules with SASS, and includes Airbnb linters and Mocha for testing (though I've been preferring [standard](http://standardjs.com) these days over ESLint as there's less to maintain).

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
<br>Very popular boilerplate from Max Stoiber considered to have [the best organizational pattern](https://medium.com/front-end-hacking/the-secret-to-organization-in-functional-programming-913484e85fc9). From the documentation, "A highly scalable, offline-first foundation with the best developer experience and a focus on performance and best practices." I haven't personally tried this seed yet but it's got enough umph behind it to make it worth bringing to your attention.

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

Application boilerplates for creating React Native applications. If you're just starting out, consider starting your app from scratch using `react-native init` and leveraging the following boilerplates for ideas until you get the hang of things. Otherwise, find your favorite and plunge right in!

**[pepperoni](http://getpepperoni.com/)**
<br>A well-constructed open source starter for React Native iOS and Android projects jam packed with lots of tasty ingredients, inspired by Snowflake. Uses ImmutableJS like Snowflake, Redux and leverages the semi-official [NavigationExperimental](https://facebook.github.io/react-native/docs/navigation.html#navigationexperimental) for routing.

**[snowflake](https://github.com/bartonhammond/snowflake)**
<br>A React Native starter kit for iOS and Android given to us by the affable [Barton Hammond](https://github.com/bartonhammond). Includes all sorts of goodies, including Redux, Jest, Istanbul, Parse integration (planned to be replaced with [Serverless](serverless.com)) and more. Includes video tutorials for set-up with Bitrise and more. Uses [react-native-router-flux](https://github.com/aksonov/react-native-router-flux) for routing.

**[ignite](https://github.com/infinitered/ignite)**
<br>The unfair starting CLI, Generator, and more for React Native cross-platform apps. I looked over this and, though I haven't used it yet for a project, it has one of my favorite developer affordances: Generators and is easy to set-up. It also takes a different approach from most boilerplates in that you do not have to fork the repo. Just generate it from the base! Planned inclusion of Redux Sagas and some config to get going with Fastlane for CI. Plans to become less of a kitchen sink in the future. Also uses [react-native-router-flux](https://github.com/aksonov/react-native-router-flux) for routing.

**[f8app](https://github.com/fbsamples/f8app)**
<br>The official F8 app of 2016. Provides tutorials to help get started on [makeitopen.com](http://makeitopen.com) covering how they used React Native, Redux, Relay, GraphQL, and more.

**[react-native-webpack-starter-kit](https://github.com/jhabdas/react-native-webpack-starter-kit)**
<br>Boilerplate I extracted from building the [Lumpen Radio](https://github.com/jhabdas/lumpen-radio) app early in the RN lifecycle, enabling RN development using bundles dynamically generated with Webpack.

[^1]: "The Stream" is a kind of slot machine used to [hijack your mind](https://medium.com/swlh/how-technology-hijacks-peoples-minds-from-a-magician-and-google-s-design-ethicist-56d62ef5edf3).
