$('document').ready(function(){

	const a 					 = $('.content-wrapper ul li a');
	const toggleBar 	 = $('#toggle-bar');
	const base 				 = 360;
	const initialCount = 58;
	const offset 			 = 5;
	
	$('a[href^="#"]').on('click',function(e){
		// e.preventDefault();

		let target 			 = this.hash;
		let $target      = $(target);

		let currentCount = 0;
		let img          = $(this).children();

		a.removeClass('clicked');
		a.each(function(){
			if (!a.hasClass('clicked')) {
				$('a div').toggleClass('blue-sprite',false);
				$('a div').toggleClass('sprite',true);
			}
		});

		$(this).addClass('clicked');

		function toggleMe(el){
			el.toggleClass('sprite',false);
			el.toggleClass('blue-sprite',true);
		}

		switch ($(this).attr('href')) {
			case '#one':
				toggleMe(img);
				toggleBar.animate({'top': base + 'px'},100);
				// $('.parent-conceal').animate({'scrollTop': 0} ,1000, 'swing');
				break;
			case '#two':		
				toggleMe(img);
				toggleBar.animate({'top': base + initialCount + 'px'},100);
				// $('.parent-conceal').animate({'scrollTop': 0 },1000, 'swing');
				break;
			case '#three':	
				toggleMe(img);
				currentCount = (initialCount * 2) + offset;
				toggleBar.animate({'top': base+currentCount+'px'},100);
				// $('.parent-conceal').animate({'scrollTop': 0 },1000, 'swing');
				break;
			case '#four':	
				toggleMe(img);
				currentCount = (initialCount * 3) + (offset * 2);
				toggleBar.animate({'top': base+currentCount+'px'},100);
				// $('.parent-conceal').animate({'scrollTop':0},1000, 'swing');
				break;
			case '#five':		
				toggleMe(img);
			  currentCount = (initialCount * 4)+(offset*3);
				toggleBar.animate({'top': base+currentCount+'px'},100);
				break;
			case '#six':
				toggleMe(img);
				currentCount = (initialCount * 5) + (offset * 4);
				toggleBar.animate({'top': base+currentCount+'px'},100);
				break;
			case '#seven':		
				toggleMe(img);
				currentCount = (initialCount * 6) + (offset * 5);
				toggleBar.animate({'top': base+currentCount+'px'},100);
				break;
			default:
				break;
		}
	});

  $.ajax({
    type: 'GET',
    url: 'http://localhost:8080/./app/baby-steps.json',
    success: function(data) {
      console.log(data);
    }
  });



});