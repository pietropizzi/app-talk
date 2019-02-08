# Contribute to this project

Why and how to contribute to the iOS app directory on [https://app-talk.com](https://app-talk.com).

## Why contribute?

There are many reasons you might be interested to contribute. Maybe you have spotted an error, maybe some URLs are not valid anymore, maybe you know of an app that supports URLs and it is not part of this documentation effort yet.

No matter your motivation, your contribution is much appreciated! 🙇

## How to contribute

The repository for this site can be found at [https://github.com/pietropizzi/app-talk](https://github.com/pietropizzi/app-talk) and that is where you will have create a Pull Request with your changes.

The documentation you can see here is all found in `.json` files in [/data/apps](https://github.com/pietropizzi/app-talk/tree/master/data/apps). Each app has it's own file that has some basic information about the app plus all of its actions.

### Where to start

There are multiple ways for you to see how to add a new app or change something in an existing one.

- You can take a look at the already existing examples in [/data/apps/](https://github.com/pietropizzi/app-talk/tree/master/data/apps/) and go from there.
- A good starting point for a new app is [/data/app-template.json](https://github.com/pietropizzi/app-talk/tree/master/data/app-template.json). It has all the possible fields.
- A more formal description of the structure of the `.json` files is the schema which can be found in [/src/schema/app.js](https://github.com/pietropizzi/app-talk/tree/master/src/schema/app.js).

### Good to know

- The `identifier` inside the `info` object should be all lowercase with dashes `-`. It should also not start with a number since it will be used as an `id` in the html.
- If you want to add an app icon (for example to a newly created app):
  - Add it inside of [/data/icons/](https://github.com/pietropizzi/app-talk/tree/master/data/icons/) and give it the same name as the `identifier`.
  - It should be 512x512 pixels.
  - You can use [this workflow](https://app-talk.com/getAppIcon.wflow)(on iOS) to get the app icon from an app.
