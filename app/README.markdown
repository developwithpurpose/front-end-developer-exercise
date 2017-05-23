# Front End Developer Exercise

Hi there! I'm Mark Fasel, a Full Stack Engineer and Front End Developer looking to further my career and continue learning through a thriving environment with a purpose of helping others! Thank you for the opportunity and allowing me to submit this Front End Developer Exercise and be considered as a candidate for the position. This is an overview and documentation of how I approached this exercise, the techniques I used, and some of the technologies implemented.

## Overview

The project was built using HTML5 and CSS3 with JavaScript fallback options to account for older browsers. I implemented SASS for all CSS development with a basic Gulp environment to compile the code. I chose SASS over LESS because of the fact that Ramsey Solutions builds apps using Ruby on Rails which utilizes SASS in it's asset pipeline out of the box. I have been building sites on Ruby on Rails for a couple years and have a extensive knowledge on the topic and can easily work with it.

## Structure / Organization

The site structure features the index.html, a "step" folder that holds all the additional baby steps which is used for a graceful degradation when the browser doesn't feature JavaScript (ie the navigational links direct to individual content pages.). Inside the assets folder, I have an images folder, JavaScripts folder, stylesheets folder, and a sass folder (that contains all precompiled SASS files). The Gulpfile.js is a simple gulpfile that builds out the css as well as provides tasks for minifying the CSS for production as well as uglifying the JavaScript. To compile the assets, you will need to navigate to the app folder and run ``npm install``. You may also need to run the following:

```
npm install gulp
npm install gulp-sass
npm install gulp-clean-css
npm install gulp-rename
npm install gulp-concat-util
npm install gulp-uglify
```

## Transitions, JavaScript, and Fallback Support

The site features CSS3 transitions that get applied with JavaScript by the use of class additions and removals. However, not all older browsers support CSS3 properties and transitions and while CSS3 is being used frequently to handle these tasks, implementing a fallback solution allows us to ensure a better user experience.

Solution: I implemented Modernizr to check for various css3 properties such as transitions, flexbox, and calc. This allows me to set CSS specific properties for browsers that lack support as well as animate with jQuery instead of CSS3. 

```javascript
// Let's check modernizr to see if the browser supports css transitions. 
// If not, let's animate with JS, if it does we'll animate using CSS3
if(!Modernizr.csstransitions) { 
	$(".content--main section.active").animate({top: '-500px', opacity: 0}, {duration: 700, easing: 'easeInQuart'}).removeClass("active");
	$(".content--main section#step"+$(this).data('step')).delay(700).animate({top: '0' , opacity: 1}, {duration: 700, easing: 'easeOutQuart'}).addClass("active");
} else {
	$(".content--main section.active").addClass("fade-out-up").removeClass("active"); // Remove from section
	$(".content--main section#step"+$(this).data('step')).removeClass('hidden').addClass("active");
}	
```
In the above code block, I check for csstransitions and if it doesn't exist I control the animation for the content block with jQuery animate. If it does exist, then I add or remove classes that contain the transition.

```sass
// Has CSS Transitions - Class applied to HTML with Modernizr
.csstransitions {
	.content--main-step {
		&.active {
			transition-timing-function: ease-out;
			transition: 1s;
	    }
	    &.hidden {
			transition-timing-function: ease-in;
			transition: 1s;
		}
	}
}
```
This CSS statement in SASS only applies the desired classes with the transition properties if the browser supports csstransitions.

I have also chosen to implement the transition using absolute position rather than using translateY. I only do this to reduce the extra lines of code just to run translateY for css3 only while I am animating with jQuery on the top position value.

This solution will also work on ie9+ because it doesn't require CSS3 for transitions but falls back to jQuery for animations. If JavaScript is completely disabled, then a message would be displayed to the user to enable JavaScript for a better experience and if the user clicks a baby step link, it would take them to the page via url. To display a message that JavaScript is disabled, I added a message with the ``<noscript>`` tag as it is semantically the correct way to handle this functionality.

```html
<noscript>
   <div class="no-js-message"><p>Please enable JavaScript for the best experience.</p></div>
</noscript>
```

Lodash was used as a helper to control and build out the friend object before outputting display to the step content. I can also use underscore as well and have experience with both.

