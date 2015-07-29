import Collection from '../framework/collection';
import FriendModel from '../models/friend';

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

        this.modelClass = FriendModel;
        this.url = '/dist/api/baby-steps.json';
        this.resource = 'friends';
    }

}
