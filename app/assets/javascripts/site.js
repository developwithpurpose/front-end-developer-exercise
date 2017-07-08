(function(){
	"use strict";
	
	var init = function(){
		resetSteps();
		$('#step-1').removeClass('hidden');
		$('#baby-step-nav a').attr('href', "javascript: undefined;");
		$('#baby-step-nav a div').first().addClass('selected');
		var img = $('#baby-step-nav a div img').first();
		img.attr('src', img.attr('src').replace('.png', '_blue.png'));
	}
	
    var loadBabyStep = function (step) {
        var content = $('#baby-step-content');
        
        $('#' + step).removeClass('hidden')
        content.addClass('fade');
        setTimeout(function () {
            content.removeClass('fade');
        }, 500);
    }
    
    var loadJSON = function(step){
    	$.getJSON( "/baby-steps.json", function( data ) {
  			var friends = [];
  			$.each(data.friends, function(key, val){
  				if(val.babyStep == step){
  					friends.push(val);
  				}
  			});
  			var dynamicDiv = $('#dynamic-content');
  			dynamicDiv.empty();
  			if(friends.length > 0){
  				if(friends.length > 1){
  					friends.sort(function(a, b){
  						var aLast = a.lastName;
  						var bLast = b.lastName;
    					if(aLast == bLast) return 0;
    					return aLast > bLast ? 1 : -1;
  					});
  				}
  				switch(friends.length) {
    				case 0:
        				break;
    				case 1:
        				dynamicDiv.append("<a href=\"#\">" + friends[0].firstName + ' ' + friends[0].lastName + '</a> is');
        				break;
    				case 2:
        				dynamicDiv.append("<a href=\"#\">" + friends[0].firstName + ' ' + friends[0].lastName + '</a> and ' +
        					"<a href=\"#\">" + friends[1].firstName + ' ' + friends[1].lastName + '</a> are');
        			break;
    				case 3:
        				dynamicDiv.append("<a href=\"#\">" + friends[0].firstName + ' ' + friends[0].lastName + '</a>, ' +
        					"<a href=\"#\">" + friends[1].firstName + ' ' + friends[1].lastName + '</a>, and '
        					+ 'one other friend are');
        				break;
    				default:
        				dynamicDiv.append("<a href=\"#\">" + friends[0].firstName + ' ' + friends[0].lastName + '</a>, ' +
        					"<a href=\"#\">" + friends[1].firstName + ' ' + friends[1].lastName + '</a>, and '
        					+ (friends.length - 2) +' other friends are');
        				break;
				}
				dynamicDiv.append(' also in Baby Step ' + step)
			}
		});
    }
    
    var resetSteps = function(){
    	var steps = $(".baby-step");
		steps.addClass('hidden');
		
		$('#baby-step-nav a div').removeClass('selected');
		$('#baby-step-nav a div img').attr('src', $('#baby-step-nav a div img').attr('src').replace('_blue', ''));
    }
    
	$( document ).ready(function() {
    	$('body').on('click', '#baby-step-nav a', function (event) {
    		resetSteps();
    		$(this).find('div').addClass('selected');
    		$(this).find('img').attr('src', $(this).find('img').attr('src').replace('.png', '_blue.png'));
     	   loadBabyStep($(this).data('href'));
     	   var step = $(this).data('href').split('-')[1];
     	   loadJSON(step);
     	   event.stopPropagation();
    	});
    	
		init();
		loadJSON(1);
	});
})()