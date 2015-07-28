import View from '../framework/view';
import BabyStepCollection from '../collections/baby-step';
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
    constructor() {
        super();
        this.collection = new BabyStepCollection();
        this.$el = $( '#navigation' );
        this.initChildViews();
    }

    /**
     * Loops over the collection and adds a child view for each model
     *
     * @return {undefined}
     */
    initChildViews() {
        this.childViews = [];
        this.collection.each(
            ( model ) => {
                this.addChildView( model )
            }
        );
    }

    addChildView( model ) {
        this.childViews.push( new NavigationItem( model ) );
    }

}
