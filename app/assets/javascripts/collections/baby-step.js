import Collection from '../framework/collection';
import BabyStepModel from '../models/baby-step';

export default class extends Collection {

    constructor() {
        super();
        this.model = BabyStepModel;
        this.initBabySteps();
    }

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
