---
title: Optimize Images with Sketch
date: 2016-09-02T10:14:05-05:00
author: Josh Habdas
excerpt: Techniques to go faster and rank higher.
categories:
  - techniques
tags:
  - sketch
  - performance
  - optimization
  - tools
header:
    overlay_image: photo-1430760903787-4d91bbf15384_1280.jpg
    overlay_filter: 0.5
    teaser: photo-1430760903787-4d91bbf15384_512.jpg
---
You know the drill. When you're building for the Web or mobile performance is everything. Out of the box Sketch does not lend itself to producing flyweight images. But that doesn't mean you need a second image editor, or even another tool, just to create performant images. Use these techniques to reduce file sizes and optimize images with Sketch.

# Know what to optimize

First off, don't overdo it. Optimizing images isn't always necessary. So before you go hog wild shaving a measly 2KB off a bunch of images, think for a moment about the Pareto principle, better known as the 80-20 rule, and only optimize what's absolutely necessary. Doing so will save you time and help you avoid diminishing returns.

Two simple methods:

1. **Sort by size.** This one is downright simple, and, sadly, often overlooked. In our current world of <abbr title="Get Shit Done">GSD</abbr> we are not always valued by the quality of our work, but oftentimes by quantity. As a result, it's common to find image assets which are significantly larger than the others. Sorting exported assets by file size should make these leap out so they can be fixed.
1. **Listen to the Google.** If you're building a website, run that shiny new blog post through [PageSpeed Insights](https://developers.google.com/speed/pagespeed/insights/) and see if you're getting red flagged for image size. If you are, do something about it. And if you use Google Analytics you test many pages at the same time from _Behavior_ > _Site Speed_ > _Speed Suggestions_ menu item.

# Using Sketch to optimize images

Unlike SVGs, which are lightweight to begin with, raster images such as TIFFs, JPGs and PNGs can be quite bulky when it comes to file size. Utilize the following techniques when exporting assets to slim them down and optimize images with Sketch.

## Export the correct format

By default Sketch wants to export everything as a PNG. While that may be good for image fidelity, it's not always what you want.

If you're exporting a photograph, export as JPG. JPEG is a lossy format, so each time it's optimized it loses quality. If you're familiar with VHS tapes, a simple analogy is what happens when you copy of a copy. You lose quality. So be sure to hang onto the original when optimizing images for the Web so they can be reused later.

If you're exporting a screenshot, something with transparency, an illustration, or a diagram with sharp lines, export as PNG. Though PNGs _can_ be lossy if the number of bits used to save a file change (e.g. saving a PNG-32 as PNG-8), Sketch doesn't seem to have this option so fuggetaboutit.

## Scale down size

Always look for ways to scale image size down. If the width of your image is more than 1028 pixels and you're not planning on displaying it on a HD jumbotron at the next Superbowl, consider locking the image dimensions and adjusting the width to 1028 pixels for a reasonable full-width display on most desktops and retina displays. And if you can get away with less, do it.

## Use lower quality

This is particularly useful for large JPGs, often used for aesthetics or visual trim. When exporting as JPG try dialing down the quality from 90% to something radically less, say 40% to 60%, preview it, and see if there's a noticeable difference in fidelity. If there's not, you've just struck gold my friend. But if there is, simply dial the quality back up by halves until you strike a good balance between size and fidelity.

## Reduce File Size

Under the _File_ menu in Sketch there's a command called _Reduce File Size_. Try it. It's quite possible it just may save you a few MB. Though, if it's a Web image, and it's over 300KB in size you're probably doing something wrong.

## Responsive images and thumbnails

If you're displaying thumbnail versions of your images on a website, or using the [`srcset` attribute](http://devdocs.io/html/attributes#srcset-attribute), or [`picture` element](http://devdocs.io/html/element/picture), consider saving multiple versions of your images, each at smaller size dimensions, so they'll load faster on mobile devices and in different usage contexts. There are gobs of articles on the Web detailing how to do this, so I'll spare you the deets.

## Additional considerations

When exporting JPGs from Sketch there're a couple of checkboxes in the export dialog called Progressive and Save for Web. Consider using them.

Progressive rendering will allow your image to load more quickly on slower connections by rendering the images in several passes, each pass with a higher fidelity, which can be good for larger images and helps get content on a screen more quickly.

Saving for Web will remove unneeded metadata from file headers, making the resulting size a little smaller. The more the better, and in this case less is more.

# Summing things up

The above techniques will help maintain a reasonable level of fidelity while optimizing images with Sketch without introducing a lot of complexity, or additional tools or processes. Using them can mean the difference between Page 1 of Google and getting buried in the nether regions. What tips do you have? Please feel free to share them in the comments section below.
