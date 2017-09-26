# Notes:

### HTML/CSS:

* Imported Google fonts: `Open Sans` and `Source Sans Pro` per UX font requests
* Imported CSS in the head, and JS/`Mustache` templating library in the body for better performance
* Added `tabindex` to header so users who use screen readers can have context to what kind of information is available on the website
* Used radio input for menu so JavaScript isn't necessary for basic functions of the app to work
  - Same input name for radio inputs = only one radio can be selected at a time, which means each individual click action on the menu will only display one matching content div
* Hid icons from screen readers in content divs because actual div has a header and copy that describes the context of said div
* Also added `tabindex="0"` to content divs so screen readers can toggle back and forth between content and tab menu
* Disclaimer: I don't have access to a PC/Windows computer or Internet Explorer, so I did my best to style for Firefox, Safari, and Chrome on the Mac operating system by using prefixes.
* Website is not very responsive on smaller screens, but I based the styling off my 13in screen width laptop.

### JS:

* `readTextFile` makes an AJAX request via Web API's `XMLHttpRequest` and passes the result into `parseData`
* `parseData` sorts all the friends into an object, which has keys of the baby step number set to an array. Then it sorts the friends in each baby step array into alpha order based on their last names. Finally it passes the `sortedfriends` object into the `computeCustomMessages` function.
* `computeCustomMessages` uses the Mustache API to create a HTML template to attach to the `.friend-statuses` divs according to which baby step tab has been selected.
* `computeFullName` is a helper function that takes a friend object and returns a string of the first and last name combined.
* `createTemplate` is another helper funciton that takes in a string template, data object, and step number, finds the matching `.friend-statuses` div and attaches the custom template.
* Helper functions were created to keep code more DRY, and to have more composable functions. Although, `computeCustomMessages` could use a bit more `compose`-ing.
* Didn't use ES6 because I wanted to use as few dependencies as I possibly could.

Thank you for your consideration! I really enjoyed the coding challenge and hope to hear back, if applicable.

Best regards,

Jessica Park