# Mitchell Irvin's Front-End Dev Test

### Initial Game Plan
Use Bootstrap CSS to design the layout for the html template. This will just involve implementing the divs for the entire layout, plus any grid/layout styling.
Begin by populating the generic background colors/sizes for each div in the grid, then work on the header background image and text.
Once the header has been finished, work on the basic styling of the side nav, including the text/icons.

After the basic styling is finished, implement a solution for the navigation functionality. Tentatively, I'm thinking I'll just assign IDs to each baby step's description page, and use
anchor tags in the navigation menu to call those IDs. Then it'll just be styling the :target attribute of each ID to hide/show each baby step when appropriate. I'll probably use jQuery's
addClass() and removeClass() to change styling dynamically. I'm not sure how I want to implement a transition yet.

Once the navigation menu is fully functional, I'll populate each baby step's content, and style it. This should be straightforward.

The last step will be to add to a script some sort of onload function, that will make the AJAX call for us. Then we can use that data to finish up the project,
populating each step's content with the people that are currently on that step.

### Explanation of some design decisions
I decided to use Bootstrap CSS because it's time saver in terms of writing custom CSS for the grid/layout part of the page. I want to use my time efficiently,
and libraries are great for that. Speaking of, I decided to use jQuery instead of vanilla Javascript because it's got some nice functions (addClass(), etc.) that
will save time writing custom JS to add event listeners, apply styles, etc. Using these two libraries allows me to focus on the design and solution, while minimizing the
grunt work involved with building web pages. 
