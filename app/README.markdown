I made the webpage as a centered page that is split into 3 sections: the header, the side tabs, and the content. 

I used a box shadow to add the shading around the page, and a gradient to shade the buttons.

To create the buttons, I used html anchors and displayed them as blocks. This allows the content to be changed without linking to a whole new webpage and without using javascript, by using the :target selector.

The transition was done with an animation. The intention was to give the appearance of the content sliding open from behind the tabs. I used CSS animations to do this without javascript. I also had to change the z-index of the content, tab, and page sections, so the text would be behind the tabs, but in front of the page. And I changed the overflow settings of the page, so the text would not show up until it was inside the page.

Without Javascript, the friend finding feature will not be used. This means the paragraph where that would normally be printed will just remain blank. 
Also, the tabs will not get highlighted. The content will still appear and slide out though, so this does not change the usability of the page. 
