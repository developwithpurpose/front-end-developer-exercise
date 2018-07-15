# My Submission

## HTML

This a HTML5 document using semantic elements.

The head element contains the usual Google Fonts, favicon, and stylesheet reference. In addition there is a IE conditional comment to allow IE9 to download a specific stylesheet as well a polyfill for classlist. This has allowed for modern markup but still support the older IE9.

The body has a class "nojs". This was primarily to support the non-javascript requirements of the project.

The header is a standard banner with positioned text.

The collection of buttons on the left are contained within a nav element as links. Normally I would prefer to do this with the button element instead of anchors. Since the links do not point to a network resource but is intended to cause a change in the page, the button element would be better. But to support some functionality without javascript I opted to allow for use of the :target pseudo-class in the stylesheet to change the current text to the one selected. The non-js version does not support an active state on the buttons; such a thing is possible but requires the use of radio buttons in a non-standard way. I felt that was too much for this project. Javascript version has active states and a slightly more involved animation on the transitions.

There is a container for each of the baby steps text as articles. Each article is hidden and positioned by default. Clicking the appropriate button shows the related article. There is an empty paragraph in each article for the placement of the list of friends to be displayed when relevant.

HTML ends with javascript references to a small ajax library and the main javascript of the page.

I first built the page with no javascript code to verify the non-js functionality. Then I went with the progressive enhancement route with the javascript.

## SCSS

This project uses Sass for css coding.

There is an import for the Meyer reset as well as the Paul Irish border-box code. Just my preferences.

I did not use any variables as there's very little repeatable property values in the code.

There is an avoidance of using ids in the stylesheet as much as possible. The only real use is in case of very specific icons to be placed at the top of each article. The articles already had ids for the purposes of being targetable by the links on the left. Otherwise, a typical parent-child type naming scheme was used for naming classes and being to make use of the Sass ampersand.

I made liberal use of nesting and the convenience of the Sass ampersand. Since I was using the ampersand as a shortuct for combining text for classnames (for example: &-button), I typically placed comments next to each selector as to the actual class name to be generated. This helped with searching out specific class names when editing.

I decided to make use of the png spritesheets for the icons to reduce http requests. Hard-coded background positions for each icon made for easy placement. Notice the use of attribute selector to target elements without having to create specific class names or ids. For example: `&[href$="_1"]::after`

The icon code could possible have been reduced down to a Sass function call of some sort, but some of them required slight differences in positioning that did not follow a math pattern. A change to the spritesheet to a stricter grid would allow for this.

The IE9 stylesheet is very minimal. Changes to account for the lack of flexbox and linear-gradient support was needed.

## Javascript

I decided to make use of vanilla javascript as much as possible. As indicated before, there is a polyfill for classlist and a small ajax library included. The rest is straight forward vanilla javascript that wouldn't require a transpiler of some sort and is mostly supported in IE9 forward. I suppose using jQuery would have allowed for less code in some places, but the modern DOM apis are so nice.

First thing was to remove the nojs class from the body element.

The next section of code deals with setting up the links for click events and their click handler. Fairly straight-forward code to add/remove class to the articles to have them transition in and out as needed. I would have preferred using an animationend event instead of that setTimeout, but that would not work in IE9. I did not wish to introduce another third-party solution for such a simple task.

The small section is to cause the first article to appear by default on page load. Normally this would be handled by having the classes already on the elements in the HTML, but needed to support no javascript. One way I would have suggested handling this was having text instructing the user to select a baby step that would only appear when the body element had the nojs class. It would easy enough to accomplish but I elected to stick with the comp as provided. It would be something to discuss with a designer.

The last of the code is the ajax for the dynamic list of friends. The data is pulled in from the json file and then sorted out to an array that has an entry for each baby step. That is then used as the basis to determine the text to create for each article. The text generation is a bit heavy-handed in the hard-coded values being inserted into a string, but since the rules associated were so strict it seemed the easiest way to handle it without making an overly complicated looping structure. I almost had an if vs else-if vs switch crisis debate and just went with else-if.

## Testing

Tested on Firefox and Chrome for Windows and everything works as expected.

Testing for the various flavors of IE was performed by opening the dev tools in IE11 and forcing the renderer back to IE10 and IE9. This isn't really proper test as their can be differences between this and the actual browser at those versions. But for this it should suffice. The only major difference is the transition/animation are not present in IE9 when changing articles.

I do not have Edge so I didn't test in that browser. But I would assume it would show similar results from Firefox and Chrome.

The page should be fairly semantic for accessibility concerns with the HTML5 elements. My normal way of testing acceissiblity is with the VoiceOver reader in OSX. Unfortunately I did not have access to a Mac for this project. Therefore testing mostly involved verifying I could tab through the links on the left, select each in turn, and the related article would appear. Also, AXE shows some color choices do not pass the contrast test. That would trigger a discussion with a designer.

## Final

All in all, a nice little challenge with the IE9 and no javascript requirements. Turned out nice only needing a few adjustments for IE9, much less than I initially was concerned about.