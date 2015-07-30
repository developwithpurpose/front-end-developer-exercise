import View from '../framework/view';

/**
 * Handles the individual articles for each baby step in the main content area
 *
 * @module views/content-item
 * @augments {module:framework/view}
 */
export default class extends View {

    /**
     * Intitializes the view model, jquery element, and event listeners
     *
     * @function
     * @param {module:models/baby-step} model The model to attach to the view
     * @return {undefined}
     */
    constructor( model ) {
        super();

        this.model = model;
        this.$el = $( '#content .step' + model.get( 'step' ) );
        this.addEvents();
    }

    /**
     * Adds an event listener for the model's change event
     *
     * @function
     * @return {undefined}
     */
    addEvents() {
        this.listen( this.model, 'change', this.refresh );
    }

    /**
     * Refreshes the view's state by triggering a show or hide animation
     *
     * @function
     * @return {undefined}
     */
    refresh() {
        const active = this.model.get( 'active' );

        if ( true === active ) {
            this.transitionToVisible();
        } else {
            this.transitionToHidden();
        }
    }

    /**
     * Fades the element out
     *
     * @function
     * @return {undefined}
     */
    transitionToHidden() {
        this.$el.fadeOut( 500, () => {
            this.$el.addClass( 'hidden' );
        });

        this.$el.attr( 'aria-hidden', true );
    }

    /**
     * Fades the element in
     *
     * @function
     * @return {undefined}
     */
    transitionToVisible() {
        this.$el.fadeIn( 500, () => {
            this.$el.removeClass( 'hidden' );
        });

        this.$el.attr( 'aria-hidden', false );
    }

}
