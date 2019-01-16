$(document).ready(function() {

  var stepClicked;
  var stepInfo = [
    ['An emergency fund is for those unexpected events in life that you can’t plan for: the loss of a job, an unexpected pregnancy, a faulty car transmission, and the list goes on and on. It’s not a matter of if these events will happen; it’s simply a matter of when they will happen.', 'This beginning emergency fund will keep life’s little Murphies from turning into new debt while you work off the old debt. If a real emergency happens, you can handle it with your emergency fund. No more borrowing. It’s time to break the cycle of debt!'],
    ['List your debts, excluding the house, in order. The smallest balance should be your number one priority. Don’t worry about interest rates unless two debts have similar payoffs. If that’s the case, then list the higher interest rate debt first.', 'The point of the debt snowball is simply this: You need some quick wins in order to stay pumped up about getting out of debt! Paying off debt is not always about math. It’s about motivation. Personal finance is 20% head knowledge and 80% behavior. When you start knocking off the easier debts, you will see results and you will stay motivated to dump your debt.'],
    ['Once you complete the first two baby steps, you will have built serious momentum. But don’t start throwing all your “extra” money into investments quite yet. It’s time to build your full emergency fund. Ask yourself, “What would it take for me to live for three to six months if I lost my income?” Your answer to that question is how much you should save.', 'Use this money for emergencies only: incidents that would have a major impact on you and your family. Keep these savings in a money market account. Remember, this stash of money is not an investment; it is insurance you’re paying to yourself, a buffer between you and life.'],
    ['When you reach this step, you’ll have no payments—except the house—and a fully funded emergency fund. Now it’s time to get serious about building wealth.', 'Dave suggests investing 15% of your household income into Roth IRAs and pre-tax retirement plans. Don’t invest more than that because the extra money will help you complete the next two steps: college savings and paying off your home early.'],
    ['By this point, you should have already started Baby Step 4—investing 15% of your income—before saving for college. Whether you are saving for you or your child to go to college, you need to start now.', 'In order to have enough money saved for college, you need to have a goal. Determine how much per month you should be saving at 12% interest in order to have enough for college. If you save at 12% and inflation is at 4%, then you are moving ahead of inflation at a net of 8% per year!'],
    ['Now it’s time to begin chunking all of your extra money toward the mortgage. You are getting closer to realizing the dream of a life with no house payments.', 'As you attack this last debt, you will gain momentum much like you did back in the second step of the debt snowball. Remember, having absolutely no payments is totally within your reach!'],
    ['It’s time to build wealth and give like never before. Leave an inheritance for future generations, and bless others now with your excess. It\'s really the only way to live!', 'Golda Meir says, "You can’t shake hands with a clenched fist." Vow to never hold your money so tightly that you never give any away. Hoarding money is not the way to wealth. Save for yourself, save for your family’s future, and be gracious enough to bless others. You can do all three at the same time.']
  ];
  var imgAlts = ['dollar', 'snowballs', 'piggy bank', 'three vertical bars', 'book', 'house', 'hand'];

  displayHeadings();

  function displayHeadings() {
    for (let i=1; i<8; i++) {
      $('#stepHeadings').append('<div class="stepHeadingsBox" id=stepHeadingsBox'+i+'>');
      $('#stepHeadingsBox'+i).append('<p class="stepHeading" id="step'+i+'">Baby Step ' + i);
      $('#stepHeadingsBox'+i).append('<img src="../assets/images/transparent.png" id="step'+i+'pic" class="step'+i+'Pic0 stepImg" alt="'+ imgAlts[i] +' icon">')
    }
  }


  $(document).on('click', '.stepHeadingsBox', function () {
    var step = this.id[15];
    $('#'+stepClicked).removeClass('clicked');

    // take previous click and remove blue image
    if (stepClicked !== undefined) {
      $('#step'+stepClicked[15]+'pic').removeClass('step'+stepClicked[15]+'Pic1').addClass('step'+stepClicked[15]+'Pic0');
    }
    // change grey pic to blue
    $('#step'+step+'pic').removeClass('step'+step+'Pic0').addClass('step'+step+'Pic1');

    stepClicked = this.id;
    var stepArrPlace = parseInt(step) - 1;

    // empty descriptions area
    $('#stepDescriptions').empty(); 
    // add and then remove slideIn animation
    $('#stepDescriptions').addClass('slideIn'); 
    setTimeout(function() {
      $('#stepDescriptions').removeClass('slideIn'); 
    }, 750);

    // add large image/title to descriptions area
    $('#stepDescriptions').append('<img src="../assets/images/headings/heading_bs'+step+'.png" style="margin-bottom:20px;">');
    // add words
    $('#stepDescriptions').append('<p class="words">'+stepInfo[stepArrPlace][0]).append('<p class="words">'+stepInfo[stepArrPlace][1]);
    $('#'+this.id).addClass('clicked');
    // add clicked class to step title box
    $('#img'+this.id).addClass('clicked');

    displayFriends(step);
  })

  function displayFriends(step) {
    $.ajax({
      url: 'baby-steps.json',
      success: function(res) {
        var arr = [];
        res.friends.map(function(f) {
          if (f.babyStep == step) {
            arr.push(f);
          }
        });

        switch (arr.length) {
          case 0: break;
          case 1:
          $('#stepDescriptions').append('<p class="words wordsSpacer"><a href="#">'+arr[0].firstName + ' ' + arr[0].lastName + '</a> is also in Baby Step ' + step);
          break;
        case 2:
          $('#stepDescriptions').append('<p class="words wordsSpacer"><a href="#">'+arr[0].firstName + ' ' + arr[0].lastName + '</a> and <a href="#">' + arr[1].firstName + ' ' + arr[1].lastName + '</a> are also in Baby Step ' + step);
          break;
        case 3:
          $('#stepDescriptions').append('<p class="words wordsSpacer"><a href="#">'+arr[0].firstName + ' ' + arr[0].lastName + '</a>, <a href="#">' + arr[1].firstName + ' ' + arr[1].lastName + '</a>, and 1 other friend are also in Baby Step ' + step);
          break;
        default:
          $('#stepDescriptions').append('<p class="words wordsSpacer"><a href="#">'+arr[0].firstName + ' ' + arr[0].lastName + '</a>, <a href="#">' + arr[1].firstName + ' ' + arr[1].lastName + '</a>, and 2 other friends are also in Baby Step ' + step);
          break;        
        }

      }
    })
  }

})