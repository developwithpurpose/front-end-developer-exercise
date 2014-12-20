/*jshint browser: true */

var _friendListing;
function friendListing(specs) {
  var self = this;
  
  var defaults = {
    autoInit: true,
  };
  
  this.specs = $.extend(defaults, specs);
  
  this.getJSONObject = function(callback) {
    $.getJSON("assets/javascripts/baby-steps.json", function(data) {
      callback(null, data);
    })
    .fail(function(error) {
      callback(error);
    });
  };
  
  this.gatherFriends = function(data) {
    var step = 1,
        friends = [],
        aF = self.orderFriends(data);
		for( var i = 0 ; i < aF.length ; i++ ) {
			if ( aF[i].babyStep === step ) {				
				friends.push(aF[i]);
			} else if ( aF[i].babyStep === (step + 1) ) {
				self.createHTML(friends, step);
				step++;
				friends.push(aF[i]);
			} else {
  			// end
			}
		}
  };
  
  this.orderFriends = function(data){
		data.friends.sort( function( l, h ){
			return l.babyStep - h.babyStep;
		});
		//console.log(data.friends);
		return data.friends;
  };

  this.createHTML = function(collection, step){
    var friends = collection.length,
        names = $(".bs" + step + "-content .friends"),
        first = collection[0],
        second = collection[1];

		if (friends === 0){
			// you need to get some friends
		} else if(friends === 1) {
			names.html( self.returnFriend(first) + " is also in Baby Step " + step);
		} else if(friends === 2) { 
			names.html( self.returnFriend(first) + " and " + self.returnFriend(second) + " are also in Baby Step " + step);
		} else if(friends === 3) {
			names.html( self.returnFriend(first) + ", " + self.returnFriend(second) + ", and 1 other friend are also in Baby Step " + step);
		} else if (friends >= 4) {
			names.html( self.returnFriend(first) + ", " + self.returnFriend(second) + ", and " + (friends - 2) + " other friends are also in Baby Step " + step);
		} else {
  		// walk away and pretend nothing happened.
		}
  };
  
  this.returnFriend = function(obj){
    var html = "<span class=\"friend-name\">" + obj.firstName + " " + obj.lastName + "</span>"; 
    return html;
  };
  
  this.init = function(){
		self.getJSONObject(function(error, data){
			if (error) {
				throw error;
			} else {
				self.gatherFriends(data);
			}
		});
  };
  
  _friendListing = self;
  self.specs.autoInit && self.init();
  
  return this;
  
}


var _contentSlider;
function contentSlider(specs) {
  var self = this;
  
  var defaults = {
    autoInit: true,
    slider: "bs-wrapper",
    sliderPager: "bs-nav-wrapper",
    slideActive: "bs-step-active",
    pagerCur: "bs-nav-active",
  };
  
  this.specs = $.extend(defaults, specs);

  // set some vars
  var i, slideItems, imgNum, imgW, imgH, icon, pText;
  //var sliderPager = document.getElementById(self.specs.sliderPager);
  var elem = document.getElementById(self.specs.slider);
  var curPos = 0;
  var curImg = 0;

	slideItems = elem.children;
	imgNum = slideItems.length;
	imgW = slideItems[0].clientWidth;
	imgH = slideItems[0].clientHeight;
	elem.style.height = parseInt(imgW * imgNum) + "px";

  $(slideItems).width(imgW);
  
  this.init = function(){
  	self.pager();
  };
  
  // Transition slide to selected content
  this.transitionTo = function(contentGoTo){
  	var dir;
  	var numImg = Math.abs(contentGoTo - curImg);
  
  	dir = curImg > contentGoTo ? 1 : -1;
  	curPos = -1 * curImg * imgH;
  	var opts = {
  		duration: 800,
  		delta: function(p) { return p; },
  		//delta: linear,
  		step: function(delta) {
  			elem.style.top = parseInt(curPos + dir * delta * imgH * numImg) + "px";
  			//$(elem).css('top', parseInt(curPos + dir /* * delta */ * imgH * numImg) + "px");
  			//console.log(elem.style.top);
  		},
  		callback: function() { curImg = contentGoTo; }
  	};

  	// Animate slider
    var start = new Date();
    var id = setInterval(function() {
      var timePassed = new Date() - start;
      var progress = timePassed / opts.duration;
  
      if (progress > 1) {
        progress = 1;
      }
      
      var delta = opts.delta(progress);
      opts.step(delta);
      
      if (progress === 1) {
        clearInterval(id);
        opts.callback();
      }
    }, opts.delay || 10);
  };

  this.pager = function(){

    var item;
  	var pager = document.getElementById(self.specs.sliderPager);
  	
  	// jQuery to the rescue
    $("#" + self.specs.sliderPager + " li:first-of-type").addClass(self.specs.pagerCur);

  	for (i = 0; i < imgNum; i++){
  		item = document.createElement("li");
  		icon = document.createElement("span");
      pText = document.createTextNode("Baby Step " + parseInt(i + 1));
  		
  		// append active class to first nav item
  		if (i === 0) {
    		item.className = "bs" + (i+1) + "-content bs-nav-active";
  		} else {
    		item.className = "bs" + (i+1) + "-content";
  		}
  		
  		icon.className = "icon icon-bs" + (i + 1);
  		
  		item.appendChild(pText);
  		item.appendChild(icon);
  		pager.appendChild(item);

      //item.addEventListener("click", sliderClick(i));
      if (item.addEventListener) {
          item.addEventListener("click", sliderClick(i));
      }
      else {
          item.attachEvent("onclick", sliderClick(i));
      }
  	}
  	
  	function sliderClick(i) {
      "use strict";
			return function(){
  			
  			$(this).siblings().removeClass(self.specs.pagerCur);
  			$(this).addClass(self.specs.pagerCur);
  			
				self.transitionTo(i);
			};
    }
  	
  };
  
  _contentSlider = self;
  self.specs.autoInit && self.init();
  
  return this;
}

$(document).ready(function(){
  _contentSlider = new contentSlider();
  _friendListing = new friendListing();
});