---------------Notes : Lee Tompkins

-- Brief Overview

 I decided right from the bergining that I did not want to use any frameworks for this. I wanted to write everything. 
 I only decided at the end to inlcude jquery (for retrieving the JSON data). Right away I knew this was going to be interresting not having the
 ability to use js. I tried a few methods for the baby steps and none seemed to really work the way I was intending so I settled with using input elements
 with a type of checkbox. This allowed me to take advantage of the :checked psuedo class. I found this "no-js" approach to be the most challenging.
 
 
 -- What I considered
 
 In this project there were countless additions and alterations I wanted to make. Most of these additions I was not able to do because of the time constraint.
 I originally considered writing a pure js call using XMLHttp but decided against it. Using Jquery allowed me to spend more time on the bulk of the js. There were two solutions 
 I considered for the dynamic user stories. I could either add all of them to the DOM then show/hide them depending on the current checkbox, or I could go the route of making a more dynamic
 solution that would work in the instance that friends were added or removed. Additionally I thought that using classes to show and hide friends seemed like a nasty way of doing
 things in the event the friend pool grew to a much larger scale. I took all of the friend objects, placed them in an array, then broke that array down into arrays based on 
 current step. To do this I used a switch statement. From there I placed all of the arrays into an array of the split arrays where I looped through and performed actions based 
 on the array's length at that given index. At one point I also considered altering the banner image and removing the box shapes at the bottom. I thought this
 would be a good opputunity to recreate the boxes as svgs and animate them in a sin curve. I decided against it for time and compatibilty with IE. 
 
 
 -- What I used outside of the local resources 
 
 I used cssgradient.io for the background-color on the Baby-Steps "buttons". It is quick, simple, and also spits out all the needed webkits ect... 
 I used Jquery as previously mentioned for the ajax call. 
 
 -- How this challenged me
 
 Apart from the 'no-js' approach I found the non-responsive approach to challening. I have never tried to create something without thinking about responsivness in my proffesional career. This also lended to my decision to try it all from scratch without bootstrap or any other css framework. The problem I ran into however was that I am on a 4K screen. Towards the end of this project I realized that and had to make some ajustments to my css to make sure it did not look terrible on 1080p or 1440p. I know from my first interview that everyone is on a Mac so I should be in the clear. 
 
 -- Thank you
 
 I have put in my best effort in the time alloted and I really enjoyed working on this. It shook the rust off some css tricks I have not used in a long time. If you have read all of this 
 I truley appreciate your time, and I look forward to hearing feedback from the team's talented individuals :) 