```javascript
buildFriendsObj : function(obj) {
	// Create a local variable to store friend name
	var friendName;
	
	// Reduce the object by combining all friends in a step to an obj based off the step number - using transform, but reduce could also be used and would require returning the result
  	var newObj = _.transform(obj, function(result, friendObj) {
	  	// Build the friend name from the friend object with first and last name
		friendName = friendObj.firstName + " " + friendObj.lastName;
		(result[friendObj.babyStep] || (result[friendObj.babyStep] = [])).push(friendName); // Push the names in the step obj
	}, {});
	return newObj; // Return the newObj
}
```

If JavaScript is disabled, the ajax call won't initialize and therefore wont display on the content pages when there is no JavaScript. A work around for this would be to implement this functionality from a backend application process such a Rails or PHP and take it out of the front end layer all together in the event that JavaScript isn't enabled. I make a single ajax call to the json file when the JavaScript is first initialized. I took this approach due to the size of the json file and the basic implementation that was requested in the project requirements. More robust requirements may make better use with specific ajax calls on a click method that get's requested as needed.

Here's the ajax function I am using.

```javascript
getFriends : function() {	    
    // JSON request for the data
    $.getJSON(app.config.json, function(response) {
        
        // Create friends object
        var friendsObj = {};
        
        // Create local variable for holding the response
        var friends = response.friends;
        
        // Let's sort the object using lodash by step and last name in ascending order
        friends = _.sortBy(friends, ['babyStep', 'lastName'] );
        
        // Create a new object with the friends data that reduces the obj and sorts it by step
        friendsObj = app.buildFriendsObj(friends);

        // Let's add the object to the current step content
        app.addFriendsToStep(friendsObj);
	});
}
```

## Semantic Structure

Since the site is built using HTML5, I focused on building out a semantic structure that encapsulated how the site should look based on the provided mockups. I chose HTML5 because it has become a standard in the industry. 

The site header is contained in a ``<header>`` tag that contains the header image (without text) and an h1 that contains the header text. I used this over the image with the text on it as its more semantically correct and focuses on accessibility as well as SEO.

The main content of the site is broken down into two pieces: the navigation area and the main content area. The navigation block contains a semantic structure using the nav tag and assigns the role of navigation to it.
``<nav role="navigation" class="content--navigation"></nav>``

The main content is built using the main tag and assigns the role main to it ``<main role="main" class="content--main">``

In side the navigation I use an unordered list and control the styling thru CSS. Inside the main content area, I use section tags for each baby step. I also use the single icon for the baby step heading and implement HTML for the heading as its better from a structural / semantic standpoint as well as accessibility.

## Styling / SASS

Styling was done with SASS since Rails apps utilize SASS in the asset pipeline by default. I develop using both SASS and LESS but do prefer SASS. I have implemented a simple gulp process file for compiling the SASS code into CSS. 

While this project didn't require the use of any responsive development, I normally develop sites using Bootstrap, Foundation or a custom responsive solution.

I used flexbox for some positioning but have fallback support for IE / browsers that don't support flexbox. I also implemented calc into a few areas to ensure a better display and position (although this site could be developed numerous ways). The site itself features CSS3 animation for content transitions with jQuery animate as a fallback support for older browsers such as IE9.

The site was tested using saucelabs.com and I checked against IE 9, IE 10, IE 11, Edge, Chrome (Windows / Mac), Firefox (Windows / Mac), and Safari. The site passed the visual and functional tests.

I ommitted normalize.css and opted for a basic reset since this was a small site with not much HTML5.

## Production Assets

Since I have a Gulpfile that controls the SASS compiling, I implemented a couple additional tasks for minifying CSS as well as uglifying JavaScript. While the app uses the product assets for optimization purposes, source files are still included in their respected locations for review.

The site is fully production ready with all scripts and CSS. I left comments in both the JavaScripts and CSS due to keeping with best practices of providing comments so another developer can easily identify what is intended. I have however documented my process and the exercise here in the readme as instructed to provide specific details.

## Conclusion

Overall, this project features many different technologies, techniques, and functionality. I really enjoyed building this exercise and hope you find my techniques and code to your liking!

As a front end developer, UX designer, and full stack engineer, I can offer you the skills and experiences to help your team and be an asset to Ramsey Solutions!

Thank you again for your time and consideration and I hope I can be a good fit for your team.
