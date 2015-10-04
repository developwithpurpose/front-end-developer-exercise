$( document ).ready(function() {
	$('body').addClass('js');
	SocialSteps.init();		
    TabbedContent.init();
});

var TabbedContent = {
    init: function() {
		$('nav li a').first().addClass('active');
		
		$('nav li a').on('click', function(event) {
			$('nav li a').removeClass('active');    
			$(this).addClass('active');

			TabbedContent.slideTabBg($(this));
			TabbedContent.slideContent($(this));
			
			event.preventDefault();
		});
    },

	slideTabBg: function(tab) {
		var bgObj = tab.parents('nav').find('.moving-bg');
		var bgMarginTop = parseInt( tab.parents('ol').css('marginTop') );
		$(bgObj).stop().animate({
			top: tab.position()['top'] + bgMarginTop
		}, 800, 'swing' );
	},

    slideContent: function(tab) {
		var sectionObj = tab.parents('div.content').find('section');
		var articleObj = tab.parents('div.content').find('article');
		var tabNum = tab.parent().prevAll().length;
		
		var margin = articleObj.height() * tabNum * -1;
		
		sectionObj.stop().animate({
			marginTop: margin + "px"
		}, 800, 'swing' );
    }
}

var SocialSteps = {
	init: function() {
		$.getJSON('baby-steps.json', function(data) {
			totalSteps = 7;
			
			_.times(totalSteps, function(n) {
				var thisStep = n + 1;
				
				var friends = _.where(data.friends, { babyStep: thisStep });
				
				var socialText = SocialSteps.getText(friends, thisStep);
				
				if(!_.isEmpty(socialText))
					$( "article#baby-step-" + thisStep ).append('<p class="social">' + socialText + '</p>');
			});
		});
	},
	
	getText: function(friends, thisStep) {
		friends = _.sortByAll(friends, ["lastName", "firstName"]);
		
		var socialText = "";
		switch(_.size(friends)) {
			case 0:
				break;
			case 1:
				socialText =
					SocialSteps.displayName(friends[0]) + " is also in Baby Step " + thisStep;
				break;				
			case 2:
				socialText =
					SocialSteps.displayName(friends[0]) + " and " +
					SocialSteps.displayName(friends[1]) + " are also in Baby Step " + thisStep;
				break;
			case 3:
				socialText =
					SocialSteps.displayName(friends[0]) + ", " +
					SocialSteps.displayName(friends[1]) + ", and 1 other friend are also in Baby Step " + thisStep;
				break;
			default:
				var otherFriends = _.size(friends) - 2;
				socialText =
					SocialSteps.displayName(friends[0]) + ", " +
					SocialSteps.displayName(friends[1]) + ", and " + otherFriends + " other friends are also in Baby Step " + thisStep;
				break;
		}
		return socialText;
	},
	
	displayName: function(friend) {
		return '<a href="">' + friend.firstName + ' ' + friend.lastName + '</a>';
	}
}