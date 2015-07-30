/**
 * Base class all other library classes extend
 *
 * Contains accessor ( get() and set() ) methods and a mechanism for publishing event
 * notifications to subscribers, as well as the ability to subscribe to other classes
 * notifications
 *
 * @module lib/base
 */
export default class {

    /**
     * Initializes the data property
     *
     * @return {undefined}
     */
    constructor() {
        this.data = {};
        this.subscribers = {};
    }

    /**
     * Getter accessor for a property on the data object
     *
     * @param {string} property Name of the property being accessed
     */
    get( property ) {
        return this.data[ property ];
    }

    /**
     * Subscribes to a given event on a given object
     *
     * @param {module:lib/base} publisher Object that will notify of the event
     * @param {string} eventName Name of the event being subscribed to
     * @param {function} callback Function to be called when the publisher notifies
     * @returns {undefined}
     */
    listen( publisher, eventName, callback ) {
        if ( !Array.isArray( publisher.subscribers[ eventName ] ) ) {
            publisher.subscribers[ eventName ] = [];
        }
        publisher.subscribers[ eventName ].push({
            callback: callback,
            subscriber: this
        });
    }

    /**
     * Notifies subscribers that an event occurred. Subscribers subcribe using their own listen method.
     *
     * @param {string} eventName Name of the event that has occurred
     * @returns {undefined}
     */
    notify( eventName ) {
        if ( Array.isArray( this.subscribers[ eventName ] ) ) {
            for ( let item of this.subscribers[ eventName ] ) {
                item.callback.call( item.subscriber, this );
            }
        }
    }

    /**
     * Setter accessor for a property on the data object
     *
     * @param {string} property Name of the property being set
     * @param {*} value Value to set the property
     * @returns {undefined}
     */
    set( property, value ) {
        if ( value !== this.data[ property ] ) {
            this.data[ property ] = value;
            this.notify( 'change' );
        }
    }

}
