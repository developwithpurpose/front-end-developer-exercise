# 7 Baby Steps - Front End Exercise

## Javascript

The animation is written without any Javascript and works in all modern browsers and Internet Explorer except for IE9.

The only feature that requires javascript is the AJAX call to get the list of friends.

## Build/Preprocessor

I use a gulp wrapper called `elixir` as my build tool. It runs Browsersync while I work for auto page refresh, and compiles the javascript and sass files. The js and css files are also versioned and minified for production to allow for speedy deployment in the future.

The uncompressed assets are located in the `resources/js` and `resources/sass` directories.

## Deviations

- Drop Shadow
    + I saved 12KB by not using the Drop Shadow images. If this was set as required by the client they could easily be added.
- IE9
    + Steps Animation does not play, but it will still switch between the steps.
