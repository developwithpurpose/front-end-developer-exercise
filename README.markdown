Front-end Developer Exercise
============================

Copyright (c) 2014
 Lampo Licensing, LLC
 All rights reserved

Objective
---------

Build a single page that will provide information about the 7 baby steps.

Criteria
--------

There should be some transition that happens when navigating between the baby steps. You are free to come up with what this transition looks like.

The page should be functional and presentable in all modern browsers, as well as Internet Explorer 8+.

Resources
---------

The creative team has provided a mockup of what the finished product should look like located at `./resources/mockup.jpg`. See also the annotated mockup for more detailed information on fonts/measurements/etc.

For an example of a possible transition, see `./resources/transition-example.gif`.

All of the body copy can be found at `./resources/body-copy.txt`.

Assets
------

Any image you need can be found in the `./app/assets/images` directory. Some images have been sliced in multiple ways, so use whichever you feel make the most sense to use, or not at all if you feel you don't need too.

Please use jQuery if you decide you need a JavaScript framework.

If you use a preprocessor of any kind, include the source code as well as the compiled output.

Server
------

This package has a `Gruntfile.js` that you can use to serve up your application. You'll first need to install [Node.js](http://nodejs.org/). Once you have Node.js installed and have cloned this repo, then you can run the following commands to get the server up and open the landing webpage.

```
npm install
grunt connect
open http://localhost:9001/app/index.html
```

Dynamic Content
---------------

As a user I want to be encouraged by how many friends of mine are also going through the selected babystep. I don't need to see all my friends, just a summary of who are in the same babystep.

You should request the data from `./app/assets/javascript/baby-steps.json`, which includes a list of friend objects. Each object contains names and their babystep. Based on the data returned, you will need to show the following information to the user sorted by last name ascending.

The creative mockup shows an example of how this message should be displayed to the user.  `./resources/mockup.jpg`.

### Message Logic

* if 0 friends, then don't show any message
* if 1 friend, then show "Paul Taylor is also in Baby Step 2"
* if 2 friends, then show "Thomas Harris and Sharon Thomas are also in Baby Step 3"
* if 3 friends,
    then show "Deborah Lee, Shirley Perez, and 1 other friend are also in Baby Step 4"
* if 4 or more friends,
    then show "Patricia Allen, Matthew Garcia, and 2 other friends are also in Baby Step 5"
