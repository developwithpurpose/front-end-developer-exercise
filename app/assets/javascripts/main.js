/* 
 * NOTE: builded using Jquery to make faster delivery.
 */
 
// define a global FE object.
var FE = FE || {};

//define a global util for FE object.
FE.util = (function($) {
    var STEP1 = [],
        STEP2 = [],
        STEP3 = [],
        STEP4 = [],
        STEP5 = [],
        STEP6 = [],
        STEP7 = [];

    return {
        init: function() {
            //listen the 'click' event for nav menu.
            $(document).on("click", ".j-side-nav li a", function(e) {
                //prevent default behavior of event.
                e.preventDefault();
                var $this = $(this),
                    step = $this.data("step");
                //if it is already active menu,we do nothing.
				if ($this.hasClass("active")){ return; }
                //transition effect.
                FE.util.transition($this, step);
                //re-calculate the container of the active content.
                FE.util.reCalculateContainer(step);
                //animate to show the active content.
                $(".markering-content article").animate({
                    "marginTop": "-" + $(".main-content.step" + step).data("top") + "px"
                });
            });

            FE.util.renderData();
            FE.util.initTransition();
            FE.util.calculateTopData();
            FE.util.initContainer();
        },
        //init 'main-content' container height for default active content.
        initContainer: function() {
            //looking for the active content.
            var activedItem = $(".j-side-nav>li .active"),
                container = $("div.markering-content");
            //check if can find the active content.
            if (activedItem.length > 0) {
                var step = parseInt(activedItem.data("step"));
                var stepContent = $(".main-content.step" + step);
                //set the 'main-content' height.
                container.css({
                    height: stepContent.height()
                });
            }
        },
        //re calculate the 'markering-content' height for active content after user clicked.
        reCalculateContainer: function(step) {
            var container = $("div.markering-content"),
                stepContent = $(".main-content.step" + step);
            //set the 'markering-content' height.
            container.css({
                height: stepContent.height()
            });
        },
        //set all 'content' top data.
        calculateTopData: function() {
            var container = $("div.markering-content"),
                containerTop = container.offset().top;
            //loop the matched 'main-content' and set top data for it.
            $(".markering-content .main-content").each(function() {
                var content = $(this);
                content.data("top", content.offset().top - containerTop);
                //if a small screen,then reduce the margin.
                if ($(window).width() <= 600) {
                    content.addClass("re-margin");
                }
            });
        },
        //init the transition layer
        initTransition: function() {
            //find the actived nav menu.
            var activedItem = $(".j-side-nav>li .active");
            //check if can find a default actived menu.
            if (activedItem.length > 0) {
                var s = parseInt(activedItem.data("step")) - 1,
                    tran = $("li.transition").css({
                        height: activedItem.height()
                    });
                //set init top for transition layer.
                tran.css({
                    top: tran.height() * s
                });
                //set the init margin top for actived article.
                $(".markering-content article").css({
                    "marginTop": "-" + $(".main-content.step" + activedItem.data("step")).data("top") + "px"
                });
            }
        },
        //transition effect for nav menu.
        transition: function(elem, step) {
            // find the transition layer.
            var tran = $("li.transition"),
                s = parseInt(step) - 1;
            //remove the active class for previous active menu.
            $(".j-side-nav li a, .main-content").removeClass("active");
            //animate the transition effect.
            tran.show().animate({
                top: tran.height() * s
            }, 500, function() {
                elem.addClass("active");
                tran.hide();
            });
        },
        //append the step content to page.
        createHTML: function(step, arr) {
            /*### Message Logic

			* if 0 friends, then don't show any message
			* if 1 friend, then show "Paul Taylor is also in Baby Step 2"
			* if 2 friends, then show "Thomas Harris and Sharon Thomas are also in Baby Step 3"
			* if 3 friends,
				then show "Deborah Lee, Shirley Perez, and 1 other friend are also in Baby Step 4"
			* if 4 or more friends,
				then show "Patricia Allen, Matthew Garcia, and 2 other friends are also in Baby Step 5"
			*/

            var totalNum = arr.count - 2,
                friend = totalNum >= 2 ? "friends" : "friend";

            if (arr.count === 1) {
                $(".main-content.step" + step + " .last").html("<a href='#'>" + arr[0].firstName + " " + arr[0].lastName + "</a> is also in this step");
			}
			
            if (arr.count === 2) {
                $(".main-content.step" + step + " .last").html("<a href='#'>" + arr[0].firstName + " " + arr[0].lastName + "</a> and <a href='#'>" + arr[1].firstName + " " + arr[1].lastName + "</a>  are also in this step");
			}
			
            if (totalNum >= 1) {
                $(".main-content.step" + step + " .last").html("<a href='#'>" + arr[0].firstName + " " + arr[0].lastName + "</a>, <a href='#'>" + arr[1].firstName + " " + arr[1].lastName + "</a>  and " + totalNum + " other " + friend + " are also in this step");
        	}
        },
        //get the step data from ajax call.
        renderData: function() {
            $.get("/app/assets/javascripts/baby-steps.json", function(data) {
                if (data) {
                    var total = data.friends.length, i;
                        
                    //loop the the step data.
                    for (i = 0; i < total; i++) {
                    	var count;
                        switch (data.friends[i].babyStep) {
                            case 1:
                                STEP1.push(data.friends[i]);
                                count = STEP1.length;
                                STEP1.count = count;
                                break;
                            case 2:
                                STEP2.push(data.friends[i]);
                                count = STEP2.length;
                                STEP2.count = count;
                                break;
                            case 3:
                                STEP3.push(data.friends[i]);
                                count = STEP3.length;
                                STEP3.count = count;
                                break;
                            case 4:
                                STEP4.push(data.friends[i]);
                                count = STEP4.length;
                                STEP4.count = count;
                                break;
                            case 5:
                                STEP5.push(data.friends[i]);
                                count = STEP5.length;
                                STEP5.count = count;
                                break;
                            case 6:
                                STEP6.push(data.friends[i]);
                                count = STEP6.length;
                                STEP6.count = count;
                                break;
                            case 7:
                                STEP7.push(data.friends[i]);
                                count = STEP7.length;
                                STEP7.count = count;
                                break;
                        }
                    }

                    FE.util.createHTML(1, STEP1);
                    FE.util.createHTML(2, STEP2);
                    FE.util.createHTML(3, STEP3);
                    FE.util.createHTML(4, STEP4);
                    FE.util.createHTML(5, STEP5);
                    FE.util.createHTML(6, STEP6);
                    FE.util.createHTML(7, STEP7);
                }
            });
        }
    };
}(jQuery));

$(document).ready(function() {
	//invoke init method of FE.util object.
    FE.util.init();
});