---
title: Reflecting on React Native development
date: 2015-08-01T12:57:51-05:00
layout: post
comments: true
description: Tips to get your app delivered faster.
categories: [reference]
tags: [react, react native, native, programming, web platform]
image:
  feature: macro-319237_1280.jpg
  credit: ibangfotografi
  creditlink: https://pixabay.com/en/macro-nature-reflection-beautiful-319237/
---

I’d originally planned to make this a tutorial on how to build a React Native app. But to give it justice I'm doing [a Webcast](http://www.oreilly.com/pub/e/3483). Instead, what I’ll share with you here are some of my top takeaways from building my first iOS app with React Native. These are coming from the viewpoint of an experienced Web developer building a native app for the first time. Things I wish I'd known earlier kinda stuff. So without further ado…

# App development
Tips to save you time developing an app with React Native.

## Getting started
To get started quickly with app development consider your basic needs. You could start building your app using the React Native CLI but you may quickly run into friction scaling. If that's a concern check out this list of awesome [React Native Boilerplates](http://habd.as/awesome-react-boilerplates/#react-native).

## Incorporating Swift
Swift feels a lot more like JavaScript, which is great for programmers coming from Web. I chose to start my app with Objective-C and then start using Swift once I became more comfortable with the creation process. At the time of writing creating Custom Native modules with Swift requires some [extra care](https://facebook.github.io/react-native/docs/native-modules-ios.html#exporting-swift) to work properly, though [hacks are starting](https://gist.github.com/robertjpayne/855fdb15d5ceca12f6c5) which may ease development in the future.

- Create a Swift file and chose to allow Xcode to automatically create the bridge for a mixed project.
- Xcode will automatically create a bridging header between languages called `MyApp-Bridging-Header.h`.
- Update *Build Settings* to set “Defines Module” setting to `YES`.
- Import to Objective-C like so: `ModuleName-Swift.h` (where `ModuleName` is your *Product Module Name* and `-Swift` is a fixed suffix.
- Import the `.h` file into your existing Obj-C classes to use Swift from existing Obj-C classes
- Review the [Mix and Match](https://developer.apple.com/library/prerelease/ios/documentation/Swift/Conceptual/BuildingCocoaApps/MixandMatch.html) page on the Apple Developer Portal.

## Create a Launch Screen from a Xib
A new feature in Xcode 6 and iOS 8+ allows app developers the ability to create launch screens using vector graphics. It's fast to set-up and requires less image assets to manage.

- Create a new *Image Set* and set it to *Single Vector* using the Xcode *Attributes inspector*.
- Create a PDF of an SVG free online so it can be used as a Single Vector *Universal* asset for the *Image Set* created.
  **Note:** SVG should be saved at a specific size depending on target resolution, e.g. (320 * 480) for iPhone and (768 * 1024) iPad.
- Create a new Xib file by doing `File` > `New` > `File…` in Xcode and then selecting *Launch Screen* under `iOS` > `User Interface`.
- If you’re doing a Universal Layout for tablet support you’ll need to adjust the names of your Xib files like so:
-- `LaunchScreen~ipad.xib`
-- `LaunchScreen~iphone.xib`
- Add an *Image View* to the launch screen as [explained by Jarid Davidson](https://youtu.be/mS3CH_bKabw?t=3m30s).
- Select the *Background Image* to be using the *Attributes inspector*.
- Use *Auto Layout* to add vertical and horizontal layout constraints to center the image as explained in [Start Developing iOS Apps Today: Designing a User Interface](https://developer.apple.com/library/ios/referencelibrary/GettingStarted/RoadMapiOS/DesigningaUserInterface.html#//apple_ref/doc/uid/TP40011343-CH6-SW1).

## Creating an App Icon
Your app is going to need an icon. They can be [created for free](/automating-ios-app-icon-creation/) without much design skill whatsoever.

## Device Preview
A picture's worth a thousand words. Show people what your app will look like on their actual device with [iPhone Screenshot Maker](http://iphone-screenshot.com/). The application will frame an app screenshot inside the iOS device of your choosing and even put a slick gloss on the screen for you. Best of all, it's free.

# App submission
Getting your app in the App Store for real.

## Beta testing with TestFlight
Getting your app onto the hands of others early is a good idea. There are many different devices of various form-factors, all potentially running different versions of iOS. Don’t make the assumption your app will “just work” for others if it worked for you. Use beta builds to squish bugs before your formal App Store submission. [TestFlight](https://developer.apple.com/testflight/) can help.

- New builds require a change in the build number in the project settings in Xcode.
- You can leverage iTunes Connect with TestFlight to manage users and distribute your app for prerelease testing.
- Unlike the old UDID request method all you need is the full name and iOS-linked email address of your beta tester to invite people to the beta group.
- You can submit app store review requests against beta builds to get a feel for what’s left before official submission. Use the submission links next to the individual builds in *iTunes Connect* to make it happen.
- When submitting new builds, ensure you create your Archive as iOS Device (i.e. unplug your actual device). If you don’t you’ll receive a “failed to code sign” error in Xcode.
- You may be rejected for improper advertising identifier IDFA via Program License Agreement PLA 3.3.12 if you’re not serving ads and include RCTAdSupport Library (you’ll be notified during submission).

## Submitting to App Store
This could be a beta build or it could be your 1.0. The up-front part of the process starts in Xcode and requires you to upload an archive of your app to the App Store.

- In your app [turn off developer mode and enable performance optimizations](http://herman.asia/building-a-flashcard-app-with-react-native) (see *Submitting the app* section for details).
  **Note:** *developer.apple.com* and *iTunes Connect* are all you need here.
- Hit the *Archive* button in Xcode after finishing the setup.
- Getting screenshots can be a little tricky. There are a number of ways to go about it. You can even create custom frame borders of your app if you want to go all out. What worked best for me was the simplest solution of messing with the simulators to capture the images. But if you localize text in our app you may want to look at something like [Snapshot](https://github.com/KrauseFx/snapshot) and learn how to automate screen grabs.

## If and when you run into issues uploading to App Store
I ran into a lot of friction here at first and once after changing something, so this gets its own section.

- Ensure you create your archive as iOS Device (i.e. unplug your actual device, otherwise receive a “failed to code sign” error)
- If issues persist try some of the following:
-- Access the Provisioning Portal and generate new certificates
-- From Xcode Preferences, access Account and choose View Details to review your Signing Identities and Provisioning Profiles
-- Review your Keychain and what’s configured there as well
- In the end what worked for me was to close the main Xcode window *with the archive Organizer window still open*, which I tried in desperation after 2 hours of a whole lotta no such luck otherwise. Weird, right?

# That's all folks
If this was helpful for you please [try out my free app](https://appsto.re/us/NdeV7.i) and check out the [full source](https://github.com/jhabdas/lumpen-radio). Tips accepted using Gratipay. Click the tips badge in the repo to learn more and help reward me for my time. Cheers.
