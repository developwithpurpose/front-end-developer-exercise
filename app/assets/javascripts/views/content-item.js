import View from '../framework/view';

export default class extends View {

    constructor( model ) {
        super();

        this.model = model;
        this.$el = $( '#content .step' + model.get( 'step' ) );
        this.addEvents();
    }

    addEvents() {
        this.listen( this.model, 'change', this.refresh );
    }

    refresh() {
        const active = this.model.get( 'active' );

        if ( true === active ) {
            this.$el.removeClass( 'hidden' );
            this.$el.attr( 'aria-hidden', false );
        } else {
            this.$el.addClass( 'hidden' );
            this.$el.attr( 'aria-hidden', true );
        }
    }

}
