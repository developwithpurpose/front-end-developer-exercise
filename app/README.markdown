#Joel Scalera's Frontend Developer Project.

##Dependencies:
##### 1. jQuery (cdn)
##### 2. SCSS (Installed with Node. Compiled css included in stylesheets)
##### 3. Google Fonts (cdn)

##Strategy:
1. I structured out all of the html I could visualizing each chunk of content as component. I then created a scss file and wrote several modules to manage fonts and styles. This was then imported over to be used in my main sass file 7-steps.scss.

2. The Json loading portion was completed in load-friends.js. I used vanilla JavaScript hooked up with an onclick function in the html to pull the correct step value. The users corresponding with that value were put in an array. I used that data to generate html conditionally and load it into the 'p' tag with the correct id. 

3. animations.js is written with jQuery holds all the functionality for:
   
    **A. Swapping out the active and inActive images.
    B. Changing the style of the step when it is selected.
    C. creating a toggle down animation when transitioning between steps.**

##Learning Experience 
I had a lot of fun working on this project. I initially attempted to use the css target property to hide and show the initial steps. This however caused the page to jump because my steps were recognized by a unique href link. I needed to rewrite the functionality to dynamically load each step using ids with jQuery. Then set href="#/" for each link.

##Closing Thoughts:
It was a pleasure being able to code and learn more about the 7 baby steps. I look forward to the possibility of discussing the project and learning more about Frontend Development at Ramsey Solutions.
  






