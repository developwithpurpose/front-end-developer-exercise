## Readme

### Scss

My preference for styles is scss, so that is what I used here. Here are details on the setup:

* I used the Ruby compiler because I find it a little quicker to setup. I used a Gemfile to specify version numbers of all gems and compiled by running compass watch through bundler, like  `bundle exec compass watch`. If you have ruby and bundler installed, running `bundle install` to install dependencies from the Gemfile should be all that is needed to get setup to run the Sass. The config.rb is used to specify folder locations for the sass setup.
* I find bourbon to be a great utility library, so it is included as well. I started from their scaffolded project for the sass. The general structure is:
```
  / sass
    /base
	  - scaffolded includes from bourbon
	/ modules
	  - I generally put all modules here. In this case, I put all styles in a single "layout.scss" file.
	main.scss - starting point for the sass. Includes all other files.
```

* As a general note, I try to avoid unnecessary nesting in Sass, but appreciate having things visually tabbed to indicate that they are children of other elements. That is the purpose of the tabbing method.
* I also use the following pretty heavily to avoid nesting. It gives the visual connection that you get when nesting things, but without the bloat in compiled css.
```
  .sidebar {
	position: relative;
	...

	&-active-background {
	  position: absolute;
	  ...
	}
  }
```


### JavaScript

* I included jquery throughout.
* The main app logic is in an `app` variable, which is an IIFE that exposes an init function. The init is called from the bottom of the page in an inline script tag. I prefer this method to calling app.init at the very bottom of the main.js, but either would certainly work well.
* If I don't have a build system in place, I generally include all plugins in a `plugins.js` file. In this case it only has jquery, but that is where I would add any other outside libraries.


### Images

I am aware that using the sprite sheets would be a little better for performance, but due to the time constraint I chose to use the individual images with the intention of going back and using the sprites if I had time. I didn't have time to revisit, so it is using individual images. For solid color icons such as these, I would generally use font icons from something like icomoon because of the ease of styling and the fact that they stay sharp at any size.

### No JavaScript

If the site is viewed with javascript turned off, all baby steps are shown with no side-menu items marked as active. You can still click the menu items to jump to each baby step. This No JavaScript functionality is done by starting with a `no-js` class on the html element, and swapping it for a `js` class using a small script in the head tag. This allow for style changes when JavaScript is not present.

### Animation

I really liked the side menu animation and was able to implement that, but ran short on time for implementing a more complex animation in the main content. My view of animations like these is that they would definitely come after the main functionality and content. I left the somewhat complex main animation for last, and went with a simple fade due to time constraints.

### Browsers differences

The only difference that I am aware of in older browsers is with the side menu in IE9. I am using a CSS transition to slide the white bar between menu items, and transition are not supported in IE9 so the bar jump immediately. Additionally the gradient in the menu falls back to a simple light gray in IE9.
