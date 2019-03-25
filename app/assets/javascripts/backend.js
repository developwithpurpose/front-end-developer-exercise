// Internal Notes for README, *deleate before production*: 
// jQuery's Document Ready Function, needed to use Jquery.

$(function(){
});


$.getJSON('/baby-steps.json', function(data) {
    console.log("Status: 200 – JSON Load Successful...")    

    let freindsOnBabyStep = new Array(8);


    var friendList = data.friends;
    var babyStepId = data.babyStep;

  
    $("#friendWidget2").append("<p>" + "<span class='friendHighlight'>" + friendList[0].firstName + " " + friendList[0].lastName + "</span>" + " is also on Baby Step " + friendList[0].babyStep) + "!<p>";

    $("#friendWidget3").append("<p>" + "<span class='friendHighlight'>" + friendList[1].firstName + ", and " + friendList[2].firstName + "</span>" + " are also on Baby Step " + friendList[1].babyStep) + "<p>";

    $("#friendWidget4").append("<p>" + "<span class='friendHighlight'>" + friendList[3].firstName + ", "+ friendList[4].firstName + ", and " + friendList[5].firstName + "</span>" + " are also on Baby Step " + friendList[3].babyStep) + "<p>";

    $("#friendWidget5").append("<p>" + "<span class='friendHighlight'>" + friendList[6].firstName + ", " + friendList[7].firstName + ", " + friendList[8].firstName + ", and " + friendList[9].firstName + "</span>" + " are also on Baby Step " + friendList[9].babyStep) + "<p>";

    $("#friendWidget6").append("<p>" + "<span class='friendHighlight'>" + friendList[10].firstName + ", " + friendList[11].firstName + ", " + friendList[12].firstName + ", " +friendList[13].firstName + ", and " + friendList[14].firstName + "</span>" + " are also on Baby Step " + friendList[11].babyStep) + "<p>";

    $("#friendWidget7").append("<p>" + "<span class='friendHighlight'>" + friendList[15].firstName + ", " + friendList[16].firstName + ", " + friendList[17].firstName + ", " + friendList[18].firstName + ", " + friendList[19].firstName + ", and " + friendList[20].firstName + "</span>" + " are also on Baby Step " + friendList[20].babyStep) + "<p>";
});
