$(document).ready(function () {
	var friendsJSON =[
        { "firstName" : "Paul", "lastName" : "Taylor", "babyStep": 2 },
        { "firstName" : "Sharon", "lastName" : "Thomas", "babyStep": 3 },
        { "firstName" : "Thomas", "lastName" : "Harris", "babyStep": 3 },
        { "firstName" : "Deborah", "lastName" : "Lee", "babyStep": 4 },
        { "firstName" : "Mark", "lastName" : "Young", "babyStep": 4 },
        { "firstName" : "Shirley", "lastName" : "Perez", "babyStep": 4 },
        { "firstName" : "Joseph", "lastName" : "Lee", "babyStep": 5 },
        { "firstName" : "Mary", "lastName" : "White", "babyStep": 5 },
        { "firstName" : "Matthew", "lastName" : "Garcia", "babyStep": 5 },
        { "firstName" : "Patricia", "lastName" : "Allen", "babyStep": 5 },
        { "firstName" : "Larry", "lastName" : "Robinson", "babyStep": 6 },
        { "firstName" : "Kimberly", "lastName" : "Lopez", "babyStep": 6 },
        { "firstName" : "Jose", "lastName" : "Martinez", "babyStep": 6 },
        { "firstName" : "Deborah", "lastName" : "Walker", "babyStep": 6 },
        { "firstName" : "Joseph", "lastName" : "Lopez", "babyStep": 6 },
        { "firstName" : "Dorothy", "lastName" : "Moore", "babyStep": 7 },
        { "firstName" : "Jose", "lastName" : "Jackson", "babyStep": 7 },
        { "firstName" : "Karen", "lastName" : "Lee", "babyStep": 7 },
        { "firstName" : "Paul", "lastName" : "Taylor", "babyStep": 7 },
        { "firstName" : "Amy", "lastName" : "Gonzalez", "babyStep": 7 },
        { "firstName" : "Richard", "lastName" : "Martinez", "babyStep": 7 }
    ]
	
	$('#st1').click(function(){
		$.each(friendsJSON, function(i,obj) {
		  if (obj.babyStep === 1) {
				var result='';
				var result3='';
				result3+=''
				result3+=' is on Baby Step 1'
				result+= friendsJSON[i].firstName +' ' + friendsJSON[i].lastName;
				$('#show-data').html(result);
				$('#show-data2').html(result2);
			};
		});
		return false;
});

	$('#st2').click(function(){
		$.each(friendsJSON, function(i,obj) {
		  if (obj.babyStep === 2) {
			var result = '';
			var result3='';
				result3+=' is on Baby Step 2'
				result+= friendsJSON[i].firstName +' ' + friendsJSON[i].lastName;
				$('#show-data').html(result);
				$('#show-data2').html(result3);
			};
		});
	return false;
});
	
	$('#st3').click(function(){
		$.each(friendsJSON, function(i,obj) {
		  if (obj.babyStep === 3) {
			var result = '';
			var result3='';
				result+= friendsJSON[i].firstName +' ' + friendsJSON[i].lastName ;
				result3+= ' is also on Baby Step 3';
				$('#show-data').html(result);
				$('#show-data2').html(result3);
			};
		});
	return false;
});
	
	$('#st4').click(function(){
		$.each(friendsJSON, function(i,obj) {
		  if (obj.babyStep === 4) {
			var result = '';
			var result3='';
			result+= friendsJSON[i].firstName +' ' + friendsJSON[i].lastName ;
			result3+= ' is on Baby Step 4 ';
			$('#show-data').html(result);
			$('#show-data2').html(result3);
			};
		});
	
});
	
	$('#st5').click(function(){
		$.each(friendsJSON, function(i,obj) {
		  if (obj.babyStep === 5) {
			var result = '';
			var result3='';
			result+= friendsJSON[i].firstName +' ' + friendsJSON[i].lastName ;
			result3+= ' is on Baby Step 5 ';
			$('#show-data').html(result);
			$('#show-data2').html(result3);
			};
		});
	return false;
});
	
	$('#st6').click(function(){
		$.each(friendsJSON, function(i,obj) {
		  if (obj.babyStep === 6) {
			var result = '';
			var result3='';
			result+= friendsJSON[i].firstName +' ' + friendsJSON[i].lastName ;
			result3+= ' is on Baby Step 6 ';
			$('#show-data').html(result);
			$('#show-data2').html(result3);
			};
		});
	return false;
});
	
	$('#st7').click(function(){
		$.each(friendsJSON, function(i,obj) {
		  if (obj.babyStep === 7) {
			var result = '';
			var result3='';
			result+= friendsJSON[i].firstName +' ' + friendsJSON[i].lastName ;
			result3+= ' is on Baby Step 7 ';
			$('#show-data').html(result);
			$('#show-data2').html(result3);
			};
		});
	return false;
});
})