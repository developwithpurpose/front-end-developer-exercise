## Introduction
This is  a front end code submission for Ramsey Solutions. Enjoy!


## Divvying up the work
As I thought about the assignment, two major aspects of the work emerged:

**Visual layout**
- Lines in left nav
- Vertical alignment in header
- Banner text
- Spacing
- Transition tweaks
- Browsers and non-javascript

**Interaction and behavior**
- Animations on nav and main body
- Display of friends


## Prioritization and Time Budgeting
Given the time constraints, my goal was to get as much of the plumbing to work within the allotted time. I decided to split up the time into 2 x 2 hour blocks, corresponding to 1) Visual layout and 2) Interaction and behavior, spanning a couple of days each. I aimed to give myself a short break after every hour block. In an effort to capture the development process, multiple commits were added along the way and a tag was created after each hour. Perform `git tag -n` to see the tagged milestones with the `H_MM` format, indicating commits at respective times. For example, Tag `4_03` indicates a 4:03 time.

Here are convenience links to each of the tags:
[Commits at 1:11](https://github.com/phirefly/front-end-developer-exercise/releases/tag/1_11)

[Commits at 2:03](https://github.com/phirefly/front-end-developer-exercise/releases/tag/2_03)

[Commits at 3:35](https://github.com/phirefly/front-end-developer-exercise/releases/tag/3_35)

[Commits at 4:03](https://github.com/phirefly/front-end-developer-exercise/releases/tag/4_03)


## Post Time Limit
The four hour mark left much to be desired. The work ahead included a couple of elements:

* Writing specs for the “friends callout” display
* Tightening up the design e.g. alignments and refactoring

`<forgiveness-plea>`Writing specs are a joy its own, so I couldn't help but plow ahead.`</forgiveness-plea>` Although the commits after tag `4_03` are beyond the time limit of the exercise, I hope the additional work will be valuable for further discussion about the development process.

Reference:
https://github.com/phirefly/front-end-developer-exercise/blob/master/spec/ramseyFrontendSpec.js

To see the specs run, go to `SpecRunner.html?random=true` in your browser.


## Next Steps and Improvements
The following are immediate considerations for continued development:
* **Additional visual design tweaks.** Example: a simple fade in animation of the main content may be more appropriate than a scroller
Reference: https://github.com/phirefly/front-end-developer-exercise/blob/master/app/assets/javascripts/ramsey-test.js#L5-L11
* **Browser considerations.** Test in multiple versions, based on usage data
* **Pull code out of the global namespace.**
Reference: https://github.com/phirefly/front-end-developer-exercise/blob/master/app/assets/javascripts/ramsey-test.js#L148-L150
* **Add more automated tests.** For example, this method is noteworthy https://github.com/phirefly/front-end-developer-exercise/blob/master/app/assets/javascripts/ramsey-test.js#L47 because it separates the markup from the text output in https://github.com/phirefly/front-end-developer-exercise/blob/master/app/assets/javascripts/ramsey-test.js#L85-L94
* **Make the code reusable.** The JSON loader/parser and Friends Callout would be good candidates for using in other places
References:
https://github.com/phirefly/front-end-developer-exercise/blob/master/app/assets/javascripts/ramsey-test.js#L56
https://github.com/phirefly/front-end-developer-exercise/blob/master/app/assets/javascripts/ramsey-test.js#L85-L94


## Other
* Non-javascript version is a simple flat layout. The lack of navigation is intentional.



