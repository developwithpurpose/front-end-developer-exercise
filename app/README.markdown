Document your submission here (optional, but recommended)

# Overview 

Hello! Thank you for giving my this oppurtunity. I will display below my processes for everything. 

## Startup

1. To get started `cd` into `app/lib` and run `npm install` to install all required node modules you'll need. 
While still in `app/lib` run `grunt` to compile the JS and CSS needed

1. `cd` back into the `app` directory and run `hs` to start a local server and go to `http://localhost:8080/` in your browser to see the site hosted

### HTML
I opted for this section to keep all content on the index page. Since we are not using any SPA like frameworks, all copy is stored here and use helper classes like `.hidden`, `.active` and `.inactive` to show/hide content. 

### CSS
I am using SASS so I can keep colors and text as variables in the event that they might change later on. They compile down to plain CSS at build so there shouldnt be any browser interference. 

Typically for aligning things I would use CSS grid and flexbox, bun since we are shooting for optimal browser compatibility, I oped to used floats, since they are more widely supported. 

I also would typically use something like Bootstrap + front end framework for interaction and styling, but since there was already a predefined style guide (and it is harder to customize some predefined bootstrap styling) I wanted to hard code as much of the CSS as possible so I could stick to the style guide. 


### JS
For the switching of babysteps, each step and nav bar step have a number associated with them - the actual main copy for the step being an id and the nav bar li being a `data` attribute. 

When a list item is selected I create variables for each of the items that need to be made active and also a list of the current tags that are already active. 

I then switch the tags that are active to `inactive` or `hidden` with a simple `.addClasss`or `.removeClass` with jQuery.
This triggers the color changes and the animations to take place. The `currentStep` variable gets updated with the current step.

For the current friends on a step - this was a simple ajax call to get the list of friends. 
I created a function that runs on page load as well as each time a new step gets loaded that does a loop through the names on the list and if the step the friend is on matches the current step, they get added to an array of current friends.  

Displaying them on the page is a `switch` statement with the length of the current friends being the comparator. 
If there is one friend on a step, display message for one friend. If two friends, display two and so on. 






Thank you for your time and consideration.
I had a lot of fun working on this, even if it took a longet than I expected to pick jQuery back up again. 