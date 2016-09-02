---
title: Sketch Optimize Images for Web
date: 2016-09-02T10:14:05-05:00
author: Josh Habdas
excerpt: Simple techniques to optimize images for the Web.
categories:
  - techniques
tags:
  - sketch
  - images
  - optimization
  - tools
header:
    overlay_image: photo-1430760903787-4d91bbf15384_1280.jpg
    overlay_filter: 0.5
    teaser: photo-1430760903787-4d91bbf15384_512.jpg
---
Over the course of time as a web developer I've used a number of different image editors for working with graphics for the Web. First there was Photoshop, which was totally unnecessary for light image work. Then then there was Fireworks. Because once upon a time it was needed for PNG-8 alpha transparency. Then there was GiMP, because I was being cheap. And now there's Sketch.

Sketch is awesome. And it's an amazing tool both for designers and developers alike. And though it may be a bit shortsighted on my part, these days I tend to judge a designer's skill set by whether or not they use Sketch. If they are, I know they've been advancing their skills are passionate about their tools. If they aren't, I'll usually make a suggestion to check it out.

At first blush Sketch doesn't have a clear way to export images for the Web. So I'm going to quickly share what I've been doing to optimize images for the Web using Sketch in this post.

# Avoid premature optimization

First off, optimizing images isn't always needed. Being persnickety about image size isn't necessarily a bad thing, but there are probably better things you could be doing with your time than squeaking 2kb off a file. So before you become an image optimization czar determine if you even need to optimize your files.

Two approaches I use for image optimization are data versus gut.

First look at the size of the images you're using on the Web. Are there some which're dramatically larger than the others but serve the same general purpose? Is so, your gut should be telling you there's a potential optimization in file size.

Next look at data. Run your webpage through [PageSpeed Insights](https://developers.google.com/speed/pagespeed/insights/) and see if your web page is getting red flagged for image size. If you're using Google Analytics you can get PageSpeed insights on many pages at the same time from _Behavior_ > _Site Speed_ > _Speed Suggestions_ menu item.

# Using Sketch to optimize images

Unlike SVGs, which are extremely light-weight to begin with, raster images such as TIFFs, JPGs and PNGs can be quite bulky when it comes to bandwidth consumption on desktop and mobile devices.

Some techniques I use to optimize images with Sketch include the following.

## Export in the correct format

If you're exporting a photograph you're almost always going to want to export it as a JPG. JPEG is a lossy format, so each time it is optimized it loses quality. If you're familiar with VHS tapes, think of what happens when make a copy of a copy. You lose quality. So be sure to hang onto the original JPG assets when optimizing for the Web, so the image can be used in other mediums or optimized in a different way later on.

If you're exporting a screenshot, illustration or diagram with sharp lines, go for PNG. Though PNG _can_ be lossy if the number of bits used to save a file changes (e.g. saving a PNG-32 as PNG-8) the Sketch export tool by default doesn't provide these options.

## Scale down image size

Always look for ways to scale the image size down. If the width of your image is more than 1028 pixels and you're not displaying it on a HD jumbotron, consider locking the image dimensions and adjusting the width to 1028 pixels for a reasonable display on most desktops. This is not a hard-and-fast rule but something to consider. If you can get away with less, do it.

## Lower image quality when possible

This is particularly useful for banner images and large JPGs that are used for aesthetics. When exporting the file as JPG try dialing down the quality from 90% to something radically less, say 40% to 60%, and preview the resulting image and see if you can notice the difference. If you can, dial the quality back up until you strike a good balance between image size and fidelity depending on your use case.

Note: This tends to work best for larger images.
{: .notice}

## Reduce File Size

Under the _File_ menu there's a command called _Reduce File Size_. Try it and see what it does.

## Responsive images, screenshots and thumbnails

If you're displaying thumbnail versions of your images elsewhere on a website, using the [`srcset` attribute](http://devdocs.io/html/attributes#srcset-attribute), or providing multiple image resolutions using the [`picture` element](http://devdocs.io/html/element/picture) (primarily intended for use in art direction), consider saving multiple versions of your images, each at smaller dimensions, so they'll load faster on mobile devices and in different usage contexts.

## Additional options

When saving JPGs there're a couple of checkboxes in the export dialog called Progressive and Save for Web. Consider using them. Progressive rendering will allow your image to load more quickly on slower connections by rendering the images in several passes, each pass with a higher fidelity, which can be good for larger images. Saving for Web will remove unneeded metadata from file headers, making the resulting size a little smaller. The more the better, and in this case less is more.

# Summing things up

The above techniques should help maintain a reasonable level of fidelity while optimizing assets for the Web using Sketch. And while it can be easy to go overboard with image optimization, the simple techniques can make a big difference on site speed and user experience with relatively little effort. What tips do you have? Please share them using the comments section below.
