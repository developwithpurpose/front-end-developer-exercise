Andrew Stonecipher
andrew.stonecipher@hotmail.com
904-405-2609


Tab Groups were used to display content even on a Browser that does not have JavaScript turned on.
Transitions used are a combination of content moving and fading. When Dynamic Content is loaded, that
is also delayed to ensure that the correct tab content is loaded.

I had issues on initial page load where the Baby Step 1 tab would not properly style. 
To compensate for that, on page load JQuery clicks the first tab. This corrected the issue, but would 
give a slightly different experience if JQuery were to not load.

Going with the intent of the Dynamic Content and not the litteral, Names are not in the same order. 
The names, count, and step are dynamically generated and in the event that JavaScript is turned off, 
the message is hidden entirely.


Overall, it was a fun project and not something that I would normally do. I have been intently focused 
on Mobile First design aspects for all web work I have done in the last few years. Researching how to deal
with content loading in the event that JavaScript is turned off surfaced a problem that I have not encountered 
for a long period of time.