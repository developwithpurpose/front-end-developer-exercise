I used some HTML and CSS which I have developed as a base for starting new sites. Since this test is only one simple page, I actually simplified these accordingly. I have used Normalize as a way to bring cross browser consistency to default styles. Default.css is a sheet I developed with some base styles and utility classes.

I chose to use a box-shadow on the main content-area instead of the images. I prefer to do shadows via CSS when possible because they reduce the page size and therefore load time, and are also simpler to work with.

There are a couple of weakness in the design in my opinion. First is the vertical line between the left hand navigation and the right hand content. I attempt to avoid setting specific heights and widths as much as possible because it goes against the inherent flexibility of HTML and can lead to problems updating content, etc. I prefer to allow heights to be flexible, but having multiple blocks next to one another creates problems. In other cases, I've created 2 sidebars, floating one in order to hold the space on the page, and the other absolutely positioned in order to get the full height. In this case however, I only have the one absolutely positioned and place a height rule on the container in order to solve the problem.

The second design weakness is in the different font weights for the active and inactive nav items. This causes the text to change size slightly.

I chose to set up a fade transition for the animation. I used jQuery in order to speed this development. The instructions state that the page should be usable without JavaScript. Since it is designed as a single page web app, this would require some adjustment. It might be possible to get a similar effect with CSS animations. In the short amount of time however, I merely added a CSS rule which should reveal all the content in case JavaScript is turn off. This isn't an elegant solution, but was a quick fix.

I recognize this test only covers front-end development and not back end which I am also able to do. If I had more time, I'd probably tweak a few things. However, I reached the four hour time limit and concluded my work.
