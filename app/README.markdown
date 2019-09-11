# Front-end Developer Exercise Submission

## HTML

I began the exercise by first examining the mockup provided, along with the annotated version, to determine the markup I should use to build the layout of the page. Once I had the basic framework laid out I worked on each section, one at a time.

### Header

For the header, I chose to use the banner image with the text embeded. This prevented the need to have the user download a second font that would only be used for the image. It also ensured that what the designer had created was what would be seen in the final product.

### Side Navigation

I chose to use the spritemap for the navigation icons as they are only for decoration and wouldn't need an alt tag; it would cut down on the number of files being served since I would be using both of the two color versions. For the links I opted to use `id` anchors for the links, as it would mean that the scroll container would still work if JavaScript was disabled and I could still display only one section at a time.

### Body Content

My goal was to avoid using too many wrapper boxes and stick to using as much semantic markup as possible. I decided to break the steps into `<section>` tags and to not provide alt text since the images were just for presentation. For the social encouragement, I chose to provide the markup hidden so any margin or padding on the `<p>` tag wouldn't affect the page.

### Panels

In order to ensure the panels were all evenly spaced and equal in height I set an explicit height property on the `.panel` class and the scroll container. If given more time, this is something I would go back and fix as I recognize that it doesn't take into account sections that could contain content that reaches beyond the height of the container. One approach could be to use JavaScript to dynamically set the height of the panels and scroll container based on the panel with the most height. Other approaches, whether CSS or JS based, would most likely require replacing the animation effect in a completly different way.

## CSS

I chose not to use a CSS framework like Bootstrap, Foundation, or Bulma because I felt it would add unnecessary weight for what I needed. I considered using Sass with scss files, but again decided that with the short time constraint and small project size it wasn't really needed in this scenario. I used a few CSS comments for my own sake to mark the various groupings of styles and I tried to keep my selectors as minimal and flat as possible.

## JavaScript

I focused on the JavaScript related tasks in three parts:

1. Fetching and displaying the JSON data for the Social Encouragement
2. Creating the animation for the active navigation
3. Creating the animation for the panel section scroll

Because one of the requirements for the project was to support Internet Explorer 9, I decided to use jQuery as it would allow me to focus on accomplishing the tasks without worrying about needing to add polyfills or using sometimes messy, and potentially confusing, legacy-safe native methods. E.g. `Element.parentNode.parentNode.setAttribute('class', 'some-class');`

### Social Encouragement

#### getEncouragementData()

The first thing I do is capture the "magic number" as a constant for clarity's sake. Even though we only use it once it prevents any confusion as to why **`7`** was chosen. Another benefit to using jQuery is the ease it provided for fetching the JSON data using `$.ajax()`. That being said, right now, if the fetch fails, nothing breaks but I would go back and add a `.fail()` callback so that the 404 error is caught instead of showing up in the console. Something else I would like to fix is adding a check for when the data comes back to make sure that it actually has the `friends` property and isn't `undefined`.

For each baby step I filter out a new array of only the people on the current baby step, sort that array by last name and then pass the array along with it's respective jQuery wrapped DOM node to the `buildEncouragementHtml` function.

#### buildEncouragementHtml()

Admittedly, this is function is messier then I would like it to be and it could certainly be better optimized. I would have prefered to use template literals to handle creating the markup string but again, I wanted to avoid adding polyfills for older browsers.

From the top I'm capturing the array passed in into a new variable to avoid mutating the original array, then creating some constants for the "magic numbers" that are used throughout the function. We're only ever displaying two actual names, then adding the remaining number of people to the "and _n_ other(s)..." part of the string so `MAX_FRIENDS_TO_DISPLAY` is set to `2`. I use that to determine the `n` remaining friends we'll display later on.

If the array is empty (`FRIENDS_LENGTH === 0`) then I want to leave the function before going through anymore steps. Using `friendTemplate()`, I build an array of friend links (that would most likely lead to their respective profiles) and then, depending on the amount of total friends, use `Array.slice()` and `Array.join()` to add those friends to the HTML string. Lastly, I use a few more checks to add the right being verb and the rest of the encouragement copy then set the html of the target Social Encouragement element in the DOM to the HTML string.

### Active Navigation Animation

#### animateNavHighlight()

For the active navigation highlight I'm moving using `$.animate()` to change the top property of the absolutely positioned div to match the Y position of the clicked nav-item.

### Panel Scroll Animation

#### animateVisiblePanel()

The panel container sits in a scroll container that hides any overflow content and uses \$.animate() to change the scroll position of the container to match the target panel we want to be visible. The formula for the `scrollTop` equates to: (the Y position of the top of the panel we want to be visible) - (the Y position of the top of the scroll container [essentially, where the scroll container sits in the visible window]) + (the current Y position of the scroll container).

So if panel we want to see is at 660, the position of the container is 340 in the window, and the scrollTop of the container is currently 0; then we want our container scrollTop to be: (660 - 340 + 0) = 320. So the animation we see is the scroll bar moving it's Y posigion from 0 to 320 in the container.

## No JavaScript

Because I used `id` links for the navigation items the page stays put but the scroll for the corresponding panel still takes place. So the biggest difference that exists with JavaScript disabled, aside from the social encouragements never being fetched and displayed, is that the scroll is instant instead of smoothly animated. One other difference is that the active item in the side navigation never changes.

## Supporting Internet Explorer

The last thing I added was support for Internet Explorer 9+. As I mentioned before, I used jQuery to handle the JavaScript side of IE support. Of the few flex properties I used they were supported in IE 10+ through vendor prefixes. For IE 9 I added an if check in the markup to add an `ie9` class to the body if IE 9 was discovered; using that class I opted to use floats to make the sidenav and body content to sit side-by-side. Visually the biggest difference is the `.panel-headlines` and `.panel-icon` as they are being aligned through `vertical-align` as opposed to flex's `align-items`. I borrowed the `.clearfix` utility class from Bootstrap to ensure that the main container still filled out the proper amount of space on the page.
