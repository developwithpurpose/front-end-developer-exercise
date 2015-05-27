$(document).ready(function() {
    //side menu
   $("ul li").on("click",function() {
     var active = $(".active-step"),
         step = active.attr("data-step");
     active.children("span").css("background-position", "0 -" + step * 25 +"px");
     active.removeClass("active-step");
     $(this).addClass("active-step");
     var current = $(this).attr("data-step");
     $(this).children("span").css("background-position", "0 -" + (current * 25 + 175) + "px");
     $("#white-background").animate({
         top: (current * 61 - 427) + "px"
     },600);
       loadContent(current);
       loadFriends(current);
   });
    
    
    //main content
    function loadContent(step) {
        var current = Number(step) + 1,
            secondaryHeader = [
                "$1,000 Emergency Fund",
                "Pay off all debt using the Debt Snowball",
                "3 to 6 months of expenses in savings",
                "Invest 15% of household income for retirement",
                "College funding for children",
                "Pay off your house early",
                "Build wealth and give!"
            ],
            firstParagraph = [
                "An emergency fund is for those unexpected events in life that you can’t plan for: the loss of a job, an unexpected pregnancy, a faulty car transmission, and the list goes on and on. It’s not a matter of if these events will happen; it’s simply a matter of when they will happen.",
                "List your debts, excluding the house, in order. The smallest balance should be your number one priority. Don’t worry about interest rates unless two debts have similar payoffs. If that’s the case, then list the higher interest rate debt first.",
                "Once you complete the first two baby steps, you will have built serious momentum. But don’t start throwing all your “extra” money into investments quite yet. It’s time to build your full emergency fund. Ask yourself, “What would it take for me to live for three to six months if I lost my income?” Your answer to that question is how much you should save.",
                "When you reach this step, you’ll have no payments—except the house—and a fully funded emergency fund. Now it’s time to get serious about building wealth.",
                "By this point, you should have already started Baby Step 4—investing 15% of your income—before saving for college. Whether you are saving for you or your child to go to college, you need to start now.",
                "Now it’s time to begin chunking all of your extra money toward the mortgage. You are getting closer to realizing the dream of a life with no house payments.",
                "It’s time to build wealth and give like never before. Leave an inheritance for future generations, and bless others now with your excess. It's really the only way to live!"
            ],
            secondParagraph = [
                "This beginning emergency fund will keep life’s little Murphies from turning into new debt while you work off the old debt. If a real emergency happens, you can handle it with your emergency fund. No more borrowing. It’s time to break the cycle of debt!",
                "The point of the debt snowball is simply this: You need some quick wins in order to stay pumped up about getting out of debt! Paying off debt is not always about math. It’s about motivation. Personal finance is 20% head knowledge and 80% behavior. When you start knocking off the easier debts, you will see results and you will stay motivated to dump your debt.",
                "Use this money for emergencies only: incidents that would have a major impact on you and your family. Keep these savings in a money market account. Remember, this stash of money is not an investment; it is insurance you’re paying to yourself, a buffer between you and life.",
                "Dave suggests investing 15% of your household income into Roth IRAs and pre-tax retirement plans. Don’t invest more than that because the extra money will help you complete the next two steps: college savings and paying off your home early.",
                "In order to have enough money saved for college, you need to have a goal. Determine how much per month you should be saving at 12% interest in order to have enough for college. If you save at 12% and inflation is at 4%, then you are moving ahead of inflation at a net of 8% per year!",
                "As you attack this last debt, you will gain momentum much like you did back in the second step of the debt snowball. Remember, having absolutely no payments is totally within your reach!",
                "Golda Meir says, “You can’t shake hands with a clenched fist.” Vow to never hold your money so tightly that you never give any away. Hoarding money is not the way to wealth. Save for yourself, save for your family’s future, and be gracious enough to bless others. You can do all three at the same time."
            ];
        $("#baby-steps").fadeOut(function(){
            $("#baby-steps span").css("background-position", "0 " + Math.round(step * -64.7 - 454) + "px");
            $("#baby-steps h2").empty().append("Baby Step " + current);
            $("#baby-steps h4").empty().append(secondaryHeader[step]);
            $("#first-paragraph").empty().append(firstParagraph[step]);
            $("#second-paragraph").empty().append(secondParagraph[step]); 
            $("#baby-steps").fadeIn();
        });
    }
    
    function loadFriends(step) {
        var friends = [],
            friendsOne = $("#friends-1"),
            friendsTwo = $("#friends-2"); 
        friendsTwo.empty();
        friendsOne.empty();
        $.ajax({
            url: "/app/assets/javascripts/baby-steps.json",
            dataType: "json",
            success: function(results) {
                results.friends.forEach(function(i){
                    if(Number(step) + 1 === i.babyStep) {
                        friends.push(i.firstName + " " + i.lastName);
                    }
                });
                if(friends.length === 1) {
                    friendsOne.append(friends[0]);
                    friendsTwo.append("is ");
                }else if(friends.length === 2){
                    friendsOne.append(friends[0] + " and " + friends[1]);
                    friendsTwo.append("are ");
                }else if (friends.length > 2){
                    friendsOne.append(friends[0] + ", " + friends[1] );
                    friendsTwo.append("and " + (friends.length - 2) + " Other ");
                    if (friends.length === 3)  {
                        friendsTwo.append("Friend are ");
                    }else { 
                        friendsTwo.append("Friends are ");
                    }
                }
                if(friends.length > 0){
                  friendsTwo.append("also in Baby Step " + (Number(step) + 1));
                }
            },
            error: function() {
            }
        });
    }
});