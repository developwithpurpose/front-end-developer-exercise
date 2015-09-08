use(
    "https://code.jquery.com/jquery-1.11.3.min.js",
    "/app/assets/javascripts/model.js",
    function ()
    {
        "use strict";

        var activeLink = "steps__step--active",
            activeDetail = "stepdetail__step--active",
            link = ".steps__step",
            detail = ".stepdetail__step";

        updateUI();

        /**
         * Update the UI according to the current state of the model.
         */
        function updateUI() {
            var step = model.steps[model.activeStep];

            for (var i in model.steps) {
                setInactive (model.steps[i]);
            }
            setActive (step);
        }

        /**
         * Disable a step's link and detail.
         * @param step
         */
        function setInactive(step) {
            $(step.link).removeClass(activeLink);
            $(step.detail).removeClass(activeDetail);
        }

        /**
         * Set a particular step as active, and randomize the friends HTML.
         * @param step
         */
        function setActive(step) {
            $(step.detail).find(".stepdetail__friends").html(getFriendsHtml(step.friends));
            $(step.link).addClass(activeLink);
            $(step.detail).addClass(activeDetail);
        }

        /**
         * Returns the markup for the friends section.
         * @param friends
         * @returns {string}
         */
        function getFriendsHtml(friends) {
            var output = "",
                total = friends.length;

            if (total) {
                var byName = getRandomMembers(friends, 2),
                    numExtra = Math.max(total - 2, 0),
                    names = [],
                    step = friends[0].babyStep;

                for (var i = 0; i < byName.length; i++) {
                    names.push('<a href="#ABSTRACT">' + byName[i].firstName + " " + byName[i].lastName + '</a>');
                }

                if (numExtra) {
                    names.push(numExtra + " more friend" + (numExtra === 1 ? "" : "s"));
                }

                output = oxford(names) + (total > 1 ? " are " : " is ") + "also in Baby Step " + step + ".";
            }
            return output;
        }

        /**
         * Get a number of random members of an array.
         * @param {Array} ary
         * @param {int} max The maximum number to return. Will return this many
         *      members or all members, whichever is less.
         * @returns {Array}
         */
        function getRandomMembers(ary, max) {
            var keys = [];
            for (var i in ary) {
                keys.push(i);
            }

            var output = [];
            for (var i = 0; i < max && keys.length; i++) {
                var key = Math.floor(Math.random() * keys.length);
                output.push(ary[keys[key]]);
                keys.splice(key, 1);
            }
            return output;
        }

        /**
         * Joins array members with a lexical list
         * @example ["one", "two", "three"] becomes "one, two, and three"
         * @param {string[]} ary
         * @returns {string}
         */
        function oxford(ary) {
            var output = "",
                len = ary.length;
            for (var i in ary) {
                if (output) {
                    output += len > 2 ? ", " : " ";
                    output += (i == len - 1) ? "and " : "";
                }
                output += ary[i]
            }
            return output;
        }

        model.on("change", updateUI);
        $(".steps").on("click.updateModel", link, function() {
            model.selectStep(parseInt(this.href.replace(/^.*#step-/, "")));
            return false;
        });

    }
);
