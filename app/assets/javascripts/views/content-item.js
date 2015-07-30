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
            this.transitionToVisible();
        } else {
            this.transitionToHidden();
        }
    }

    transitionToHidden() {
        this.$el.fadeOut( 500, () => {
            this.$el.addClass( 'hidden' );
        });
        this.$el.attr( 'aria-hidden', true );
    }

    transitionToVisible() {
        this.$el.fadeIn( 500, () => {
            this.$el.removeClass( 'hidden' );
        });
        this.$el.attr( 'aria-hidden', false );
    }

}
