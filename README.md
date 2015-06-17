# habd.as

[![Stack Share](http://img.shields.io/badge/tech-stack-0690fa.svg?style=flat)](http://stackshare.io/jhabdas/simple-websites-with-jekyll-and-docker)

My personal site all containerized and using the HPSTR theme for Jekyll.

# Features

- Everything you see in the HPSTR section below
- Post excerpts and auto-generated meta descriptions
- Configurable support for [Segment.io](http://segment.io)
- Support for GitHub flavored markdown and code fencing
- Better semantics with the `main` and `aside` elements
- Improved discoverability of `abbr` elements
- Ready-to-use Dockerfile for site containerization
- A `robots.txt` file for crawlers
- Less code for a lighter footprint

# Usage with Docker

```
                                   ##         .
                             ## ## ##        ==
                          ## ## ## ## ##    ===
                       /""""""""""""""""\___/ ===
                  ~~~ {~~ ~~~~ ~~~ ~~~~ ~~ ~ /  ===- ~~~
                       \______ o          _,/
                        \      \       _,'
                         `'--.._\..--''
```

This site leverages Docker for local development and production hosting. Learn how you can too using the detailed installation instructions provided for [Simple websites with Jekyll and Docker][1].

# HPSTR Jekyll Theme

They say three times the charm, so here is another free responsive Jekyll theme for you. I've learned a ton since open sourcing [my first two themes](https://mademistakes.com/work/jekyll-themes/), and wanted to try a few new things this time around. If you've used my previous themes most of this should be familiar territory.

## What HPSTR brings to the table:

* Modern and minimal design.
* Responsive templates for post, page, and post index `_layouts`. Looks great on mobile, tablet, and desktop devices.
* Gracefully degrades in older browsers. Compatible with Internet Explorer 8+ and all modern browsers.
* Sweet animated menu with support for drop-downs.
* Optional [Disqus](http://disqus.com) comments and social sharing links.
* [Open Graph](https://developers.facebook.com/docs/opengraph/) and [Twitter Cards](https://dev.twitter.com/docs/cards) support for a better social sharing experience.
* Simple [custom 404 page](http://mmistakes.github.io/hpstr-jekyll-theme/404.html) to get you started.
* Stylesheets for Pygments and Coderay [syntax highlighting](http://mmistakes.github.io/hpstr-jekyll-theme/code-highlighting-post/) to make your code examples look snazzy
* [Available in Spanish](https://github.com/cruznick/hpstr-jekyll-theme/tree/es). Thanks [@cruznick](https://github.com/cruznick)!

![HPSTR Theme Preview screenshot](http://mmistakes.github.io/hpstr-jekyll-theme/images/hpstr-jekyll-theme-preview.jpg)

---

## Getting Started

HPSTR takes advantage of Sass and data files to make customizing easier. These features require Jekyll 2.x and will not work with older versions of Jekyll.

To learn how to install and use this theme check out the [Setup Guide](https://mmistakes.github.io/hpstr-jekyll-theme/theme-setup/) for more information.

[1]: http://habd.as/simple-websites-jekyll-docker/ "Create and host simple websites with Jekyll and Docker using Mark Otto's beautiful and minimalistic Lanyon theme."
