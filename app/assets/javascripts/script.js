$(function(){
	var index;
	var friendArr = [[0,[]],[0,[]],[0,[]],[0,[]],[0,[]],[0,[]],[0,[]]];
	$.getJSON('baby-steps.json',function(json){
		for(var i=0;i<json.friends.length;i++) {
			index = json.friends[i].babyStep-1;
			friendArr[index][1].push(json.friends[i].firstName+' '+json.friends[i].lastName);
			friendArr[index][0] = friendArr[index][0]+1;
		}
		
		var msg = '';
		var others = 0;
		for(var n=0;n<friendArr.length;n++) {
			others = 0;
			msg = '';
			switch(friendArr[n][0]) {
				case 0:
					//nothing
					break;
				case 1:
					msg = '<a>'+friendArr[n][1][0]+'</a> is';
					break;
					
				case 2:
					msg = '<a>'+friendArr[n][1].join('</a> and <a>') + '</a> are';
					break;
				
				default:
					others = (friendArr[n][1].length-2);
					msg = '<a>'+friendArr[n][1][0]+'</a>, <a>'+friendArr[n][1][1]+'</a> and '+others+' other friend';
					if (others > 1) {
						msg += 's';
					}
					msg += ' are'
					break;
			}
			if (msg != '') {
				msg += ' also in Baby Step '+(n+1);
				$('#bs'+(n+1)+' .friends').html(msg).show();
			}
		}
	});

	$('#content').css({height:'400px',overflow:'hidden'});
	$('#nav a').on('click', function(event) {
		var obj = $(this);
		if (!$(obj).parent('li').hasClass()) {
			$('li.active').removeClass('active');
			$(obj).parent('li').addClass('active');
			
			var target = $( $(this).attr('href') );
			if( target.length ) {
				$('#content').animate({
					scrollTop: ( target.position().top-$('#bs1').position().top)
				}, 1000);
			}
		}
		return false;
	});
});