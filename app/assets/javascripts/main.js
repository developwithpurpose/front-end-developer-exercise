use(
    "https://code.jquery.com/jquery-1.11.3.min.js",
    "model.js",
    function ()
    {
        "use strict";

        var activeLink = "steps__step--active",
            link = ".steps__step";

        /**
         * Update the UI according to the current state of the model.
         */
        function updateUI(to, from) {
            setActive(to);
            if (from) {
                setInactive(from);
            }
            slideTo (to.detail, from ? from.detail : false);
        }

        /**
         * Disable a step's link and detail.
         * @param step
         */
        function setInactive(step) {
            $(step.link).removeClass(activeLink);
        }

        /**
         * Set a particular step as active, and randomize the friends HTML.
         * @param step
         */
        function setActive(step) {
            $(step.detail).find(".stepdetail__friends").html(getFriendsHtml(step.friends));
            $(step.link).addClass(activeLink);
        }

        /**
         * Stringy transition code.
         *
         * @param {HTMLElement} to
         * @param {HTMLElement} from
         */
        function slideTo(to, from) {
            var $to = $(to);
            var $from = $(from);
            var $others = $to.siblings().filter(function() { return this !== from; });
            var $list = $(to.parentNode);
            var offset = 10;

            $others.hide();
            $to.show().css("opacity", 0);
            $from.show();

            var down = from.offsetTop > to.offsetTop;
            $list.css("top", -(down ? from.offsetTop : 0) + offset + "px");

            //setTimeout(
            //    function() {
                    $to.animate(
                        {"opacity": 1},
                        {
                            step: function(now) {
                                if (from) {
                                    var mod = 1 - Math.abs(normalizeAt(now, 0.8));
                                    var deg = (down ? -1 : 1 ) * mod * 15;
                                    $(this).css("transform", "perspective(500px) rotate3d(1, 0, 0, " + deg + "deg)");
                                }
                            },
                            duration: 400
                        }
                    );
                    $from.animate(
                        {"opacity": 0},
                        200
                    );
                    $list.animate(
                        {"top" : - (to.offsetTop - offset) + "px"},
                        400,
                        "swing",
                        function() {
                            $from.hide();
                            $list.css("top", offset + "px");
                        }
                    );
          //      },
           //     0
            //);

        }

        /**
         * Will map a 0-1 value to -1 to 1 range, with 0 being at pin.
         *
         * @param val
         * @param pin
         */
        function normalizeAt(val, pin) {
            pin = pin || 0.5;
            var rev = val < pin;

            var low,
                high;
            if (rev) {
                //map low
                low = pin;
                high = 0;
            } else {
                //map
                low = pin;
                high = 1;
            }

            return (rev ? -1 : 1) * (val - low) / (high - low);
        }

        window.normalizeAt = normalizeAt;

        /**
         * Returns the markup for the friends section.
         * @param friends
         * @returns {string}
         */
        function getFriendsHtml(friends) {
            var output = "",
                total;

            if (friends && (total = friends.length)) {
                var byName = getRandomMembers(friends, 2),
                    numExtra = Math.max(total - 2, 0),
                    names = [],
                    step = friends[0].babyStep;

                for (var i = 0; i < byName.length; i++) {
                    names.push("<a href=\"#ABSTRACT\">" + byName[i].firstName + " " + byName[i].lastName + "</a>");
                }

                if (numExtra) {
                    names.push(numExtra + " other friend" + (numExtra === 1 ? "" : "s"));
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
            var keys = [],
                i;
            for (i in ary) {
                keys.push(i);
            }

            var output = [];
            for (i = 0; i < max && keys.length; i++) {
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
                    output += (parseInt(i) === len - 1) ? "and " : "";
                }
                output += ary[i]
            }
            return output;
        }

        updateUI(model.steps[model.activeStep]);
        model.on("change", updateUI);
        $(".steps").on("click.updateModel", link, function() {
            model.selectStep(parseInt(this.href.replace(/^.*#step-/, "")));
            return false;
        });

    }
);
