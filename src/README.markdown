Front-end Developer Exercise
============================

Created by Jonathan Melin

Description
-----------

I took much more of a modular and dynamic JavaScript approach to this code challenge than what may have been intended or required. Therefore, the page I developed is virtually useless without JS. I wanted to demonstrate my abilities by approaching the challenge with as many modern tools as I could. Since the whole front-end world is moving to JavaScript frameworks, I tackled the challenge in a way that is much more reminiscent of React, for example, instead of, say, jQuery or some other library. While still written in vanilla JS, it looks and feels more React-like, if that makes sense. 

Having said all that, I used webpack for this project. Because I did so, and because of time constraints, there are a few issues that I will address further below.

Installation
------------

As expected, install the dependencies and start the dev server (on port 8080):

```sh
npm install
npm start
```

Code Explanation
----------------

* The navigation and main content of the page are both generated dynamically in `nav.js` and `mainContent.js`, respectively. 
* The content from `body-copy.txt` (now stored in `content.js`) and the friends content from `baby-stesp.json` are imported from their JSON files.

**nav.js**

First, the HTML is generated, and the first element is made active. Next, each navigation item gets a click listener. Upon clicking an item, active classes are toggled on and off the appropriate elements, including switching icons from gray to blue and vice versa. Finally, each corresponding section in the main content gets toggled to be active/inactive based upon selection.

**mainContent.js**

Similarly to `nav.js`, the HTML for the main content section is generated and the first baby step is made active. Additionally, the friends content is created for each baby step. First, an array of friends is created for each content piece. Then their names are alphabetized by last name (and by first name in the case of the two Lopez names in baby step 6). Finally, the appropriate copy is created based upon how many names are in the array. 

Issues to keep in mind
----------------------

Namely due to time constraints and webpack issues, I attempted to implement the following but was not able to accomplish exactly what I had in mind:

* The goal was to implement autoprefixer for browser compatability, but I ran into some problems getting it set up correctly.
* I loaded the necessary font in `index.html` but was trying to do so through webpack
* JSON & AJAX - I moved the copy into a JSON file, and I also did not use AJAX for the baby steps content. Because of webpack issues, I decided to import the content instead of spending a significant chunk of time coming up with a webpack workaround for the local JSON file. 
* In order to ready the code for production, you would run `npm run build:prod` and change the `mode` from `development` to `production` in `webpack.config.js`. You will see that in my repo, the `dist` folder already has the code bundled, minified, etc. 

_Thank you for the opportunity to complete this exercise. I look forward to hearing from you soon._
