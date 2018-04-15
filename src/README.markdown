Front-end Developer Exercise
============================

Created by Jonathan Melin

Description
-----------

I took much more of a modular and dynamic JavaScript approach to this code challenge than what may have been intended or required. Therefore, the page I developed is virtually useless without JS. I wanted to demonstrate my abilities by approaching the challenge with as many modern tools as I could. Since the whole front-end world is moving to JavaScript frameworks, I tackled the challenge in a way that is much more reminiscent of React, for example, instead of, say, jQuery or some other library. While still written in vanilla JS, it looks and feels more React-like, if that makes sense. 

Having said all that, I used webpack for this project. Because I did so, and because of time constraints, there are a few issues that I will address further below. 


Installation
------------

Run the following commands to start the server (on port 8080):

```sh
npm install
npm run dev
```

You will also need to run this in a separate tab (in order for the icons to load):

```sh
npm run watch
```

Refresh the page after doing so, and you'll be good to go.

Issues to keep in mind
----------------------

Namely due to time constraints and webpack issues, I attempted to implement the following but was not able to accomplish exactly what I had in mind:

* The goal was to implement autoprefixer for browser compatability, but I ran into some problems getting it set up correctly.
* I loaded the necessary font in `index.html` but was trying to do so through webpack
* JSON - I moved the copy into a JSON file, and I also did not use AJAX for the baby steps content. Because of webpack issues, I decided to import the content instead of spending a chunk of time coming up with a webpack workaround. 
* In order to ready the code for production, you would run `npm run build:prod` and change the `mode` from `development` to `production` in `webpack.config.js`.

Thank you for the opportunity to complete this exercise. I look forward to hearing from you soon. 
