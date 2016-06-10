$(document).ready(function(){
	$('.baby-steps').click(function(){
		highlightStep(this);
		currentStepFriends(this, list);
	});

	startingStep(1);

	var list = getJson('baby-steps.json');
	list["friends"].sort(dynamicSort("lastName"));

	function dynamicSort(property) {
	    var sortOrder = 1;
	    if(property[0] === "-") {
	        sortOrder = -1;
	        property = property.substr(1);
	    }
	    return function (a,b) {
	        var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
	        return result * sortOrder;
	    }
	}

	function startingStep(n){
		if (n > 7 || n < 1 || n !== parseInt(n,10)) {
			n = 1;
		}
		$('.bs-content').hide();
		$('#bs'+n+'-content').show();
		$(".bs"+n+"-logo").attr('src','assets/images/icons/individual/icons_small_bs'+n+'_blue.png');
		$("#bs"+n).css({
			"font-family":"Source Sans Pro",
			"font-size":"18px",
			"color":"#36abe1",
			"line-height":"60px",
			"background":"white"
		});
	}

	function highlightStep(element, list){
		$('.bs-content').hide();

		for (var i = 1; i <= 7; i++) {
			$(".bs"+i+"-logo").attr('src','assets/images/icons/individual/icons_small_bs'+i+'.png');
			$("#bs"+i).css({
				"font-family":"Source Sans Pro",
				"font-size":"18px",
				"color":"#9ba0a4",
				"line-height":"60px",
				"background":"linear-gradient(to right, #ebeced, #d1d5d6)"
			});
		}

		$("#"+element.id+"-content").fadeIn(500).show();
		$("."+element.id+"-logo").attr('src','assets/images/icons/individual/icons_small_'+element.id+'_blue.png');
		$("#"+element.id).css({
			"font-family":"Source Sans Pro",
			"font-size":"18px",
			"color":"#36abe1",
			"line-height":"60px",
			"background":"white"
		});


	}

	function currentStepFriends(element, list){
		var text = "";
		var count = 0;
		var names = [];
		var step = element.id.match(/\d+/).toString();

		for (var i = 0; i < list["friends"].length; i++) {
			if (parseInt(list["friends"][i].babyStep) === parseInt(step)) {
				names.push(list["friends"][i].lastName);
				count++;
			}
		}

		switch (true){
			case count == 1:
				text = "<span id='highlight-friends'>"+names[0]+"</span> is also in Baby Step "+step;
				break;
			case count == 2:
				text = "<span id='highlight-friends'>"+names[0]+"</span> and <span id='highlight-friends'>"+names[1]+"</span> are also in Baby Step "+step;
				break;
			case count == 3:
				text = "<span id='highlight-friends'>"+names[0]+"</span>, <span id='highlight-friends'>"+names[1]+"</span>, and 1 other friend are also in Baby Step "+step;
				break;
			case count >= 4:
				text = "<span id='highlight-friends'>"+names[0]+"</span>, <span id='highlight-friends'>"+names[1]+"</span>, and "+(count-2)+" other friends are also in Baby Step "+step;
				break;
			default:
		}

		$('.friends-count').hide().fadeIn(500)
		.html(text);
	}

	function getJson(url) {
	 return JSON.parse($.ajax({
	     type: 'GET',
	     url: url,
	     dataType: 'json',
	     global: false,
	     async:false,
	     success: function(data) {
	         return data;
	     }
	 }).responseText);
	}
});