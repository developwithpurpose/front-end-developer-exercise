/**
* Tab Slider
*
* @author Philip Downer <philip@manifestbozeman.com>
* @license http://opensource.org/licenses/gpl-license.php GNU Public License
* @version v1.0
*/
;(function($, window, document) {
	
	//Ensure a namespaced obj exists
	if( !$.MC ) {
		$.MC = {};
	}
	
	/**
	* CONSTRUCTOR
	*
	* @param obj el jQuery object
	* @param obj options Object literal
	* @return void
	*/
	$.MC.tabSlider = function(el, options) {
		
		//Avoid scoping issues
		var base = this;
		
		//Add the jQuery and DOM versions of the element
		base.$el = $(el);
		base.el = el;
		
		//Add a reverse reference to the DOM obj
		base.$el.data('MC.tabSlider', base);
		
		//Plugin default options
		base.defaults = {
			tabIndex: 'tab',
			initialTab: 1,
			currentTab: null
		};
		
		/**
		* GET TAB INDEX
		* Gets an integer representing the current tab index.
		*
		* @param string hash A string containing a hash and/or a tab index (e.g. 'step'
		* @return int
		*/
		base.getTabIndex = function(hash) {
			var string = hash.search('/^#/') != -1 ? hash : hash.replace('#', '');
			var arr = string.split(base.options.tabIndex);
			return parseInt(arr[1]);
		};
		
		/**
		* GET TAB NAV
		*
		* @param int index The index of the nav item to return
		* @return el The DOM element
		*/
		base.getTabNav = function(index) {
			var max = base.elements.tabNav.$items.length;
			if( index < 1 || index > max ) return base.elements.tabNav.$items[0];
			return base.elements.tabNav.$items[index-1];
		};
		
		/**
		* GET TAB
		* Get a tab's DOM element
		*
		* @param int index The index of the tab item
		* @return el The DOM element
		*/
		base.getTab = function(index) {
			var max = base.elements.tabs.$items.length;
			if( index < 1 || index > max ) return base.elements.tabs.$items[0];
			return base.elements.tabs.$items[index-1];
		};
		
		/**
		* SET TAB HEIGHTS
		* Normalizes the heights of the tab content and containers
		*
		* @deprecated In favor of setting heights via CSS
		*
		* @return void
		*/
		base.setTabHeights = function() {
			var greatestHeight = 0;
			base.elements.tabs.$items.each(function() {
				var elHeight = $(this).outerHeight();
				if( elHeight < greatestHeight ) return;
				greatestHeight = elHeight;
			});
			
			base.options.tabHeight = greatestHeight;
			base.elements.tabs.$el.css({
				height: base.options.tabHeight
			});
			base.elements.tabs.$items.css({
				height: base.options.tabHeight
			});
		};
		
		/**
		* SLIDE TO
		* Performs the sliding animation as well as setting any internal pointers.
		*
		* @param int index The number of the tab to slide to. Index starts at 1
		* @param bool force Whether to ignore checks determining whether the slide being scrolled to is the current slide. Useful for initial loads.
		* @return void
		*/
		base.slideTo = function(index) {
			var offset = index - 1 < 1 ? 1 : index-1;
			
			//Slide the tab
			var tabPosition = $(base.getTab(index)).position();
			base.elements.tabs.$wrapper.animate({
				top: tabPosition.top*-1
			});
			base.loadTabContent(index);
			
			//Slide the nav
			var navPosition = $(base.getTabNav(index)).position();
			base.elements.tabNav.$pointer.animate({
				top: navPosition.top
			});
			$(base.getTabNav(base.options.currentTab)).find('.active').removeClass('active');
			$(base.getTabNav(index)).find('.icon').addClass('active');
			
			//Update the internal pointer
			base.options.currentTab = index;
		};
		
		/**
		* LOAD TAB CONTENT
		* Issues an AJAX call requesting friends associated with the baby step. Based on the information returned the function displays the following:
		*   ~ if 0 friends, then don't show any message
		*   ~ if 1 friend, then show "Paul Taylor is also in Baby Step 2"
		*   ~ if 2 friends, then show "Thomas Harris and Sharon Thomas are also in Baby Step 3"
		*   ~ if 3 friends, then show "Deborah Lee, Shirley Perez, and 1 other friend are also in Baby Step 4"
		*   ~ if 4 or more friends, then show "Patricia Allen, Matthew Garcia, and 2 other friends are also in Baby Step 5"
		*
		* @param int index The tab index
		* @return void
		*/
		base.loadTabContent = function(index) {
			var data = $.getJSON('baby-steps.json')
				.done(function(data, status, jqXHR) {
					
					//Only select friends applicable to this step
					var friends = data.friends.filter(function(el, i) {
						return el.babyStep == index;
					}, data.friends);
					
					//Set some defaults
					var friendString = '';
					var maxDisplay = 2;
					var displayNames = [];
					var additionalFriends = friends.length - maxDisplay;
					
					//No friends
					if( friends.length === 0 ) return;
					
					//1 is the loneliest number...
					if( friends.length === 1 ) {
						displayNames.push('<a href="#" class="name">' + friends[0].firstName + ' ' + friends[0].lastName + '</a>');
					}
					
					//We have multiple friends
					else {
						//Sort by last name, then first
						friends.sort(function(a, b) {
							if( a.lastName + ' ' + a.firstName > b.lastName + ' ' + b.firstName ) return 1;
							if( a.lastName + ' ' + a.firstName < b.lastName + ' ' + b.firstName ) return -1;
							return 0;
						});
						
						//Get the display names
						for(var i = 0; i < maxDisplay; i++) {
							displayNames.push('<a href="#" class="name">' + friends[i].firstName + ' ' + friends[i].lastName + '</a>');
						}
					}
					
					//Build the string to display
					switch( friends.length ) {
						case 1://1 is the loneliest number…
							friendString = '<a href="#" class="name">' + friends[0].firstName + ' ' + friends[0].lastName + '</a> is also in Baby Step';
						break;
						
						case 2:
							friendString = displayNames.join(' and ') + ' are also in Baby Step';
						break;
						
						default:
							friendString = displayNames.join(', ') + ' and ' + additionalFriends + ' other';
							friendString += friends.length > 3 ? ' friends ' : ' friend';
							friendString += ' are also in Baby Step';
						break;
						
					}
					
					friendString += ' ' + index;
					
					//Remove any existing friends and append
					var currentTab = $(base.getTab(index));
					$(currentTab).find('div.friends').remove();
					$(base.getTab(index)).append('<div class="friends"><p>' + friendString + '</p></div>');
				});
		};
		
		/**
		* INITIALIZATION
		*/
		base.init = function() {
			base.options = $.extend({}, base.defaults, options);
			
			//Set the current tab
			base.options.currentTab = base.options.initialTab;
			
			//Check for a custom tabIndex
			var tabIndex = base.$el.data('tabsliderindex');
			if( tabIndex ) {
				base.options.tabIndex = tabIndex;
			}
			
			//Setup the items
			base.elements = {
				tabNav: {
					$el: base.$el.find('.tabNav'),
					$items: base.$el.find('.tabNav li')
				},
				tabs: {
					$el: base.$el.find('.tabContents'),
					$items: base.$el.find('.tabContents .'+base.options.tabIndex)
				}
			};
			
			base.elements.tabs.$items.wrapAll('<div class="tabWrapper" />');
			base.elements.tabs.$wrapper = base.$el.find('.tabWrapper');

			//Set the initial styles
			base.$el.addClass('tabSlider-initialized');
			
			//Load the dynamic tab content
//			base.elements.tabs.$items.each(function(i, el) {
//				index = base.getTabIndex($(this).attr('id'));
//				base.loadTabContent(index);
//			});
			
			//Insert the active indicator
			$('<span class="pointer" />').insertBefore($(base.getTabNav(1)));
			base.elements.tabNav.$pointer = base.$el.find('.tabNav span.pointer');
			
			//Check for direct tab access
			hash = window.location.hash;
			if( hash ) {
				base.options.initialTab = base.getTabIndex(hash);
			}
			
			base.slideTo(base.options.initialTab);
			
			//Attach event handlers
			base.elements.tabNav.$items.click(function() {
				var tabTarget = base.getTabIndex($(this).data('tabtarget'));
				base.slideTo(tabTarget);
				return false;
			});
		};
		base.init();
		
	};//$.MC.tabSlider()
	
	/**
	* Wrapper
	* Add the plugin to global jQuery
	*/
	$.fn.tabSlider = function(options) {
		return this.each(function() {
			(new $.MC.tabSlider(this, options));
		});
	};
	
})(jQuery, window, document);