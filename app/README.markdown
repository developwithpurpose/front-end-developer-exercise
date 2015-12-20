## Overview
This project was coded to the spec provided.  The following are comments on the requirements/success criteria and how I approached each one.

#### semantic markup
`header`, `nav` and `section` tags were used to segment the page appropriately.  Headings were used inside of each section to provide an easy to parse page hierarchy.
#### accessible
The page is usable with and without a mouse.  Tabbing will focus each navigation item and pressing Enter will active the item, bringing the content into view.
I was unsure as to how far we should be attempting to make this page accessible, but in the end prioritized other features above this one.

Given more time, I would have likely added supporting aria tagging.
#### browser support
The page has been tested in the following OS/browser combinations:

- Windows 10 - Edge 12
- Windows 10 - IE 11
- Windows 10 - Firefox 42
- Windows 10 - Chrome 47
- Windows 10 - Opera 34
- Windows 8.1 - 11 Metro
- Window 7 - IE 10
- Window 7 - IE 9
- Window 7 - Firefox 42
- Window 7 - Chrome 47
- OS X El Capitan - Safari 9
- OS X El Capitan - Firefox 42
- OS X El Capitan - Chrome 47
- OS X El Capitan - Opera 34
- Ubuntu 14.04 - Chrome 47
- Ubuntu 14.04 - Firefox
- Samsung Galaxy S6
- iPhone 6 Plus

#### progressive enhancement
The page is completely usable without javascript.  Since no design spec was provided, I decided that I would simply list all steps and use anchors to allow for navigation.

#### javascript frameworks
I decided to use JQuery for solving both the cross-browser support issues that come with javascript, as well as the animation system.  I also used `util` from node for string formatting.

I attempted to minimize my codes direct dependency on each frameworks though, creating wrappers around key componenets.

#### animation/transitions
I opted to mimic the transition that was provided as an example.  Initially I attempted to use css transitions to provide the animation, but ran into some issues in IE11.  Once again I had to prioritize; and I didn't feel that displaying this skillset was worth the time spent in debugging a browser remotely.

#### dynamic content
I made a few assumptions during the coding of the dynamic content section of this site that I wanted to make known:

1. Each time a new step is selected, I re-fetch the json.  I realize that the json is on the file system and unlikely to change, but in the interest of building a robust system, I felt that it was more important to re-retrieve the data each time instead of fetching it once and caching it.  If the json was swapped out in the future for a real-time endpoint, the URL of the endpoint would be the only change needed.
2. There are 2 individuals named Paul Taylor, on different steps.  I assumed that this was intentional, representing two different individuals with the same name.  I decided to not do any data manipulation either to the file or on the client-side.

#### deviations from design
There was only one major deviation from the design spec provided and that was in the "baby step heading" line-height.  What is defined as font-size 30px and line-height 20px was changed to a line-height of 34px.

Helvetica font is at the discretion of the OS that the browser is running on since it is not available on CDNs.  `san-sarif` is used as a fallback in those cases.

In the annotated mock-up, the shadows on left and right of the main container show as if they are only extending as long as the height of shadow_[left/right].jpg.  I felt that when I implemented that, it looked to be a hard cut at the 724px line.  I decided to scale the shadows to the size of the container.  This is slighly off from the green highlighting in the annotated-mockup.jpg, but looks visually more like what is in the mockup.jpg

I will also note that the large blue icon sprite was not compiled with correct spacing.  While not a deviation from the visual design, it is a deviation from the designer's resource set.

I had the option to switching to individual icons for this, or to attempt to use the sprite as it was provided.  I opted for a little of both.
The sprite is used for 1-5 and 7 with custom positioning, and for 6, I used the individual image.  This allowed me to load 2 resources instead of the 7 the individual strategy would have caused.  It also allowed me to keep all images the same size, where the strict sprite strategy would not have.

#### build system
I decided to introduce a build system for this project.  While the project is small, that is only its current state and I felt the overhead of the build system was small.

The following are a few of the tasks I used and a brief explanation as to why:

**grunt**
I use grunt in a few other projects, both personally and professionally, so I felt that this was a quick win.

**grunt-contrib-jade**
From previous projects, I have found treating content as a data source to be a big advantage for a project.  I do not know who will maintain this "production application" going forward, but if the user is less technical, having content outside of markup is essential.

I also find the looping syntax in jade to be a very easy way to handle repetition in markup and the consistency issues that creates.

**grunt-sass**
I have become very fond of css preprocessors.  I had no need for mixins or functions in this project, but even the ability to use variables and loops was a nice to have.

(I do think that scss can lead to some major specificity issues if used without reason)

**grunt-browserify**
I decided to use browserify for my concatentation.  I had not used it in any projects before, so it was a learning experience for me.  I initially rolled up jquery with my custom code, but found that build process to be heavy.  I decided to switch to a cdn for jquery to provide faster turn around time during development.

**grunt-contrib-jasmine**
Most of my unit testing experience in javascript has been with jasmine, so it was a good fit for getting the scaffolding up quickly.

I did run into a lot of uncomfortable testing scenarios where I had trouble handling mocking and the use of jquery.  In the end, I was unable to fully unit test the code I had written.

###Notes
1. To test progressive enhancement, I added a "nojs" query parameter check to my code.
2. I would have liked to drop the use of header_text and simply style real text over the image, but again, other items were prioritized.
3. I would have also liked to write some integration tests with a headless browser, but I have not used one of those frameworks in javascript, so my effort was spent elsewhere.