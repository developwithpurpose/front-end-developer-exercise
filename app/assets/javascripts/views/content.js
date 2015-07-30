import View from '../framework/view';
import ContentItem from './content-item';
import FriendItem from './friend-item';
import FriendsCollection from '../collections/friends';

/**
 * A view to represent the content panes
 *
 * @module views/content
 * @augments {module:framework/view}
 */
export default class extends View {

    /**
     * Adds the collection to the view and sets up the content item views
     *
     * @param {module:collections/baby-step} babyStepCollection The baby step collection
     * @return {undefined}
     */
    constructor( babyStepCollection ) {
        super();

        this.babyStepCollection = babyStepCollection;
        this.friendsCollection = new FriendsCollection();

        this.$el = $( '#content' );
        this.initContentItems();

        this.friendsCollection.load();
    }

    /**
     * Loops over the collection and adds a child view and friends view for each model
     *
     * @return {undefined}
     */
    initContentItems() {
        this.contentItems = [];
        this.friendItems = [];

        this.babyStepCollection.each(
            ( model ) => {
                this.addContentItem( model );
            }
        );
    }

    /**
     * Adds a child view and a friends view using a model from the collection
     *
     * @param {module:framework/model} model The model to be attached to the view being added
     */
    addContentItem( model ) {
        this.contentItems.push( new ContentItem( model ) );
        this.friendItems.push( new FriendItem( model, this.friendsCollection ) );
    }

}
