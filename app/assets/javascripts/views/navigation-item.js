import View from '../framework/view';

export default class extends View {

    constructor( model, $el ) {
        super();

        this.model = model;
        this.$el = $( '#navigation .step' + model.get( 'step' ) );
        this.addEvents();
    }

    addEvents() {
        this.model.on( 'change', () => { this.refresh() });
        this.$el.click( ( e ) => {
            e.preventDefault();
            this.model.set( 'active', true );
        });
    }

    refresh() {
        const active = this.model.get( 'active' );
        const linkElement = this.$el.find( 'a' );

        if ( true === active ) {
            linkElement.addClass( 'active' );
        } else {
            linkElement.removeClass( 'active' );
        }
    }

}
