var ready = function() {

  

  //tabs fade
  $('#tabs').tabs({
      show: 'fade',
      hide: 'fade'
  });

  //add active class
  $('.menu li a').click(function(e) {

      $('.menu li').removeClass('active');

      var $parent = $(this).parent();
      if (!$parent.hasClass('active')) {
          $parent.addClass('active');
      }
      e.preventDefault();
  });

  // get friends of user
  $.ajax({
      type: "GET",
      url: "assets/javascripts/baby-steps.json",
      data: {
          limit: 2,
          order: 'asc'
      },
      dataType: "json",
      success: function(data) {
	
	var html_elements = [$('#step-one .friends'),$('#step-two .friends'),$('#step-three .friends'),$('#step-four .friends'),$('#step-five .friends'),$('#step-six .friends'),$('#step-seven .friends')];
	
	$('.friends').append('<span class="friends_name"></span>');
	$('.friends').append('<span class="remainder"></span>');
	$('.friends').append('<span class="friends_text"></span>');


  var results = eval(data.friends);

  results.sort(function(a, b) {
      if (a.babyStep == b.babyStep)
          return 0;
      if (a.babyStep < b.babyStep)
          return -1;
      if (a.babyStep > b.babyStep)
          return 1;
  });

  var babyStepCount = [0, 0, 0, 0, 0, 0, 0]; // counts the number of items in each.
  $(results).each(function() {
      if (this.babyStep == 1) {
          babyStepCount[0]++;
      }
      if (this.babyStep == 2) {
          babyStepCount[1]++
      }
      if (this.babyStep == 3) {
          babyStepCount[2]++
      }
      if (this.babyStep == 4) {
          babyStepCount[3]++
      }
      if (this.babyStep == 5) {
          babyStepCount[4]++
      }
      if (this.babyStep == 6) {
          babyStepCount[5]++
      }
      if (this.babyStep == 7) {
          babyStepCount[6]++
      }
  });


  results.sort(function(a, b) {
      if (a.lastName == b.lastName)
          return 0;
      if (a.lastName < b.lastName)
          return -1;
      if (a.lastName > b.lastName)
          return 1;
  });
  // console.log(results);
  var count_split = [0,0, 0, 0, 0, 0, 0, 0]; // we increase them with the babyStep loop.
 
	var one = ' is also on this step';
	var two = ' are also on this step';
	var three = ' Other Friend are also on this step';
	var more = ' Other Friends are also on this step';

  $.each(results, function(index, obj) {

			if(babyStepCount[this.babyStep-1] >= 4){
				$(html_elements[this.babyStep-1]).find('.friends_text').text(' and '+(babyStepCount[this.babyStep-1]-2)+ more);
				console.log(html_elements[this.babyStep-1])
				if(count_split[this.babyStep-1] < 2){
					$(html_elements[this.babyStep-1]).find('.friends_name').append('<span>' + obj.firstName + ' ' + obj.lastName + ', </span>' );
					count_split[this.babyStep-1]++;
				}
				
			}else if(babyStepCount[this.babyStep-1] == 3){
				$(html_elements[this.babyStep-1]).find('.friends_text').text(' and '+(babyStepCount[this.babyStep-1]-2)+ three);
				
				if(count_split[this.babyStep-1] < 2){
					$(html_elements[this.babyStep-1]).find('.friends_name').append('<span>' + obj.firstName + ' ' + obj.lastName + ', </span>' );
					count_split[this.babyStep-1]++;
				}
				
			}else if(babyStepCount[this.babyStep-1] == 2){
				$(html_elements[this.babyStep-1]).find('.friends_text').text(two);
				
				if(count_split[this.babyStep-1] < 2){
					$(html_elements[this.babyStep-1]).find('.friends_name').append('<span>' + obj.firstName + ' ' + obj.lastName + ' </span>' );
					
					if(count_split[this.babyStep-1] == 0 ){
						$(html_elements[this.babyStep-1]).find('.friends_name').append(' and ' );
					}
					
					count_split[this.babyStep-1]++;
				}
				
			}else if(babyStepCount[this.babyStep-1] == 1){
				$(html_elements[this.babyStep-1]).find('.friends_text').text(one);
				
				if(count_split[this.babyStep-1] < 2){
					$(html_elements[this.babyStep-1]).find('.friends_name').append('<span>' + obj.firstName + ' ' + obj.lastName + ' </span>' );
					count_split[this.babyStep-1]++;
				}
			}
          });
	
      }
	});


$(window).on('hashchange', function () {
    if (!location.hash) {
      $('#tabs').tabs('option', 'active', 0); // activate first tab by default
      return;
    }
    $('#tabs > ul > li > a').each(function (index, a) {
      if ($(a).attr('href') == location.hash) {
        $('#tabs').tabs('option', 'active', index);
      }
    });
  });
} //end of ready
$(document).ready(ready);