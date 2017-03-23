---
title: Zero to HTTP/2 with AWS and Hugo
author: Josh Habdas
date: 2017-02-10T16:41:53+08:00
modified: 2017-03-06
excerpt: A step-by-step guide to building your own hacker blog.
categories: [tutorials]
tags: [aws, hugo, http2, webperf, web, ssl, https]
header:
  overlay_image: 4fqamznaguo-reginar_1280.jpg
  overlay_filter: 0.5
  teaser: 4fqamznaguo-reginar_512.jpg
featured: true
---

Those who subscribe to [Node Weekly](http://nodeweekly.com/) may have seen a post in early 2017 from Ivan Jovanovic titled [Running Express, Koa And Hapi On HTTP/2](http://ivanjov.com/running-express-koa-and-hapi-on-http-2/). In his post Ivan gives a brief overview of the new HTTP protocol and describes some of the HTTP/2 key advantages, such as speed.

Ivan goes on to share code snippets for implementing HTTP/2 in several popular Node-based web servers, something JS developers (especially fans of [rollup.js](http://rollupjs.org/)) might enjoy, but entirely unnecessary if you're using CloudFront---which [announced HTTP/2 support](https://aws.amazon.com/about-aws/whats-new/2016/09/amazon-cloudfront-now-supports-http2/) in September 2016---to serve static websites like those generated with Hugo.

**In this post you will learn how to go from Zero to HTTP/2 with AWS and Hugo, the [fastest static site generator](/choose-hugo-over-jekyll/) in existence.**

<aside class="notice--success">
  <h4>Why spend time doing this?</h4>
  <p>Here are some carrots, assuming you even like vegetables. When finished you will have:</p>
  <ul>
    <li>A personal hacker blog that <a href="https://hackcabin.com">looks like this</a>.</li>
    <li>Paints in <b>250-300ms</b> as clocked by Lighthouse</li>
    <li><b>Zero-downtime</b> deployments</li>
    <li>Ability to generate <b>400 blog posts in a half-second</b></li>
    <li><b>HTTPS by default</b>, with 301 redirects from HTTP</li>
    <li>A way to <b>receive emails</b> at your own domain <i>without Google</i></li>
    <li><b>No more cert renewals with Let's Encrypt</b></li>
  </ul>
</aside>

And here's what your blog will look like, save for theme advancements and your personal customizations (click to view live example):

[![After Dark theme for Hugo screenshot](/images/after-dark-framed.png "Click here for production example")](https://hackcabin.com)

When you're ready to get your hands dirty, continue on for the full set of step-by-step instructions on how to go from Zero to HTTP/2 with AWS and Hugo.

## Get started with AWS and Hugo

First, [create an AWS account](https://portal.aws.amazon.com/gp/aws/developer/registration/). If this is your first time using AWS you will benefit from a free year of service (after that it's cheaper than [Digital Ocean](https://m.do.co/c/9d5c1c681fd0)). If you already have an AWS account, proceed to the next step.

Next, install [After Dark](https://github.com/comfusion/after-dark), a hacker theme I created for Hugo. The instructions assume you're using macOS, though other platforms are supported as well.

## Install s3_website

`s3_website` is a RubyGem utilizing the AWS-CLI that can be used to automatically configure your website on AWS, and deploy it to CloudFront in a matter of seconds from your local machine. See [the README](https://github.com/laurilehmijoki/s3_website) for installation and usage instructions.

**Note:** Be sure you install version 3.0.0 or better to take advantage of the HTTP/2 configuration settings for CloudFront distributions.
{: .notice--info}

## Configure s3_website

If you followed the instructions, you should now have a S3 bucket for your website, automatically created or updated by `s3_website`, with your After Dark site deployed. If you _really_ followed the instructions you will also have a CloudFront distribution configured to use HTTP/2, all wired up to your S3 bucket and ready to go.

Here's what my current configuration looks like for [Hack Cabin](https://hackcabin.com), which also uses After Dark:

```yaml
s3_id: <%= ENV['S3_ACCESS_KEY_ID'] %>
s3_secret: <%= ENV['S3_SECRET_KEY'] %>
s3_bucket: hackcabin.com

site: public

index_document: index.html
error_document: 404.html

max_age:
  "videos/*": 2629000
  "js/*": 2629000
  "*": 300

gzip:
  - .html
  - .mp4
  - .xml

s3_reduced_redundancy: true

cloudfront_distribution_id: <%= ENV['CLOUDFRONT_DISTRIBUTION_ID'] %>

cloudfront_distribution_config:
  default_cache_behavior:
    min_ttl: <%= 60 * 60 * 24 %>
  http_version: http2
  aliases:
    quantity: 1
    items:
      - hackcabin.com

```

And here's an example `.env` file to accompany it:

```shell
S3_ACCESS_KEY_ID=IKEAJ56NKXWH7IRRHEBA
S3_SECRET_KEY=oVXNqOym4TaHOFQFj3lL4q/SWaeAJkI5Wzp2JjG5
CLOUDFRONT_DISTRIBUTION_ID=A17WRF71NFFL7K
```

## You're done! Well, almost...

Sites served over CloudFront allow HTTPS by default, meaning you do not have to do anything to enjoy SSL. However, if you're using a custom domain (which you can purchase starting at $12 per year via Route 53 in the AWS Console) you need to do a little more work.

## Configure HTTPS on a custom domain

This part requires some manual work in the AWS Console, but nothing too extravagant. And though some may encourage you to [Setup Let's Encrypt SSL Certificate on Amazon CloudFront](https://medium.com/@richardkall/setup-lets-encrypt-ssl-certificate-on-amazon-cloudfront-b217669987b2) it has been my personal experience **using the AWS Certificate Manager is much easier** to manage over time.

To obtain a custom SSL certificate using the Certificate Manager you need to configure SES to receive email.

### Configure SES to receive email

The reason this is needed is because the certificate authority must be able to verify you own your domain name. I've linked to instructions on how to do this in my post titled [Serverless Email with SES and Lambda](https://habd.as/serverless-email-forwards-ses-lambda-crash-course/#configure-ses-to-send-and-receive-email).

**Note:** Skip the majority of the instructions you see and focus only on receiving email with SES.
{: .notice--info}

Once you've finished you will have a new S3 bucket capable of receiving emails at your custom domain and can now request a custom SSL cert using the Certificate Manager.

### Request Certificate using Certificate Manager

First, access Certificate Manager from the AWS Console and choose **Request a certificate**. Then enter the domain name or names for which you'd like to request a certificate for, e.g.:

- theoutline.com
- \*.theoutline.com

Form there choose **Review and request** followed by **Confirm and request**. This will kick off several verification emails to SES, which will store them in the related S3 bucket set-up in the last step.

### Confirm Certificate Request

To confirm the request of the SSL Certificate open the S3 Bucket collecting emails, open one of the emails received at the time of the request, and look for the verification URL. Copy and paste the verification URL into a browser and navigate to the page to verify domain ownership.

You can watch the status of the verification from the Certificate Manager. If too much time elapses and the request is not verified the certificate request will become invalid and you will need to re-request.

### Configure CloudFront

Now that you've successfully obtained your SSL certificate it's time to hook it up to your CloudFront distribution. This is also a good time to enable HTTPS by default.

To use your custom cert do:

1. Navigate to CloudFront in the AWS Console and choose your distribution.
1. Choose **Edit** from the _General_ tab and select **Custom SSL certificate**.
1. **Select the certificate** you just created from the selection dropdown.
1. Scroll to the bottom of the page and choose **Yes, Edit**.

To enable HTTPS by default do:

1. Navigate to CloudFront in the AWS Console and choose your distribution.
1. Navigate to the _Behaviors_ tab, select the "Default" behavior and choose **Edit**.
1. Under _Viewer Protocol Policy_ choose **Redirect HTTP to HTTPS**
1. Scroll to the bottom of hte page and choose **Yes, Edit**.

## Appreciate your hard work

Navigate to your website's custom domain name and ensure it is being served over HTTPS. Verify the HTTP to HTTPS redirection is working as expected by entering a URL starting with HTTP (it should 301 to HTTPS). And, finally, use [HTTP/2 Test Tool](https://tools.keycdn.com/http2-test) to verify HTTP/2 is functioning as expected.

![HTTP/2 Test Proof](/images/hackcabin-http2-test.png)

**That's it. You're finished. This time for real.**

You've just gone from Zero to HTTP/2 with AWS and Hugo. Please feel free to share your success stories or battle cries in the comments section below.

Page generation speed measured in Feb '17 with Hugo v0.18 on a MacBook Pro with 2.5 GHz Intel Core i7 with 500GB Flash Storage running macOS Sierra (10.12.3) using the content from [collantes.us](https://collantes.us/).
