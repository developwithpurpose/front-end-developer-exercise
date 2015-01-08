$(document).ready(function() {
  
	//Content Viewer Information
	function checkViewers() {
		$('div.viewed').each(function() {
			//Base Variables
			var viewer = $('span.user', this);
			var totalViews = viewer.length;
			var shortenViews = viewer.length -2;
			var spanCount = $('span', this);
			
			if (totalViews === 0) {
				$(this).append('<span></span>');
			}
			if (totalViews == 1) {
				$('<span> is also in Baby Step </span>').insertAfter(viewer.last());
			}
			if (totalViews == 2) {
				$('<span> and </span>').insertAfter(viewer.first());
				$('<span> are also in Baby Step </span>').insertAfter(viewer.last());
			}
			if (totalViews >= 3) {
				$('<span>, </span>').insertAfter(viewer.first());
				$('<span class="additional"> and </span>').insertAfter(viewer.eq(1));
				$('<span class="count"></span>').insertAfter($('span.additional', this));
				$('.count', this).append(shortenViews + ' Other Friends');
				$('<span class="other"> are also in Baby Step </span>').insertAfter(viewer.last());
				viewer.slice(2).hide();
			}
		});
	}
    
	//JSON Data
	var xhr = new XMLHttpRequest();
  
	//Sort Alphabetically
	function SortAlphabetically(a, b) {
		a = a.toLowerCase();
		b = b.toLowerCase();
		
		return (a < b) ? -1 : (a > b) ? 1 : 0;
	}
  
	xhr.onload = function() {
		if (xhr.status === 200) {
			responseObject = JSON.parse(xhr.responseText);
			responseObject.friends.sort(function(a, b) {
				return SortAlphabetically(a.firstName, b.firstName);	
			});

			for (var i = 0; i < responseObject.friends.length; i++) {
				var obj = responseObject.friends[i];
				//var babyStepNum = $('#stepContent .babyStep');
				if (obj.babyStep == 1) {
					$('#stepContent .babyStep:nth-child(1) div.viewed').append('<span class="user">' + obj.firstName + ' ' + obj.lastName + '</span>' + ' ');
					$('#stepContent .babyStep:nth-child(1) div.viewed span').last().after('<span class="babyStepNumber">' + ' ' + obj.babyStep + '</span>');
				}
				if (obj.babyStep == 2) {
					$('#stepContent .babyStep:nth-child(2) div.viewed').append('<span class="user">' + obj.firstName + ' ' + obj.lastName + '</span>' + ' ');
					$('#stepContent .babyStep:nth-child(2) div.viewed span').last().after('<span class="babyStepNumber">' + ' ' + obj.babyStep + '</span>');
				}
				if (obj.babyStep == 3) {
					$('#stepContent .babyStep:nth-child(3) div.viewed').append('<span class="user">' + obj.firstName + ' ' + obj.lastName + '</span>' + ' ');
					$('#stepContent .babyStep:nth-child(3) div.viewed span').last().after('<span class="babyStepNumber">' + ' ' + obj.babyStep + '</span>');
				}
				if (obj.babyStep == 4) {
					$('#stepContent .babyStep:nth-child(4) div.viewed').append('<span class="user">' + obj.firstName + ' ' + obj.lastName + '</span>' + ' ');
					$('#stepContent .babyStep:nth-child(4) div.viewed span').last().after('<span class="babyStepNumber">' + ' ' + obj.babyStep + '</span>');
				}
				if (obj.babyStep == 5) {
					$('#stepContent .babyStep:nth-child(5) div.viewed').append('<span class="user">' + obj.firstName + ' ' + obj.lastName + '</span>' + ' ');
					$('#stepContent .babyStep:nth-child(5) div.viewed span').last().after('<span class="babyStepNumber">' + ' ' + obj.babyStep + '</span>');
				}
				if (obj.babyStep == 6) {
					$('#stepContent .babyStep:nth-child(6) div.viewed').append('<span class="user">' + obj.firstName + ' ' + obj.lastName + '</span>' + ' ');
					$('#stepContent .babyStep:nth-child(6) div.viewed span').last().after('<span class="babyStepNumber">' + ' ' + obj.babyStep + '</span>');
				}
				if (obj.babyStep == 7) {
					$('#stepContent .babyStep:nth-child(7) div.viewed').append('<span class="user">' + obj.firstName + ' ' + obj.lastName + '</span>' + ' ');
					$('#stepContent .babyStep:nth-child(7) div.viewed span').last().after('<span class="babyStepNumber">' + ' ' + obj.babyStep + '</span>');
				}
			}

			//Update Viewer Section
			checkViewers();
          
		}
	};

	xhr.open('GET', 'baby-steps.json', true);
	xhr.send(null);
			
	//Current Step Selection
	var step = $('.step');
	var currentStep = $('.currentStep');

	var activeIcon = $('img').last();
	var stepContent = $('#stepContent section');
	
	step.eq(0).addClass('currentStep');
	//$('step:first-child img:last-child').css('display', 'block');
	//$('.step img:last-child').not('.step:first-child img:last-child').css('display', 'none');
	stepContent.not(stepContent.eq(0)).css('opacity', '0');
	
	function iconSwap() {
		//Animate Sidebar and Swap Content
		if (step.eq(0).hasClass('currentStep')) {
			$('.step-01 img:last-child').css('display', 'block');
			$('#stepNavigation .tab').css('top', 0);
			stepContent.eq(0).css('opacity', '1');
		} else {
			$('.step-01 img:last-child').css('display', 'none');
			stepContent.eq(0).css('opacity', '0');
		}
		if (step.eq(1).hasClass('currentStep')) {
			$('.step-02 img:last-child').css('display', 'block');
			$('#stepNavigation .tab').css('top', 60);
			stepContent.eq(1).css('opacity', '1');
		} else {
			$('.step-02 img:last-child').css('display', 'none');
			stepContent.eq(1).css('opacity', '0');
		}
		if (step.eq(2).hasClass('currentStep')) {
			$('.step-03 img:last-child').css('display', 'block');
			$('#stepNavigation .tab').css('top', 120);
			stepContent.eq(2).css('opacity', '1');
		} else {
			$('.step-03 img:last-child').css('display', 'none');
			stepContent.eq(2).css('opacity', '0');
		}
		if (step.eq(3).hasClass('currentStep')) {
			$('.step-04 img:last-child').css('display', 'block');
			$('#stepNavigation .tab').css('top', 180);
			stepContent.eq(3).css('opacity', '1');
		} else {
			$('.step-04 img:last-child').css('display', 'none');
			stepContent.eq(3).css('opacity', '0');
		}
		if (step.eq(4).hasClass('currentStep')) {
			$('.step-05 img:last-child').css('display', 'block');
			$('#stepNavigation .tab').css('top', 240);
			stepContent.eq(4).css('opacity', '1');
		} else {
			$('.step-05 img:last-child').css('display', 'none');
			stepContent.eq(4).css('opacity', '0');
		}
		if (step.eq(5).hasClass('currentStep')) {
			$('.step-06 img:last-child').css('display', 'block');
			$('#stepNavigation .tab').css('top', 300);
			stepContent.eq(5).css('opacity', '1');
		} else {
			$('.step-06 img:last-child').css('display', 'none');
			stepContent.eq(5).css('opacity', '0');
		}
		if (step.eq(6).hasClass('currentStep')) {
			$('.step-07 img:last-child').css('display', 'block');
			$('#stepNavigation .tab').css('top', 360);
			stepContent.eq(6).css('opacity', '1');
		} else {
			$('.step-07 img:last-child').css('display', 'none');
			stepContent.eq(6).css('opacity', '0');
		}
	}
	
	iconSwap();
	
	$(function(){
		step.click(function(){
			//Clicked State
			step.not($(this)).removeClass('currentStep');
			$(this).addClass('currentStep');
			
			iconSwap();

		});
	});
	
});