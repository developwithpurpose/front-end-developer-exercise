======================
James Wilson
jwilson529@outlook.com
======================

============================
Front-end Developer Exercise
============================

Objective
---------

Build a web page that will provide information about The 7 Baby Steps.
----------------------------------------------------------------------

Based on the mockup, I recreated the 7 Baby Steps page to work with and without JavaScript in multiple browsers. I tested the site with up to date versions of Google Chrome (47), Firefox (43), Microsoft Edge (25), and Internet Explorer (11, 10, and 9).

The site uses jQuery and jQuery UI. I added the scripts from the Google CDN as well as a fallback to local copies of the scripts. 

In the HTML, I used text instead of images where ever possible. In the CSS, I used the provided sprites for the icons and set the background positions accordingly. If JavaScript is not available, the nav links are anchored to #1, #2, #3 and so on. There are also two additional classes, ".navNoScript" and ".noScript". The "noScript" class puts the main content into a fixed height box. Links will then jump to the correct step so that all of the text content is available. The ".navNoScript" tag on the navigation adds a hover color and bold effect. 

If JavaScript is available, the ".navNoScript" and ".noScript" tags are removed, a ".hiddenOnStart" tag is added to all of the Baby Step descriptions excluding the first, and all of the hash links are replaced with void links.  

An AJAX request gathers data from the baby-steps.json file. The data is then counted and sorted by lastName, though the function could sort the data by any object value. Friends are then pushed to an array based on which step they are on. The step is determined by the "step" attribute of the link. The proper output is then sent to a div. 

