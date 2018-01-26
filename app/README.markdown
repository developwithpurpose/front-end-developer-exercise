Document your submission here (optional, but recommended)

Hello everyone, 

thanks for giving me the opportunity to try out this code challenge! This was a really fun little challenge, and I enjoyed learning the baby steps myself! 

General Notes
------

I wanted to keep everything simple due to time constrants, so I only incorporated jquery in with vanilla javascipt.

I left the website unresponsive because it wasn't required, and I didn't want it to eat into my time. Ideally, that they divs would flex depending on screen size. 

Due to time constraints, I wasn't able to finish the sprites changing on the active tabs, and the animations would have me go over the four hour mark by quite a margin. 

Server
------

This package is configured with a basic web server. You'll first need to install [Node.js](http://nodejs.org/). Once you have Node.js installed and have cloned this repo, then you can run the following commands to start the server (on port 8080 by default).

```sh
npm install
npm start
```

You should see "The server is running!" when you visit http://localhost:8080. Use CTRL-C to stop the server when you are done.

Feel free to add any additional build infrastructure that you would like, as long as the page is still accessible by running `npm start`. Tests and linters, for example, are welcomed (but not required).



main.js
------

I stored the data from the json file to an array to use in my showFriends function. This checked the current indexed babystep on the friend to the datatype attached to the clicked tab and pushed the matches into the array stepFriends. Then, I used switch cases to check the length of the array and output the correct information. 

I used the current class to on both the tab and Step information to show/hide the appropriate information. 

Closing
------
Once again, thanks for taking the time out of your busy day to take a look at my code! As with any project, you always wish you could have more time! 
