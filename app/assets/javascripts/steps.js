jQuery(document).ready(function($){
	
	$('body').addClass('jquery-loaded');

	$.getJSON('baby-steps.json', function(data){
		$('.steps li').each(function(eq){
			step = eq+1;
			f = [];
			h = '';
			$.each(data.friends,function(eq){
				if(data.friends[eq].babyStep == step){
					f.push(data.friends[eq]);
				}
			});
			switch(f.length){
				case 0:
					h ='';
				break;

				case 1:
					h = '<a href="#link">' + f[0].firstName + ' ' + f[0].lastName + '</a> is also in Baby Step ' + step + '.';
				break;

				case 2:
					f1 = f.pop();
					f2 = f.pop();
					h = '<a href="#link1">' + f1.firstName + ' ' + f1.lastName + '</a> and <a href="#link2">' + f2.firstName + ' ' + f2.lastName + '</a> are also in Baby Step ' + step + '.';
				break;

				case 3:
					f1 = f.pop();
					f2 = f.pop();
					h = '<a href="#link1">' + f1.firstName + ' ' + f1.lastName + '</a>, <a href="#link2">' + f2.firstName + ' ' + f2.lastName + '</a> and 1 other friend are also in Baby Step ' + step + '.';
				break;

				default:
					f1 = f.pop();
					f2 = f.pop();
					h = '<a href="#link1">' + f1.firstName + ' ' + f1.lastName + '</a>, <a href="#link2">' + f2.firstName + ' ' + f2.lastName + '</a> and ' + f.length + ' other friends are also in Baby Step ' + step + '.';
			}
			$(this).find('.step-footer').html(h);
		});
	});


	$('.nav li a').on('click',function(e){
		e.preventDefault();
		$('.nav .active').removeClass('active');
		n = $(this).parent().index();
		s = $('.steps li').eq(n).position().top;
		$('.nav li').eq(n).addClass('active');
		$('.steps').animate({top: -s}, 750, function(){});
	});

});