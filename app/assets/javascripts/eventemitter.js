use(
    function ()
    {
        "use strict";
        /**
         * Basic event emission.
         *
         * @param {[...string]} eventType
         * @constructor
         */
        function EventEmitter(eventType) {
            var self = this;

            self.handlers = {};

            for (var i = 0; i < arguments.length; i++) {
                self.handlers[arguments[i]] = [];
            }
        }

        EventEmitter.prototype = {
            /**
             * Add an event handler to the list.
             *
             * @param event
             * @param handler
             */
            on: function(event, handler) {
                validateEventType(event, this);
                this.handlers[event].push(handler);
            },
            /**
             * Call the handlers for a certain event.
             *
             * @param event
             * @param data
             */
            trigger: function(event) {
                validateEventType(event, this);
                var args = [];
                for (var i = 1; i < arguments.length; i++) {
                    args.push(arguments[i]);
                }

                for (var i = 0; i < this.handlers[event].length; i++)
                {
                    this.handlers[event][i].apply({}, args);
                }
            }
        };

        /**
         * Assert that the event exists on the provided emitter.
         *
         * @param {string} event The type of event
         * @param {EventEmitter} emitter The emitter to check on
         * @throws {Error} if emitter doesn't handle this event.
         */
        function validateEventType(event, emitter) {
            if (!isValidEventType(event, emitter)) {
                throw new Error(event + " doesn't appear to be a valid event type.");
            }
        }

        /**
         * Determine whether the provided event type is handled by the provided emitter.
         *
         * @param {string} event
         * @param {EventEmitter} emitter
         * @returns {boolean}
         */
        function isValidEventType (event, emitter) {
            return (typeof emitter.handlers[event] !== "undefined");
        }

        window.EventEmitter = EventEmitter;
    }
);