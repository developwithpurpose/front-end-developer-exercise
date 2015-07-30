import View from '../framework/view';

export default class extends View {

    constructor( model ) {
        super();

        this.model = model;
        this.$el = $( '#navigation .step' + model.get( 'step' ) + ' a' );
        this.addEvents();
    }

    addEvents() {
        this.listen( this.model, 'change', this.refresh );

        this.$el.click( ( e ) => {
            e.preventDefault();
            this.model.set( 'active', true );
            this.model.notify( 'activated' );
        });
    }

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
