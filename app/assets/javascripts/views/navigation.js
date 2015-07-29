import View from '../framework/view';
import NavigationItem from './navigation-item';

/**
 * A view to represent the navigation sidebar
 *
 * @module
 */
export default class extends View {

    /**
     * Adds the collection to the view and sets up the nav item views
     *
     * @return {undefined}
     */
    constructor( collection ) {
        super();
        this.collection = collection;
        this.$el = $( '#navigation' );
        this.initNavigationItems();
    }

    /**
     * Loops over the collection and adds a child view for each model
     *
     * @return {undefined}
     */
    initNavigationItems() {
        this.navigationItems = [];
        this.collection.each(
            ( model ) => {
                this.addNavigationItem( model );
            }
        );
    }

    /**
     * Adds a child view using a model from the collection
     *
     * @param {'framework/model'} model The model to be attached to the view being added
     */
    addNavigationItem( model ) {
        this.navigationItems.push( new NavigationItem( model ) );
    }

}
