use(
    "https://code.jquery.com/jquery-1.11.3.min.js",
    "eventemitter.js",
    function ()
    {
        "use strict";

        var model = {
                /**
                 * Whether or not this model has been initialized.
                 * @type {boolean}
                 */
                init: false,

                /**
                 * The current baby step.
                 * @type {int}
                 */
                activeStep: 1,

                /**
                 * An array of steps, represented by their link, and their detail on the page.
                 * @type {{link:HTMLElement, detail: HTMLElement}[]}
                 */
                steps: [],

                /**
                 * A method that changes the active step and fires the change event.
                 * @type {function}
                 * @returns {void}
                 */
                selectStep: selectStep,

                /**
                 * A delegate for event assigning.
                 * @returns {void}
                 */
                on: function() {
                    events.on.apply(events, arguments);
                }
            },
            events = new EventEmitter(
                "init",
                "change"
            );

        /**
         * Grab the dom elements + populate the model
         */
        function initializeModel() {
            //Initialize handler
            model.on(
                "init",
                function(m) {
                    m.init = true;
                }
            );

            // Get each stepdetail and link, and drop them in the steps array.
            $(".steps__step").each(
                function (i, stepLink) {
                    model.steps[i + 1] = {
                        link: stepLink,
                        detail: document.getElementById(stepLink.href.replace(/^.*#/, "")),
                        friends: []
                    };
                }
            );

            // Get Friends
            $.get(
                "/app/assets/javascripts/baby-steps.json",
                function (friends) {
                    for (var i = 0; i < friends.friends.length; i++) {
                        var friend = friends.friends[i];
                        model.steps[friend.babyStep].friends.push(friend);
                    }
                    events.trigger("init", model);
                }
            );
        }

        /**
         * Choose a new step.
         *
         * @param {int} step
         */
        function selectStep(step) {
            if (model.activeStep !== step && typeof model.steps[step] !== "undefined") {
                var from = model.activeStep;
                model.activeStep = step;
                events.trigger("change", model.steps[model.activeStep], model.steps[from]);
            }
        }

        window.model = model;
        initializeModel();
    }
);
