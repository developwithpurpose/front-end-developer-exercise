Front-end Developer Exercise - Chase Hamby

Thank you all for the opportunity to do this coding challenge. It was a lot of fun!

**HTML & CSS**

The HTML file is broken down into two main divs wrapped in one large div container. The tabs div is where the baby step line items are included. The main area div is where the baby step details and dynamic content are included. The CSS is contained in the styles.css file.

**JQuery & Dynamic Content**

I used JQuery to instantiate the tab effects and allows the user to click between each line item and the proper baby step text appear.

For the dynamic content, I made an AJAX call to get all of the friends from the friends objects in the baby-steps JSON. I then used a for loop to iterate over all of the friends. Next, I used a filterFriends function to filter and identify what baby step the friend was on. Lastly, I created a function that prints out the HTML to the bottom of each step, listing the names of friends who are on that baby step.

**Additional Commments**

I wanted to be considerate of the 4 hour time limit set for the challenge. For that reason, I stopped coding any further even though there were still a few items that I wanted to complete.

Items that are incomplete:
• Transition Animation - If I had a little more time, I would have approached this by using jQuery's .removeClass() and .addClass() to change the background of the baby step tabs to match the white background. Additionally, I would have used a .slideUp() or .slideDown() to have the baby step text appear and disappear on the page.
• Minor CSS styling - there were a few smaller details that needed to be adjusted, including the height and width of a few areas. Also, I realized at the end that there was an option to do the header image without the text. I would have preferred to have done it that way if I had the time.
• Sorting the friends by last name - While I was able to return the list of friends for each step, I realize that I have not sorted them by last name ascending.

I really enjoyed doing this challenge and am looking forward to hearing how I did! Hope to hear from you all soon.