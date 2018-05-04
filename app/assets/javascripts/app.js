$('document').ready(function(){

	const a 					 = $('.content-wrapper ul li a');
	const toggleBar 	 = $('#toggle-bar');
	const base 				 = 360;
	const initialCount = 58;
	const offset 			 = 5;
	
	$('a[href^="#"]').on('click',function(e){

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
				break;
			case '#two':		
				toggleMe(img);
				toggleBar.animate({'top': base + initialCount + 'px'},100);
				break;
			case '#three':	
				toggleMe(img);
				currentCount = (initialCount * 2) + offset;
				toggleBar.animate({'top': base+currentCount+'px'},100);
				break;
			case '#four':	
				toggleMe(img);
				currentCount = (initialCount * 3) + (offset * 2);
				toggleBar.animate({'top': base+currentCount+'px'},100);
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
    url: '/baby-steps.json',
    success: function(data) {
      let step1 = [], step2 = [], step3 = [], step4 = [], step5 = [], step6 = [], step7 = [];
      let steps = [step1,step2,step3,step4,step5,step6,step7];
      for (var i = 0; i < data.friends.length;i++){
        let step = data.friends[i].babyStep;
        if ( step === 1) {
          step1.push(data.friends[i]);
        } else if ( step === 2){
          step2.push(data.friends[i]);
        } else if (step === 3) {
          step3.push(data.friends[i]); 
        } else if (step === 4) {
          step4.push(data.friends[i]);
        } else if (step === 5) {
          step5.push(data.friends[i]);
        } else if (step === 6) {
          step6.push(data.friends[i]);
        } else if (step === 7) {
          step7.push(data.friends[i]);
        } else {
          return;
        }
      }
      function compare(a,b) {
        const lastNameA = a.lastName.toUpperCase();
        const lastNameB = b.lastName.toUpperCase();
        let comparison = 0;
        lastNameA > lastNameB ? comparison = 1:comparison = -1;        
        return comparison;
      }

      step1.sort(compare);
      step2.sort(compare);
      step3.sort(compare);
      step4.sort(compare);
      step5.sort(compare);
      step6.sort(compare);
      step7.sort(compare);
      
      function twoOrMore(arr){
        const html = `<p><a href="#">${arr[0].firstName} ${arr[0].lastName}</a>,
                         <a href="#">${arr[1].firstName} ${arr[1].lastName}</a> 
                              and ${arr.length - 2} others are on this step.</p>`;
        return html;
      }

      function lessThanTwo(arr) {
        const html = `<p><a href="#">
                      ${arr[0].firstName} ${arr[0].lastName}
                    </a> is on this step.</p>`;
        return html;
      }

      step1.length >= 2? $('#one').append(twoOrMore(step1)):step1.length >= 1? $('#one').append(lessThanTwo(step1)):$('#one').append('<p>No friends are on this step.<p>');
      step2.length >= 2? $('#two').append(twoOrMore(step2)):step2.length >= 1? $('#two').append(lessThanTwo(step2)):$('#two').append('<p>No friends are on this step.<p>');
      step3.length >= 2? $('#three').append(twoOrMore(step3)):step3.length >= 1? $('#three').append(lessThanTwo(step3)):$('#three').append('<p>No friends are on this step.<p>');
      step4.length >= 2? $('#four').append(twoOrMore(step4)):step4.length >= 1? $('#four').append(lessThanTwo(step4)):$('#four').append('<p>No friends are on this step.<p>');
      step5.length >= 2? $('#five').append(twoOrMore(step5)):step5.length >= 1? $('#five').append(lessThanTwo(step5)):$('#five').append('<p>No friends are on this step.<p>');
      step6.length >= 2? $('#six').append(twoOrMore(step6)):step6.length >= 1? $('#six').append(lessThanTwo(step6)):$('#six').append('<p>No friends are on this step.<p>');
      step7.length >= 2? $('#seven').append(twoOrMore(step7)):step7.length >= 1? $('#seven').append(lessThanTwo(step7)):$('#seven').append('<p>No friends are on this step.<p>');
    }
  });
});