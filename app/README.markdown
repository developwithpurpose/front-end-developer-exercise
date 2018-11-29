# Frontend Submission

In this document, I'll be describing some design decisions I made during this process.

## Tools Used

I decided to use the following tools to complete this project:

- HTML5 + CSS3
- JavaScript (ES5) + jQuery

## The Approach

Both HTML5 and CSS3 have broad cross-browser support these days, so that's what I decided to use. I also made sure to run the CSS code through an Autoprefixer (PostCSS) to maximize cross-browser compatibility.

Running the code through PostCSS is something I usually do in a build step with a tool such as Webpack. I avoided, however, bringing those tools into this project to keep things simple. Ah -- and speaking of tools I didn't get to use, I must admit I missed working with a CSS preprocessor such as Sass. But again, for the sake of simplicity, I left it out as well.

### About semantic markup and technical decisions

I also ran the code through a few automated accessibility auditing tools. Those are always helpful to make sure we're not robbing users who require extra assistance from having a fantastic experience.

My main concern about accessibility in a project like this is its dynamic nature (such as dynamically navigating through the Baby Steps). If we were in an SPA environment (or even an entirely server-side rendered web page), then screen readers would know to parse the new content once our URLs change. When we don't, however, have a formal indication that the page was updated, things get trickier for screen readers to do their job correctly and help visually impaired users to take full advantage of our app.

To address this concern, I also opted to keep things simple. The page is fully operational without CSS or JavaScript running. I am using URL hash-links to navigate through the different portions of the content. Using hash-links to jump through content is a feature that has been available in web browsers for several decades, so I thought that was a safe choice.


### CSS Decisions

Within the CSS, I decided to use a style for naming classes that resembles the BEM architecture. I use the word resembles very loosely here as it doesn't include the long class names BEM often requires. Semantical component hierarchy, however, was still kept on top of mind, while keeping the naming of elements straightforward (e.g., `.babysteps`, and `.babysteps-content`).

I also tried to resemble the feel of using Bootstrap 4, by including a few utility classes. I like utility classes because they make it easy to customize the styling of one-off elements without having to create a whole new rule to avoid collision with similar elements.

### Le JavaScripts

I kept all of the JavaScript code compliant with ES5 standards so that it would run well in older browsers such as IE9. I also ran the code through a linter, to make sure I didn't miss any semicolons or polyfills that would have prevented the page from running for some users in a real-life app. For production apps, I use automated tools in a build step and a CI environment to assist me with this type of mundane tasks, so I'm able to focus on delivering a fantastic experience to our final users and let computers do what computers do best -- repetitive tasks.

That said, this experience made me realize how far we have come with our tooling and even the evolution of the JavaScript language itself. ES2015+ makes me a more productive engineer, which is fun to acknowledge now looking in hindsight and thinking of how much I hesitated before adopting it for most of my projects.

jQuery, by the way, is a life saver. I thought for a little bit about not using it at all and just relying on some `document.querySelector()` calls to get the work done. I probably could have done that, but adopting jQuery made me move a lot faster without having to worry about browser compatibility or polyfills.

### Code Organization

I tried my best to organize my code in a way that was easy to understand. In other circumstances, I would have separated some of those function calls into separate files and would have also further divided the maintenance of application state and data handling from tasks that have to do with updating the view.

The way I usually approach these things, even when the tools aren't available, is I try my best to imagine I was unit-testing my code. I have found that writing tests tend to make some necessary abstractions more obvious. One example of that in this project was when I had to sort the list of friends by their last names. It would have been easy to do it inline where the XHR call was made and not think much of it. But then I thought "what if I were writing this in TDD fashion?". If that were the case, I would have wanted to write a test for the friends sorting functionality in isolation so that we can test that feature independently of others. This was how I concluded that it needed to be in its own function that did one job, and one job only.

## Compromises

Even though I tried my best to maximize cross-browser compatibility, there were a few places where I intentionally made it so that the experience was a little more geared towards modern browsers. Once particular place where that happened were the animations of the Baby Step links on the left menu.

You see, I've been taking advantage of this little trick lately where you use box-shadows instead of background-colors for hover and/or active states. Box-shadows are cool because they're easy to do simple animations with using CSS transitions (you can see some examples on my personal website, try hovering any underlined links on https://sergio.io). The trick itself worked well in all of the browsers -- you can't tell we're using a `box-shadow` to change the color of the background instead of the `background-color` property just by looking at it. What didn't work in IE9 specifically was the button animation when the app state updates from one Baby Step to another. The content itself animates perfectly as it relies on jQuery to scroll between elements.

## Browser Support

I used BrowserStack to test this app on the following browsers:

- Chrome (latest)
- Firefox (latest)
- Safari (latest, _PS: I swear Safari is the "new internet explorer," I wouldn't be surprised if there were older versions of Safari that I didn't get to test_)
- Internet Explorer (v. 9+)
- Microsoft Edge (latest)

## Feedback

Got any feedback? Please feel free to reach out to me about them. I'd love a chance to make things right if there was anything I missed.

## Thank you

Thanks for your time in reading this and reviewing the code!
