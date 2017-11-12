Front-end Developer Exercise
============================
by Luke Moorman

Summary
------

* Built web app according to specs and annotated-mockup, functional in Chrome, Mozilla, IE9+, and no-JavaScript browser

Server
------

Run the server with the following commands:

```sh
npm install
npm start
```

You will find the site at http://localhost:8080. You will find the api at http://localhost:8080/api/friends.

IE9 Deviations
---------

* If a user loads the app in IE9, they will have a very similar visual experience to a modern browser user, but without animations

No-JavaScript Deviations
------------

* If a user loads the app without JavaScript enabled, the page will load the entire list of baby steps at one time
* The user will still be able to read through the steps, and gather all content necessary
* I remove the navigation bar for this version, and widened the content section

External Libraries
----------------

* Express used for building out API for friends list calls
* Node used for the web server
* Loaded npm package classlist-polyfill to enable classList functionality in IE9
* Used some pieces of code from internet (all notated in line comments)

