# Dave Ramsey Front-End Developer Challenge
Completed by Joby Rudolph | **08.11.2019**

- This solution uses css box-shadow property instead of image based shadows, for performance and simplicity. All target browsers including IE 9 support the box-shadow property.
- The best I could do for actually testing in IE 9 was use IE and Edge's emulation mode. If I were in a situation that actually required IE 9 still ;) I would request a subscription to Browserstack.
- Had this been a true production deploy, I would have spent some time looking into 3rd party vertical slideshow plugins for jQuery in order to take advantage of a more mature solution and better support. However, I figured you may be more interested in seeing my code instead of pulling in a bunch of plugins. I do think it's wise to consider the balance of keeping things lean with homegrown solutions vs using plugins.
- Sprites - I would have preferred to use image sprites, especially to eliminate the brief flash of the menu icon in the hover state as the blue icon is loaded initially. However, the sass I used to compute the styles, assuming each icon was 65px high, wasn't quite lining up right. I ran out of time to figure that out...but I would likely not deploy a solution until it was using the sprites.
- Not sure I understand the gradient spec in the menu sidebar. Is that the background? Or is that for the inset shadow that's seen on the right hand side? I'd ask for clarification on that.
- I chose a minimal effect for menu animation...a basic fade. This was mostly due to time constraints with the 4 hour suggested limit.

Thank you!
