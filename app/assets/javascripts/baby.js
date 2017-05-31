$( document ).ready(function() {
  var friends;
  var step = 1;
  $(".nav_link").attr('onclick', 'return false;');
  $.ajax({
  url: "http://localhost:8080/baby-steps.json"})
  .done(function( data ) {
    friends = data.friends;
    display_message();
  });
  $("#nav_1_cover").click(function() {
    if(step != 1){
      update_nav_links(1, step);
      $("#content").slideUp(200).delay(210).queue(function(n) {
        $("#hdr_icon").css("background-position", "0 -455px");
        $("#header_text_main").text("Baby Step 1");
        $("#header_text_sub").text("$1,000 Emergency Fund");
        $("#main_text_1").text("An emergency fund is for those unexpected events in life that you can’t plan for: the loss of a job, an unexpected pregnancy, a faulty car transmission, and the list goes on and on. It’s not a matter of if these events will happen; it’s simply a matter of when they will happen.");
        $("#main_text_2").text("This beginning emergency fund will keep life’s little Murphies from turning into new debt while you work off the old debt. If a real emergency happens, you can handle it with your emergency fund. No more borrowing. It’s time to break the cycle of debt!");
        display_message();n();
      }).slideDown(200);
    }
  });
  $("#nav_2_cover").click(function() {
    if(step != 2){
      update_nav_links(2, step);
      $("#content").slideUp(200).delay(210).queue(function(n) {
        $("#hdr_icon").css("background-position", "0 -520px");
        $("#header_text_main").text("Baby Step 2");
        $("#header_text_sub").text("Pay off all debt using the Debt Snowball");
        $("#main_text_1").text("List your debts, excluding the house, in order. The smallest balance should be your number one priority. Don’t worry about interest rates unless two debts have similar payoffs. If that’s the case, then list the higher interest rate debt first.");
        $("#main_text_2").text("The point of the debt snowball is simply this: You need some quick wins in order to stay pumped up about getting out of debt! Paying off debt is not always about math. It’s about motivation. Personal finance is 20% head knowledge and 80% behavior. When you start knocking off the easier debts, you will see results and you will stay motivated to dump your debt.");
        display_message();n();
      }).slideDown(200);
    }
    });
  $("#nav_3_cover").click(function() {
    if(step != 3){
      update_nav_links(3, step);
      $("#content").slideUp(200).delay(210).queue(function(n) {
        $("#hdr_icon").css("background-position", "0 -585px");
        $("#header_text_main").text("Baby Step 3");
        $("#header_text_sub").text("3 to 6 months of exepenses in savings");
        $("#main_text_1").text("Once you complete the first two baby steps, you will have built serious momentum. But don’t start throwing all your “extra” money into investments quite yet. It’s time to build your full emergency fund. Ask yourself, “What would it take for me to live for three to six months if I lost my income?” Your answer to that question is how much you should save.");
        $("#main_text_2").text("Use this money for emergencies only: incidents that would have a major impact on you and your family. Keep these savings in a money market account. Remember, this stash of money is not an investment; it is insurance you’re paying to yourself, a buffer between you and life.");
        display_message();n();
      }).slideDown(200);
    }
  });
  $("#nav_4_cover").click(function() {
    if(step != 4){
      update_nav_links(4, step);
      $("#content").slideUp(200).delay(210).queue(function(n) {
        $("#hdr_icon").css("background-position", "0 -647px");
        $("#header_text_main").text("Baby Step 4");
        $("#header_text_sub").text("Invest 15% of household income for retirement");
        $("#main_text_1").text("When you reach this step, you’ll have no payments—except the house—and a fully funded emergency fund. Now it’s time to get serious about building wealth.");
        $("#main_text_2").text("Dave suggests investing 15% of your household income into Roth IRAs and pre-tax retirement plans. Don’t invest more than that because the extra money will help you complete the next two steps: college savings and paying off your home early.");
        display_message();n();
      }).slideDown(200);
    }
  });
  $("#nav_5_cover").click(function() {
    if(step != 5){
      update_nav_links(5, step);
      $("#content").slideUp(200).delay(210).queue(function(n) {
        $("#hdr_icon").css("background-position", "0 -713px");
        $("#header_text_main").text("Baby Step 5");
        $("#header_text_sub").text("College funding for children");
        $("#main_text_1").text("By this point, you should have already started Baby Step 4—investing 15% of your income—before saving for college. Whether you are saving for you or your child to go to college, you need to start now.");
        $("#main_text_2").text("In order to have enough money saved for college, you need to have a goal. Determine how much per month you should be saving at 12% interest in order to have enough for college. If you save at 12% and inflation is at 4%, then you are moving ahead of inflation at a net of 8% per year!");
        display_message();n();
      }).slideDown(200);
    }
  });
  $("#nav_6_cover").click(function() {
    if(step != 6){
      update_nav_links(6, step);
      $("#content").slideUp(200).delay(210).queue(function(n) {
        $("#hdr_icon").css("background-position", "0 -778px");
        $("#header_text_main").text("Baby Step 6");
        $("#header_text_sub").text("Pay off your house early");
        $("#main_text_1").text("Now it’s time to begin chunking all of your extra money toward the mortgage. You are getting closer to realizing the dream of a life with no house payments.");
        $("#main_text_2").text("As you attack this last debt, you will gain momentum much like you did back in the second step of the debt snowball. Remember, having absolutely no payments is totally within your reach!");
        display_message();n();
      }).slideDown(200);
    }
  });
  $("#nav_7_cover").click(function() {
    if(step != 7){
      update_nav_links(7, step);
      $("#content").slideUp(200).delay(210).queue(function(n) {
        $("#hdr_icon").css("background-position", "0 -842px");
        $("#header_text_main").text("Baby Step 7");
        $("#header_text_sub").text("Build wealth and give!");
        $("#main_text_1").text("It’s time to build wealth and give like never before. Leave an inheritance for future generations, and bless others now with your excess. It's really the only way to live!");
        $("#main_text_2").text("Golda Meir says, “You can’t shake hands with a clenched fist.” Vow to never hold your money so tightly that you never give any away. Hoarding money is not the way to wealth. Save for yourself, save for your family’s future, and be gracious enough to bless others. You can do all three at the same time.");
        display_message();n();
      }).slideDown(200);
    }
  });
  function display_message(){
    var number_of_friends = 0;
    var names = [];
    for (i=0;i<friends.length;i++){
      if (friends[i].babyStep == step){
        number_of_friends++;
        names.push(friends[i].firstName + " " + friends[i].lastName);
      }
    }
    switch(number_of_friends) {
    case 0:
      $("#message").html(" ");
        break;
    case 1:
        var message = " is also in Baby Step " + String(step);
        $("#message").html("<a class='message_link'>" + names[0] + "</a>" + message);
        break;
    case 2:
        var message = " are also in Baby Step " + String(step);
        $("#message").html("<a class='message_link'>" + names[0] + "</a> and " + "<a class='message_link'>" + names[1] + "</a>" + message);
        break;
    case 3:
      var message = " and " + String(number_of_friends-2) + " other friend are also in Baby Step " + String(step);
      $("#message").html("<a class='message_link'>" + names[0] + "</a>, " + "<a class='message_link'>" + names[1] + "</a>" + message);
      break;
    default:
        message = " and " + String(number_of_friends-2) + " other friends are also in Baby Step " + String(step);
        $("#message").html("<a class='message_link'>" + names[0] + "</a>, " + "<a class='message_link'>" + names[1] + "</a>" + message);
    }
  }
  function update_nav_links(stp, pre_stp){
    $("#nav_" + String(pre_stp) + "_cover").css("color", "#9ba0a4");
    $("#step_" + String(pre_stp)).css("background-position", "0 -" + (pre_stp-1)*25 +"px");
    $("#nav_" + String(pre_stp) + "_cover").animate({
    backgroundColor: "transparent"
    }, "slow");
    $("#step_" + String(stp)).css("background-position", "0 -" + (stp+6)*25 +"px");
    $("#nav_" + String(stp) + "_cover").animate({
    backgroundColor: "white",
    color: "#36abe1"
    }, "slow");
    step = stp;
  }
});
