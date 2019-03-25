# Front End Developer Exercise | Documentation

## Libraries Linked to Project via a CDN —
Two library were linked to this project through a CDN.
1. jQuery: `<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>`

2. jQuery - UI: ` <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>`

## Creating Baby Step's & Navigation —
Designed to be read along with the file....

File Name: "index.html" & "main.js" 
Index File Path: [./index.html]
JavaScript File Path:  [./assets/javascripts/main.js]

To create the Baby Step navigation, I decided to use jQuery's UI Library. This allowed access to their ".tabs()" method. Making for easy implementation of the dynamic navigation—without reinventing the wheel (so-to-speak).

## Implementing JSON Data —
Designed to be read along with the file....

*File Name:* "backend.js"
*File Path:* [./assets/javascripts/backend.js]

*Note:* The backend.js file and main.js files were separated to maintain a clean working environment. 

To implement the JSON data provided in '/baby-steps.json' I used the jQuery method of "$.getJSON" which fetched the JSON file. This file was then placed into a function named "data". 

Within this function several steps are triggering. First a "let variable" is declared on line 11, and named "friendsOnBabyStep" which simply creates a new array of 8 "slots" for the 7 baby steps — when accounting for memory allocation starting at index 0.

Second a new variable is declared  on line 14 named "friendList" which grabs the "data" function created on line 8, and then grabs the "friends" object in the JSON file.

Third another variable is declared on line 15 named "babyStepId" which grabs the babyStep object provided in the JSON file.

Finally, I used jQuerys ".append()" method to manipulate the DOM adding the JSON data to each Baby Step in index.html, according to the logic provided in '/front-end-developer-exercise/README.markdown' *— See Line 18.*

*Additional Note:* A status code of 200 is logged to the console after the JSON request is made and loaded successfully *— See Line 9.*
