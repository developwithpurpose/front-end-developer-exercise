# Mitchell Irvin's Front-End Dev Test

### Initial Game Plan
Use Bootstrap CSS to design the layout for the html template. This will just involve implementing the divs for the entire layout, plus any grid/layout styling.
Begin by populating the generic background colors/sizes for each div in the grid, then work on the header background image and text.
Once the header has been finished, work on the basic styling of the side nav, including the text/icons.

After the basic styling is finished, implement a solution for the navigation functionality. Tentatively, I'm thinking I'll just assign IDs to each baby step's description page, and use
anchor tags in the navigation menu to call those IDs. Then it'll just be styling the :target attribute of each ID to hide/show each baby step when appropriate. I'll probably use jQuery's
addClass() and removeClass() to change styling dynamically.

Once the navigation menu is fully functional, I'll populate each baby step's content, and style it. This should be straightforward.

The last step will be to add to a script some sort of onload function, that will make the AJAX call for us. Then we can use that data to finish up the project,
populating each step's content with the people that are currently on that step. 
