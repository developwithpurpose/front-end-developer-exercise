import View from '../framework/view';

export default class extends View {

    constructor( model ) {
        super();

        this.model = model;
        this.$el = $( '#navigation .step' + model.get( 'step' ) );
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
        const linkElement = this.$el.find( 'a' );

        if ( true === active ) {
            linkElement.addClass( 'active' );
            linkElement.attr( 'aria-selected', true );
        } else {
            linkElement.removeClass( 'active' );
            linkElement.attr( 'aria-selected', false );
        }
    }

}
