$(document).ready(function(){

    $.getJSON("baby-steps.json", function(data) {

        $("#baby-step-2").append('<div id="other-users"><p><a href="#">'+ data.friends[0].firstName + " " + data.friends[0].lastName +'</a> is also in Baby Step 2.</p></div>');
        
        $("#baby-step-3").append('<div id="other-users"><p><a href="#">'+ data.friends[1].firstName + " " + data.friends[1].lastName +'</a> and <a href="#">'+ data.friends[2].firstName + " " + data.friends[2].lastName +'</a> are also in Baby Step 3.</p></div>');
        
        $("#baby-step-4").append('<div id="other-users"><p><a href="#">'+ data.friends[3].firstName + " " + data.friends[3].lastName +'</a>, <a href="#">'+ data.friends[4].firstName + " " + data.friends[4].lastName +'</a> and 1 other friend are in Baby Step 4.</p></div>');
        
        $("#baby-step-5").append('<div id="other-users"><p><a href="#">'+ data.friends[6].firstName + " " + data.friends[6].lastName +'</a>, <a href="#">'+ data.friends[7].firstName + " " + data.friends[7].lastName +'</a> and 2 other friends are also in Baby Step 5.</p></div>');
        
        $("#baby-step-6").append('<div id="other-users"><p><a href="#">'+ data.friends[10].firstName + " " + data.friends[10].lastName +'</a>, <a href="#">'+ data.friends[11].firstName + " " + data.friends[11].lastName +'</a> and 3 other friends are also in Baby Step 6.</p></div>');
        
        $("#baby-step-7").append('<div id="other-users"><p><a href="#">'+ data.friends[15].firstName + " " + data.friends[15].lastName +'</a>, <a href="#">'+ data.friends[16].firstName + " " + data.friends[16].lastName +'</a> and 4 other friends are also in Baby Step 7.</p></div>');
        
    });
 });