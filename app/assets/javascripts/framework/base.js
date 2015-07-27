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

    /**
     * Getter accessor for a property on the data object
     *
     * @param {string} property Name of the property being accessed
     */
    get( property ) {
        return this.data[ property ];
    }

}
