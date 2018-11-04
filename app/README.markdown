## Javascript Documentation
### navigationBabyStep(number)
* number - baby step number
* Starts on navigation click
* Runs three functions: _getBabyStepContent, _getFriends, and _changeNavigation
* Dynamically updates the page

### _getBabyStepContent(number)
* number - baby step number
* Makes a call getting the baby step content
* Updates the title (Baby Step 1)
* Updates the subtitle ($1,000 Emergency Fund)
* Updates the paragraph content for each baby step

### _getFriends(number)
* number - baby step number
* Makes a call returning social friends list
* Compiles the social friends string and displays to user
* Calls _compileSocialString

### _compileSocialString(names, babyStep)
* names - names of everyone on the same baby step you are viewing
* babySteps - current baby step you are viewing
* Compiles the string that will be displayed to the user
* Calls _getName

### _getName(name)
* name - A single name object passed to function
* Adds span tag and gets the first and last name so name appears in blue

## CSS
CSS uses BEM naming conventions and has a max of two identifiers per style object
### Hero
* Image is defined as a background-image rather than in an img
### Content - Navigation
* Animation uses transition ease-out and the width of the background is 200%. The gradient is on the left half and white background is on the right
* Navigation Images use the sprites so there is only a single network call

## Remaining Work
* Webpage doesn't work without Javascript