import Base from './base';

/**
 * An ordered set of models
 *
 * @module 'lib/collection'
 * @augments {lib/base}
 */
export default class extends Base {

    /**
     * Initializes model instances array
     *
     * @return {undefined}
     */
    constructor() {
        super();
        this.models = [];
    }

    /**
     * Adds a model to the collection. Adds a change listener on the model
     *
     * @param  {lib/model} model The model to be added to the collection
     * @return {undefined}
     */
    push( model ) {
        this.models.push( model );
        model.on( 'change',
            () => {
                this.trigger( 'change' );
            }
        );
    }

    /**
     * Iterates over the models in the collection
     *
     * @param  {Function} callback A callback function with the item as a parameter
     * @return {undefined}
     */
    each( callback ) {
        for ( let i of this.models ) {
            callback( i );
        }
    }

}
