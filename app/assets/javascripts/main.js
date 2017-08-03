$("#babystepsLeft li").on("click", function(){
	$(".selected").removeClass("selected");	
	$(this).addClass("selected");	

});


$(function() {

    var showData = $('#show-data');
    $.getJSON('../baby-steps.json', function (data) {
		var byStep = data.friends.reduce(function(result, current) {
			result[current.babyStep] = result[current.babyStep] || [];
			result[current.babyStep].push(current);
			return result;
		}, {});
		for (const key of Object.keys(byStep)) {
			getdata(byStep, key)
		}
	});

	function getdata(byStep, key) {
		var txtstr = "";
		var otherstr = "";
		var total = byStep[key].length;

		for (var i = 0;i < total; i++)  {
			if(i < 2){
				var pronoun = (total === 1) ?  " is " :" are ";
				//var commaAnd = (total === 2) ?  " and " :", ";
				var commaAnd = "";
				if (total === 2){
					commaAnd = " and ";				
				}else if (total > 2) {
					
					commaAnd = ", ";
				};
				
				txtstr = " " + txtstr + byStep[key][i].firstName + " " + byStep[key][i].lastName + commaAnd;
				otherstr = pronoun + " also in Baby Step " + key;
			}else{
				otherstr = " and " + (total - 2) + " other friend(s) are also in Baby Step " + key;
			}
		}
		$("#step"+key).append( txtstr + otherstr)
		console.log(txtstr);
	}

});

