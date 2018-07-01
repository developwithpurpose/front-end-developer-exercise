(function($) {

    var App = {
        activeClass: 'active',
        clickables: [
            {
                selector: '.step-outline__step',
                handler: 'outlineStepHandler'
            },
            {
                selector: '.step-outline__step .step-name',
                handler: 'outlineStepHandler'
            },
            {
                selector: '.step-outline__step .step-logo',
                handler: 'outlineStepHandler'
            }
        ],
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
            for(var index in this.clickables) {
                var clickable = this.clickables[index];
                if (clickable === null) {
                    continue;
                }

                if (typeof this[clickable.handler] !== 'function') {
                    continue;
                }

                $(clickable.selector).click(this[clickable.handler].bind(this));
            }
        },
        outlineStepHandler: function(event) {
            event.preventDefault();
            var stepNum = $(event.target).data('step');
            if (!stepNum) {
                stepNum = $(event.target).parent().data('step');
            }

            this.updateActiveStates(stepNum);
        }
    };

    $(document).ready(App.init.bind(App));
})(jQuery)
