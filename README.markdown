Front-end Developer Exercise
============================

Copyright © 2014 Lampo Licensing, LLC. All rights reserved.

Objective
---------

Build a web page that will provide information about The 7 Baby Steps.

Requirements
------------

* Fork this repository and submit your finished work as a pull request.
* Your submission should look like the provided mockup.
* There should be an animation when navigating between the baby steps. You are free to come up with what this transition looks like (and an example has been provided).
* The "Dynamic Content" user story included at the end of this README should be completed as a part of your submission.
* Treat your final deliverable as if it were going to be deployed to production.
* Instead of code comments, please document your submission by creating a README in the `./app/` directory. Feel free to include anything in it that you think might be helpful in evaluating your work.
* If you use a preprocessor or some kind of build tool, include the source code as well as the compiled output.

Success Criteria
----------------

* The markup should be semantic and accessible.
* The page should be presentable in all modern browsers as well as IE 9+, though not necessarily visually identical across the board. Please document intentional deviations.
* You should __not__ create a mobile/responsive version, as we will not be giving any credit for it.
* The page should be usable without JavaScript, though not necessarily functionally identical (e.g. the Dynamic Content user story requires JavaScript). Please document intentional deviations.
* You should __not__ use a single-page application framework (e.g. Angular, Ember, React), though you can use any other libraries that you need (e.g. jQuery, Lodash, etc.).

Resources
---------

The visual design team has provided several deliverables to help with construction of the page:
* a mockup of what the finished product should look like: `./resources/mockup.jpg`
* an annotated mockup for more detailed information on fonts/measurements/etc: `./resources/annotated-mockup.jpg`.
* an example of a possible transition for the navigation menu: `./resources/transition-example.gif`.

All of the copy can be found at `./resources/body-copy.txt`.

Any image you need can be found in the `./app/assets/images` directory. Some images have been sliced in multiple ways, so use whichever you feel make the most sense to use, or not at all if you feel you don't need to.

Server
------

This package is configured with a basic web server. You'll first need to install [Node.js](http://nodejs.org/). Once you have Node.js installed and have cloned this repo, then you can run the following commands to start the server (on port 8080 by default).

```sh
npm install
npm start
```

You should see "The server is running!" when you visit http://localhost:8080. Use CTRL-C to stop the server when you are done.

Feel free to add any additional build infrastructure that you would like, as long as the page is still accessible by running `npm start`. Tests and linters, for example, are welcomed (but not required).

Dynamic Content
---------------

As a user I want to be encouraged by how many friends of mine are also going through the selected baby step. I don't need to see all my friends; just a summary of who is in the same baby step.

You should make an AJAX request for the data from `/app/baby-steps.json`, which includes a list of friend objects. Each object contains names and their baby step. Based on the data returned, you will need to show the following information to the user, sorted by last name ascending.

### Message Logic

* if 0 friends, then don't show any message
* if 1 friend, then show "Paul Taylor is also in Baby Step 2"
* if 2 friends, then show "Thomas Harris and Sharon Thomas are also in Baby Step 3"
* if 3 friends, then show "Deborah Lee, Shirley Perez, and 1 other friend are also in Baby Step 4"
* if 4 or more friends, then show "Patricia Allen, Matthew Garcia, and 2 other friends are also in Baby Step 5"

Consult the mockups about where to put this information and how to style it.
