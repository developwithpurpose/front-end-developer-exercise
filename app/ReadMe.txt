	Thanks for giving me the oppurtunity prove my abilities through some front end dev.  Back in October, I picked up programming for the first time.  With no direction, I started in a Javascript course through Codecademy.com three months ago.  Feel free to view my account here: https://www.codecademy.com/ajseavers92.  I completed Javascript, HTML/CSS, Jquery, and then Angular.  I then started in Ruby, but realized quickly that I wasn't a huge fan.  I moved to TeamTreehouse.com and completed an IOS Swift course and have been coding in Swift ever since.  

	This was a great oppurtunity to put my HTML/CSS and Jquery skills to the test.  Below I have added some notes that reference my code.
		- Andy Seavers

**index.html && stylesheet.css**

	Imported UTF-8 to fix a few HTML issues.
	Connected my app.js file, as well as my Stylesheet.css file.
	Added two different Jquery libraries

	Used the Body tag to change the entire background and eliminate margins.

	Created the main container with a Div for content, background image, dropshadow, etc.  
		Subline and Main Line of text.  Used CSS for correct spacing and formatting.
		Added the correct padding under the Header 


	Created a left container to span 33% of the container, floating left. 
		Created a BabyStepBox class for correct dimensions in left container to act as each button.
		Added a BabyStepBox.selected class to the first div to change the class background and text color.
		Added a data-step to each BabyStepBox for later reference in JQuery.
		Hard coded the correct image and text for each line and a class to create correct style and formatting.
		Added 7 steps and a last box that extends to the end of the container.
		Used a free website to generate the necessary gradient for each box.

	Created a right container to span the remaining 67% of the container.
		Header Image, Header Text, and Sub Heading Text and Body.  Hardcoded the entire first step so that the body text would appear even if Jquery is not active.
		Final class Other Friend created to import data about what other friends are on the same step.

**app.js**

	Started by creating some variables with arrays of the different images and text that would need imported through JQuery.
	Created a fuction using the BabyStepBox class so it would act as a button that would switch between the baby steps.
		Created a variable: step, to pull the data-step from each babystepbox class in my index.
		Then initiated a .removeClass() method to remove the selected class from all .BabyStepBox classes
		Followed by an .addClass() method to add the selected class to the specifically selected .BabyStepBox.
		I then took every image and converted back to the original gray image.
		Then converted the small baby step image to the small blue baby step image using the current step and interpolation.
		The following list are animation transitions for the big image, Baby Step Header, Sub Header, and Text Body.

		I then created a new function to call the required Ajax request.
		Created the variable: OtherFriend and gave it an empty string to start.
		Runs a Get request on the baby-steps.json dictionary
		On success, I first assign the friends variable to an empty array.
		Then a loop is run over each line of the array and assigns it to the variable friend.
		I created an if statement that if the current step matches the returns number from friend.babystep, the returned answer would be pushed to the empty friends array.
		The animation runs to hide the current OtherFriend class

		an if else statement is run against the current step. The current step runs an animation that pulls specific names from the JSON dictionary and appens them to the OtherFriend Class. The logic returns how many of your friends are on the current step by stating two names and then the remaining members.

		







