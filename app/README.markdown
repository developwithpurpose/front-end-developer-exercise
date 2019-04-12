Front-end Developer Exercise
============================

Overview
--------
- I tried to keep everything as dynamic as possible.
- The goal was to keep functions small and easy to maintain. Each function only having one obvious job.
- All logic handling the dynamic friends content is found in `friends.js`, all other logic is found in `main.js`.
- I chose to only make an AJAX call once on page load, then store the data in local storage. I chose to do this because in a 'real world' scenario I would't want to make a new AJAX call to a database each time a user clicked on a step. My thought process being that the status of the user's 'friends' would not update so quickly that we would need retrieve updated data from the database every time the user clicked on step.
- When javaScript is used the page becomes dynamic, only showing the desired Baby Step on each click. When the page is used without javaScript all steps should appear in a list.

Libraries Used
--------------
- Babel
- EsLint
- jQuery
- Lodash
- SASS
- Webpack - I know Webpack is overkill for a project of this size. However, I wanted to use Babel to handle the browser requirements, and SASS to style, and I knew webpack would allow me to achieve this as well as handle all bundling, so I chose to go with it. It was a fun challenge to get webpack configured. 

Challenges
----------
- When I initially began styling the page I didn't think entirely through the impact that removing javascript would have on everything. I was adding classes dynamically and styling with that in mind, then when I commented out my javascript the page was not what I wanted. I was required to rethink the styling process.
- My only intentional deviation was using flex. I know that isn't supported IE 9. Originally I was using floats to stay in line with the requirements, however, once I commented out my JS and realized the site needed to be styled more dynamically (to work with or without JS), the floats began causing problems.

Thanks so much!
