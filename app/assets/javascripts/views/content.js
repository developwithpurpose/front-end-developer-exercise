import View from '../framework/view';
import ContentItem from './content-item';

/**
 * A view to represent the content panes
 *
 * @module
 */
export default class extends View {

    /**
     * Adds the collection to the view and sets up the content item views
     *
     * @return {undefined}
     */
    constructor( collection ) {
        super();
        this.collection = collection;
        this.$el = $( '#content' );
        this.initContentItems();
    }

    /**
     * Loops over the collection and adds a child view for each model
     *
     * @return {undefined}
     */
    initContentItems() {
        this.contentItems = [];
        this.collection.each(
            ( model ) => {
                this.addContentItem( model );
            }
        );
    }

    /**
     * Adds a child view using a model from the collection
     *
     * @param {'framework/model'} model The model to be attached to the view being added
     */
    addContentItem( model ) {
        this.contentItems.push( new ContentItem( model ) );
    }

}
