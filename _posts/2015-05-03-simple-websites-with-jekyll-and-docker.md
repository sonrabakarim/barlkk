---
layout: post
title: "Simple websites with Jekyll and Docker"
description: "Want to create a website but not sure where to start? Host simple websites using Docker and Jekyll for only $5 bucks a month."
date: 2015-05-03T01:01:56-05:00
tags: [github, blogging, jekyll, docker, passenger, virtualbox, webmaster, vm, virtualization, hosting]
categoryies: [tutorials]
image:
  feature: sailing-boat-679833_1280.jpg
  credit: Counselling
  creditlink: http://pixabay.com/en/sailing-boat-sea-ocean-679833/
---

Looking to create a simple website but don’t want to pay an arm and a leg for setup and hosting? Get started for only $5, with the first two free.

> Learn how to setup simple websites with Jekyll and Docker

<!--more-->

**Primary Objective:** Create and host simple websites with Jekyll and Docker using Mark Otto’s beautiful and minimalistic [Lanyon theme](https://github.com/poole/lanyon).

**Secondary Objective:** Earn some geek cred by learning how to use Jekyll, Docker and Passenger; and learning how to deploy your website from the command line.

# Configure Server for Docker deployments

In this tutorial we’ll use a remote server to host our Jekyll site. For simplicity we’ll use DigitalOcean and take advantage of the 1-click Docker installation feature. If you don’t already have a DigitalOcean account you can [use my referral code](https://www.digitalocean.com/?refcode=9d5c1c681fd0) for $10 (~2 months) free, stopping anytime for a prorated fee.

If you’re not planning to deploy your site to DigitalOcean you may skip this section and ad lib when we get to running the site remotely.

## Create Docker Droplet

Login to [Digital Ocean Control Panel](https://cloud.digitalocean.com/droplets/) and choose **Create Droplet**. Complete the subsequent form, selecting the $5/mo. size option and, in the *Select Image* section, click *Applications* and choose **Docker** as shown below.

![Digital Ocean Droplet creation with Docker App selected](/images/digitalocean-docker-app.png "Select Docker in the DigitalOcean Control Panel during Droplet creation.")

Then **Add SSH Key** and create your Droplet. Provisioning should finish in a matter of seconds all thanks to your handy clickwork.

## Create new user

Once the new Droplet is active we should create a new user so we’re not always executing commands as root[^1].

First, **open a console** such as [iTerm 2](http://iterm2.com/) or [cmder](http://gooseberrycreative.com/cmder/) and SSH as root using the IP of the Droplet you created, e.g.

    ssh root@45.55.234.56

**Note**: If this is the first time connecting you’ll be prompted regarding host authenticity. Enter `yes` to continue connecting.

(Assuming you added SSH keys when creating the droplet you should now be connected to the droplet and logged in as *root*. Otherwise, enter the password to continue.)

Next, **create a new user** called `deployer` and give them super user privileges as described in [How To Add and Delete Users on an Ubuntu 14.04 VPS](https://www.digitalocean.com/community/tutorials/how-to-add-and-delete-users-on-an-ubuntu-14-04-vps). Once complete `exit` SSH to end the remote connection. Next we’ll give the new user password-free access to the Droplet.

## Add SSH key for deployer

With the new user created we can **add an SSH key** for them with the following command:

    cat ~/ .ssh/id_rsa.pub | ssh deployer@HOST "mkdir -p ~/.ssh && cat >> ~/.ssh/authorized_keys"

Where `HOST` is the IP of the Droplet.

You will be prompted for the password — go ahead and enter it. From now on you will no longer have to enter the password for this user while connecting from this machine.

# Create Docker image

Alright, now onto the fun stuff! In this section we’re going to clone a seed for our Jekyll site and use it to create a Docker image we can run on our Droplet.

**Tip:** Never used Docker before? No worries! Just head over to the [Docker Jumpstart](http://odewahn.github.io/docker-jumpstart/) by Andrew Odewahn. SSH into the Droplet under the new user account to follow along with the examples therein.

## Install Docker

Docker is designed to run only on Linux. To use it on OS X or Windows you’ll need to run a virtual machine with Linux on it. To do so [download and install Virtual Box](https://www.virtualbox.org/) and [boot2docker](http://boot2docker.io/), and follow the setup instructions for each.

Once installed and set-up, **start the Docker daemon**:

    boot2docker up

Set suggested environment variables, if prompted, then do:

    docker

You’ll see a command listing if everything worked. If not, **ensure boot2docker is running** with `boot2docker status`.

## Clone Jekyll seed

In order to build a Docker image to run our Jekyll site we need an actual site to start with. Rather than creating one from scratch we’re going to use an open-source seed called [Lanyon](http://lanyon.getpoole.com/) by Mark Otto. Go ahead and clone it now:

    git clone https://github.com/poole/lanyon.git lanyon && cd $_

## Configure Docker host container

Next we’ll configure a Docker container to host a Docker image we can use to run our site on DigitalOcean. Start by creating a `Dockerfile`, `Gemfile` and `nginx.conf` file in the root folder of the cloned Jekyll seed, modeling from the following:

{% gist jhabdas/e0d5e3bed0316f1a5783 %}

What’s this does is builds off an existing container called [passenger-docker](https://github.com/phusion/passenger-docker), exposes traffic on 80 for port-forwarding, copies the site into the container, builds the site using Jekyll, configures Nginx to use it and then serves the whole thing up using [Passenger](https://www.phusionpassenger.com).

This allows Docker images to be built in a matter of seconds, which is what makes working with containers so appealing.

## Build and run container image locally

Once the container is configured go ahead and **build the container** image like so:

    docker build --rm .

The above builds the Docker image, removing intermediate containers after a successful build. It may take a moment while Docker *pulls* dependent layers. Once completed once, however, dependent layers will be cached during subsequent builds.

Once built, get a listing of images:

    docker images

Look at the top of the resulting list and **copy the Image ID** of the most recent entry.

**Run the image** in the background, publishing port 80 on the container to port 80 to the host:

    docker run -d -p 80:80 b64bea84255a

Confirm the container is running with:

    docker ps

In this list look for an active container to confirm the site is up-and-running on port 80.

## Connect to Jekyll site

With the container running our Docker image confirm it’s serving up our Jekyll site:

`curl $(boot2docker ip)` on Windows or Mac; or,
`curl localhost` on Linux.

You can even connect to the above IP using a web browser. If everything’s working correctly you should see something like this:

![Jekyll site running in a browser](/images/docker-passenger-lanyon.png)

That’s all there is to it! Now that we’ve got a simple Jekyll website running under Docker let’s go ahead and deploy it to DigitalOcean.

# Run the site on DigitalOcean

To run our Jekyll site on our Droplet we’ll first create an archive of the site source, then upload the site source to DigitalOcean, then build and run the container image on the remote server.

## Upload site

Now that we’ve got a functional container image let’s go ahead and use it on DigitalOcean Droplet with Docker pre-installed.

First commit any changes you’ve made and **create a gzipped tarball** of the source code in `master`:

```
git add -A && git commit -m "All the things"
git archive -o app.tar.gz --prefix=app/ master
```

Next use Secure copy to **transfer the site’s source files** from the current host to the Droplet and rebuild the container image there:

    scp app.tar.gz deployer@HOST:

Where `HOST` is the IP of the Droplet created earlier. This will copy the site archive to the server where it can be built and run.

**Tip:** Be sure you copy the source files and not the Docker image as the built image will be approximately 400 times larger than the gzipped tarball.

## Build and run container image remotely

With the app source uploaded to the server we’re ready to build and run the container image remotely. To do this first login to the remote server:

    ssh deployer@HOST

Where `HOST` is the IP of the Droplet.

Once logged in to the remote, unarchive and build the site, tagging it `webapp` to give it a more friendly name:

    tar zxvf app.tar.gz && docker build -t webapp app/

Once the container image is built, run it on port 80 for both host and container:

    docker run --rm -p 80:80 webapp

*Note:* Run the above with the `-d` flag once you’ve confirmed the site is up to keep it running.

## Confirm site is up

Now that the site’s up and running you can test it by browsing to `http://HOST/` where `HOST` is the IP of your Droplet. If everything worked you should be staring at the same Jekyll site you saw on your local machine earlier.

# Wrapping up

In this tutorial we learned how to create simple websites with Jekyll and Docker. Additionally we learned a simple workflow to deploy them to DigitalOcean via the command line, using Passenger to serve them with minimal required configuration.

# Extra credit

Here are some ideas for things try next once you’re happy with the look-and-feel of your new Jekyll site:

- Install the [Octopress 3](https://github.com/octopress/octopress) and learn how it can be used to simplify the process of managing pages and posts.
- Automate the deployment process using [drone](https://github.com/drone/drone) or [Octopress](https://github.com/octopress/deploy) and let us know how you did it in the comments section below.
- Learn about and set-up zero-downtime deployments using a proxy and tools such as [flocker](https://github.com/ClusterHQ/flocker) or [Ansible](http://www.ansible.com/).
- [Sign-up](https://www.cloudflare.com/sign-up) for a free CloudFlare account and use it to increase the performance of your Jekyll site.
- Purchase a vanity domain name and use it to route DNS traffic to CloudFlare or directly to the app running on the Droplet.

[^1]: It’s all fun and games until someone jails the root user.
