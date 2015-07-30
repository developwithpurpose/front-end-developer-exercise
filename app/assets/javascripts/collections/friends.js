import Collection from '../framework/collection';
import FriendModel from '../models/friend';

/**
 * Collection of BabyStepModels
 *
 * @module collections/friends
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

        this.modelClass = FriendModel;
        this.url = '/dist/api/baby-steps.json';
        this.resource = 'friends';
    }

}
