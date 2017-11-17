Hey all,

Thanks for giving me the opportunity to take a stab at the front-end challenge. I tried to focus most of my time on demonstrating knowledge of the front-end stack at large, such as utilizing polyfills, vanilla DOM/XHR API usage (no jQuery), build tooling (e.g. babel, webpack, and Sass).

As much as I wanted to continue to improve things, I made sure to honor the 4 hour time restriction.

## Things to Note
* The application is fully functional with JavaScript disabled. You don't get step transitions, but each navigation item appends a query string to the current URL denoting which step should be active. The express server (+ jade template) is responsible for setting the active class on the correct section. When JavaScript is enabled, the default behavior is hijacked and a client-side transition is used instead.
* Webpack is used to bundle the JavaScript, mainly for its support for hot reloading and CSS/JS bundling. I utilized Babel to transpile modern ES2015+ features down into ES3-compatible code, and added general polyfills even though they are a bit overkill for a simple project. Given more time, these would be more selectively chosen to cut down on the size of the deliverable.
* I utilized the sprites for the step icons. In a real-world application I would use Sass tooling to automatically generate spritesheets for a collection of images, since this handles calculating the background offsets for you. I didn't want to sink much more time into tooling than I already had, so most of the offset calculations were just done by hand.
* Sass organization could be improved. After my initial styling pass against the mockups, I noticed various reused color codes that I didn't have time to refactor into variables.
* I added a max-width to the body (and centered it), solely because the project specifically requested that no responsive work be done. This is something I'd almost never do in a production application, but did simply to make the page look better with the exact pixel specifications defined in the mockup.

## Live Development

The traditional `npm start` command works as expected, and will spin up an express server which runs webpack with HMR enabled. I didn't bother to write acceptance handlers for the JavaScript, so traditional page reloads are required after a change, but any changes to sass are hot swapped in the browser. JS and CSS are served from memory during development, which shortens the feedback loop since asset changes don't have to be written to disk each time they are changed.

## Deploying for Production

There are various ways to deploy this application for production, but the one I decided to demo was simply serving the website over the same express server used for development, but with all development middleware disabled. What this means is that all JS/CSS needs to be compiled to `/app/asses/dist` before running the server, and this is automatically handled for you in the `start:prod` task (i.e. `npm run start:prod`).

## Thanks

I'm officially out of time, and wish I could have spent more of that documenting the project for you here. Thanks again, and I'd be happy to answer any questions or discuss my decisions further.
