---
title: Serverless Email Forwards with SES and Lambda
date: 2016-08-27T15:12:33-05:00
modified: 2016-12-05
author: Josh Habdas
excerpt: A crash course in Serverless with AWS Lambda.
categories:
  - tutorial
tags:
  - programming
  - serverless
  - aws
  - cloud
  - nodejs
  - javascript
header:
  overlay_image: photo-1448227700746-d8eab5a1b9d7_1028.jpg
  overlay_filter: 0.5
  teaser: photo-1448227700746-d8eab5a1b9d7_512.jpg
featured: true
---

Recently this website underwent a major overhaul. I took it off my [simple Docker set-up](/simple-websites-jekyll-docker/) and [moved it to S3 with CloudFront](/pagespeed-100-with-jekyll-s3-and-cloudfront/). The process of which enabled me to reduce hosting costs by 80% all while increasing reach and decreasing page load times globally.

But static websites have a perceived disadvantage: they're static. They have no inherent dynamic functionality. What will you do when you want to add some piece of interactivity---a contact form, or an email distribution list? Sure you could go with TypeForm or TinyLetter. But <abbr title="Function as a Service">FaaS</abbr> (a.k.a. Serverless) is a thing and [will continue to be a thing](https://hackernoon.com/why-the-fuss-about-serverless-4370b1596da0) for years to come.

To quickly grok the benefits of a "serverless" architecture, look at the following illustration:

<script async class="speakerdeck-embed" data-slide="13" data-id="478787189d06467b8ea4c4ecd4a4fbf6" data-ratio="1.77777777777778" src="//speakerdeck.com/assets/embed.js"></script>

