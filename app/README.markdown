# Kurt Allmeroth's front end exercise

## APP
I didn't add any libraries to the project so it is the same process of `npm install` and then `npm start`.

## HTML
- import fonts from googleapi to use Source Sans Pro with differnt font weight options.
- import external css file to orgainze css.
- import jquery after <body>.
- import external myscripts.js file after jquery.
In regards to the main header image of Dave Ramsey I noticed 2 images one with the text with the image and one with the text off. I used the one with the text on it for time sake. It would be nice to have used <h> tags for SEO purposes and on a client project I would have.

## CSS
I wanted to keep the styling orgainzed in one spot so there is no inline, and no styling was created using jquery (specifically the .slider).
Everything else would be needed incase javascript is disabled.

## Jquery 
I apended the div with slider class to keep from showing up if javascript is disabled. This way the side nav in the view would all look the same and baby-step-1 wouldn't always look selected. 
This is the same reason I statically addClass of selected to the li.baby-step-1. 

I placed the getJSON call and logic for minipulating the data in a function with the intent of if it was needed again, say the project expanded.
Though due to time I left all of the logic in one function instead of multiple functions being called inside my main getAllSupportedItems(). 

Any feedback good/bad you have would be greatly appreciated.
Thank you for your time.