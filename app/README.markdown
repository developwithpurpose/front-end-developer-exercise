# Front-End Application Project - Dave Ramsey

# Time: 3 hours 59 minutes

### Overview

I've built a rough mock-up based on the design provided working within the time constraint that was provided of 4 hours.  The application covers the 7 baby steps that Dave Ramsey discusses to help achieve financial freedom.

- - -


## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

1. Clone or Fork and then clone a copy of this repo onto your local machine with 'git clone < repo url >'
2. Download all dependancies with 'npm i'
3. In your console navigate to the root folder of the project and enter 'npm start' to launch the app.


### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:8080](http://localhost:8080) to view it in the browser.

The page will reload if you make edits.<br>


### Concept

My original design and concept for the site was to use a one-page approach using the React library framework as I am very familiar and comfortable with that design process.  However, noting the restriction to not do so I had to pivot on my idea.  I then was working on restructuing the base file lay to include a server file and public files to help parse the data and information.  However, upon doing so the start command would no longer function after much trial and error determined while something I would have liked to fixed I had spent too much time trying to fix the issue to restructure and started over.

I was going to use the materialize css library for the project however came to realize that materialize works much more efficiently with React and component-based projects.  I pivoted to using bootstrap for my design layout.

I separated the data into its own folder and created .js file to house the all of the baby step information.  I also created a few api routes and html routes but quickly came to realize that the connections would take greater time than I had left to create an effective and scalable layout.

Noting the time remaining I decided it was best to use my time to hard code the information in to ensure there was some sort of tangible product.  Given greater time I would go back and ensure the information is dynamic and scalable.

The baby-steps.json was supposed to be used in an AJAX call however, I was short on time and decided to hard code for the time being.

The css file for formating for unknown reasons isn't connecting properly and certain requests were not occuring.  Given more time I would dig to discover the root of the problem.

### Future Fixes
   1. Use the baby-steps.json in an ajax with logic to alphabetize by last name.
   2. Use the baby-steps.js file created to fill out the pages dynamically and save time on repeat processes.
   3. Determine root issue with the functionality and issues related to the .css files.
   4. Pivot project to React to allow better future forward design and remove excess files.
   5. Work on creating mobile-first design for web layout
   6. Ensure of design and product to allow for inclusive usage for people of ability levels.
   7. Pivot style library to materialize to allow for unique styling not currently accessible in bootstrap.
   8. Pre-plan layout.

### Created by

[Bryan Kelley](https://github.com/bryanrkelley)

**Thank you and I hope for positive news!**
