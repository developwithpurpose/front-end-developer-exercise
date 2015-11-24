General:

The page was coded to spec using htmls/css/javascript. jQuery and jQuery UI are the only dependencies for the javascript version of the page. The fonts are also loaded via CDN (with one excpetion, noted below), but appropriate fallbacks are listed in the case of CDN unavailability. All work was done on Ubuntu 14.04 and checked on current versions of Chrome/Firefox/IE/Safari as well as IE 9. 


Since this is a relatively simple project which wont have the opportunity to grow out of hand I opted not to use any preprocessors, templating engines, or build systems. I prefer working in javascript/css (as opposed to something like coffeescript or sass) and I didn't want to complicate the build when the project wouldn't last long enough to see much of the benefit.


The index.html file should be pretty straight forward (I hope), if a little lengthy. I used id attributes on elements I needed to manipulate via javascript and tried to make all the attribute values descriptive of the element and its purpose. I'm a fan of verbose variable names for the sake of readability. I've left in my notes (below) about the javascript-free functionality and why I implemented it in the way I did.


The main.css file is organized (with few exceptions) by element in order of appearance in index.html. Again, this is hopefully straight forward. This is a good place to point out that Helvetica isn't available via CDN (for free, anyhow) and it's not a standard font on windows/linux machines. All the font-family declarations should have a fallback that will at least make sure the system displays a sans-serif font. I also had to ignore the annotation on the mocks where it said the line-height should be 20px for a 30px font in teh Baby Step headlines. The headlines were running all over the subheadlines and it matched the mocks when I changed it up to 30px. I've left my notes about intentional deviations at the bottom of the document.


The main.js file has three main sections; state setup/instantiation, the event listener, and method declarations. The state setup contains all the top level variable declarations, the ajax call to fetch data and any operations on the DOM required to set up the page. Variables that begin with '$' contain jQuery DOM objects. The event listener is the click action for the navbar. This contains all the logic for state transition. The method declarations are for the methods requird to parse the ajax data for display on the page.


Bonus Features:

- These are the items I would have liked to complete if I wasn't so swamped with other work
- Implement sprite based images to utilize the provided sprites
- Refactor to remove the javascript libraries
- Refactor javascript to encapsulate the appropriate methods into the classes and objects.
- TESTS!

Static application (javascript-free fallback):

- Option 1:
  - Duplicate the page and link between pages to preserve visual style for active section.
  - Pros: Maintains visual consistency.
  - Cons: Lots of duplication, more page loads.
- Option 2:
  - Use single page layout with bookmark anchors.
  - Pros: DRY-er, fewer page loads.
  - Cons: Introduces visual inconsistency.
- Opted for Option 2.
  - Systems that don't have javascript don't need extra page loads, DRY-er is (almost) always better.

Intentional deviations:

- Line height on the Baby Step headlines in the body (.contentHeadline): annotation requests 20px line height, had to use 30px to match mocks
- Helvetica not available by CDN, so availability is subject to installation on OS (it's not a standard font on Linux/Windows). Sans-serif fallbacks defined in css.
