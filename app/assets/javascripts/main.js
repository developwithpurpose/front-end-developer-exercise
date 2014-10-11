jQuery(function ($) {

    var helpers = {

        Elements: {
            item: $(".baby-steps li"),
            content: $("#content"),
        },

        attachEvents: function() {
            helpers.Elements.item.click(function() {
                var current = $(this).data("step"),
                    el = $(".item[data-step='" + current + "']"),
                    elementTop = el.position().top,
                    pos = helpers.Elements.content.scrollTop() + elementTop;
                    
                helpers.Elements.content.animate({scrollTop: pos}, 1000);

                helpers.Elements.item.removeClass("sel");
    
                $(this).addClass("sel");
            });             
        },

        getFriends: function() {
            var babyStepsFriends = "./assets/javascripts/baby-steps.json";
            
            return $.getJSON(babyStepsFriends).done(function(data) {

                var babyStepsGrouped = _.groupBy(data.friends, "babyStep");
                var $friends = $(".friends");

                $friends.each(function () {
                  
                  var $this = $(this), 
                      babyStep = $this.data("id"), 
                      group = babyStepsGrouped[babyStep];
                  
                  if (group) {
                    
                    var out = [];
                    var remaining = 0;
                    var namesToShow = 2;
                    var total = group.length;
                    var list = group.slice(0, namesToShow).map(function (friend) {
                      return "<strong>" + friend.firstName + " " + friend.lastName + "</strong>";
                    });
                    
                    if (total - namesToShow > 0) {
                      remaining = total - namesToShow;
                    }
                    
                    out.push(list.join(" and "));
                    
                    if (remaining) {
                      out.push(" and " + remaining + " other" + ( remaining > 1 ? "s" : "" ));
                    }
                    
                    out.push(total === 1 ? "is" : "are");
                    out.push("on baby step " + babyStep);
                    
                    $this.append(out.join(" "));
                    
                  }
                  
                });

            });
        },

        init: function() {
            helpers.attachEvents();
            helpers.getFriends();
        }

    };

    // Initialize on DOM ready
    $(helpers.init);

});
