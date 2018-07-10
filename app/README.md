Front End Developer Exercise
=============================


Technologies Used
---------------------
* HTML
* CSS
* Javascript
* jQuery
* Bootstrap

For this project I used Bootstrap grids for the layout. I did this because, even though it was not required, it is one of the simplest ways to quickly create a responsive layout. Per the success criteria stating that the page needed to be usable without Javascript, I only used JS when necessary.

Main Container and Site Header
------------------------------
* After setting the width of my `body-wrapper` <div>, I started on the page content. First was the site header which is just a simple <div> and <img>.

Main Content Container
--------------------
* Laid out the navigation and baby steps in to two tables using bootstrap.

Navigation
--------------------
* Used a <ul> tag for the navigation. Each <a> uses a hash-link to jump to the baby step. When the `document` loads, using jQuery, baby step one loads the class `a-focus` which changes the link text to `#36abe1` and the image to its blue counterpart.

Baby Steps
--------------------
* All of the baby steps are wrapped in a <div> scrollview. I did this in order to display only one step at a time and keep it all on the same page. My original idea was to set `visibility` to `hidden` when a table was active. I would've used a JS function to change the state of each baby step. I chose not to do this because the page needs to work without javascript.

Dynamic Content
--------------------
* After a sucessful ajax request, I created 7 empty arrays that will populate all the users according to which baby step they are on. I accomplished this by using a `for` loop. Inside this loop is an `if else` statement with condidtions that pertain to the 7 different baby steps. If the statement is true, the user is pushed to one of the corresponding arrays that were created earlier, and the array is sorted by last name ascending.

* The users are then appended to the page at the corresponding baby step. This is accomplished by using another set of `if else` statements that places the user in a <p> tag and inside of a string.

