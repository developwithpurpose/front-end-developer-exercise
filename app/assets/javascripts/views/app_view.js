var AppView = Backbone.View.extend({
	el: $("body"),

	initialize: function() {

    },

	events: {
		"click ul.baby-steps li"		: "transition"
    },

 	transition: function(e) {
 	    var index = $(e.currentTarget)[0].attributes["data-baby-step"].value;

        $("ul.baby-steps li").removeClass("active");
        $("ul.baby-steps li[data-baby-step='" + index + "']").addClass("active");

        $("article").animate({ top: (-500 * (index - 1)).toString() }, 500);
        $(".slider").animate({ top: (61 * (index - 1)).toString() }, 500);
        
        return this;
    }
});

window.appView = new AppView();
