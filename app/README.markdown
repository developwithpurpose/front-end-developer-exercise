#Code Challenge

Thank you for the opportunity to re-attempt this code challenge!

## Javascript
On my last attempt this year, I was pretty uncertain of how to manipulate the JSON data in order to present the appropriate number of friends that were in each 'baby-step.' It was really gratifying to re-attempt this challenge after attempting numerous other exercises and projects with Javascript.

In order to reflect the current chosen baby-step, I leveraged the radio-buttons and their attached value through a JQuery .change function. I struggled a bit with how to maintain the currentStep with a newly clicked value, and with a few pointers on the NashDev slack channel (full-disclosure) I soon bound that value with (this).

I then went about building a function that would use that radio-step status ('currentStep') as the basis for selecting data to manipulate from the JSON file. It was in building this function that I felt a greater compentency in Javascript since last attempting this challenge. I attempted to write the function so that any number of future Baby Steppers' data could be added to the JSON file, with no functionality lost.

Using .filter and .sort made short work of extracting only the appropriate Baby Steppers per step, and then ordering them alphabetically in friendFilter.

Next, I employed a series of ternary operators to define how the friends would appear with each baby step. Using the array.length of friendFilter, I was able to shape the returned template literals accordingly. And, I did deviate from the instructions in one way: I wanted the 'and # other friends' to reflect the actual number of other friends on that Baby Step.

Finally, I used the Jquery .html to insert the currentFriends array into markup for the `<span class="friends"></span>` in the html document.


(from previous attempt):
## HTML
In my current role, I understand the importance of structural hierarchy within a page's content, and attempted to organize the content with this mind. I also attempted to keep the markup as semantic as possible for clarity of purpose. Where there was copy that was not visible in the mockup, I included the copy in the html and hid it with a CSS clip (for accessibility). To build hide/show tab functionality, I used 'radio' button input labels that corresponded with content divs and required no external scripting. 

## CSS
In addition to the main.css style sheet, I included a standard reset.css to normalize browser stylings.

I made use of sprites for some of the icons to reduce network loads, and included transitions and features that worked across different browsers. I also attempted to avoid using images for effects when CSS features could be used instead (such as box shadow and text placement over an image). 

## Deployment
I minified both the HTML and CSS files for increased performance in deployment.
