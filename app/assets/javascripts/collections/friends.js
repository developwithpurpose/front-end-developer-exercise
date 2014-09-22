/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var Friends = Backbone.Collection.extend({
    model: Friend,
    url: "assets/javascripts/baby-steps.json",
    parse: function (response) {
        return response.friends;
    },
    comparator: function (friend) {
        return friend.get("lastName")
    }
});