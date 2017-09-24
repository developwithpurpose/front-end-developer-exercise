Document your submission here (optional, but recommended)


# First look over the annotated-mockup and break it down into sections. 
    1. Overall layout.
    2. Header.
    3. Content Body. 
        A. Navigation.
        B. Baby Steps.
    4. Friends Section. 
    
I decided to only use javascript, to show my understanding of the language. I have several examples on github of my understanding of jquery. I understand that might make this website easier to create, but I want to show you how well I understand javascript, and what can be done with it.     
    
### Overall Layout 

Based on the image provided I assumed that the page needed to take up about 90% of the page with a grey bg #bbbfc2, but the content section show have a white background.

### Header

The header section was pretty straight forward. Add the image to the page and take up 100% of the available width. Instead of adding a padding to the bottom of the Header or added padding to the top of the Baby Steps content section, I decided to create div that would fill the requirements for adding a 60px padding between the two elements. 

### Content Body

I was trying to use float as little as possible, because I know it has tricky side effects especially when it comes to a responsive website. I wanted to use display-inline, but I was having trouble setting the navigation to a static 25% width, so I decided to use float to align my navigation and baby steps side by side.

#### Navigation

The mockup didn't specify how far over the "Baby Step 1" was suppose to go, so based on the mockup it appeared to be about 50%, so I added 50% padding to the left for each "li" element. To make the active baby step appear in white, I created a class called "active", that will be added and removed to the baby step currently being shown via javascript. If I have enough time I would like to come back and remove the hidden versus visible image for the icon. I know this isn;t best practice, but based on the 4 hour time line I have to complete this I will leave it this way for now. To place the icon on the right and the text on the left I decided to use float to position the image and verticaly-align middle to align the 2 items. Once I finished this proces with the first li element I copy and pasted to the other 6 li elements and changed the text to reflect the current element.