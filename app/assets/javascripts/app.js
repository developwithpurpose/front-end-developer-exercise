$('document').ready(function(){

	const a 					 = $('.content-wrapper ul li a');
	const toggleBar 	 = $('#toggle-bar');
	const sprite 			 = $('.sprite');
	const base 				 = 360;
	const initialCount = 58;
	const offset 			 = 5;

a.on('click',function(){
	var currentCount = 0;
	a.removeClass('clicked');
	switch ($(this).attr('href')) {
		case '#one':
			sprite.first().addClass('active-one');		
			toggleBar.animate({'top': base + 'px'},100);
			break;
		case '#two':

			toggleBar.animate({'top': base + initialCount + 'px'},100);
			break;
		case '#three':
			currentCount = (initialCount * 2) + offset;
			toggleBar.animate({'top': base+currentCount+'px'},100);
			break;
		case '#four':
			currentCount = (initialCount * 3) + (offset * 2);
			toggleBar.animate({'top': base+currentCount+'px'},100);
			break;
		case '#five':
		  currentCount = (initialCount * 4)+(offset*3);
			toggleBar.animate({'top': base+currentCount+'px'},100);
			break;
		case '#six':
			currentCount = (initialCount * 5) + (offset * 4);
			toggleBar.animate({'top': base+currentCount+'px'},100);
			break;
		case '#seven':
			currentCount = (initialCount * 6) + (offset * 5);
			toggleBar.animate({'top': base+currentCount+'px'},100);
			break;
		default:
			console.log('nope');
			break;
	}
	$(this).addClass('clicked');
	});

});