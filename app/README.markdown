## Thanks!
Thank you for the opportunity! I enjoyed working through this code challenge and I'm looking forward to talking about it a bit more. Until then, I've added steps for installation along with my thought process.

### Installation
This project uses Webpack to compile javascript and scss. Within the project, run:

```
npm install
npm run dev
```

This will start a development server on port `8080`. You can visit the page by navigating to `http://localhost:8080/` in your browser. On page load, a baby step has not been chosen. Select a step to start!

### Process
* Tackled the 'Dynamic Content' section first for a (quick) win using javascript
* Used pure CSS to show/hide text
* Pulled in normalize.css
* Used flexbox to create page layout
* Converted css over to scss
* Compile via Webpack

#### Stretch... 💪
* I used `fetch` to pull in the json data. I'm aware that this would need a polyfill for IE.
* I've used CSS frameworks (Bootstrap & Bulma) for the last two years. I decided to not use a CSS framework so I could dive deeper into flexbox.
* I used CSS gradients and shadows.
* Scss uses a minimal version of the 7-1 pattern to help keep me organized!
* This was my first attempt at image sprites! I was able to get the images aligned in the navigation area.
* BEM - Also a first attempt. It's been on my learning wishlist for awhile. My current company doesn't use it and I'd love to know more about it or other naming standards

#### Remaining work / Known issues
* Heading images - For the headers, I would just use the icons in the sprite instead of using the entire image for heading.
* CSS transitions
* Webpack (New territory) - Config to output the scss files to a single CSS file.
* Use variables for colors and pull for a variable or theme file
* Bug: Moving the mouse in a circle around the navigation icon doesn't cause the hover effect
* Browser testing
