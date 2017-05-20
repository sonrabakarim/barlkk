---
title: "Screaming Fast WordPress Sites with Redis and Vultr"
excerpt: "In this talk I show how to use a $5 Vultr box and Redis with Load Impact to support up to 7000 concurrent WordPress users."
last_given_date: 2017-04-22
sidebar:
  - title: "Intended audience"
    text: "WordPress developers, site and product owners"
  - title: "Topics covered"
    text: "UX, performance, load testing, caching"
  - title: "Given on"
    text: "4/22 for [WordCamp Ubud 2017](https://2017.ubud.wordcamp.org/session/screaming-fast-wordpress-sites-with-redis-and-vultr/)"
---

In this talk, the accomplishments of which [have been summarized](https://hackernoon.com/putting-wordpress-into-hyperdrive-4705450dffc2) on a Hack Noon article, I discuss how to I used a $5/mo [Vultr](https://www.vultr.com) box fitted with [Redis](https://redis.io) cache and [**Fetch Inject**](https://github.com/jhabdas/fetch-inject) to scale a single instance up to **7000 concurrent users**.

This work has spun off into [The Hyperdrive plugin for WordPress](https://github.com/comfusion/hyperdrive).

View the [modified `functions.php`](https://gist.github.com/jhabdas/64e8380010e43a526fb9c9ee511fad17) I used to implement Fetch Injection into the [Twenty Seventeen theme](https://github.com/WordPress/twentyseventeen/) for this talk. No plugins were used for this testing. See the Hacker Noon article linked above for access to raw metrics and data captured.
{: .notice--info}

<script async class="speakerdeck-embed" data-id="8a632081c59e4a358b15b95b2d0d1852" data-ratio="1.33333333333333" src="//speakerdeck.com/assets/embed.js"></script>
