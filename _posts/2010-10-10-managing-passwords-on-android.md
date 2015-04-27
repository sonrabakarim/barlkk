---
title: Managing passwords on Android
author: Josh Habdas
layout: post
permalink: /managing-passwords-on-android/
comments: true
categories:
  - security
tags:
  - android
  - privacy
  - encryption
  - mobile
  - passwords
---
After [installing Android on my HD2][1] I quickly became challenged with the task of recalling passwords for frequently used applications like Last.fm, Mint, Facebook, Twitter, Gmail, Foursquare, et cetera. While recalling passwords for all of these apps might be painful for some, it's a cinch for those managing their passwords using one of the many available ports of the open-source [KeePass Password Safe][2]. For Android, the KeePass port I'm using is [KeePassDroid][3].

> KeePassDroid makes recalling passwords as easy as copy/paste and also includes a password generator for creating strong passwords.

<!--more-->

KeePass ports like KeePassDroid store passwords in an encrypted file that can be easily shared between devices. That's where [Dropbox][4] comes in. When used together with DropBox, password files can be automatically synced between platforms and across devices.

To use KeePass and Dropbox together to manage passwords that easily sync between devices:

1.  Install DropBox on your PC/Mac and Android device
2.  Put a KeePass port on each of the same devices
3.  Move the KeePass KDB database files to the Dropbox cloud

That's it! Those concerned about storing their passwords in a cloud can rest easy knowing the KeePass databases are stored encrypted using some of the strongest ciphers in existence today. So unless you're protecting the kind of info that might one day end up on [WikiLeaks][5], you've got little to worry about in storing your KeePass data online.

 [1]: /running-android-on-htc-hd2-leo/
 [2]: http://keepass.info/
 [3]: http://www.keepassdroid.com/
 [4]: https://www.dropbox.com/
 [5]: http://wikileaks.org/
