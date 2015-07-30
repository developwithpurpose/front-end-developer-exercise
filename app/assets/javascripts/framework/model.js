import Base from './base';

/**
 * Loads and holds data and notifies subscribers of changes
 *
 * @module framework/model
 * @augments {module:framework/base}
 */
export default class extends Base {

    /**
     * Initializes the model with data if any is passed
     *
     * @function
     * @param {object} data Data with which to initialize the model
     * @return {undefined}
     */
    constructor( data ) {
        super();

        if ( typeof data !== 'object' ) {
            throw 'Model must be initialized with an object';
        } else {
            this.data = data;
        }
    }

}
