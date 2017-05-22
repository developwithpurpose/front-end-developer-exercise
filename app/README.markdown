Good morning Dave Ramsey Solutions Technology Team!

I very much enjoyed working on your frontend assessment. I am looking forward to discussing future employment opportunities with your company. In an attempt to stick with the request to work ~four hours on this assessment only, the following outcomes were completed for your review:

## Installation and Startup

* Install and use the latest version of nodejs 7.10.0

* Within the project root terminal, run the following commands:
    * **npm install -g yarn**
    * **yarn install**


* Start the production server
    * **npm start -- serve**


* Start the development server (changes are automatically displayed back to the developer)
    * **npm start**


* The .env file specifies the port for the server to use, currently set at 9000

## Requirements

* *Your submission should look like the provided mockup.*
    * I did not fully style everything and I didn’t put in the graphic icons


* *There should be an animation when navigating between the baby steps.*
    * I did not work on making the side navigation swing from step 7 back to step 1


*  *The "Dynamic Content" user story...*
    * Did did not complete this with the "sorting and limiting it to only two persons"


* *Treat your final deliverable as if it were going to be deployed to production.*
    * I did not complete any unit tests. This should be required in my opinion if it were to be a production release

    * I did setup a build for production that deploys a "dist" folder and a Procfile if you were to deploy to Heroku

    * To build the production and start the production server: **npm run prod**


* If you use a preprocessor or some kind of build tool:
    * I used webpack and babel, the are included in the project

## Success Criteria

* *The markup should be semantic and accessible.*
    * I used various linters and .editorconfig


* The page should be presentable in all modern browsers as well as IE 9+
    * I used a .babelconfig file that should allow support for IE9

    * If I had time, I would have tested in Browserstack (I have an account with them)


* *The page should be usable without JavaScript, though not necessarily functionally identical*
    * With more time, I would have tested in Browserstack


* Do not create mobile responsive and do not use a framework
    * Just an FYI to the team, I am actually very motivated in working within modern frameworks. I currently work with Polymer and Aurelia for my personal projects. I believe that mobile responsiveness is also a key feature for any modern web application.
