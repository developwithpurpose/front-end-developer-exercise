$(document).ready(onReady);
function onReady() {
	// Open with http://localhost:9001/app/index.html
"use strict";
	//The 'list' variable will allow me to loop through all tab divs
	var list = $("#list div");
	//The 'pages' variable will allow me to change the text content 
	var pages = $("#content div");
	//The 'x' variable is what gets produced when you click on a tab 
	var x;
//This 'GET' request displays the number of friends on Step 1 when the page loads
$.get("http://localhost:9001/app/assets/javascripts/baby-steps.json", function(data) { 
    var friends = data.friends;
 	//This creates an empty array of first names
 	var firsts = [];
 	//This creates an empty array of last names
  	var lasts = [];
 	//This adds first or last names to each array depending on which its for 
  	for(var i=0; i<friends.length;i++){
   		if(friends[i].babyStep===1){
   			firsts.push(friends[i].firstName);
   			lasts.push(friends[i].lastName);
   		}
	}
	//This creates a variable to be used when there are more than 3 friends on the level
	var numBer = firsts.length-2;
	//This tells the site what to say depending on how many people are on that level
	if (firsts.length===1){
		$("#content p").append("<br><br>"+"<div style='font-weight:bold';'font-family:helvetica'>"+"<span style='color:#6fbee7';>"+firsts[0]+" "+lasts[0]+"</span>"+" is also on this step."+"</div>");
	}else if (firsts.length===2){
		$("#content p").append("<br><br>"+"<div style='font-weight:bold';'font-family:helvetica'>"+"<span style='color:#6fbee7';>"+firsts[0]+" "+lasts[0]+"</span>"+" and "+"<span style='color:#6fbee7';>"+firsts[1]+" "+lasts[1]+"</span>"+" are also on this step."+"</div>");
	}else if (firsts.length===3){
		$("#content p").append("<br><br>"+"<div style='font-weight:bold';'font-family:helvetica'>"+"<span style='color:#6fbee7';>"+firsts[0]+" "+lasts[0]+", "+firsts[1]+" "+lasts[1]+"</span>"+" and "+ "1 other friend are on this step."+"</span>"+"</div>");
	}
	else if (firsts.length>3){
		$("#content p").append("<br><br>"+"<div style='font-weight:bold';'font-family:helvetica'>"+"<span style='color:#6fbee7';>"+firsts[0]+" "+lasts[0]+", "+firsts[1]+" "+lasts[1]+"</span>"+" and "+ numBer + " other friends are on this step."+"</span>"+"</div>");
	}
	else{
		$("#content p").append("");
	}
});
//This gets your friends who are on the same level and changes the styling of the tab
function clicked(x){
	//'x' is the chosen/clicked div
	//Example 'x': <div class="chosen" id="step-1">Baby Step 1 <img src="imagesrc"></div>
	//This 'GET' request displays the number of friends on Step 1 when the page loads from the JSON file
	$.get("http://localhost:9001/app/assets/javascripts/baby-steps.json", function(data) { 
	    var friends = data.friends;
	  	var firsts = [];
	   	var lasts = [];
	   	var thisID = x.id.slice(-1);
	   
	   	for(var i=0; i<friends.length;i++){
			thisID=parseInt(thisID);
     		if(friends[i].babyStep===thisID){
	    		firsts.push(friends[i].firstName);
	    		lasts.push(friends[i].lastName);
	   		}
		}

		var numBer = firsts.length-2;
			
		if (firsts.length===1){
			$("#content p").append("<br><br>"+"<div style='font-weight:bold';'font-family:helvetica'>"+"<span style='color:#6fbee7';>"+firsts[0]+" "+lasts[0]+"</span>"+" is also on this step."+"</div>");
		}else if (firsts.length===2){
			$("#content p").append("<br><br>"+"<div style='font-weight:bold';'font-family:helvetica'>"+"<span style='color:#6fbee7';>"+firsts[0]+" "+lasts[0]+"</span>"+" and "+"<span style='color:#6fbee7';>"+firsts[1]+" "+lasts[1]+"</span>"+" are also on this step."+"</div>");
		}
		else if (firsts.length===3){
			$("#content p").append("<br><br>"+"<div style='font-weight:bold';'font-family:helvetica'>"+"<span style='color:#6fbee7';>"+firsts[0]+" "+lasts[0]+", "+firsts[1]+" "+lasts[1]+"</span>"+" and "+ "1 other friend are on this step."+"</span>"+"</div>");
		}
		else if (firsts.length>3){
			$("#content p").append("<br><br>"+"<div style='font-weight:bold';'font-family:helvetica'>"+"<span style='color:#6fbee7';>"+firsts[0]+" "+lasts[0]+", "+firsts[1]+" "+lasts[1]+"</span>"+" and "+ numBer + " other friends are on this step."+"</span>"+"</div>");
		}
		else{
			$("#content p").append("");
		}	
	});
	//Here's where we are changing the page tab
	for (var i=0; i<pages.length; i++){
		//Variable 'newPage' names each id
		var newPage = pages[i].id;
		//This changes newPage to the last character 
		newPage=newPage.slice(-1);
		//This ensures all page tabs are a height of 0
		$(pages[i]).css({"height":"0em"});
		//The parsed number form the clicked tab has to equal the last number
		//of the paragraph id you want it to be
		var thisPage = x.id.slice(-1);
		//This makes the page tab you're clicking on display
		if(newPage===thisPage){
			$(pages[i]).css({"height":"5em"});
		}
	}
		 
	for (i=0; i<list.length; i++){
		//Variable 'newList' names each element
		var newList = list[i]; 
		//This parses out the number of each id
		var otherIDs = newList.id.slice(-1);
		//This parses out the number of the id we're on
		var thisID = x.id.slice(-1);
		var oldSrc1 = "assets/images/icons/individual/icons_small_bs"+otherIDs+"_blue.png";
		var newSrc1 = "assets/images/icons/individual/icons_small_bs"+otherIDs+".png";
		
		$("img[src='" + oldSrc1 + "']").attr("src", newSrc1);
		
		$(newList).addClass("baby-step").removeClass("chosen");

		if(otherIDs === thisID){
			var oldSrc2 = "assets/images/icons/individual/icons_small_bs"+otherIDs+".png";
			var newSrc2 = "assets/images/icons/individual/icons_small_bs"+otherIDs+"_blue.png";
			$("img[src='" + oldSrc2 + "']").attr("src", newSrc2);
			$(x).addClass("chosen").removeClass("baby-step");
		}else{
			$(newList).addClass("baby-step").removeClass("chosen");
		}
	}
}

$("#step-1").click(function changeStyle(){
	x=this;
	clicked(x);
	$("#content p").html("An emergency fund is for those unexpected events in life that you can’t plan for: the loss of a job, an unexpected pregnancy, a faulty car transmission, and the list goes on and on. It’s not a matter of if these events will happen; it’s simply a matter of when they will happen."+
	"<br>"+"<br>"+"This beginning emergency fund will keep life’s little Murphies from turning into new debt while you work off the old debt. If a real emergency happens, you can handle it with your emergency fund. No more borrowing. It’s time to break the cycle of debt!");
});

$("#step-2").click(function changeStyle(){
	x=this;
	clicked(x);
	$("#content p").html("List your debts, excluding the house, in order. The smallest balance should be your number one priority. Dont worry about interest rates unless two debts have similar payoffs. If thats the case, then list the higher interest rate debt first."+
	"<br>"+"<br>"+"The point of the debt snowball is imply this: You need some quick wins in order to stay pumped about getting out of debt! Paying off debt is not always about math. It’s about motivation. Personal finance is 20% head nowledge and 80% behavior. When you start knocking off the easier debts, you will see results and you will stay motivated to dump your debt.");
});

$("#step-3").click(function changeStyle(){
	x=this;
	clicked(x);
	$("#content p").html("Once you complete the first two baby steps, you will have built serious momentum. But don’t start throwing all your “extra” money into investments quite yet. It’s time to build your full emergency fund. Ask yourself, “What would it take for me to live for three to six months if I lost my income?” Your answer to that question is how much you should save."+
	"<br>"+"<br>"+"Use this money for emergencies only: incidents that would have a major impact on you and your family. Keep these savings in a money market account. Remember, this stash of money is not an investment; it is insurance you’re paying to yourself, a buffer between you and life.");
});

$("#step-4").click(function changeStyle(){
	x=this;
	clicked(x);
	$("#content p").html("When you reach this step, you’ll have no payments—except the house—and a fully funded emergency fund. Now it’s time to get serious about building wealth."+
	"<br>"+"<br>"+"Dave suggests investing 15% of your household income into Roth IRAs and pre-tax retirement plans. Don’t invest more than that because the extra money will help you complete the next two steps: college savings and paying off your home early.");	
});

$("#step-5").click(function changeStyle(){
	x=this;
	clicked(x);
	$("#content p").html("By this point, you should have already started Baby Step 4—investing 15% of your income—before saving for college. Whether you are saving for you or your child to go to college, you need to start now."+
	"<br>"+"<br>"+"In order to have enough money saved for college, you need to have a goal. Determine how much per month you should be saving at 12% interest in order to have enough for college. If you save at 12% and inflation is at 4%, then you are moving ahead of inflation at a net of 8% per year!");	
});

$("#step-6").click(function changeStyle(){
	x=this;
	clicked(x);
	$("#content p").html("Now it’s time to begin chunking all of your extra money toward the mortgage. You are getting closer to realizing the dream of a life with no house payments."+
	"<br>"+"<br>"+"As you attack this last debt, you will gain momentum much like you did back in the second step of the debt snowball. Remember, having absolutely no payments is totally within your reach!");
});

$("#step-7").click(function changeStyle(){
	x=this;
	clicked(x);
	$("#content p").html("It’s time to build wealth and give like never before. Leave an inheritance for future generations, and bless others now with your excess. It's really the only way to live!"+
	"<br>"+"<br>"+"Golda Meir says, “You can’t shake hands with a clenched fist.” Vow to never hold your money so tightly that you never give any away. Hoarding money is not the way to wealth. Save for yourself, save for your family’s future, and be gracious enough to bless others. You can do all three at the same time.");
  });
}	

