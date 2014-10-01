$(document).ready(function(){

(function(){
    var stepApp = {
        init : function(){
            this.template();
        },
        template : function(){

            var template = $('#stepTemplate').html(),
            render = Handlebars.compile(template);

            var result = render({
                "babyStep" :[
                    {
                    "id" : "step-one",
                    "title" : "Baby Step 1",
                    "sub_title" : "$1,000 Emergency Fund",
                    "copy_1" : "An emergency fund is for those unexpected events in life that you can’t plan for: the loss of a job, an unexpected pregnancy, a faulty car transmission, and the list goes on and on. It’s not a matter of if these events will happen; it’s simply a matter of when they will happen.",
                    "copy_2" : "This beginning emergency fund will keep life’s little Murphies from turning into new debt while you work off the old debt. If a real emergency happens, you can handle it with your emergency fund. No more borrowing. It’s time to break the cycle of debt!"
                    },
                    {
                    "id" : "step-two",
                    "title" : "Baby Step 2",
                    "sub_title" : "Pay off all debt using the Debt Snowball",
                    "copy_1" : "List your debts, excluding the house, in order. The smallest balance should be your number one priority. Don’t worry about interest rates unless two debts have similar payoffs. If that’s the case, then list the higher interest rate debt first.",
                    "copy_2" : "The point of the debt snowball is simply this: You need some quick wins in order to stay pumped up about getting out of debt! Paying off debt is not always about math. It’s about motivation. Personal finance is 20% head knowledge and 80% behavior. When you start knocking off the easier debts, you will see results and you will stay motivated to dump your debt."
                    },
                    {
                    "id" : "step-three",
                    "title" : "Baby Step 3",
                    "sub_title" : "3 to 6 months of exepenses in savings",
                    "copy_1" : "Once you complete the first two baby steps, you will have built serious momentum. But don’t start throwing all your “extra” money into investments quite yet. It’s time to build your full emergency fund. Ask yourself, “What would it take for me to live for three to six months if I lost my income?” Your answer to that question is how much you should save.",
                    "copy_2" : "Use this money for emergencies only: incidents that would have a major impact on you and your family. Keep these savings in a money market account. Remember, this stash of money is not an investment; it is insurance you’re paying to yourself, a buffer between you and life."
                    },
                    {
                    "id" : "step-four",
                    "title" : "Baby Step 4",
                    "sub_title" : "Invest 15% of household income for retirement",
                    "copy_1" : "When you reach this step, you’ll have no payments—except the house—and a fully funded emergency fund. Now it’s time to get serious about building wealth.",
                    "copy_2" : "Dave suggests investing 15% of your household income into Roth IRAs and pre-tax retirement plans. Don’t invest more than that because the extra money will help you complete the next two steps: college savings and paying off your home early."
                    },
                    {
                    "id" : "step-five",
                    "title" : "Baby Step 5",
                    "sub_title" : "College funding for children",
                    "copy_1" : "By this point, you should have already started Baby Step 4—investing 15% of your income—before saving for college. Whether you are saving for you or your child to go to college, you need to start now.",
                    "copy_2" : "In order to have enough money saved for college, you need to have a goal. Determine how much per month you should be saving at 12% interest in order to have enough for college. If you save at 12% and inflation is at 4%, then you are moving ahead of inflation at a net of 8% per year!"
                    },
                    {
                    "id" : "step-six",
                    "title" : "Baby Step 6",
                    "sub_title" : "Pay off your house early",
                    "copy_1" : "Now it’s time to begin chunking all of your extra money toward the mortgage. You are getting closer to realizing the dream of a life with no house payments.",
                    "copy_2" : "As you attack this last debt, you will gain momentum much like you did back in the second step of the debt snowball. Remember, having absolutely no payments is totally within your reach!"
                    },
                    {
                    "id" : "step-seven",
                    "title" : "Baby Step 7",
                    "sub_title" : "Build wealth and give!",
                    "copy_1" : "It’s time to build wealth and give like never before. Leave an inheritance for future generations, and bless others now with your excess. It's really the only way to live!",
                    "copy_2" : "Golda Meir says, “You can’t shake hands with a clenched fist.” Vow to never hold your money so tightly that you never give any away. Hoarding money is not the way to wealth. Save for yourself, save for your family’s future, and be gracious enough to bless others. You can do all three at the same time."
                    }
                ]
            });
            $('.article-inner').html(result);

            //instantiate click event
            this.tabSelect();
        },
        tabSelect :function(){

            //defautl vars
            var urlString = 'assets/javascripts/baby-steps.json',
            tabItem = $('.steps-list li'),
            tab = $('.steps-list a'),
            article = $('.article-step'),
            message = '';

            tab.on('click',function(event){
                event.preventDefault();
                var self = $(this),
                selfTarget = self.attr('href'),
                selfStep = self.data('step');

                //set active and visible states
                tabItem.removeClass('is-active');
                self.parent().addClass('is-active');//add active state
                article.removeClass('is-visible');//remove visible class from articles
                $(selfTarget).addClass('is-visible');//add visible class to current article

                //set url hash
                window.location.hash = selfTarget;

                //grab json data to display message
                results = [];//reset array

                $.getJSON(urlString,function(data){
                    var friends = data.friends;

                    $.each(friends,function(key,value){
                        if(value.babyStep == selfStep){
                            results.push(value.firstName + ' ' + value.lastName);
                            results.sort(compare);
                        }
                    });
                    if(selfStep == 2){
                        message = '<span>' + results.toString() + '</span> is also in Baby Step ' + selfStep;
                    }else if(selfStep == 3){

                        message = '<span>' + results.join(' and ') + '</span> are also in Baby Step ' + selfStep;
                    }else if(selfStep == 4){
                        message = '<span>' + results.toString() + ',</span> and 1 other friend is also in Baby Step ' + selfStep;
                    }else if(selfStep == 5){
                        message ='<span>' + results.toString() + ',</span> and 2 other friends are also in Baby Step ' + selfStep;
                    }else if(selfStep == 6){
                        message = '<span>' + results.toString() + ',</span> and 3 other friends are also in Baby Step ' + selfStep;
                    }else if(selfStep == 7){
                        message = '<span>' + results.toString() + ',</span> and 4 other friends are also in Baby Step ' + selfStep;
                    }else{
                        message = '';
                    }

                    //add friends message
                    $('.results').html(message);

                });




                //sort by last name
                function compare(a, b) {
                    var splitA = a.split(" ");
                    var splitB = b.split(" ");
                    var lastA = splitA[splitA.length - 1];
                    var lastB = splitB[splitB.length - 1];

                    if (lastA < lastB) return -1;
                    if (lastA > lastB) return 1;
                    return 0;
                }
            });


            //instantiate page url
            this.locateTab();
        },
        locateTab :function(){

            var tabLocation = window.location.hash;

            //console.log(tabLocation);
            if(tabLocation == ''){
                $('#step-one').addClass('is-visible');
            }else{

                if( !$(tabLocation).hasClass('is-visible') ){
                    $(tabLocation).addClass('is-visible');
                    $("a[href="+ tabLocation +"]").parent().addClass('is-active');
                }
            }
        }
    }

    //
    stepApp.init();



    //include google fonts
        WebFontConfig = {
        google: { families: [ 'Source+Sans+Pro:300,400,600:latin' ] }
      };
      (function() {
        var wf = document.createElement('script');
        wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
          '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
        wf.type = 'text/javascript';
        wf.async = 'true';
        var s = document.getElementsByTagName('script')[0];
        s.parentNode.insertBefore(wf, s);
      })();

})();

});