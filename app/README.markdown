## Thanks.

Thank you for letting me tackle this challenge, it was both fun and difficult to get everything in 4 hours.

## Getting it running
- `npm i && npm start`

## CSS
- I decided to go with CSS Variables because it helps a ton with colors especially.
- The reason you see color twice is to give the browser a fall back that doesnt suppose css vars.

## JS
- Stuck with just plain JS to get things going.
- (BUG): For some reason on page reload the tabs would not hide and stack. So in `index.js` you will see me clicking the first baby step right on page load.
- (BUG **maybe**): In testing I noticed that the blue animated line jumped all crazy like but clicking back through the buttons on the left fixed it. Not sure if its a bug or the page was just in an odd state. Have not been able to reproduce again.
- I ended up using a fetch library that had a polyfill for older browsers. You can find that here: [https://github.com/camsong/fetch-ie8](https://github.com/camsong/fetch-ie8)

## Older Browser support
- I ended up doing a quick refactor at the end because it was completely broken in IE 9. Found a solution that would work and for some reason it was still broken. Every other browser seems to be fine.

## NPM INSTALL
- When I ran `npm i` on intial cloning of the repo it prompted me to run `npm audit fix` thats where the package.json changes are from.

## WISH I HAD MORE TIME
- Making sure the page looked better when JS was disabled
- JS disabled testing
- Accessibility testing

## ISSUES
Below are some things that I noticed.
Running [axe extension](https://www.deque.com/axe/) it found color contrast issues. So instead of fixing those I made the decision to stick with the colors in the mock up. Other than that it is pretty solid accessibilty wise. I did do my testin with NVDA as I only have a windows computer right now. I was not able to test with VoiceOVer on MacOS.



![alt text](https://media.giphy.com/media/XreQmk7ETCak0/giphy.gif "Thumbs up gif")