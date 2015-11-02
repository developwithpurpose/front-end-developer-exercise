#Front-end Developer Exercise Documentation

##Grunt

In order to streamline workflow, the project uses Grunt to compile stylings and reload the page when changes are made. the `GruntFile.js` makes use of packages such as `grunt_contrib-less` and `grunt-contrib-watch` to reduce time spent refreshing pages and compiling styles.

##Stylings

The LESS preprocessor system was implemented for the page stylings, as it reduces worktime and keeps sections separated. Each of the files in the `app/less` directory serves a purpose:
* One for each section of the page (`header.less`, `aside.less`, and `main.less`)
* A default file for page-wide and high-scope stylings (`default,less`)
* Various files to store variables and LESS mixins for differnt parts of the site (`colors.less`, `fonts.less`, and `mixins.less`)
* A final file to tie all these together (`bootstrap.less`)

The project also uses the [Preboot](http://getpreboot.com/) Frameowrk. As the precursor to Bootstrap, Preboot is a stripped-down set of LESS files containing variables and mixins for things like a grid system and transitions. This framework is a good compromise between writing all stylings from scratch and slowing down the app with unnecessary parts of a framework.

For animations and gradients, the `mixins.less` file contains the logic that is called in other files. Both mixins utilize browser-prefixed properties to ensure compatibility across all browsers. In addition, the `.animation()` mixin utilizes keyframe animations to animate the page in on load.

##JavaScript

While the JavaScript in this project is minimal, it's always a good practice to keep functionality from the global scope. That's why [RequireJS](http://requirejs.org/) was used to modularize JS files.

The files are loaded in via `app/assets/javascript/main.js`, which defines the names and paths of vendor and project files.

Each JS file has a structure to it: module-scope variables are defined at the top, followed by an `init` function and all other functions. At the end of the file, the `init` function is invoked to set the module in motion.