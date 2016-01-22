$( document ).ready(function(){

	var babyStepSmallBlueIcon =
	{
		1 :"assets/images/icons/individual/icons_small_bs1_blue.png",
		2 :"assets/images/icons/individual/icons_small_bs2_blue.png",
		3 :"assets/images/icons/individual/icons_small_bs3_blue.png",
		4 :"assets/images/icons/individual/icons_small_bs4_blue.png",
		5 :"assets/images/icons/individual/icons_small_bs5_blue.png",
		6 :"assets/images/icons/individual/icons_small_bs6_blue.png",
		7 :"assets/images/icons/individual/icons_small_bs7_blue.png"
	}
	var babyStepSmallIcon =
	{
		1 :"assets/images/icons/individual/icons_small_bs1.png",
		2 :"assets/images/icons/individual/icons_small_bs2.png",
		3 :"assets/images/icons/individual/icons_small_bs3.png",
		4 :"assets/images/icons/individual/icons_small_bs4.png",
		5 :"assets/images/icons/individual/icons_small_bs5.png",
		6 :"assets/images/icons/individual/icons_small_bs6.png",
		7 :"assets/images/icons/individual/icons_small_bs7.png"
	}	

	var babyStepHeadingImage = 
	{
		1 :"assets/images/icons/individual/icons_large_bs1_blue.png",
		2 :"assets/images/icons/individual/icons_large_bs2_blue.png",
		3 :"assets/images/icons/individual/icons_large_bs3_blue.png",
		4 :"assets/images/icons/individual/icons_large_bs4_blue.png",
		5 :"assets/images/icons/individual/icons_large_bs5_blue.png",
		6 :"assets/images/icons/individual/icons_large_bs6_blue.png",
		7 :"assets/images/icons/individual/icons_large_bs7_blue.png"
	}

	var babyStepHeader = 
	{
		1 :"Baby Step 1",
		2 :"Baby Step 2",
		3 :"Baby Step 3",
		4 :"Baby Step 4",
		5 :"Baby Step 5",
		6 :"Baby Step 6",
		7 :"Baby Step 7"
	}

	var babyStepSubHeader = 
	{
		1 :"$1,000 Emergency Fund",
		2 :"Pay off all debt using the Debt Snowball",
		3 :"3 to 6 months of exepenses in savings",
		4 :"Invest 15% of household income for retirement",
		5 :"College funding for children",
		6 :"Pay off your house early",
		7 :"Build wealth and give!"
	}	

	var babyStep = 
	{
		1 : "<p>An emergency fund is for those unexpected events in life that you can’t plan for: the loss of a job, an unexpected pregnancy, a faulty car transmission, and the list goes on and on. It’s not a matter of if these events will happen; it’s simply a matter of when they will happen.</p><p>This beginning emergency fund will keep life’s little Murphies from turning into new debt while you work off the old debt. If a real emergency happens, you can handle it with your emergency fund. No more borrowing. It’s time to break the cycle of debt!</p>",
		2 : "<p>The smallest balance should be your number one priority. Don’t worry about interest rates unless two debts have similar payoffs. If that’s the case, then list the higher interest rate debt first.</p><p>The point of the debt snowball is simply this: You need some quick wins in order to stay pumped up about getting out of debt! Paying off debt is not always about math. It’s about motivation. Personal finance is 20% head knowledge and 80% behavior. When you start knocking off the easier debts, you will see results and you will stay motivated to dump your debt</p>",
		3 : "<p>Once you complete the first two baby steps, you will have built serious momentum. But don’t start throwing all your “extra” money into investments quite yet. It’s time to build your full emergency fund. Ask yourself, “What would it take for me to live for three to six months if I lost my income?” Your answer to that question is how much you should save.</p><p>Use this money for emergencies only: incidents that would have a major impact on you and your family. Keep these savings in a money market account. Remember, this stash of money is not an investment; it is insurance you’re paying to yourself, a buffer between you and life.<p>",
		4 : "<p>When you reach this step, you’ll have no payments—except the house—and a fully funded emergency fund. Now it’s time to get serious about building wealth.</p></p>Dave suggests investing 15% of your household income into Roth IRAs and pre-tax retirement plans. Don’t invest more than that because the extra money will help you complete the next two steps: college savings and paying off your home early.<p>",
		5 : "<p>By this point, you should have already started Baby Step 4—investing 15% of your income—before saving for college. Whether you are saving for you or your child to go to college, you need to start now.</p></p>In order to have enough money saved for college, you need to have a goal. Determine how much per month you should be saving at 12% interest in order to have enough for college. If you save at 12% and inflation is at 4%, then you are moving ahead of inflation at a net of 8% per year!<p>",
		6 : "<p>Now it’s time to begin chunking all of your extra money toward the mortgage. You are getting closer to realizing the dream of a life with no house payments.</p></p>As you attack this last debt, you will gain momentum much like you did back in the second step of the debt snowball. Remember, having absolutely no payments is totally within your reach!<p>",
		7 : "<p>It’s time to build wealth and give like never before. Leave an inheritance for future generations, and bless others now with your excess. It's really the only way to live!</p></p>Golda Meir says, “You can’t shake hands with a clenched fist.” Vow to never hold your money so tightly that you never give any away. Hoarding money is not the way to wealth. Save for yourself, save for your family’s future, and be gracious enough to bless others. You can do all three at the same time.<p>"
	}

	$(".BabyStepBox").click(function(){
		var step = $(this).data('step');
		$(".BabyStepBox").removeClass("selected");
		$(this).addClass("selected");

		$(".SmallIcon1").attr("src",babyStepSmallIcon[1]);
		$(".SmallIcon2").attr("src",babyStepSmallIcon[2]);
		$(".SmallIcon3").attr("src",babyStepSmallIcon[3]);
		$(".SmallIcon4").attr("src",babyStepSmallIcon[4]);
		$(".SmallIcon5").attr("src",babyStepSmallIcon[5]);
		$(".SmallIcon6").attr("src",babyStepSmallIcon[6]);
		$(".SmallIcon7").attr("src",babyStepSmallIcon[7]);
		$(".SmallIcon"+[step]).attr("src",babyStepSmallBlueIcon[step]);

		$(".HeaderImage").hide( "medium", function () {
			$(".HeaderImage").show("slide", { direction: "down" }, 100).attr("src",babyStepHeadingImage[step])
		})
		$(".HeadingText").hide( "medium", function() {
			$(".HeadingText").show("slide", { direction: "down" }, 100).html(babyStepHeader[step]);
		})
		$(".SubHeadingText").hide( "medium", function() {
			$(".SubHeadingText").show("slide", { direction: "down" }, 100).html(babyStepSubHeader[step]);
		})
		$(".TextBody").hide( "medium", function() {
			$(".TextBody").show("slide", { direction: "up" }, 100).html(babyStep[step]);
		})



		$(function () {
			$(".OtherFriend").html("")
			$.ajax({
				type: "GET",
				url: "baby-steps.json",
				success: function(data) {
					var friends = [];
					$.each(data.friends, function(i, friend) {
						if (step == friend.babyStep){
							friends.push(friend)
						}
					});
					$(".OtherFriend").hide( "slow", function() {
					if (step==2) {
						$(".OtherFriend").show("slide", { direction: "left" }, 2000).append("<span class='Links'>"+friends[0].firstName + " " + friends[0].lastName + "</span> is also in Baby Step 2");
					} else if (step==3) {
						$(".OtherFriend").show("slide", { direction: "left" }, 2000).append("<span class='Links'>"+friends[1].firstName + " " + friends[1].lastName + "</span> and <span class='Links'>" + friends[0].firstName + " " + friends[0].lastName + "</span> are also in Baby Step 3");
					} else if (step==4) {
						$(".OtherFriend").show("slide", { direction: "left" }, 2000).append("<span class='Links'>"+friends[0].firstName + " " + friends[0].lastName + ", " + friends[2].firstName + " " + friends[2].lastName+"</span>" +" and " + ((friends.length)-2) + " other friend are also in Baby Step 4");
					} else if (step==5) {
						$(".OtherFriend").show("slide", { direction: "left" }, 2000).append("<span class='Links'>"+friends[2].firstName + " " + friends[2].lastName + ", " + friends[3].firstName + " " + friends[3].lastName+"</span>" +" and " + ((friends.length)-2) + " other friends are also in Baby Step 5");
					} else if (step==6) {
						$(".OtherFriend").show("slide", { direction: "left" }, 2000).append("<span class='Links'>"+friends[2].firstName + " " + friends[2].lastName + ", " + friends[3].firstName + " " + friends[3].lastName+"</span>" +" and " + ((friends.length)-2) + " other friends are also in Baby Step 6");
					} else if (step==7) {
						$(".OtherFriend").show("slide", { direction: "left" }, 2000).append("<span class='Links'>"+friends[2].firstName + " " + friends[2].lastName + ", " + friends[0].firstName + " " + friends[0].lastName+"</span>" +" and " + ((friends.length)-2) + " other friends are also in Baby Step 7");
					} else { 
						$(".OtherFriend").html("");
					}
					});
				}
			});
		});	
	});

});





