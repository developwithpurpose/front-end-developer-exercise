$( document ).ready(function() {
    console.log('It works!');
    // console.log( "main.js reports ", babysteps_data );

    

    function clear_content()    {
            $("#bstitle").text("");
            $("#bssubtitle").text("");
            $("#blurb1").text("");
            $("#blurb2").text("");

    }

    function check_friends(step) {
        
        $.getJSON('../baby-steps.json', function (data) {
            // console.log(data.friends[2].firstName + " " + data.friends[2].lastName + " " + data.friends[2].step);
           
            
            var mystep_friends = [];

            console.log(step)

            for (var i = 0;i<data.friends.length;i++) {
                // console.log(data.friends[i].firstName + " " + data.friends[i].lastName  + " " + data.friends[i].babyStep);
                if (data.friends[i].babyStep === step) {
                    mystep_friends.push(data.friends[i].firstName + " " + data.friends[i].lastName);
                }
            }

            
            // console.log(mystep_friends-2);

            if (mystep_friends.length === 0) {
                $("#names").text("");
                $("#onstep").text("") 
            }
            else if (mystep_friends.length === 1) {
                $("#names").text(mystep_friends[0]);
                $("#onstep").text(" is also in Baby Step 2") 
            }
            else if (mystep_friends.length === 2) {
                $("#names").text(mystep_friends[0] + " and " + mystep_friends[1]);
                $("#onstep").text(" are also in Baby Step 3") 
            }
            else if (mystep_friends.length === 3) {
                $("#names").text(mystep_friends[0] + ", " + mystep_friends[1]);
                $("#onstep").text(" and 1 other friend are also in Baby Step 4") 
            }
            else if (mystep_friends.length === 4) {
                $("#names").text(mystep_friends[0] + ", " + mystep_friends[1]+ ", ");
                $("#onstep").text("and " + (mystep_friends.length-2) + " other friends are in Baby Step 5") 
            }
            else if (mystep_friends.length === 5) {
                $("#names").text(mystep_friends[0] + ", " + mystep_friends[1]+ ", ");
                $("#onstep").text("and " + (mystep_friends.length-2) + " other friends are in Baby Step 6") 
            }
            else if (mystep_friends.length === 6) {
                $("#names").text(mystep_friends[0] + ", " + mystep_friends[1]+ ", ");
                $("#onstep").text("and " + (mystep_friends.length-2) + " other friends are in Baby Step 7") 
            }
        });
        
    }

    


    $("#button1").click(function() {
        
        $(this).removeClass().addClass("button-white");
        $("#button2, #button3, #button4, #button5, #button6, #button7").removeClass().addClass('button-gray');
        $("#button1text").removeClass().addClass('button-text-blue');
        $("#button2text, #button3text, #button4text, #button5text, #button6text, #button7text").removeClass().addClass('button-text-gray');
        
        $("#btnicon1").attr("src","/assets/images/icons/individual/icons_small_bs1_blue.png");
        $("#btnicon2").attr("src","/assets/images/icons/individual/icons_small_bs2.png");
        $("#btnicon3").attr("src","/assets/images/icons/individual/icons_small_bs3.png");
        $("#btnicon4").attr("src","/assets/images/icons/individual/icons_small_bs4.png");
        $("#btnicon5").attr("src","/assets/images/icons/individual/icons_small_bs5.png");
        $("#btnicon6").attr("src","/assets/images/icons/individual/icons_small_bs6.png");
        $("#btnicon7").attr("src","/assets/images/icons/individual/icons_small_bs7.png");
    
        clear_content();

        $("#bstitle").text("Baby Step 1");
        $("#bssubtitle").text("$1,000 Emergency Fund");
        $("#blurb1").text("An emergency fund is for those unexpected events in life that you can’t plan for: the loss of a job, an unexpected pregnancy, a faulty car transmission, and the list goes on and on. It’s not a matter of if these events will happen; it’s simply a matter of when they will happen.");
        $("#blurb2").text("This beginning emergency fund will keep life’s little Murphies from turning into new debt while you work off the old debt. If a real emergency happens, you can handle it with your emergency fund. No more borrowing. It’s time to break the cycle of debt!");
    
        check_friends(1);
    
    }); 

    $("#button2").click(function() {
        
        $(this).removeClass().addClass("button-white");
        $("#button1, #button3, #button4, #button5, #button6, #button7").removeClass().addClass('button-gray');
        $("#button2text").removeClass().addClass('button-text-blue');
        $("#button1text, #button3text, #button4text, #button5text, #button6text, #button7text").removeClass().addClass('button-text-gray');
    
        $("#btnicon1").attr("src","/assets/images/icons/individual/icons_small_bs1.png");
        $("#btnicon2").attr("src","/assets/images/icons/individual/icons_small_bs2_blue.png");
        $("#btnicon3").attr("src","/assets/images/icons/individual/icons_small_bs3.png");
        $("#btnicon4").attr("src","/assets/images/icons/individual/icons_small_bs4.png");
        $("#btnicon5").attr("src","/assets/images/icons/individual/icons_small_bs5.png");
        $("#btnicon6").attr("src","/assets/images/icons/individual/icons_small_bs6.png");
        $("#btnicon7").attr("src","/assets/images/icons/individual/icons_small_bs7.png");

        $("#bstitle").text("Baby Step 2");
        $("#bssubtitle").text("Pay off all debt using the Debt Snowball");
        $("#blurb1").text("List your debts, excluding the house, in order. The smallest balance should be your number one priority. Don’t worry about interest rates unless two debts have similar payoffs. If that’s the case, then list the higher interest rate debt first.");
        $("#blurb2").text("The point of the debt snowball is simply this: You need some quick wins in order to stay pumped up about getting out of debt! Paying off debt is not always about math. It’s about motivation. Personal finance is 20% head knowledge and 80% behavior. When you start knocking off the easier debts, you will see results and you will stay motivated to dump your debt.");
    
        check_friends(2);
    
    }); 

    $('#button3').click(function() {
        $(this).removeClass().addClass("button-white");
        $("#button1, #button2, #button4, #button5, #button6, #button7").removeClass().addClass('button-gray');
        $("#button3text").removeClass().addClass('button-text-blue');
        $("#button1text, #button2text, #button4text, #button5text, #button6text, #button7text").removeClass().addClass('button-text-gray');
 
        $("#btnicon1").attr("src","/assets/images/icons/individual/icons_small_bs1.png");
        $("#btnicon2").attr("src","/assets/images/icons/individual/icons_small_bs2.png");
        $("#btnicon3").attr("src","/assets/images/icons/individual/icons_small_bs3_blue.png");
        $("#btnicon4").attr("src","/assets/images/icons/individual/icons_small_bs4.png");
        $("#btnicon5").attr("src","/assets/images/icons/individual/icons_small_bs5.png");
        $("#btnicon6").attr("src","/assets/images/icons/individual/icons_small_bs6.png");
        $("#btnicon7").attr("src","/assets/images/icons/individual/icons_small_bs7.png");
        
        $("#bstitle").text("Baby Step 3");
        $("#bssubtitle").text("3 to 6 months of expenses in savings");
        $("#blurb1").text("Once you complete the first two baby steps, you will have built serious momentum. But don’t start throwing all your “extra” money into investments quite yet. It’s time to build your full emergency fund. Ask yourself, “What would it take for me to live for three to six months if I lost my income?” Your answer to that question is how much you should save.");
        $("#blurb2").text("Use this money for emergencies only: incidents that would have a major impact on you and your family. Keep these savings in a money market account. Remember, this stash of money is not an investment; it is insurance you’re paying to yourself, a buffer between you and life.");
       
        check_friends(3);
    
    }); 

    $('#button4').click(function() {
        $(this).removeClass().addClass("button-white");
        $("#button1, #button2, #button3, #button5, #button6, #button7").removeClass().addClass('button-gray');
        $("#button4text").removeClass().addClass('button-text-blue');
        $("#button1text, #button2text, #button3text, #button5text, #button6text, #button7text").removeClass().addClass('button-text-gray');
    
        $("#btnicon1").attr("src","/assets/images/icons/individual/icons_small_bs1.png");
        $("#btnicon2").attr("src","/assets/images/icons/individual/icons_small_bs2.png");
        $("#btnicon3").attr("src","/assets/images/icons/individual/icons_small_bs3.png");
        $("#btnicon4").attr("src","/assets/images/icons/individual/icons_small_bs4_blue.png");
        $("#btnicon5").attr("src","/assets/images/icons/individual/icons_small_bs5.png");
        $("#btnicon6").attr("src","/assets/images/icons/individual/icons_small_bs6.png");
        $("#btnicon7").attr("src","/assets/images/icons/individual/icons_small_bs7.png");
        
        $("#bstitle").text("Baby Step 4");
        $("#bssubtitle").text("Invest 15% of household income for retirement");
        $("#blurb1").text("When you reach this step, you’ll have no payments—except the house—and a fully funded emergency fund. Now it’s time to get serious about building wealth.");
        $("#blurb2").text("Dave suggests investing 15% of your household income into Roth IRAs and pre-tax retirement plans. Don’t invest more than that because the extra money will help you complete the next two steps: college savings and paying off your home early.");
    
        check_friends(4);
    
    }); 

    $('#button5').click(function() {
        $(this).removeClass().addClass("button-white");
        $("#button1, #button2, #button3, #button4, #button6, #button7").removeClass().addClass('button-gray');
        $("#button5text").removeClass().addClass('button-text-blue');
        $("#button1text, #button2text, #button3text, #button4text, #button6text, #button7text").removeClass().addClass('button-text-gray');
    
        $("#btnicon1").attr("src","/assets/images/icons/individual/icons_small_bs1.png");
        $("#btnicon2").attr("src","/assets/images/icons/individual/icons_small_bs2.png");
        $("#btnicon3").attr("src","/assets/images/icons/individual/icons_small_bs3.png");
        $("#btnicon4").attr("src","/assets/images/icons/individual/icons_small_bs4.png");
        $("#btnicon5").attr("src","/assets/images/icons/individual/icons_small_bs5_blue.png");
        $("#btnicon6").attr("src","/assets/images/icons/individual/icons_small_bs6.png");
        $("#btnicon7").attr("src","/assets/images/icons/individual/icons_small_bs7.png");

        $("#bstitle").text("Baby Step 5");
        $("#bssubtitle").text("College funding for children");
        $("#blurb1").text("By this point, you should have already started Baby Step 4—investing 15% of your income—before saving for college. Whether you are saving for you or your child to go to college, you need to start now.");
        $("#blurb2").text("In order to have enough money saved for college, you need to have a goal. Determine how much per month you should be saving at 12% interest in order to have enough for college. If you save at 12% and inflation is at 4%, then you are moving ahead of inflation at a net of 8% per year!");
    
        check_friends(5);
    
    }); 

    $('#button6').click(function() {
        $(this).removeClass().addClass("button-white");
        $("#button1, #button2, #button3, #button4, #button5, #button7").removeClass().addClass('button-gray');
        $("#button6text").removeClass().addClass('button-text-blue');
        $("#button1text, #button2text, #button3text, #button4text, #button5text, #button7text").removeClass().addClass('button-text-gray');
    
        $("#btnicon1").attr("src","/assets/images/icons/individual/icons_small_bs1.png");
        $("#btnicon2").attr("src","/assets/images/icons/individual/icons_small_bs2.png");
        $("#btnicon3").attr("src","/assets/images/icons/individual/icons_small_bs3.png");
        $("#btnicon4").attr("src","/assets/images/icons/individual/icons_small_bs4.png");
        $("#btnicon5").attr("src","/assets/images/icons/individual/icons_small_bs5.png");
        $("#btnicon6").attr("src","/assets/images/icons/individual/icons_small_bs6_blue.png");
        $("#btnicon7").attr("src","/assets/images/icons/individual/icons_small_bs7.png");

        $("#bstitle").text("Baby Step 6");
        $("#bssubtitle").text("Pay off your house early");
        $("#blurb1").text("Now it’s time to begin chunking all of your extra money toward the mortgage. You are getting closer to realizing the dream of a life with no house payments.");
        $("#blurb2").text("As you attack this last debt, you will gain momentum much like you did back in the second step of the debt snowball. Remember, having absolutely no payments is totally within your reach!");
    
        check_friends(6);
    
    }); 

    $('#button7').click(function() {
        $(this).removeClass().addClass("button-white");
        $("#button1, #button2, #button3, #button4, #button5, #button6").removeClass().addClass('button-gray');
        $("#button7text").removeClass().addClass('button-text-blue');
        $("#button1text, #button2text, #button3text, #button4text, #button5text, #button6text").removeClass().addClass('button-text-gray');
    
        $("#btnicon1").attr("src","/assets/images/icons/individual/icons_small_bs1.png");
        $("#btnicon2").attr("src","/assets/images/icons/individual/icons_small_bs2.png");
        $("#btnicon3").attr("src","/assets/images/icons/individual/icons_small_bs3.png");
        $("#btnicon4").attr("src","/assets/images/icons/individual/icons_small_bs4.png");
        $("#btnicon5").attr("src","/assets/images/icons/individual/icons_small_bs5.png");
        $("#btnicon6").attr("src","/assets/images/icons/individual/icons_small_bs6.png");
        $("#btnicon7").attr("src","/assets/images/icons/individual/icons_small_bs7_blue.png");

        $("#bstitle").text("Baby Step 7");
        $("#bssubtitle").text("Build wealth and give!");
        $("#blurb1").text("It’s time to build wealth and give like never before. Leave an inheritance for future generations, and bless others now with your excess. It's really the only way to live!");
        $("#blurb2").text("Golda Meir says, “You can’t shake hands with a clenched fist.” Vow to never hold your money so tightly that you never give any away. Hoarding money is not the way to wealth. Save for yourself, save for your family’s future, and be gracious enough to bless others. You can do all three at the same time.");
    

        check_friends(7);
    }); 























});