Front-end Developer Exercise
============================

Server
------

A production build has been committed to the repo in the /dist directory.

```
npm install
grunt connect
open http://localhost:9001/dist
```

Highlights
----------

* [Babel](https://babeljs.io/) has been added to transpile ES6 syntax into compatible js
* [Browserify](http://browserify.org/) has been added to handle js module loading in incompatible browsers
* [Sass](http://sass-lang.com/) has been added to aid in css generation

Grunt Tasks
-----------

Several Grunt tasks have been added to the Gruntfile. These include:

### build

This generates a production build in the /dist directory and can be run with:

```
grunt build
```

### builddev

This generates a development (unminified) build in the /dist directory and can be run with:

```
grunt builddev
```

### test

This runs the `builddev` task then runs the jasmine tests:

```
grunt test
```
