I decided to use vanilla Javascript for this project. I understand that this might make the challenge a little harder, but I'm a software developer, and I like challenges.

### Overall Layout

Based on the image provided I assumed that the page needed to take up 90% of the total width with a tone of grey(#bbbfc2) as the background.

### Header

The header section was pretty straightforward. I Added the image to the page and and added a width of 100% to take over the entire area.

### Content Body

For the body section I decided to use flexbox. I've discovered that using flexbox leaves css a lot cleaner and easier to read, and it also allows me to leave out floats that could cause flakey behavior in some browsers.

#### Sidebar

To make the active baby step appear in white, I created a class called "active", that will be added and removed to the baby step currently being shown via javascript. If I have enough time I would like to come back and remove the hidden versus visible image for the icon. I know this isn't best practice, but based on the 4 hour timeline I have to complete this I will leave it this way for now. To place the icon on the right and the text on the left I decided to used flexbox to position the image and vertically-align middle to align the icon with the text. Since linear gradient does not work in IE9, I added a standard background for IE only.

#### Baby Steps

My basic idea for this section will be to show the active baby step while hiding all other baby steps. When the user clicks a different baby step a transition will cause and one baby step to disappear and the baby step clicked will slide in from the side. To align the Baby Step Icon with the currently clicked baby step I used a subheader. I also couldn't find how much space is between the Icon and the header, so I used 1rem to make the page appear the same across all browsers.

### Javascript

First I need to add an eventListener to each a tag on the page. First Prevent the default behavior of the anchor tag. Next, I need to figure out what anchor is currently showing as active and which anchor element the user has selected. I decided to break down the styling into 2 functions. 1 that changes the styling for the navigation and 1 that changes the current baby step being shown. Originally I thought about using regex to change the src image from blue to grey when the user clicked on a new anchor tag, but this was taking too much time, so I decided to toggle images when the user selects a new anchor tag, and if time allows I will revisit this idea.

### Friends Section

Originally I was using fetch to make the call for JSON data, but fetch isn't supported in IE, so I had to use jquery to fetch data. If I have enough time at the end I might try to refactor onSameBS(). The function isn't very dry and it is a lot longer than I would like.

Thank you so much for reviewing my code and I look forward to talking to you soon.

God Bless,
Justin Leggett
