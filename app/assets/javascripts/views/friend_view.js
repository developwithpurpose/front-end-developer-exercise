window.friends = new Friends();

var FriendView = Backbone.View.extend({
	el: $("article"),

	initialize: function() {
	    window.friends.on("sync", this.render);
        window.friends.fetch();
    },
    
 	render: function() {
 	    for (var step = 1; step <= 7; step++) {
            var names = "";
            var count = 0;
            
            window.friends.each(function(friend) {
                if (friend.get("babyStep") === step) {
                    if (count < 2) {
                        names += ((count >= 1) ?  ", " : "");
                        names += friend.get("firstName") + " " + friend.get("lastName");
                    }
                    
                    count++;
                }
            });
            
            $("section div.friends-message-" + step + " em").text(names);
 
            if (count == 0) {
                $("section div.friends-message-" + step + " span").text(" ");
            }
            else if (count == 1) {
                $("section div.friends-message-" + step + " span").text(" is also in Baby Step "  + step);
            }
            else if (count == 2) {
                $("section div.friends-message-" + step + " span").text(" are also in Baby Step "  + step);
            }
            else if (count == 3) {
                $("section div.friends-message-" + step + " span").text(", and 1 other friend are also in Baby Step "  + step);
            }
            else if (count > 3) {
                $("section div.friends-message-" + step + " span").text(", and " + (count - 2) + " other friends are also in Baby Step " + step);
            }
        }
        
        return this;
    }
});

window.friendView = new FriendView();
