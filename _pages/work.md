---
title: Work
permalink: /work/
modified: 2016-05-27
layout: splash
excerpt: "Featured open and closed source projects from the past and present."
header:
  overlay_image: pourover-unsplash_1280.jpeg
  overlay_filter: 0.5
  caption: "Photo credit: [*@kfred*](https://unsplash.com/@kfred)"
#feature_row1_overview:
#  - excerpt: "Featured open and closed source projects from the past and present."
feature_row1:
  -
    image_path: chicago-gang-history-at-launch.png
    alt: "Chicago Gang History Website"
    title: "Chicago Gang History"
    excerpt: >
      Reskinned and ported a 200+ page WordPress site to breath life into the content, improve UX, speed and search visibility. Created in 6 days.
      <br><br>
      <small>AWS / Jekyll / AdSense / TypeForm / TinyLetter </small>
    url: "https://chicagoganghistory.com"
    btn_label: "Visit Website"
    btn_class: "btn--inverse"
  -
    image_path: lumpen-radio-ios-framed-cropped.png
    alt: "Lumpen Radio app screenshot"
    title: "Lumpen Radio App"
    excerpt: >
      <br>
      [![Download it on the App Store.](/images/download-on-app-store-badge.svg)](http://appsto.re/us/NdeV7.i)
      <br><br>
      iOS app built using React Native. One of the first RN apps in the App Store. Selected for the <a href="https://facebook.github.io/react-native/showcase.html" target="_blank">React Native Showcase</a>. Includes [full slide deck](/talks/streaming-audio-react-native/) and [O'Reilly webcast](http://www.oreilly.com/pub/e/3483) covering app construction.
      <br><br>
      <small>React Native / Babel / Webpack / Xcode</small>
    url: "https://github.com/jhabdas/lumpen-radio/tree/master-backup"
    btn_label: "View Source"
    btn_class: "btn--inverse"
  -
    image_path: 12roads-prototype.png
    alt: "12 Roads prototype screenshot"
    title: "12 Roads"
    excerpt: >
      An open source photo browsing React prototype created to test a new [Awesome React Boilerplate](/awesome-react-boilerplates/). Emphasis on experience, best practices and scalability. Spiked in 16 hours.
      <br><br>
      <small>React / Babel / Webpack / Material UI / Node.js </small>
    url: "https://github.com/jhabdas/12roads/"
    btn_label: "View Source"
    btn_class: "btn--inverse"
feature_row2:
  -
    image_path: after-dark-framed.png
    alt: "After Dark screenshot"
    title: "After Dark"
    excerpt: >
      A retro dark theme for the Hugo static site generator, easing nighttime reading while achieving PageSpeed 100 straight out of the box.
      <br><br>
      <small>Golang / HTML5 / CSS3 / Hugo Static Site Generator</small>
    url: "https://comfusion.github.io/after-dark/"
    btn_label: "View Documentation"
    btn_class: "btn--inverse"
  -
    image_path: react-native-webpack-starter-kit.jpeg
    alt: "React Native Webpack Starter Kit logo"
    title: "React Native Webpack Starter Kit"
    excerpt: >
      iOS and Android development toolkit I created for building native apps using JavaScript.
      <br><br>
      <small>React Native / Babel / Webpack / Travis-CI</small>
    url: "https://github.com/jhabdas/react-native-webpack-starter-kit"
    btn_label: "View Source"
    btn_class: "btn--inverse"
  -
    image_path: lumpen-radio-web-schedule-framed.png
    alt: "Lumpen Radio Web screenshot"
    title: "Lumpen Radio Web 2.0"
    excerpt: >
      SEO-friendly and [seriously fast](https://speakerdeck.com/jhabdas/isomorphic-rendering-with-react?slide=13) React application for the Web. Features data-driven programming schedule, show listings, news feed, event schedule and blog. Pages load in less than half a second.
      <br><br>
      <small>React / Flux / Babel / Webpack / Firebase</small>
    url: "https://github.com/jhabdas/lumpenradio-com"
    btn_label: "View Source"
    btn_class: "btn--inverse"
feature_row3:
  -
    image_path: hopstop.png
    alt: "Hopstop application screenshot"
    title: "Hopstop"
    excerpt: >
      A beer-first mobile search app for the Web. Allows quick retrieval of beer info using the Untappd API.
      <br><br>
      <small>Hapi / Chaplin / Brunch / Untappd API</small>
    url: "https://github.com/jhabdas/hopstop"
    btn_label: "View Source"
    btn_class: "btn--inverse"
---

{% include feature_row id="feature_row1_overview" type="center" %}
{% include feature_row id="feature_row1" %}
{% include feature_row id="feature_row2" %}
{% include feature_row id="feature_row3" %}
