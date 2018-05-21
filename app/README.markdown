Document your submission here (optional, but recommended)
Great Challenge! 

I'll start with main.js:
1. `getData()` The first function is the GET request for baby-steps.json. I used the Fetch api, which is now built in to vanilla javascript (mostly because I'm used to it.). It calls the dom() function and passes in the response data from the json. Also: Error handlers.

1. `dom()` The second function is the dom() function which I called in the getData() function. This function is not very pure in my opinion, and I with more time I'd try to pick some of the logic out into other individual functions. It's purpose is to iterate over the json response, look at the babystep keys, push them to an empty array, then sort that array by last name ascending. I then call the pushToDivs function and pass in the array of arrays 'divisions'.

1. `pushToDivs()` The third function is intended to take the array of arrays, dig into it and send the proper data to the proper divs on the DOM. It iterates over each object, and injects the data into the DOM with the .html() method.

1. `scrollHandle()` The fourth function 