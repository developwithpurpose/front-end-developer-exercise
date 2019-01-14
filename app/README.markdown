The 7 Baby Steps submission by Phillip Reel
============================

Source Code
---------
All source code for the application is in the _/app/_ folder. The compiled production code exists in the _/dist/_ folder.


Webpack / SCSS
---------
I decided to use webpack for compiling so that I could use SCSS and it would minify any JS down for me. This helps meet the requirement for production ready code.


Commands
---------
- "npm run develop", this will build the development version using webpack and monitor file changes
- "npm run prod", this will build the production version using webpack


Drop Shadows
---------
I decided to implement a CSS fade drop shadow on the main frame instead of opting for the drop shadow images. I checked to make sure it was compatible with IE 9+ first. This eliminated a hand full of image requests the browser would have had to make. The CSS drop shadows look as close as I could tell to the image versions. May need some feedback from the designer if they are slightly off.


Icons
---------
I chose to work with the icon sprites for better load times on the website. I removed all the unused images/icons from the folder structure to keep the folders clean.

When working with the large icon sprite file (icons_large.png) I noticed that the last two blue icons were overlapping slightly and I was not going to get a good split on those two icons. So I edited the PSD to generate a new version of the large icon sprite.


Fonts
---------
I'm loading two of the three required fonts from the public Google Fonts repository. The code only pulls down the necessary versions of those particular font files.

The Helvetica font is a copyrighted font and must be paid for. So I placed the code in there, but it will fall back to sans-serif font because I did not pay for it.


No Javascript Version
---------
The page loads when javascript is disabled. The only drawback I hit with using webpack was that the CSS is bundled into the JS file, which causes the styling to not load. So it just loads a basic webpage that shows all the steps at once. If I were to spend more time on it, I would look at solutions that splits out the CSS into it's own file rather than pulling it all into the JS file.