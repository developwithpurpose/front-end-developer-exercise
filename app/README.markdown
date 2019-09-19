### Emily M. Smith

Hello! I'd first like to thank you for your time in reviewing my submission. Below is the documentation for the 7 Baby Steps.

# 7 Baby Steps
This website provides information about the 7 Baby Steps.

## Usage
Simply run **npm install** in a terminal window to start the server. Navigate to the displayed ip address in your browser to see the final product.

## Evaluation
In my pursuit to meet the requirments, I came accross a few challenges that I haven't solved before. The first being that I have never used jQuery or Ajax in any personal or work related projects. In my internship I have only worked directly in React.js.

If I had more time I would have completed a few more requirements. The first being the dynamic content of a list of friends on each baby step. I realize this can be done with an ajax function, in which I would have reloaded the div to display the list each time a button is clicked. The message logic would be very simple if I had structured the display functions differently. Currently in **showFriends.js** I have a lot of reused code that I would like to make into a function. I would pass the baby step and friend list into this fuunction, then return the custom output based on the length of the friend list.

I also would have fixed some basic visual formatting. The formatting issues will not hinder the users ability to read the page, it's just not a ready product to deliver. Most of the issues exist again because I did not want to exceed the time limit to debug why it isn't working, but I have kept the code that should work in the project. Highlighting the active Baby Step with a white button background, changing the icon to match the blue text of that highlighted button, sizing the header image dynamically, and creating a fixed container height (white background) for the main text are the main visual things I would tackle first.

Lastly, adding functionality when javascript is disabled would be another priority. This centers around the navbar functionality to show only the relevent baby step when that link is clicked.