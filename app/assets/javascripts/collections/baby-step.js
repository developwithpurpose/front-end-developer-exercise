import Collection from '../framework/collection';
import BabyStepModel from '../models/baby-step';

/**
 * Collection of BabyStepModels
 *
 * @module collections/baby-step
 * @augments {module:framework/collection}
 */
export default class extends Collection {

    /**
     * Sets the model class for the collection and starts initialization
     *
     * @function
     * @return {undefined}
     */
    constructor() {
        super();

        this.modelClass = BabyStepModel;
        this.initBabySteps();
    }

    /**
     * Adds 7 BabyStepModels to the collection, inits the first to active
     *
     * @function
     * @return {undefined}
     */
    initBabySteps() {
        for ( let i = 0; i < 7; i++ ) {
            let model = new this.modelClass({
                id: i,
                step: i + 1,
                active: i === 0
            });

            this.push( model );
            this.listen( model, 'activated', this.stepActivated );
        }
    }

    /**
     * Sets all models `active` property to false, except for the model passed
     *
     * @function
     * @param {module:models/baby-step} model The active model
     * @return {undefined}
     */
    stepActivated( model ) {
        this.each( ( current ) => {
            if ( current !== model ) {
                current.set( 'active', false );
            }
        });
    }

}
