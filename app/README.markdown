# Great Challenge! 

A brief explanationon main.js
1. `getData()` The first function is the GET request for baby-steps.json. I used the Fetch api, which is now built in to vanilla javascript (mostly because I'm used to it.). It calls the dom() function and passes in the response data from the json. Also: Error handlers.

1. `dom()` The second function is the dom() function which I called in the getData() function. This function is not very pure in my opinion, and I with more time I'd try to pick some of the logic out into other individual functions. It's purpose is to iterate over the json response, look at the babystep keys, push them to empty arrays, then sort that array by last name ascending. I ran out of time to add the logic of only displaying 2 names underneath each step.

1. `reset()` and the anonymous function below it work with adding and removing the active and hidden classes on select for the navbar.

I really enjoyed this exercise, really brought me back to vanillaJS after learning all the fancy libraries that seem to pollute the scene nowadays.