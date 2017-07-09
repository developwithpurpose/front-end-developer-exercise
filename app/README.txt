README - front-end-developer-exercise

Table of Contents:
i. Prologue
I. Initial Thoughts and Response
II. Design
	A. Navigation
	B. Dynamic Content
III. Intentional Deviations
	A. Unused Images
	B. Indvidual Images Instead of Sprite Sheets
	C. BONUS: Favicon.ico

i. Prologue

	I thoroughly enjoyed this code challenge. I did all the work on my personal machine
(Macbook Pro) using TextWrangler (code highlighting, but no code completion).
I am used to using Visual Studio, but that is on my work computer. Using nothing but
TextWrangler and my browser for development and testing was a challenge all on its own,
but I enjoyed the "pure" nature of the development. It felt good to write code without
all the fancy IDE features flying around. I don't think I could develop in this 
environment forever, but for the purpose of the challenge, it was enjoyable. Anyway,
thank you for the opportunity to apply to Ramsey Solutions, and I hope to hear from you
soon. - Ethan Dowler

I. Initial Thoughts and Response

I decided to make my own copy of the requirements for quick reference, and when I write/
type things down I tend to remember them better. The file is named requirements.txt.
If I had more time to set everything up, I would have tried setting up a database with 
a table for "baby steps" that included the step number, the name of the step, a description,
the synopsis, and basic instructions. All of these components were present in the body-
copy.txt provided in the master repo. I could have set up a partial view that was populated
with the correct data based on the step number. Because I didn't write any server-side
code and because the page needed to be fully functional without javascript, I'm not sure
that would have been the best option anyway, but that was my initial thought. Either way,
I was going to use jQuery (via a CDN) to assist with the javascript.

II. Design

A. Navigation
I decided to manually put all the baby steps on one page and use javascript to apply the
"hidden" class (display:none) to all except the currently selected step. Without JS,
they will all be visible by scrolling down the page, and the links on the side contain
an anchor tag with href="#step-number", so the navigation buttons can still be used, but
take the user to the section with the selected baby step rather than switching out 
which one is visible. I also used JS to switch out the images in the navigation tabs
whenever the user switched to a new tab. Blue for selected, Grey for not selected.

B. Dynamic Content
There is an empty div marked with an id of "dynamic-content" that will be populated with
the correct string depending on how many friends are on the selected baby step. When the
user selects a new baby step, an ajax requests baby-steps.json. The appropriate friends
are stored in an array called "friends". This array is then sorted based on last name. If
there are more than 2 elements in the array, the dynamic content div will list the first
two by name then state how many other friends are also in that step.

III. Intentional Deviations:

A. Unused Images
I looked through the images before I saw the mockup, and didn't look at them again until
after I had done a significant amount of development and gotten to a point where I needed
the baby step icons. I realized way too late that there were images of the entire baby
step header sections... Also images of the shadows on the side and bottom of the container
area. I had never done tapering box shadows, so I just gave the whole thing a box shadow
and decided I'd try to figure it out if I had time later. I did not have time "later".
I deleted all of the images that I ended up not using from the repository.

B. Individual images instead of sprite sheets
If the page needed significantly more images, I would prefer to use the sprite sheets, but
there seems to be no performance delay with the single page as it is, and it was easier
to use the individual images.

C. BONUS: Favicon.ico
I was able to find the 25-year anniversary logo
and shrink it down to favicon.ico size, so I included a link to that in the document head.
