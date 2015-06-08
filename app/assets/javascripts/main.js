$(document).ready(onReady);
function onReady() {
"use strict";
	var list = $("#list div");
	var x;
	//this get request displays the number of friends on Step 1 when the page loads
   $.get("http://localhost:9001/app/assets/javascripts/baby-steps.json", function(data) { 
        var friends = data.friends;
    	var firsts = [];
    	var lasts = [];
    	var numBer;
    	for(var i=0; i<friends.length;i++){
    		if(friends[i].babyStep===1){
    			firsts.push(friends[i].firstName);
    			lasts.push(friends[i].lastName);
    			numBer = firsts.length-2;
    		}
		}
		if (firsts.length===1){
			$("#content p").append("<br><br><div style='font-weight:bold';'font-family:helvetica'>"+"<span style='color:#6fbee7';>"+firsts[0]+" "+lasts[0]+"</span>"+" is also on this step."+"</div>");
		}else if (firsts.length===2){
			$("#content p").append("<br><br><div style='font-weight:bold';'font-family:helvetica'>"+"<span style='color:#6fbee7';>"+firsts[0]+" "+lasts[0]+"</span>"+" and "+"<span style='color:#6fbee7';>"+firsts[1]+" "+lasts[1]+"</span>"+" are also on this step."+"</div>");
		}
		else if (numBer>1){
			$("#content p").append("<br><br><div style='font-weight:bold';'font-family:helvetica'>"+"<span style='color:#6fbee7';>"+firsts[0]+" "+lasts[0]+", "+firsts[1]+" "+lasts[1]+"</span>"+" and "+ numBer + " other friends are on this step."+"</span>"+"</div>");
		}else if(numBer===1){
			$("#content p").append("<br><br><div style='font-weight:bold';'font-family:helvetica'>"+"<span style='color:#6fbee7';>"+firsts[0]+" "+lasts[0]+", "+firsts[1]+" "+lasts[1]+"</span>"+" and "+ "1 other friend are on this step."+"</span>"+"</div>");
		}
	});

	function clicked(x){
		//x is the chosen div
		for (var i=0; i<list.length; i++){
			var newList = list[i];
			// this parses out the number of each id
			var otherIDs = newList.id.slice(-1);
			//this parses out the number of the id we're on
			var thisID = x.id.slice(-1);

			$(newList).addClass("baby-step").removeClass("chosen");
			if (otherIDs === thisID){
				$(x).addClass("chosen").removeClass("baby-step");
			}else{
				// console.log("x.id+" gripped function");
			}
	}
}

$("#step-1").click(function changeStyle(){
	//this changes the styling of the tabs
	var oldSrc1 = "assets/images/icons/individual/icons_small_bs1.png";
	var newSrc1 = "assets/images/icons/individual/icons_small_bs1_blue.png";
	var oldSrc2 = "assets/images/icons/individual/icons_small_bs2_blue.png";
	var newSrc2 = "assets/images/icons/individual/icons_small_bs2.png";
	var oldSrc3 = "assets/images/icons/individual/icons_small_bs3_blue.png";
	var newSrc3 = "assets/images/icons/individual/icons_small_bs3.png";
	var oldSrc4 = "assets/images/icons/individual/icons_small_bs4_blue.png";
	var newSrc4 = "assets/images/icons/individual/icons_small_bs4.png";
	var oldSrc5 = "assets/images/icons/individual/icons_small_bs5_blue.png";
	var newSrc5 = "assets/images/icons/individual/icons_small_bs5.png";
	var oldSrc6 = "assets/images/icons/individual/icons_small_bs6_blue.png";
	var newSrc6 = "assets/images/icons/individual/icons_small_bs6.png";
	var oldSrc7 = "assets/images/icons/individual/icons_small_bs7_blue.png";
	var newSrc7 = "assets/images/icons/individual/icons_small_bs7.png";
	$("img[src='" + oldSrc1 + "']").attr("src", newSrc1);
	$("img[src='" + oldSrc2 + "']").attr("src", newSrc2);
	$("img[src='" + oldSrc3 + "']").attr("src", newSrc3);
	$("img[src='" + oldSrc4 + "']").attr("src", newSrc4);
	$("img[src='" + oldSrc5 + "']").attr("src", newSrc5);
	$("img[src='" + oldSrc6 + "']").attr("src", newSrc6);
	$("img[src='" + oldSrc7 + "']").attr("src", newSrc7);
	//this calls the function to change the tab styling
	x=this;
	clicked(x);
	//this is to change the content title
	$("#title").css({"height":"5em"});
	$("#title2").css({"height":"0em"});
	$("#title3").css({"height":"0em"});
	$("#title4").css({"height":"0em"});
	$("#title5").css({"height":"0em"});
	$("#title6").css({"height":"0em"});
	$("#title7").css({"height":"0em"});
	//this changes the text of #content
	$("#content p").html("An emergency fund is for those unexpected events in life that you can’t plan for: the loss of a job, an unexpected pregnancy, a faulty car transmission, and the list goes on and on. It’s not a matter of if these events will happen; it’s simply a matter of when they will happen."+
		"<br>"+"<br>"+
		"This beginning emergency fund will keep life’s little Murphies from turning into new debt while you work off the old debt. If a real emergency happens, you can handle it with your emergency fund. No more borrowing. It’s time to break the cycle of debt!"+
		"<br><br>");

   $.get("http://localhost:9001/app/assets/javascripts/baby-steps.json", function(data) { 
        var friends = data.friends;
    	var firsts = [];
    	var lasts = [];
    	var numBer = firsts.length-2;
    	for(var i=0; i<friends.length;i++){
    		if(friends[i].babyStep===1){
    			firsts.push(friends[i].firstName);
    			lasts.push(friends[i].lastName);
    			// var numBer = firsts.length-2;
    		}
		}
		if (firsts.length===1){
			$("#content p").append("<div style='font-weight:bold';'font-family:helvetica'>"+"<span style='color:#6fbee7';>"+firsts[0]+" "+lasts[0]+"</span>"+" is also on this step."+"</div>");
		}else if (firsts.length===2){
			$("#content p").append("<div style='font-weight:bold';'font-family:helvetica'>"+"<span style='color:#6fbee7';>"+firsts[0]+" "+lasts[0]+"</span>"+" and "+"<span style='color:#6fbee7';>"+firsts[1]+" "+lasts[1]+"</span>"+" are also on this step."+"</div>");
		}
		else if (numBer>1){
			$("#content p").append("<div style='font-weight:bold';'font-family:helvetica'>"+"<span style='color:#6fbee7';>"+firsts[0]+" "+lasts[0]+", "+firsts[1]+" "+lasts[1]+"</span>"+" and "+ numBer + " other friends are on this step."+"</span>"+"</div>");
		}else if(numBer===1){
			$("#content p").append("<div style='font-weight:bold';'font-family:helvetica'>"+"<span style='color:#6fbee7';>"+firsts[0]+" "+lasts[0]+", "+firsts[1]+" "+lasts[1]+"</span>"+" and "+ "1 other friend are on this step."+"</span>"+"</div>");
		}
	});
});

$("#step-2").click(function changeStyle(){
	//this changes the styling of the tabs
	var oldSrc1 = "assets/images/icons/individual/icons_small_bs1_blue.png";
	var newSrc1 = "assets/images/icons/individual/icons_small_bs1.png";
	var oldSrc2 = "assets/images/icons/individual/icons_small_bs2.png";
	var newSrc2 = "assets/images/icons/individual/icons_small_bs2_blue.png";
	var oldSrc3 = "assets/images/icons/individual/icons_small_bs3_blue.png";
	var newSrc3 = "assets/images/icons/individual/icons_small_bs3.png";
	var oldSrc4 = "assets/images/icons/individual/icons_small_bs4_blue.png";
	var newSrc4 = "assets/images/icons/individual/icons_small_bs4.png";
	var oldSrc5 = "assets/images/icons/individual/icons_small_bs5_blue.png";
	var newSrc5 = "assets/images/icons/individual/icons_small_bs5.png";
	var oldSrc6 = "assets/images/icons/individual/icons_small_bs6_blue.png";
	var newSrc6 = "assets/images/icons/individual/icons_small_bs6.png";
	var oldSrc7 = "assets/images/icons/individual/icons_small_bs7_blue.png";
	var newSrc7 = "assets/images/icons/individual/icons_small_bs7.png";
	$("img[src='" + oldSrc1 + "']").attr("src", newSrc1);
	$("img[src='" + oldSrc2 + "']").attr("src", newSrc2);
	$("img[src='" + oldSrc3 + "']").attr("src", newSrc3);
	$("img[src='" + oldSrc4 + "']").attr("src", newSrc4);
	$("img[src='" + oldSrc5 + "']").attr("src", newSrc5);
	$("img[src='" + oldSrc6 + "']").attr("src", newSrc6);
	$("img[src='" + oldSrc7 + "']").attr("src", newSrc7);
	//this calls the "clicked" function to change the tab styling
	x=this;
	clicked(x);

	//this is to change the titles
	$("#title").css({"height":"0"});
	$("#title2").css({"height":"5em"});
	$("#title3").css({"height":"0em"});
	$("#title4").css({"height":"0em"});
	$("#title5").css({"height":"0em"});
	$("#title6").css({"height":"0em"});
	$("#title7").css({"height":"0em"});
	//this changes the text of #content
	$("#content p").html("List your debts, excluding the house, in order. The smallest balance should be your number one priority. Dont worry about interest rates unless two debts have similar payoffs. If thats the case, then list the higher interest rate debt first."+
		"<br>"+"<br>"+
		"The point of the debt snowball is imply this: You need some quick wins in order to stay pumped about getting out of debt! Paying off debt is not always about math. It’s about motivation. Personal finance is 20% head nowledge and 80% behavior. When you start knocking off the easier debts, you will see results and you will stay motivated to dump your debt."+
		"<br><br>");
   $.get("http://localhost:9001/app/assets/javascripts/baby-steps.json", function(data) { 
        var friends = data.friends;
    	var firsts = [];
    	var lasts = [];
    	var numBer = firsts.length-2;
    	for(var i=0; i<friends.length;i++){
    		if(friends[i].babyStep===2){
    			firsts.push(friends[i].firstName);
    			lasts.push(friends[i].lastName);
    		
    		}
		}
		if (firsts.length===1){
			$("#content p").append("<div style='font-weight:bold';'font-family:helvetica'>"+"<span style='color:#6fbee7';>"+firsts[0]+" "+lasts[0]+"</span>"+" is also on this step."+"</div>");
		}else if (firsts.length===2){
			$("#content p").append("<div style='font-weight:bold';'font-family:helvetica'>"+"<span style='color:#6fbee7';>"+firsts[0]+" "+lasts[0]+"</span>"+" and "+"<span style='color:#6fbee7';>"+firsts[1]+" "+lasts[1]+"</span>"+" are also on this step."+"</div>");
		}
		else if (numBer>1){
			$("#content p").append("<div style='font-weight:bold';'font-family:helvetica'>"+"<span style='color:#6fbee7';>"+firsts[0]+" "+lasts[0]+", "+firsts[1]+" "+lasts[1]+"</span>"+" and "+ numBer + " other friends are on this step."+"</span>"+"</div>");
		}else if(numBer===1){
			$("#content p").append("<div style='font-weight:bold';'font-family:helvetica'>"+"<span style='color:#6fbee7';>"+firsts[0]+" "+lasts[0]+", "+firsts[1]+" "+lasts[1]+"</span>"+" and "+ "1 other friend are on this step."+"</span>"+"</div>");
		}
	});
});

$("#step-3").click(function changeStyle(){

	//this changes the styling of the tabs
	var oldSrc1 = "assets/images/icons/individual/icons_small_bs1_blue.png";
	var newSrc1 = "assets/images/icons/individual/icons_small_bs1.png";
	var oldSrc2 = "assets/images/icons/individual/icons_small_bs2_blue.png";
	var newSrc2 = "assets/images/icons/individual/icons_small_bs2.png";
	var oldSrc3 = "assets/images/icons/individual/icons_small_bs3.png";
	var newSrc3 = "assets/images/icons/individual/icons_small_bs3_blue.png";
	var oldSrc4 = "assets/images/icons/individual/icons_small_bs4_blue.png";
	var newSrc4 = "assets/images/icons/individual/icons_small_bs4.png";
	var oldSrc5 = "assets/images/icons/individual/icons_small_bs5_blue.png";
	var newSrc5 = "assets/images/icons/individual/icons_small_bs5.png";
	var oldSrc6 = "assets/images/icons/individual/icons_small_bs6_blue.png";
	var newSrc6 = "assets/images/icons/individual/icons_small_bs6.png";
	var oldSrc7 = "assets/images/icons/individual/icons_small_bs7_blue.png";
	var newSrc7 = "assets/images/icons/individual/icons_small_bs7.png";
	$("img[src='" + oldSrc1 + "']").attr("src", newSrc1);
	$("img[src='" + oldSrc2 + "']").attr("src", newSrc2);
	$("img[src='" + oldSrc3 + "']").attr("src", newSrc3);
	$("img[src='" + oldSrc4 + "']").attr("src", newSrc4);
	$("img[src='" + oldSrc5 + "']").attr("src", newSrc5);
	$("img[src='" + oldSrc6 + "']").attr("src", newSrc6);
	$("img[src='" + oldSrc7 + "']").attr("src", newSrc7);
	//this calls the "clicked" function to change the tab styling
	x=this;
	clicked(x);
	//this is to change the title
	$("#title").css({"height":"0"});
	$("#title2").css({"height":"0"});
	$("#title3").css({"height":"5em"});
	$("#title4").css({"height":"0em"});
	$("#title5").css({"height":"0em"});
	$("#title6").css({"height":"0em"});
	$("#title7").css({"height":"0em"});
	//this changes the text of #content
	$("#content p").html("Once you complete the first two baby steps, you will have built serious momentum. But don’t start throwing all your “extra” money into investments quite yet. It’s time to build your full emergency fund. Ask yourself, “What would it take for me to live for three to six months if I lost my income?” Your answer to that question is how much you should save."+
		"<br>"+"<br>"+
		"Use this money for emergencies only: incidents that would have a major impact on you and your family. Keep these savings in a money market account. Remember, this stash of money is not an investment; it is insurance you’re paying to yourself, a buffer between you and life."+
	"<br><br>");
   $.get("http://localhost:9001/app/assets/javascripts/baby-steps.json", function(data) { 
        var friends = data.friends;
    	var firsts = [];
    	var lasts = [];
    	var numBer = firsts.length-2;
    	for(var i=0; i<friends.length;i++){
    		if(friends[i].babyStep===3){
    			firsts.push(friends[i].firstName);
    			lasts.push(friends[i].lastName);
    		}
		}
		if (firsts.length===1){
			$("#content p").append("<div style='font-weight:bold';'font-family:helvetica'>"+"<span style='color:#6fbee7';>"+firsts[0]+" "+lasts[0]+"</span>"+" is also on this step."+"</div>");
		}else if (firsts.length===2){
			$("#content p").append("<div style='font-weight:bold';'font-family:helvetica'>"+"<span style='color:#6fbee7';>"+firsts[0]+" "+lasts[0]+"</span>"+" and "+"<span style='color:#6fbee7';>"+firsts[1]+" "+lasts[1]+"</span>"+" are also on this step."+"</div>");
		}
		else if (numBer>1){
			$("#content p").append("<div style='font-weight:bold';'font-family:helvetica'>"+"<span style='color:#6fbee7';>"+firsts[0]+" "+lasts[0]+", "+firsts[1]+" "+lasts[1]+"</span>"+" and "+ numBer + " other friends are on this step."+"</span>"+"</div>");
		}else if(numBer===1){
			$("#content p").append("<div style='font-weight:bold';'font-family:helvetica'>"+"<span style='color:#6fbee7';>"+firsts[0]+" "+lasts[0]+", "+firsts[1]+" "+lasts[1]+"</span>"+" and "+ "1 other friend are on this step."+"</span>"+"</div>");
		}
	});
});


$("#step-4").click(function changeStyle(){
	//this changes the styling of the tabs
	var oldSrc1 = "assets/images/icons/individual/icons_small_bs1_blue.png";
	var newSrc1 = "assets/images/icons/individual/icons_small_bs1.png";
	var oldSrc2 = "assets/images/icons/individual/icons_small_bs2_blue.png";
	var newSrc2 = "assets/images/icons/individual/icons_small_bs2.png";
	var oldSrc3 = "assets/images/icons/individual/icons_small_bs3_blue.png";
	var newSrc3 = "assets/images/icons/individual/icons_small_bs3.png";
	var oldSrc4 = "assets/images/icons/individual/icons_small_bs4.png";
	var newSrc4 = "assets/images/icons/individual/icons_small_bs4_blue.png";
	var oldSrc5 = "assets/images/icons/individual/icons_small_bs5_blue.png";
	var newSrc5 = "assets/images/icons/individual/icons_small_bs5.png";
	var oldSrc6 = "assets/images/icons/individual/icons_small_bs6_blue.png";
	var newSrc6 = "assets/images/icons/individual/icons_small_bs6.png";
	var oldSrc7 = "assets/images/icons/individual/icons_small_bs7_blue.png";
	var newSrc7 = "assets/images/icons/individual/icons_small_bs7.png";
	$("img[src='" + oldSrc1 + "']").attr("src", newSrc1);
	$("img[src='" + oldSrc2 + "']").attr("src", newSrc2);
	$("img[src='" + oldSrc3 + "']").attr("src", newSrc3);
	$("img[src='" + oldSrc4 + "']").attr("src", newSrc4);
	$("img[src='" + oldSrc5 + "']").attr("src", newSrc5);
	$("img[src='" + oldSrc6 + "']").attr("src", newSrc6);
	$("img[src='" + oldSrc7 + "']").attr("src", newSrc7);
	//this calls the "clicked" function to change the tab styling
	x=this;
	clicked(x);
	//this is to change the title
	$("#title").css({"height":"0em"});
	$("#title2").css({"height":"0em"});
	$("#title3").css({"height":"0em"});
	$("#title4").css({"height":"5em"});
	$("#title5").css({"height":"0em"});
	$("#title6").css({"height":"0em"});
	$("#title7").css({"height":"0em"});
	//this changes the text of #content
	$("#content p").html("When you reach this step, you’ll have no payments—except the house—and a fully funded emergency fund. Now it’s time to get serious about building wealth."+
		"<br>"+"<br>"+
		"Dave suggests investing 15% of your household income into Roth IRAs and pre-tax retirement plans. Don’t invest more than that because the extra money will help you complete the next two steps: college savings and paying off your home early."+
	"<br><br>");
	
   $.get("http://localhost:9001/app/assets/javascripts/baby-steps.json", function(data) { 
        var friends = data.friends;
    	var firsts = [];
    	var lasts = [];
    	var numBer = firsts.length-2;
    	for(var i=0; i<friends.length;i++){
    		if(friends[i].babyStep===4){
    			firsts.push(friends[i].firstName);
    			lasts.push(friends[i].lastName);
    		}
		}
		if (firsts.length===1){
			$("#content p").append("<div style='font-weight:bold';'font-family:helvetica'>"+"<span style='color:#6fbee7';>"+firsts[0]+" "+lasts[0]+"</span>"+" is also on this step."+"</div>");
		}else if (firsts.length===2){
			$("#content p").append("<div style='font-weight:bold';'font-family:helvetica'>"+"<span style='color:#6fbee7';>"+firsts[0]+" "+lasts[0]+"</span>"+" and "+"<span style='color:#6fbee7';>"+firsts[1]+" "+lasts[1]+"</span>"+" are also on this step."+"</div>");
		}
		else if (numBer>1){
			$("#content p").append("<div style='font-weight:bold';'font-family:helvetica'>"+"<span style='color:#6fbee7';>"+firsts[0]+" "+lasts[0]+", "+firsts[1]+" "+lasts[1]+"</span>"+" and "+ numBer + " other friends are on this step."+"</span>"+"</div>");
		}else if(numBer===1){
			$("#content p").append("<div style='font-weight:bold';'font-family:helvetica'>"+"<span style='color:#6fbee7';>"+firsts[0]+" "+lasts[0]+", "+firsts[1]+" "+lasts[1]+"</span>"+" and "+ "1 other friend are on this step."+"</span>"+"</div>");
		}
	});
});

$("#step-5").click(function changeStyle(){
	//this changes the styling of the tabs
	var oldSrc1 = "assets/images/icons/individual/icons_small_bs1_blue.png";
	var newSrc1 = "assets/images/icons/individual/icons_small_bs1.png";
	var oldSrc2 = "assets/images/icons/individual/icons_small_bs2_blue.png";
	var newSrc2 = "assets/images/icons/individual/icons_small_bs2.png";
	var oldSrc3 = "assets/images/icons/individual/icons_small_bs3_blue.png";
	var newSrc3 = "assets/images/icons/individual/icons_small_bs3.png";
	var oldSrc4 = "assets/images/icons/individual/icons_small_bs4_blue.png";
	var newSrc4 = "assets/images/icons/individual/icons_small_bs4.png";
	var oldSrc5 = "assets/images/icons/individual/icons_small_bs5.png";
	var newSrc5 = "assets/images/icons/individual/icons_small_bs5_blue.png";
	var oldSrc6 = "assets/images/icons/individual/icons_small_bs6_blue.png";
	var newSrc6 = "assets/images/icons/individual/icons_small_bs6.png";
	var oldSrc7 = "assets/images/icons/individual/icons_small_bs7_blue.png";
	var newSrc7 = "assets/images/icons/individual/icons_small_bs7.png";
	$("img[src='" + oldSrc1 + "']").attr("src", newSrc1);
	$("img[src='" + oldSrc2 + "']").attr("src", newSrc2);
	$("img[src='" + oldSrc3 + "']").attr("src", newSrc3);
	$("img[src='" + oldSrc4 + "']").attr("src", newSrc4);
	$("img[src='" + oldSrc5 + "']").attr("src", newSrc5);
	$("img[src='" + oldSrc6 + "']").attr("src", newSrc6);
	$("img[src='" + oldSrc7 + "']").attr("src", newSrc7);
	//this calls the "clicked" function to change the tab styling
	x=this;
	clicked(x);
	//this is to change the title
	$("#title").css({"height":"0em"});
	$("#title2").css({"height":"0em"});
	$("#title3").css({"height":"0em"});
	$("#title4").css({"height":"0em"});
	$("#title5").css({"height":"5em"});
	$("#title6").css({"height":"0em"});
	$("#title7").css({"height":"0em"});
	//this changes the text of #content
	$("#content p").html("By this point, you should have already started Baby Step 4—investing 15% of your income—before saving for college. Whether you are saving for you or your child to go to college, you need to start now."+
		"<br>"+"<br>"+
		"In order to have enough money saved for college, you need to have a goal. Determine how much per month you should be saving at 12% interest in order to have enough for college. If you save at 12% and inflation is at 4%, then you are moving ahead of inflation at a net of 8% per year!"+
	"<br><br>");
	
   $.get("http://localhost:9001/app/assets/javascripts/baby-steps.json", function(data) { 
        var friends = data.friends;
    	var firsts = [];
    	var lasts = [];
    	var numBer = firsts.length-2;
    	for(var i=0; i<friends.length;i++){
    		if(friends[i].babyStep===5){
    			firsts.push(friends[i].firstName);
    			lasts.push(friends[i].lastName);
    			
    		}
		}
		if (firsts.length===1){
			$("#content p").append("<div style='font-weight:bold';'font-family:helvetica'>"+"<span style='color:#6fbee7';>"+firsts[0]+" "+lasts[0]+"</span>"+" is also on this step."+"</div>");
		}else if (firsts.length===2){
			$("#content p").append("<div style='font-weight:bold';'font-family:helvetica'>"+"<span style='color:#6fbee7';>"+firsts[0]+" "+lasts[0]+"</span>"+" and "+"<span style='color:#6fbee7';>"+firsts[1]+" "+lasts[1]+"</span>"+" are also on this step."+"</div>");
		}
		else if (numBer>1){
			$("#content p").append("<div style='font-weight:bold';'font-family:helvetica'>"+"<span style='color:#6fbee7';>"+firsts[0]+" "+lasts[0]+", "+firsts[1]+" "+lasts[1]+"</span>"+" and "+ numBer + " other friends are on this step."+"</span>"+"</div>");
		}else if(numBer===1){
			$("#content p").append("<div style='font-weight:bold';'font-family:helvetica'>"+"<span style='color:#6fbee7';>"+firsts[0]+" "+lasts[0]+", "+firsts[1]+" "+lasts[1]+"</span>"+" and "+ "1 other friend are on this step."+"</span>"+"</div>");
		}
	});
});
$("#step-6").click(function changeStyle(){
	//this changes the styling of the tabs
	var oldSrc1 = "assets/images/icons/individual/icons_small_bs1_blue.png";
	var newSrc1 = "assets/images/icons/individual/icons_small_bs1.png";
	var oldSrc2 = "assets/images/icons/individual/icons_small_bs2_blue.png";
	var newSrc2 = "assets/images/icons/individual/icons_small_bs2.png";
	var oldSrc3 = "assets/images/icons/individual/icons_small_bs3_blue.png";
	var newSrc3 = "assets/images/icons/individual/icons_small_bs3.png";
	var oldSrc4 = "assets/images/icons/individual/icons_small_bs4_blue.png";
	var newSrc4 = "assets/images/icons/individual/icons_small_bs4.png";
	var oldSrc5 = "assets/images/icons/individual/icons_small_bs5_blue.png";
	var newSrc5 = "assets/images/icons/individual/icons_small_bs5.png";
	var oldSrc6 = "assets/images/icons/individual/icons_small_bs6.png";
	var newSrc6 = "assets/images/icons/individual/icons_small_bs6_blue.png";
	var oldSrc7 = "assets/images/icons/individual/icons_small_bs7_blue.png";
	var newSrc7 = "assets/images/icons/individual/icons_small_bs7.png";
	$("img[src='" + oldSrc1 + "']").attr("src", newSrc1);
	$("img[src='" + oldSrc2 + "']").attr("src", newSrc2);
	$("img[src='" + oldSrc3 + "']").attr("src", newSrc3);
	$("img[src='" + oldSrc4 + "']").attr("src", newSrc4);
	$("img[src='" + oldSrc5 + "']").attr("src", newSrc5);
	$("img[src='" + oldSrc6 + "']").attr("src", newSrc6);
	$("img[src='" + oldSrc7 + "']").attr("src", newSrc7);

	//this is to change the title
	$("#title").css({"height":"0em"});
	$("#title2").css({"height":"0em"});
	$("#title3").css({"height":"0em"});
	$("#title4").css({"height":"0em"});
	$("#title5").css({"height":"0em"});
	$("#title6").css({"height":"5em"});
	$("#title7").css({"height":"0em"});
	//this calls the "clicked" function to change the tab styling
	x=this;
	clicked(x);
	//this changes the text of #content
	$("#content p").html("Now it’s time to begin chunking all of your extra money toward the mortgage. You are getting closer to realizing the dream of a life with no house payments."+
		"<br>"+"<br>"+
		"As you attack this last debt, you will gain momentum much like you did back in the second step of the debt snowball. Remember, having absolutely no payments is totally within your reach!"+
	"<br><br>");

   $.get("http://localhost:9001/app/assets/javascripts/baby-steps.json", function(data) { 
        var friends = data.friends;
    	var firsts = [];
    	var lasts = [];
    	var numBer = firsts.length-2;
    	for(var i=0; i<friends.length;i++){
    		if(friends[i].babyStep===6){
    			firsts.push(friends[i].firstName);
    			lasts.push(friends[i].lastName);
    			
    		}
		}
		if (firsts.length===1){
			$("#content p").append("<div style='font-weight:bold';'font-family:helvetica'>"+"<span style='color:#6fbee7';>"+firsts[0]+" "+lasts[0]+"</span>"+" is also on this step."+"</div>");
		}else if (firsts.length===2){
			$("#content p").append("<div style='font-weight:bold';'font-family:helvetica'>"+"<span style='color:#6fbee7';>"+firsts[0]+" "+lasts[0]+"</span>"+" and "+"<span style='color:#6fbee7';>"+firsts[1]+" "+lasts[1]+"</span>"+" are also on this step."+"</div>");
		}
		else if (numBer>1){
			$("#content p").append("<div style='font-weight:bold';'font-family:helvetica'>"+"<span style='color:#6fbee7';>"+firsts[0]+" "+lasts[0]+", "+firsts[1]+" "+lasts[1]+"</span>"+" and "+ numBer + " other friends are on this step."+"</span>"+"</div>");
		}else if(numBer===1){
			$("#content p").append("<div style='font-weight:bold';'font-family:helvetica'>"+"<span style='color:#6fbee7';>"+firsts[0]+" "+lasts[0]+", "+firsts[1]+" "+lasts[1]+"</span>"+" and "+ "1 other friend are on this step."+"</span>"+"</div>");
		}
	});
});

$("#step-7").click(function changeStyle(){

	//this changes the styling of the tabs
	var oldSrc1 = "assets/images/icons/individual/icons_small_bs1_blue.png";
	var oldSrc2 = "assets/images/icons/individual/icons_small_bs2_blue.png";
	var oldSrc3 = "assets/images/icons/individual/icons_small_bs3_blue.png";
	var oldSrc4 = "assets/images/icons/individual/icons_small_bs4_blue.png";
	var oldSrc5 = "assets/images/icons/individual/icons_small_bs5_blue.png";
	var oldSrc6 = "assets/images/icons/individual/icons_small_bs6_blue.png";
	var oldSrc7 = "assets/images/icons/individual/icons_small_bs7.png";

	var newSrc1 = "assets/images/icons/individual/icons_small_bs1.png";
	var newSrc2 = "assets/images/icons/individual/icons_small_bs2.png";
	var newSrc3 = "assets/images/icons/individual/icons_small_bs3.png";
	var newSrc4 = "assets/images/icons/individual/icons_small_bs4.png";
	var newSrc5 = "assets/images/icons/individual/icons_small_bs5.png";
	var newSrc6 = "assets/images/icons/individual/icons_small_bs6.png";
	var newSrc7 = "assets/images/icons/individual/icons_small_bs7_blue.png";

	$("img[src='" + oldSrc1 + "']").attr("src", newSrc1);
	$("img[src='" + oldSrc2 + "']").attr("src", newSrc2);
	$("img[src='" + oldSrc3 + "']").attr("src", newSrc3);
	$("img[src='" + oldSrc4 + "']").attr("src", newSrc4);
	$("img[src='" + oldSrc5 + "']").attr("src", newSrc5);
	$("img[src='" + oldSrc6 + "']").attr("src", newSrc6);
	$("img[src='" + oldSrc7 + "']").attr("src", newSrc7);

	$("#title").css({"height":"0em"});
	$("#title2").css({"height":"0em"});
	$("#title3").css({"height":"0em"});
	$("#title4").css({"height":"0em"});
	$("#title5").css({"height":"0em"});
	$("#title6").css({"height":"0em"});
	$("#title7").css({"height":"5em"});

	//this calls the "clicked" function to change the tab styling
	x=this;
	clicked(x);
	//this changes the text of #content
	$("#content p").html("It’s time to build wealth and give like never before. Leave an inheritance for future generations, and bless others now with your excess. It's really the only way to live!"+
		"<br>"+"<br>"+
		"Golda Meir says, “You can’t shake hands with a clenched fist.” Vow to never hold your money so tightly that you never give any away. Hoarding money is not the way to wealth. Save for yourself, save for your family’s future, and be gracious enough to bless others. You can do all three at the same time."+
	"<br>"+"<br>"
	);

   $.get("http://localhost:9001/app/assets/javascripts/baby-steps.json", function(data) { 
        var friends = data.friends;
    	var firsts = [];
    	var lasts = [];
    	var numBer = firsts.length-2;
    	for(var i=0; i<friends.length;i++){
    		if(friends[i].babyStep===7){
    			firsts.push(friends[i].firstName);
    			lasts.push(friends[i].lastName);
    		}
		}
		if (firsts.length===1){
			$("#content p").append("<div style='font-weight:bold';'font-family:helvetica'>"+"<span style='color:#6fbee7';>"+firsts[0]+" "+lasts[0]+"</span>"+" is also on this step."+"</div>");
		}else if (firsts.length===2){
			$("#content p").append("<div style='font-weight:bold';'font-family:helvetica'>"+"<span style='color:#6fbee7';>"+firsts[0]+" "+lasts[0]+"</span>"+" and "+"<span style='color:#6fbee7';>"+firsts[1]+" "+lasts[1]+"</span>"+" are also on this step."+"</div>");
		}
		else if (numBer>1){
			$("#content p").append("<div style='font-weight:bold';'font-family:helvetica'>"+"<span style='color:#6fbee7';>"+firsts[0]+" "+lasts[0]+", "+firsts[1]+" "+lasts[1]+"</span>"+" and "+ numBer + " other friends are on this step."+"</span>"+"</div>");
		}else if(numBer===1){
			$("#content p").append("<div style='font-weight:bold';'font-family:helvetica'>"+"<span style='color:#6fbee7';>"+firsts[0]+" "+lasts[0]+", "+firsts[1]+" "+lasts[1]+"</span>"+" and "+ "1 other friend are on this step."+"</span>"+"</div>");
		}
	});
  });
}	

//this is a loop that was added to each tab to change 
// its styling. It was later moved to the top and called 
// on each tab click
	// for (var i=0; i<list.length; i++){
	// 	var newList = list[i];
	// 	//this parses out the number of each id
	// 	var otherIDs = newList.id.slice(-1);
	// 	//this parses out the number of the id we're on
	// 	var thisID = this.id.slice(-1);
	// 	if (otherIDs === thisID){
	// 		console.log(this.id);
	// 		$(this).addClass('chosen').removeClass('baby-step');
	// 	}else{
	// 		console.log(this.id);
	// 		$(newList).addClass('baby-step').removeClass('chosen');
	// 	}
	// }
