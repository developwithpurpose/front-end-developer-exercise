(function($) {

    var App = {
        init: function() {
            $('.step-outline__step--one').addClass('active');
            $('.step-info .step--one').addClass('active');
        }
    };

    $(document).ready(App.init);
})(jQuery)
