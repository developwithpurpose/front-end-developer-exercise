Complete App
============================

By: Bryan Ricci

CSS
---------

/assets/stylesheets/index.css

TAGS
* body
* h3
* h4
* li a
* ul
* p

IDS
* sideBarMenu
* slideSelect
* tabSelect

CLASSES
* container
* header
* header > h1
* header > h2
* lg-img
* main-display
* main-display-friends
* main-display-friends > a
* main-display-screen
* main-display-table-space
* side-bar-menu-tab
* side-bar-menu-text
* sm-img
* steps

FONTS
* OpenSans-Bold
* OpenSans-Light
* SourceSansPro-Light
* SourceSansPro-Regular
* SourceSansPro-SemiBold

JavaScript
------------

/assets/javascripts/index.js

document.ready
* set tab to 1
* change tab 1 color to #36abe1
* change tab image to /assets/images/icons/individual/icons_small_bs1_blue.png
* init function to find friends

window.bind.hash
* changes tab based on hash value
* changes slide based on hash value

clearBtnHighlights
* clears highlighted colors from tabs

findFriends
* XRH request to baby-steps.json to get information on friends and organizes by alphabetical order

organizeFriends
* determines which friends are in which steps and creates pertaining arrays to be used in displayFriends function

displayFriends
* outputs friends currently in baby steps to index.html

HTML
----------------

Works with and without JavaScript, without having to make any adjustments

Note
---------

Thanks again!
 
Best Regards,
Bryan Ricci