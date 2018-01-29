Developer: Steve Hunley 

Intentional Deviations 

  I used jQuery's slideDown and animate to implement the animations when changing baby steps.  Implementing these animations with pure CSS is not something I have done before.  I researched how to do this.  Several examples used CSS3 which is not available to IE9.  I tried several other non CSS3 examples, but was not able to get any of them to work completely.  I decided to use jQuery as I was familiar with it and was able to use animate and slideDown to successfully implement the animations.

All of my Javascript is in app.js.  I ran eslint from the command line to lint my Javascript.

Opportunities for Refactoring

  I would figure out how to do the animations without jQuery.

  I would then remove jQuery and I would convert all Javascript to vanilla ES6 Javascript.

  I would write unit tests for my Javascript.

  I would add build infrastructure to transpile my ES6, run eslint and run my unit tests. 


