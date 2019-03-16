Front-end Developer Exercise
============================

This is a Baby Steps web page that provides information about the 7 steps and a summary of which steps a user's friends are on.

Languages & Libraries
---------------------

The page is built on the following technologies:
* HTML
* CSS
* JavaScript
* jQuery
* jQuery UI

Baby Steps & Transitions
--------------------

The HTML makes use of jQuery UI tabs to showcase the 7 Baby Steps. This provides clean and semantic markup and handles dynamic classes for active tabs. jQuery UI also provides convenient callbacks for handling transition animations. Once brought to focus, tabs can be navigated using the up and down arrow keys.

AJAX Request
------------

The AJAX request is handled by jQuery's AJAX method. It can be used by calling the **getFriends()** function. Once the data is received, it is filtered according to Baby Step using **filterFriends()** and sorted by last name alphabetically using **sortLastName()**. Finally the data is passed to **buildHTML()** which formats it into the appropriate HTML template according to how many friends are associated with the Baby Step using. The HTML is returned to the DOM.

Compatibility
-------------

The web page has been successfully tested in the following browsers (for mac):
* Chrome
* Safari
* Firefox

It is also functional without javascript.

I didn't have access to a Windows machine for the project and I'm not aware of a technique for testing IE9+ on my environment without dual-booting (which my current machine lacks RAM for, unfortunately). I did, however, use vendor prefixes where necessary as well as avoiding trailing commas in JS series (known problems for IE). 