Document your submission here (optional, but recommended)

1. Document listens for click and determines if the id of target contains either "link" or "icon". If it does it will run "findOthers", with the step number as its argument. Here it will:
*Fetch data from "baby-steps.json"
*Compare step that was clicked on with the step of each friend in the data set
*For each friend that has a matching baby-step, the person's name is pushed to an array ('peopleArray')
*The friends are then sorted by last name
*Each time there is a match, I add 1 to the integer, 'stepCount', to determine how many people match a selected babystep
*A series of 'if' statements match the associated number of friends with a string literal that is then posted to the DOM

2. The animation is also called after a link is clicked by calling the 'slide' function.
*The function also takes the babystep that was clicked as an argument 
*An if statement compares the step to a global variable named 'stepSlide'.
*'stepSlide' refers to the slide that is currently being shown.
*if the step that was clicked is a greater integer than 'stepSlide', each slide after the selected step slides up to show the correct babystep
*And vice versa if the step that was clicked is a lesser integer than 'stepSlide', each slide after the selected step slides down to show the correct babystep
