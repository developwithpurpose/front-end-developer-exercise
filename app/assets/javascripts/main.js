var response;
function AJAX_JSON_Req( url )
{
    var AJAX_req = new XMLHttpRequest();
    AJAX_req.open( "GET", url, true );
    AJAX_req.setRequestHeader("Content-type", "application/json");
 
    AJAX_req.onreadystatechange = function()
    {
        if( AJAX_req.readyState == 4 && AJAX_req.status == 200 )
        {
            response = JSON.parse( AJAX_req.responseText );
        }
    }
    AJAX_req.send();
}
 
AJAX_JSON_Req('assets/javascripts/baby-steps.json');

function onSwitch(num){
	//console.log(response.friends[num].babyStep);
	var i;
	var arr=[];
	var output=[];
	var othr;
	
	for(i=0; i<response.friends.length; i++){
		if(response.friends[i].babyStep == num)
			arr.push(response.friends[i]);
	}
	
	if(arr.length == 0){
		output="";
	}else if(arr.length == 1){
		output+= "<a class='names'>" + arr[0].firstName + " " + arr[0].lastName + "</a> is also in Baby Step " + num;
	}else if(arr.length == 2){
		output = "<a class='names'>" + arr[0].firstName + " " + arr[0].lastName + "</a> and <a class='names'>" + arr[1].firstName + " " + arr[1].lastName + "</a>";
		output += " are also in Baby Step " + num;
	}else{
		othr = arr.length-2;
		output = "<a class='names'>" + arr[0].firstName + " " + arr[0].lastName + "</a>, <a class='names'>" + arr[1].firstName + " " + arr[1].lastName + "</a>";
		output += " and " + othr + " other friends are also in Baby Step " + num;
	}
	
	return output;
}