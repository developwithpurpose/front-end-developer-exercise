Document your submission here (optional, but recommended)

My goal with this site was to use as little JavaScript as possible to ensure a more consistent user experience across the board. With that in mind, here are my notes:

1. For the tabbed navigation, I looked for a CSS-only approach so that browsers that have JavaScript disabled would still have a comparable experience. I used HTML inputs and labels method, which allowed me to single out a specific "active" element for styling the active buttons. As a result, I had to position: absolute; the conent sections for each tab, but it was necessary to achieve the final result. These tabs still work without JavaScript, but the animation does not.

2. There are three functions inside the jsonParser function which control the dynamic content. 

	- The first pulls in the external json file. 
	- The second loops through the "friends" object and matches the babyStep key value with the ID for each tab and appends a comma when it returns more than one result. It then appends the first and last name from each result inside of a span.name element to its parent div. 
	- The third function includes five 'if' statements to produce the dynamic conent (based on the criteria provided in the instructions) at the bottom of each div.tab-content tab's content area. These statements fill in their respective divs and span tags within each .tab-content parent div to create the final result. 

I also added a function called "sortByProperty" above jsonParser and call it before the first .each loop so that it will sort the results alphabetically before running the loop. This allowed me to place the results in their proper divs after being sorted by last name. 
