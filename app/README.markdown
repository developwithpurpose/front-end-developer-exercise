Font End Developer Exercise
I don't have a whole lot to say, I'll just let the code speak for itself. But 
there are a few things I want to note:

1) Because the page had to be passable without javascript, I simply decided to 
hide the un-needed baby steps using javascript, displaying them all by default.

2) Because of cross-browser compatibility issues with the animate, (don't recall
exactly what they were, but I promise they existed!) I took the 
shadow_left_nav.jpg, edited it from 300px to 900px, put 300px of white 
on either side of the gradient, and just slid the background-position back and 
forth on click using a jquery plugin. Then to match the nav animation, I 
made the content slide in at the same time the new baby step was selected.

3) I wasn't sure if the "shadow_###" images were required or not, so I just went 
with a box-shadow and tried to matched it to the mockup.

Let me know if you have any questions! Thanks!

Laramie Rugen
ffgpga08@gmail.com
847-902-5995
