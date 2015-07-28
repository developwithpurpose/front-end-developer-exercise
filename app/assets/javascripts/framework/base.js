/**
 * Base class all other library classes extend
 *
 * @module 'lib/base'
 */
export default class {

    /**
     * Initializes the data property
     *
     * @return {undefined}
     */
    constructor() {
        this.data = {};
        this.subscribers = {
            'change': []
        };
    }

    /**
     * Getter accessor for a property on the data object
     *
     * @param {string} property Name of the property being accessed
     */
    get( property ) {
        return this.data[ property ];
    }

    on( eventName, callback ) {
        if ( Array.isArray( this.subscribers[ eventName ] ) ) {
            this.subscribers[ eventName ].push( callback );
        } else {
            throw 'Invalid event name provided to on() method';
        }
    }

    trigger( eventName ) {
        if ( Array.isArray( this.subscribers[ eventName ] ) ) {
            for ( let callback of this.subscribers[ eventName ] ) {
                callback( this );
            }
        } else {
            throw 'Invalid event name provided to trigger() method';
        }
    }

    /**
     * Setter accessor for a property on the data object
     *
     * @param {string} property Name of the property being set
     * @param {*} value Value to set the property
     */
    set( property, value ) {
        this.data[ property ] = value;
    }

}
