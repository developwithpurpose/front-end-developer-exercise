import Base from './base';
import Model from './model';

/**
 * An ordered set of models
 *
 * @module 'lib/collection'
 * @augments {module:lib/base}
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
        this.url = '';
        this.resource = null;
        this.modelClass = Model;
    }

    /**
     * Adds a model to the collection. Adds a change listener on the model
     *
     * @param  {module:lib/model} model The model to be added to the collection
     * @return {undefined}
     */
    push( model ) {
        if ( ! ( model instanceof Model ) ) {
            throw 'push() method expects to be passed a model';
        }
        this.models.push( model );
        this.listen( model, 'change', () => {
            this.notify( 'change' );
        });
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

    /**
     * Filter the collection with a given callback function. Shorthand to models.filter()
     *
     * @param {Function} callback The callback used to filter the Collection
     * @returns { Array.<module:framework/model>[] }
     */
    filter( callback ) {
        return this.models.filter( callback );
    }

    /**
     * Loads data for the collection from a GET XHR request and initializes models
     * for each record returned in the JSON response.
     *
     * @param {Function} callback A callback to be called on load success
     * @return {undefined}
     */
    load( callback ) {
        if ( typeof this.resource !== 'string' ) {
            throw 'Resource must be a string to load a Collection';
        }

        $.getJSON( this.url, ( response ) => {
            const collectionData = response[ this.resource ];
            const totalRecords = collectionData.length;

            $.each( collectionData, ( index, recordData ) => {
                let model = new this.modelClass( recordData );

                this.push( model );

                if ( index === totalRecords - 1 ) {
                    this.notify( 'loaded' );

                    if ( 'function' === typeof callback ) {
                        callback();
                    }
                }
            });
        });
    }

}
