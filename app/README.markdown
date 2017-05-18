Front-end Developer Exercise - Keith's Solution
=============================================

Below are the considerations I made while working on this solution.
Overall most of initial decisions stemmed from the requirements of being accessible,
semantic and able to work without Javascript. Thank you!

Page Structure
--------------

* In order to make the page semantic, I wanted to make use of all the modern HTML5
tags and features - Including <nav> for the side navigation, <section> for
logical breaks of content, and <header> for the top section of the page. I also
made sure to include alt text for any <img>s.

* For accessibility, I wanted to make sure all the visual text
would be written as text on the page in order the screenreaders to read out properly
Unfortunately, due to time constraints I had to make use of some of the image resources directly that contained text - Specifically the header section for each baby step content.
I made sure to cover the context of the image in the alt attribute.

Styles
------

* I used the annotated mockup as a reference for the design details. Since some
of the details didn't have the same look on the browsers, I had to
make a few adjustments in to the CSS itself to just get that 'just right' look.

* I had a bit of trouble making the right edge of the navigation button look
the right shade and depth as on the mockup using the recommended gradient values.
Instead I was able to achieve the right look with an inset box-shadow color at the
end of the gradient spectrum on top of the beginning gradient background color.

* Because I started to create the structure of the page before I did the css,
I tried to challenge myself to style the structure I started with.
This includes making use of an <a> within an <li> for the side navigation because
I wanted to style the <li> independent of the <a>. It also impacted the way I made each
section visible since it was a separate section from the link itself.

* I wanted to use the sprite for the icons next to the navigation links but I
didn't notice that resource a bit too late. Instead I'm hoping the server can make use of some optimization strategies like HTTP2 to improve the performance. Since these images are quite small I think we'll be ok =)

 * I wanted to make sure to do as many of the transitions in CSS since I
 didn't want to rely on Javascript. I ended up not using the transitions for
 the non-Javascript version but it was a good challenge none the less.

JavaScript
----------

* Since we wanted to make sure the page worked without JavaScript I had to be
mindful to only include features in JavaScript that could only be accomplished there.
Ultimately this was the dynamic content reading of the friends JSON file.

* For each side navigation baby step, the link redirected to a separate page by
default. If JavaScript was enabled it would prevent this behavior and would only transition
the content through the CSS class' styles. If JavaScript was not available, the
browser would redirect to the specific baby step page with all styles highlighted by
placing the active class on the appropriate elements - No need for a separate CSS file.

* I made use of the jQuery and Lodash libraries for brevity and readability. I also modularized the different pieces of logic into it's own pure functions.

* For the dynamic content from the JSON, I broke into 4 main pieces - retrieve
the content, sort by last name, create clean object, and append to the DOM. I created
a function for each step trying to reduce the side effects with the exception of
the DOM manipulation.

* Since I was appending the friends to the section on page load, I triggered a
click on the first link only after all the data was received.

Final Thoughts
--------------

* In order to get things production ready, I ran the code through a minification,
uglifying and autoprefixing process but the original full files can be viewed in
the app/stylesheets/ and app/javascripts directories.

* Overall the time boxing helped force me into a pattern and structure I had to
make work based on my initial architecture and assumptions.

* Some improvements I would have made are the following:
  - Persist the result of the data parsing instead of running
  through the parsing each time on page load.
  - Offload the parsing of the friends file to be asynchronous.
  - Optimize the parsing algorithm to sort and create the object in one iteration.
  - Offline ready through caching.


This assignment was put together with a lot of thoughtfulness and the resources were wonderful to work with! I'm a backend developer by trade, so this entire experience was a blast! Thanks for the opportunity.

**"A full stack developer is someone who can create tech debt at any layer of the stack."**
