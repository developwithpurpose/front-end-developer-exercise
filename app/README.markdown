My strategy was to start with IE9 + No JS support as
I presumed this would be the most difficult part. I then
used JavaScript + jQuery to get around annoyances that I wasn't able
to work out without it, and then of course the dynamic content.

For large "real" applications, I'd typically want to add:
- Appropiate CI scripts to build, test, and deploy (I personally favor gitlab)
- A packager like webpack, allowing for more organized code into sane file divisions.
- Use Karma + Jasmine for unit testing.
- Use Babel to allow for modern syntax on older browsers.
- JSDoc documentation and templates for viewing the documentation.

I understood this to be more of an exercise of HTML and CSS with small amounts of JS, so I tried to spend my time on these things instead of the above.

### Intentional...oversights.
- Animation. I'm not going to claim this is my strong suit. It became a bit of a hassle and decided to spend my time elsewhere.
- White backround of selected menu item. Again, didn't think this one out at the beginning, didn't look right tacking it on after the fact.

### IE9 Deveiations
- Gradient on left missing. This should definitely be possible, just didn't work the first try and decided to spend my time elsewhere.

Note: I used IE9 emulation in IE11 for testing against it along with MDN to check support.

### Non-Javascript deviations
- "Baby Step 1" not highlighted even though it's selected. In the time given I was not able to find a good way to do this without JS.
- Jumps when clicking the buttons.