What the illustration shows is that using virtual machines, often hosted on public and private clouds using technologies like [EC2](https://aws.amazon.com/ec2/), [Azure Virtual Machines](https://azure.microsoft.com/en-us/services/virtual-machines/) or [DigitalOcean](https://m.do.co/c/9d5c1c681fd0) is downright wasteful. Not only are VMs difficult to manage from a DevOps perspective, they're harder to scale and flat out cost more money.

Going serverless helps fix the wastefulness by skipping the VM management, only paying for the compute resources used and simplifies making things scale. And, consequently, serverless architectures plug-in very well with static websites by allowing them to layer on dynamic functionality without forcing a platform change.

Two competing technologies for providing serverless compute resources include [AWS Lambda](https://aws.amazon.com/lambda/) and [Auth0 Webtask](https://webtask.io/). There are others for sure, and finding them and choosing the one that fits your needs shall remain a task for the reader.

The remainder of this article is a crash course using a tool called [Serverless] to create and manage Lambdas on AWS. More specifically, we'll look at how to use Serverless to set-up an email forwarding service to forward emails from Amazon's <abbr title="Simple Email Service">SES</abbr> to another email address, giving you a feel for how to utilize serverless computing to add dynamic functionality to static websites (or any website or app for that matter).

Ready? Hold on to your butts!

# Install Serverless

Installing the [Serverless] tool is easy. It prefers a global installation but that doesn't mean you can't also install and use it as a library within your application. And while several languages are supported, we're going to roll with JavaScript.

To install globally and make Serverless available as a CLI tool (for this post we'll be using Beta 2):

    npm i -g serverless@1.0.0-beta.2

To install Serverless as a library within an existing Node app:

    npm i -D serverless@beta

Then configure AWS [as described](https://github.com/serverless/serverless/blob/a7f50c2368301b21bbb1b1e046cbc2a31406f6d5/docs/guide/provider-account-setup.md) in the Serverless docs.

# Create a Serverless IAM user

To allow Serverless to make changes to your AWS account create a new IAM user and give it sufficient privileges [as described in the serverless docs](https://github.com/serverless/serverless/blob/a7f50c2368301b21bbb1b1e046cbc2a31406f6d5/docs/guide/provider-account-setup.md).

# Configure SES to send and receive email

This part can be a little tricky. And while it's possible to do most of the SES set-up in a scripted manner using AWS CLI, I found the [Configuring SES to receive and forward email section](https://jeremyfelt.com/2016/05/22/send-receive-email-domain-postmark-amazons-ses-s3-lambda-services/) of a post by Jeremy Felt suitable for getting set-up the first time around. Plus it's nice to have a visual of what's going on early on so you can understand what's happening under the hood once set-up is more automated.

Follow Jeremy's instructions to get SES configured, but _skip the manual Lambda creation steps_. We're going to use Serverless for that bit so we can properly manage our Lambda code under source control and utilize Serverless to automate the creation and versioning of the Lambda function.

# Create the Lambda with Serverless

Now for the fun part. We're going to use Serverless to create and upload a Lambda to AWS. Before doing so ensure you've completed the previous steps to configure Serverless with AWS and configure SES.

## Create a new service

Create a directory to place your SES forwarding service and navigate into it. I chose to place mine in under a `services` directory in my static web app:

    mkdir -p services/ses-forwarder && cd $_

Next use Serverless (installed globally) to create a new service using the Node template:

    sls create -t aws-nodejs

This will create a sample "Hello World" Lambda service. You should see output similar to the following:

```
Serverless: Creating new Serverless service...
 _______                             __
|   _   .-----.----.--.--.-----.----|  .-----.-----.-----.
|   |___|  -__|   _|  |  |  -__|   _|  |  -__|__ --|__ --|
|____   |_____|__|  \___/|_____|__| |__|_____|_____|_____|
|   |   |             The Serverless Application Framework
|       |                           serverless.com, v1.0.0-beta.2
 -------'

Serverless: Successfully created service in the current directory
Serverless: with template: "aws-nodejs"
```

Let's confirm we can deploy it now. We'll get back to creating the SES forwarder once confirming we can deploy to AWS.

## Deploy to AWS

Once you've created your service deploy it to AWS:

    sls deploy

Running the above should result in output like the following:

```
Serverless: Creating Stack...
Serverless: Checking stack creation progress...
......
Serverless: Stack successfully created.
Serverless: Zipping service...
Serverless: Uploading .zip file to S3...
Serverless: Updating Stack...
Serverless: Checking stack update progress...
.................
Serverless: Deployment successful!

Service Information
service: aws-nodejs
stage: dev
region: us-east-1
endpoints:
  None
functions:
  aws-nodejs-dev-hello: arn:aws:lambda:us-east-1:665550229666:function:aws-nodejs-dev-hello
```

If deployment doesn't work verify your [provider setup](https://github.com/serverless/serverless/blob/a7f50c2368301b21bbb1b1e046cbc2a31406f6d5/docs/guide/provider-account-setup.md). If you're running SES in a different region (e.g. `us-west-2`) ignore it for now and go with the default settings.
{: .notice--info}

## Invoke the Lambda

Once deployment is successful invoke the `hello` Lambda function:

    sls invoke -f hello

You should see output similar to the following:

    {
        "message": "Go Serverless v1.0! Your function executed successfully!",
        "event": {}
    }

## Remove the debris

Now that you've gotten the Hello World example running, remove it by running the following:

    sls remove

The above will remove the `hello` Lambda function from AWS so we can create a SES forwarding Lambda utilizing  [`aws-lambda-ses-forwarder`](https://github.com/arithmetric/aws-lambda-ses-forwarder).

# Create Lambda to forward Email

In this section we'll create a Lambda to forward emails from SES to another email address.

## Code the Lambda
Create the email forwarder by modeling from the following commit on my blog:

[99117d58](https://github.com/jhabdas/habd.as/commit/99117d58d156e05a920611b47efb59f080ca2b26)

While doing so ensure you set the expected SES region in `serverless.env.yml`. If you don't your Lambda won't be able to talk to your SES S3 bucket created while configuring SES earlier using Jeremy's instructions. Also be sure to reference Jeremy's instructions for important details about how the Lambda has been configured to work as you may want to make some changes.
{: .notice--info}

Once coded do an `npm i` to install the NPM dependencies needed to run the Lambda. These get packaged into the ZIP file uploaded to AWS, but you don't need to commit them to source control.

## Deploy the Lambda

Just like before, deploy the Lambda with `sls deploy`.

## More AWS configuration

The email collected by SES is stored in an S3 bucket created with Jeremy's instructions. Take a look back at his instructions and configure the Lambda "Policy Document" and add the Lambda as an action to the email S3 bucket. Check out Jeremy's screenshots (bottom of his post) for visuals of some of these steps.

## Test the SES Forwarder

Once deployed test the Lambda by shooting an email at an address on the SES-configured domain. If everything worked you'll receive a forwarded email at the verified SES address. If not, [check out the logs](https://us-west-2.console.aws.amazon.com/cloudwatch/home#logs:) for the Lambda using CloudWatch for info on errors.

## Save your work

Once you're finished don't forget to commit your work. Be sure you don't commit any AWS secrets or other sensitive info.

# Fin

In this crash course you learned the value of serverless technology for static websites and used it to create a practical SES email forwarding service with Serverless and Lambda. If you struggled at any point during this tutorial that's good because you probably learned something new (I know I did). Thanks for following along and please feel free to send any and all feedback or comments using the discussion section below. Cheers!

[Serverless]: http://serverless.com/
