import View from '../framework/view';
import BabyStepCollection from '../collections/baby-step'

export default class extends View {

    constructor() {
        super();

        this.collection = new BabyStepCollection();

        console.log( this.collection );

        this.$el = $( '#navigation' );
        this.initChildViews();
    }

    initChildViews() {

    }

}
