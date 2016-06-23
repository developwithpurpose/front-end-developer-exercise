# Front-End Developer Excercise

## Synopsis

I chose the popular jQuery library for the functionality of the project. Other tools/libraries used:

* Grunt
* SASS
* [Modernizr](https://github.com/Modernizr/Modernizr)
* Various popular Node.js packages for concatenation, linting, uglifying, etc.

### Overview

1. I setup a simple SASS framework with a few of my favorite mixins and functions to give a good overview of how I typically approach front-end development. If this were to remain a one-off landing page, I'd probably simplify a bit. My intent was to show how the development can start with the basics, while still ensuring future scalability.
1. Several of the large image sprites didn't adhere to the grid very well. Very slight modifications to the .png files ensure that future images could easily be added, while providing improved consistency across the board.
1. I'm using the Modernizr library to ensure that we can do feature detection and progressive enhancement based on the capabilities of the browser. In this case, I'm just ensuring that a nice layout is provided when JavaScript is disabled.

### Deviations

1. *Baby Step 3* - Changed spelling of "exepenses" to "expenses".
1. *Dynamic Content user story* - Minor changes to the spelling and punctuation to remove an incorrect comma from the documented style and better adhere to the mockup.
1. *Dynamic Content user story* - There appears to be a slight deviation in the annotated mockup concerning the "Friends" font-weight. I erred on the side of using the same font size and weight as the body copy (per the spec). However, in the mockup it appears to be a bolder weight.
1. *Dynamic Content user story* - Criteria specified that names should be sorted by last name, in ascending order. In some use cases, there are friends with the same last name. In these instances, the friend's first name is taken into account ensuring it's sorted in true ascending order. See "Baby Step 6" for an example.
1. *Tab Navigation* - It wasn't immediately clear whether the indicator showing the active tab should have a 1px border across the top when the first Baby Step is selected. The provided 'resources/transition-example.gif' seemed to indicate this was desired. If not, it's easily removed via CSS positioning.
1. *Open Graph & Favicon* - These are copied directly from the DaveRamsey.com home page and could/should be customized.

### Recommendations

Following are the recommendations that I would make when reviewing the project with the project's team.

1. Enlarge the font sizes and increase the line-height (leading) for the body copy to make the design more legible.
1. Depending on the final usage and data source (eg. Facebook API), it would be advisable to refactor by splitting the AJAX call out of the tab slider and make it a standalone script. This would ensure that just the UI features of the tab slider could be utilized. However, for this project this seemed like the most direct approach. Optimization could also be performed to avoid making the same AJAX call each time a tab is loaded and to provide caching.
1. Converting the icons to an SVG format would be advisable. This would ensure that the colors and other properties could be changed directly within CSS without the need to maintain separate images/sprites. It appears that necessary vector information is available in the PSD file.
1. SEO - Obviously this project isn't meant to show search engine optimization or lead conversion possibilities, but a discussion would be needed to determine the page's target keywords, page title, description, conversion funnel, call to action, etc.

## Using the tab slider

There are several existing jQuery plugins that would provide this functionality off-the-shelf, but I assume you'd like to see some actual code written by a prospective employee. :-)

My approach was to make the tab slider script as modular as possible, by ensuring that it could be used elsewhere in the UI, should that be needed. You're also able to directly link to a tab using it's associated anchor (eg. "mydomain.com/#step3") thus ensuring that if the tab is linked in social media or e-mail the proper content is loaded on the first page view.

All of the elements that relate to the animation are only loaded when the jQuery plugin is instantiated. This ensures the cleanest markup for screen readers, search crawlers and those using assistive devices or browsers where JavaScript is unavailable.

The index that's used to name tabs can be configured on a per-usage basis by assigning the "data-tabSliderIndex" property in the HTML. This allows future flexibility should the tab slider UI be used for something other than baby steps. In the project files we're using a tab index named "step" to ensure that each tab has a logical name/anchor associated with it (eg. "step1" and "step2"). The default option is to use a tab index imaginatively named "tab". This gives anchors like "tab1" and "tab2".

### Initialization & Configuration

1. Initialize by attaching the "data-tabSlider" property to any HTML element.
1. Required sub-elements are (1) a '.tabNav' element, containing a list of tab elements, and (2) a '.tabContents' element, containing a hierarchy of elements with corresponding id attributes. See the first example below.
1. Set the height of your tab content ('tabContents > article' in the following example) explicitly in your CSS. Each tab should have the same height.

#### Default Usage Example

```html
<section data-tabSlider>
	<nav class="tabNav">
		<ol>
			<li data-tabTarget="tab1"><a href="#tab1">Tab One</a></li>
			<li data-tabTarget="tab2"><a href="#tab2">Tab Two</a></li>
		</ol>
	</nav>
	<div class="tabContents">
		<article id="tab1"></article>
		<article id="tab2"></article>
	</div>
</section>
```

#### Customized Tab Names Example

Follow the same convention as above, but add the data-tabSliderIndex property to the containing element. See the example below to provide anchors named "step1" and "step2":

```html
<section data-tabSlider data-tabSliderIndex="step">
	<nav class="tabNav">
		<ol>
			<li data-tabTarget="step1"><a href="#step1">Tab One</a></li>
			<li data-tabTarget="step2"><a href="#step2">Tab Two</a></li>
		</ol>
	</nav>
	<div class="tabContents">
		<article id="step1"></article>
		<article id="step2"></article>
	</div>
</section>
```

### Known Limitations of the Tab Slider

1. Further customization could be provided to ensure that multiple instances of the tab slider could exist on the same page.
1. Future versions could remove the need to explicitly set the height of tab content.