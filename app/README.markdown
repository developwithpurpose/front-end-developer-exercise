BJ Clark Submission
5/10/18

Thank you very much for this opportunity! Here are a couple of notes on my work:

- I added a feature to this, that has been useful for similar projects I have worked on. When the url is given with a baby step in the url (such as http://127.0.0.1:8080/#baby-step-5), then the page will do the same transition as if you clicked on baby step 5. This is great when you want to link to a specific step somewhere.
- I made use of sprites and CSS instead of images when possible (thanks for providing the sprites), to reduce network load.
- I tried to focus on limiting the use of JavaScript to only when necessary. This made fallback simple if there is no javascript, there's no need for any `noscript` code, it simply shows all baby steps and the navigation acts as anchor links between the baby steps.
- I uglified and minified my JavaScript and CSS file; while the files are so small it probably doesn't make a difference, I wanted to show that I make those kinds of considerations when doing front-end development
- I did use jQuery for ease-of-use. I added it using a CDN, as this is best practice to make use of edge-optimization and browser caching.
- The ajax call to the JSON file only makes the call onload, if I had more time, I would ponder whether we want it to be more real-time, such as getting the data whenever a new tab is click. Obviously using a REST api that queries the data for you would make more sense here, so you're not getting the whole JSON file (in case it contains millions of records).
- One thing I would consider is turning the icons into a font, so that you can manipulate them with css (like font size or color), and you wouldn't need to load multiple sprites or do the calculus that displaying sprites properly seems to require sometimes :)