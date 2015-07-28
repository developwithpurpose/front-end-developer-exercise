import Collection from '../framework/collection';
import BabyStepModel from '../models/baby-step';

/**
 * Collection of BabyStepModels
 *
 * @module
 */
export default class extends Collection {

    /**
     * Sets the model class for the collection and starts initialization
     *
     * @return {undefined}
     */
    constructor() {
        super();
        this.model = BabyStepModel;
        this.initBabySteps();
    }

    /**
     * Adds 7 BabyStepModels to the collection, inits the first to active
     *
     * @return {undefined}
     */
    initBabySteps() {
        for ( let i = 0; i < 7; i++ ) {
            let model = new this.model({
                id: i,
                step: i + 1,
                active: i === 0
            });
            this.push( model );
        }
    }

}
