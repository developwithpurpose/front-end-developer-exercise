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
     * Adds a model to the collection
     *
     * @param  {lib/model} model The model to be added to the collection
     * @return {undefined}
     */
    push( model ) {
        this.models.push( model );
    }

}
