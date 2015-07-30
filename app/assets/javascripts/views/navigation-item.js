import View from '../framework/view';

/**
 * View that handles the individual navigation items
 *
 * @module  views/navigation-item
 * @augments {module:framework/view}
 */
export default class extends View {

    /**
     * Initializes the view and adds events
     *
     * @function
     * @param {module:models/baby-step} model The baby step to associate with this view
     * @return {undefined}
     */
    constructor( model ) {
        super();

        this.model = model;
        this.$el = $( '#navigation .step' + model.get( 'step' ) + ' a' );
        this.addEvents();
    }

    /**
     * Adds a listener on the model change event to refresh the active state
     *
     * @function
     * @return {undefined}
     */
    addEvents() {
        this.listen( this.model, 'change', this.refresh );

        this.$el.click( ( e ) => {
            e.preventDefault();
            this.model.set( 'active', true );
            this.model.notify( 'activated' );
        });
    }

    /**
     * Changes the state in the DOM to active/inactive depending on the model's state
     *
     * @function
     * @returns {undefined}
     */
    refresh() {
        const active = this.model.get( 'active' );

        if ( true === active ) {
            this.$el.addClass( 'active' );
            this.$el.attr( 'aria-selected', true );
        } else {
            this.$el.removeClass( 'active' );
            this.$el.attr( 'aria-selected', false );
        }
    }

}
