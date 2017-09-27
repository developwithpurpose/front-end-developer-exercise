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
However, I was having some trouble getting the side nav bar and main content link together, so I ended up using a little bit of bootstrap to get them working. 

### JS
I was starting to run out of some time, so I didnt get to the active friends user story at the bottom. 
However I will still be working on this and will submit another PR once all is complete. 






Thank you for your time and consideration.
