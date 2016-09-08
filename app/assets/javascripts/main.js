$('body').hide().fadeIn(1500);

$(document).ready(function(){

	// Preset Main
	var bs1 = $('#bs1').outerHeight();
	$('main .step-overflow').css({
		"height": bs1,
		"overflow": "hidden"
	});

	//vars
	var li = $('aside li'),
		liH = li.outerHeight(),
		liW = li.outerWidth(),
		wb = $('.wb'),
		as = $('aside').offset().top,
		sC = $('.step-container'),
		main = $('main .step-overflow');

	// ASIDE: set white box height & width
	wb.css({ 
		width: liW, 
		height: liH 
	});


	// CLICKETY CLICK
	$('aside li').click(function(){

		// vars
		var liThis = $(this);

		// JSON
		$.ajax({
			type: 'GET',
			url: '../baby-steps.json',
			dataType: 'json',
			success: function(data){
				var a = 0,
					b = 0,
					c = 0,
					d = 0,
					e = 0,
					f = 0;
				
				$(data.friends).each( function( index , value ){
					switch(value.babyStep){
						case 2:
							a++;
							break;
						case 3:
							b++;
							break;
						case 4:
							c++;
							break;
						case 5:
							d++;
							break;
						case 6:
							e++;
							break;
						case 7:
							f++;
							break;
					}
				});
				// reset target container
				$('.target').empty();
				// what step, add messge
				if( liThis.hasClass('bs2') && a == 1 ){
					$('.target').html('<span>Paul Taylor</span> is also in Baby Step 2');
				} 
				if( liThis.hasClass('bs3') && b == 2 ){
					$('.target').html('<span>Thomas Harris</span> and <span>Sharon Thomas</span> are also in Baby Step 3');	
				} 
				if( liThis.hasClass('bs4') && c == 3 ){
					$('.target').html('<span>Deborah Lee</span>, <span>Shirley Perez</span>, and 1 other friend are also in Baby Step 4');	
				} 
				if( liThis.hasClass('bs5') && d > 3 ){
					$('.target').html('<span>Patricia Allen</span>, <span>Matthew Garcia</span>, and 2 other friends are also in Baby Step 5');	
				} 
			}
		});

		// move white box, add active
		var a = $(this).offset().top;
		wb.css('top', a - as);
		$('aside li').removeClass('active');
		liThis.addClass('active');
		
		//MAIN: smooth scroll the content box
		var sC = $('.step-container'),
			sCt = sC.offset().top,
			bs1o = $('#bs1').offset().top,
			bs2o = $('#bs2').offset().top,
			bs3o = $('#bs3').offset().top,
			bs4o = $('#bs4').offset().top,
			bs5o = $('#bs5').offset().top,
			bs6o = $('#bs6').offset().top,
			bs7o = $('#bs7').offset().top;

		if( liThis.hasClass('bs1') ){
			main.animate({ scrollTop: bs1o - sCt});
		} else if( liThis.hasClass('bs2') ){
			main.animate({ scrollTop: bs2o - sCt});
		} else if( liThis.hasClass('bs3') ){
			main.animate({ scrollTop: bs3o - sCt});
		} else if( liThis.hasClass('bs4') ){
			main.animate({ scrollTop: bs4o - sCt});
		} else if( liThis.hasClass('bs5') ){
			main.animate({ scrollTop: bs5o - sCt});
		} else if( liThis.hasClass('bs6') ){
			main.animate({ scrollTop: bs6o - sCt});
		} else if( liThis.hasClass('bs7') ){
			main.animate({ scrollTop: bs7o - sCt});
		}
	});

});