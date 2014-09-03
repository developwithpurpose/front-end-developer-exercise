var Friends = Backbone.Collection.extend({
    model: Friend,
    url: "assets/javascripts/baby-steps.json",
    
    parse: function(response) {
        return response.friends;
    },
    
    comparator: function(friend) {
        return friend.get("lastName")
    }
});