I was unable to test on Internet Explorer, but the site works across Chrome, Firefox,
and Microsoft Edge. I took care to choose properties that would work with IE as well.
The only difference in functionality is the animation effect. On IE9, the text will
not animate. Instead it should just instantly snap to the right section.

I used jQuery to load the dynamic content. The minified version of the library
is in the javascripts folder. I chose to load this only when the page is loaded. By
the nature of the steps, it's unlikely that people would quickly be moving through
them, so updating them every time the step is changed is unnecessary.
