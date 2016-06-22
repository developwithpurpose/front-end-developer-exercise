# Front-End Developer Excercise

## Synopsis

I chose the popular jQuery library for the functionality of the project. Other tools/libraries used:

* Grunt
* SASS
* Modernizr
* Various standard Node.JS packages for Linting, uglifying, etc.

### Process

1. I setup a simple SASS framework with a few of my favorite mixins and functions to give a good overview of how I typically approach front-end development. If this were to always be a one-off landing page, I'd probably simplify a bit. My intent was to show how the development can start with the basics, while still ensuring future scalability.
1. Several of the large image sprites didn't adhere to the grid very well. Slight modifications ensure that future images could easily be added, while providing consistency across the board for this project.
1. I'm using the Modernizr library to ensure that we can do feature detection and progressive enhancement based on the capabilities of the browser. In this case, just ensuring that a nice layout is provided if JavaScript is disabled.

### Deviations

1. Baby Step 3 - Changed spelling of "exepenses" to "expenses".
1. Friends - Minor changes to the spelling and punctuation to remove an incorrect comma from the documented style.
1. Friends - There appears to be a slight deviation in the annotated mockup concerning the "Friends" font-weight. I erred on the side of using the same font size and weight as the body copy (per the spec). However, in the mockup it appears to be a bolder weight.
1. Tab Navigation - It wasn't immediately clear whether the indicator showing the active tab should have a 1px border across the top when the first Baby Step is selected. The provided 'resources/transition-example.gif' seemed to indicate this was desired. If not, it's easily removed.

### Recommendations

1. Enlarge the font sizes and increase the line-height (leading) for the body copy to make the design more legible.
1. Depending on the final usage and data source, it would be advisable to refactor by splitting the AJAX call out of the tab slider and make it a standalone script. This would ensure that just the UI features of the tab slider could be utilized. However, for this project this seemed like the most direct approach. Optimization could also be performed to avoid making the same AJAX call each time a tab is loaded.

## Using the tab slider

There are several existing jQuery plugins that would provide this functionality off-the-shelf, but I assume you'd like to see some actual code written by a prospective employee. :-)

My approach was to make the tab slider script as modular as possible, by ensuring that it could be used elsewhere in the UI, should that be needed. You're also able to directly link to a tab using it's associated anchor (eg. "mydomain.com/#step3").

The index that's used to name tabs can be configured on a per-usage basis by assigning the "data-tabSliderIndex" property in the HTML. This allows future flexibility should the tab slider UI be used for something other than baby steps.

### Initialization & Configuration

1. Initialize by attaching the "data-tabSlider" property to any HTML element.
1. Required sub-elements are an .tabNav element, containing a list of tab elements as well as a .tabContents element, containing a hierarchy of elements with corresponding id attributes. For example:
1. Set the height of your individual tab's content (eg. tabContents > article) explicitly in your CSS.

```html
<section>
	<nav class="tabNav" data-tabSlider>
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

### Using customized tab names (eg 'step')

Follow the same convention as above, but add the data-tabSliderIndex property to the containing element. See the example below:

```html
<section>
	<nav class="tabNav" data-tabSlider data-tabSliderIndex="step">
		<ol>
			<li data-tabTarget="step1"><a href="#tab1">Tab One</a></li>
			<li data-tabTarget="step2"><a href="#tab2">Tab Two</a></li>
		</ol>
	</nav>
	<div class="tabContents">
		<article id="step1"></article>
		<article id="step2"></article>
	</div>
</section>
```