Front-end Developer Exercise
============================


Documentation
------------
* Per the requirements I used only css for the page functionality except the dynamically added friends information.

* I originally was using focus in the css but came across several issues. I was able to use target instead for the css animation aspects.

* On IE9 the transition does not work but the page still functions. With more time I would look into any possible fixes to add that animation feature back in.

* The only issues that I ran into with the javascript portion was with the concatination. I will show my prefered way verses the final outcome.

* Makes me happy example: friendText = `<a style='color:#6fbee7'>${friend1}</a>, <a style='color:#6fbee7'>${friend2}</a> are also in Baby Step targetID`;

* Makes me sad example: friendText =`"<a style='color:#6fbee7'>" + friend1 + "</a>, <a style='color:#6fbee7'>" + friend2 + "</a> are also in Baby Step " + "targetID"`;

* I was unable to get the "happy" example to work in IE9 because it does not support th use of " ` ". So the concating was my solution to this problem.


This was a difficult but fun project. Thanks for your time!
