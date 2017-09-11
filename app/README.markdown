## My Approach

I started by adding some scripts to package.json to help with development. I added build and watch scripts for js and css to handle minification and allow me to use Sass. I also added a dev script that runs the server concurrently with the two watch scripts for easy refreshes in the browser to see changes as I worked.

I then tackled the markup making sure to use HTML 5 semantic tags.  I used hidden radio buttons and their labels for the navigation to meet the requirement for this to run in browsers without JS enabled.

Once I had the navigation working, I moved on to styling. I used Sass for loops to keep it DRY.

From there I finished up with a jquery ajax call to implement the friends functionality.

## Given More Time I Would...

* Spend more time tweaking the nav gradient and animation. I'm not quite sure it's pixel perfect.
* I'd want to talk with design about a few discrepencies between the mockup and requirements. For instance, the friends message provided in the message logic section doesn't match the message in the mockup. I'd also request a new sprite image for the large icons. The one provided doesn't divide evenly.
* I'd spend extra effort making the friend functionality into a library that could be used in other apps.
* I'd also advocate for the importance of making this responsive.
* Additional code cleanup. I'd make use of Sass variables where possible.
