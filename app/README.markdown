Document your submission here (optional, but recommended)

I started with the design and used some simple html/css to create the frame based on the mock. It seemed like the 
design was a bit old, so I used some modern shadows instead of images since that makes more sense to modern designs.

After I finished the design, my first step was to create the list and use sprites to control the images. Once the 
list was set up, I continued on to the scrolling body content.

The body content was created in a frame that has overflow turned off and all of the content lives in there, but it
is hidden. My thought was to scroll the content when the link list item was clicked, find the target and scroll to 
it, as well as scroll the white highlight to the current step in the list.

The js contains one major click function that controls all of the scrollable content, active CSS states, logic for
the arrays, etc. The logic works based on which baby step the user clicks and that finds the data from the JSON file,
scrolls to it in the content, and changes the highlight box. The data from the JSON is then parsed and injected into
the correct area.

My goal was to write my own functions and not use any out-of-the-box plugins in order to achieve a simple app that 
gives the user an easy to use and simple experience.

I was having trouble with the names being sorted in the right way, but I was losing time and didn't want to figure it
out because I've never done anything like that before. In this case, I would go to a friend/coworker and ask how to
achieve this. I'm not a person that gives up, so it's hard for me to turn this in incomplete, but based on the timeframe
that was required of me, I need to.

Thanks for letting me do the challenge! Looking forward to hear how I did! :) 