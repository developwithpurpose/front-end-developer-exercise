(function($) {

    var App = {
        activeClass: 'active',
        init: function() {
            this.updateActiveStates('one');
            this.registerListeners();
        },
        updateActiveStates: function(step) {
            $('.active').each(function(index, element) {
                $(element).removeClass(this.activeClass);
            }.bind(this));

            $('.step-outline__step--' + step).addClass(this.activeClass);
            $('.step-info .step--' + step).addClass(this.activeClass);
        },
        registerListeners: function() {
            $('.step-outline__step').click(function(event) {
                event.preventDefault();
                var stepNum = $(event.target).data('step');
                this.updateActiveStates(stepNum);
            }.bind(this));
        }
    };

    $(document).ready(App.init.bind(App));
})(jQuery)
