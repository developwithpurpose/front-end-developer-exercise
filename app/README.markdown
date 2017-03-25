# Bailey Charlton's Submission
___

### HTML

For the HTML, I tried to make my file as semantic and simple as possible. I used the ```header``` tag for the header, the ```nav``` tag for the side navigation, and then a ```section``` tag for the main body content.

I added all the "Baby Steps" content into the HTML. Normally, there would be a database to dynamically grab the data and display it, but I'm working on a one page site, so that's why I did what I did.

___

### CSS

For the CSS, I did my best to cut down on any duplication/repetitive code by grouping all the elements, IDs, and classes to use similar CSS. I separated the CSS into groups based on **Header**, **Nav**, and **Body**. Nothing too fancy went on here, except I used a [CSS gradient generator](http://www.colorzilla.com/gradient-editor/) for the navigation's gradient. I used it to save time and get it working for each browser. While my CSS display isn't _exactly_ the same as the mockup image, I did my best to replicate it to the best of my ability with the time I had.

___

### JavaScript/JQuery

I come short when it comes to animations and doing fancy styling. I just haven't had the experience yet, but I've worked with JQuery before, just not enough to do some cool animations for this site. I however would love to continue working with it more and learning. But for this section, I started off with initially setting the style for the first Baby Step for the user.

Anytime the user switches Steps through the navigation, the JQuery will reset the style and create the new one for whichever Step was chosen. I did a simple variable to store the Step ID to easily edit the image src, for example:

```
$(this).next().attr("src", "./assets/images/icons/individual/icons_small_bs" + newID + "_blue.png");

$("#body-" + currentID).hide();
$("#body-" + newID).show();
```

This is just a simple variable insertion, then also updates the body content based on that variable's value.

Then finally, I got into adding the friends JSON file.

```
.getJSON("../baby-steps.json", function(data) {
	var friendArray = [];
	$.each(data.friends, function(i, friend) {
		if(friend.babyStep == newID) {
			friendArray.push(friend);
		}
	});

	if (newID != 1) {
		if(friendArray.length > 2) {
			$("#body-" + newID + " > .friends").html("<a class='friend' href='#''>" + friendArray[0].firstName + " " + friendArray[0].lastName + "</a>, <a class='friend' href='#'>" + friendArray[1].firstName + " " + friendArray[1].lastName + "</a>, and " + (friendArray.length - 2) + " Other Friends are on this step.");
		} else if(friendArray.length == 2) {
			$("#body-" + newID + " > .friends").html("<a class='friend' href='#''>" + friendArray[0].firstName + " " + friendArray[0].lastName + "</a> and <a class='friend' href='#'>" + friendArray[1].firstName + " " + friendArray[1].lastName + "</a> are on this step.");					
		} else {
			$("#body-" + newID + " > .friends").html("<a class='friend' href='#''>" + friendArray[0].firstName + " " + friendArray[0].lastName + "</a> is on this step.");										
		}
	}
});
```

This will count each friend on the chosen Step, add their data into an array, and then output which friends are on the same step. Initially, the user will not have any friends show on the first Step as that's the start of the progress. After changing steps, they will see their friends. 

I added in some extra calculations for a better display of friends. If the chosen Step has more than 2 friends, it will display the first 2 friends and then a count of the remaining friends on that Step. If the step chosen has only 2 friends, it will display just those 2 with a message that fits. And lastly, if there is only 1 friend on the chosen step, it will display just that friend with a message that fits.

Lastly, the site doesn't function properly with JavaScript disabled. My reason for not going that route is because this site was meant to be a single page site. The animations and changing content would need to be spread out to multiple pages using an active CSS class for the navigation.

___

### Notes

* I had fun with this project and tried my best to get everything spot on. 
* I used Github for version control and created enough commits to show my progress through this project. 
* While I am a Full Stack Developer, I can work both on the front end and back end, but I prefer working on the back end.
* Sorry it took almost a week to finally get to work on this. I was working on final projects for my college.
* I have finished college and will be graduating to get my Bachelor of Science degree in Web Design and Development from Full Sail University at the end of March.
* I look forward to the code review to go more in depth with my code, and discuss why I did things, what I would change, and how I would come into these types of projects from a different perspective for the future.

___

### Contact

**Email**: bbcharlton@fullsail.edu

**Phone**: 757.619.4752

**Website**: [https://bbcharlton.com](https://bbcharlton.com)

___