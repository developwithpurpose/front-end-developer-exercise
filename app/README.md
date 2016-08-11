# Dynamic Content User Story

## Overview

I was tasked to build a web page that will provide information about The 7 Baby Steps. I first approached the project on paper, specifying the layout and block element structure. After this, I began to build out the SASS/CSS using BEM principles and would build the HTML based upon the style rules defined earlier.

Once the HTML was stubbed out with a "baby-steps" template, I saw a opportunity to use repeatable partials for baby steps, friends, and sidebar links. After adding the logic to the partials, I decided to build a content feeder for the JSON files provided. This is setup in the `config.rb` file and required an update the project gemset. While in the `config.rb` I updated the assets directory to resemble the structure of the `app` directory.

Once this was completed, I made another pass at the CSS to clean up the style and then moved onto coding JavaScript (JS). While planning the JavaScript, I knew I wanted to use jQuery and lodash to save time. I also wanted to use "es2015" tick templating for string interpolation, so I built out a webpack config.

I then setup the CommonJS requires and added functionality to meet the requirements of the project. I decided to leverage CSS transitions for the majority of animations with the exception of jQuery's scrollTo functionality, which allows the user to slide down to a particular baby step.

While developing this, I realized there would only need to be one AJAX call. I set the response to a variable `friends` and referenced this object once the AJAX request had completed successfully.

Once I was done with the JS, I wanted to add a way to show the friends dynamically using the Middleman templating system and have a static output of the friends on the step. So I used the same logic that was used to feed the content and mimicked the JS code with Ruby and threw the generated HTML into a `<noscript>` tag.

### Steps to build the project

1. In the terminal run `bundle install`.
2. Then run `webpack`.
3. After you run the previous step, `middleman build` or `middleman server` if you wish to view the project dynamically.
4. Once built, the project outputs to the `app` directory and mimics the file structure initially outlined in the project.
5. A tool such as MAMP, Passenger, or Anvil can be used to view the production ready build files locally as it uses relative pathing.
