import View from '../framework/view';

export default class extends View {

    constructor( babyStepModel, friendsCollection ) {
        super();

        this.babyStepModel = babyStepModel;
        this.friendsCollection = friendsCollection;

        this.$el = $( '#content .step' + babyStepModel.get( 'step' ) + ' .friend-view' );
        this.addEvents();
    }

    addEvents() {
        this.listen( this.friendsCollection, 'loaded', this.render );
    }

    render() {

    }

}
