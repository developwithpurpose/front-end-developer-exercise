import View from '../framework/view';

/**
 * Handles the friends lists in the baby steps content articles
 *
 * @module views/fried-item
 * @augments {module:framework/view}
 */
export default class extends View {

    /**
     * Intitializes the view
     *
     * @param {module:models/baby-step} babyStepModel The baby step model for this view
     * @param {module:collections/friends} friendsCollection The collection of all friends
     * @return {undefined}
     */
    constructor( babyStepModel, friendsCollection ) {
        super();

        this.babyStepModel = babyStepModel;
        this.friendsCollection = friendsCollection;

        this.$el = $( '#content .step' + babyStepModel.get( 'step' ) + ' .friends-view' );
        this.addEvents();
    }

    addEvents() {
        this.listen( this.friendsCollection, 'loaded', this.render );
    }

    render() {
        const babyStep = this.babyStepModel.get( 'step' );

        let friends = this.friendsCollection.filter( ( friend ) => {
            return friend.get( 'babyStep' ) === babyStep;
        });

        this.$el.html( this.getHtml( friends, babyStep ) );
    }

    getFriendLink( friend ) {
        const name = friend.get( 'firstName' ) + friend.get( 'lastName' );
        const html = '<a href="javascript:void()">' + name + '</a>';

        return html;
    }

    getHtml( friends, babyStep ) {
        let html = '';
        let content = '';

        if ( 0 === friends.length ) {
            return html;
        }

        let firstFriendLink = this.getFriendLink( friends[0] );

        switch ( friends.length ) {
            case 1:
                content += firstFriendLink + ' is';
                break;
            case 2:
                content += firstFriendLink + ' and ' + this.getFriendLink( friends[1] ) + ' are';
                break;
            case 3:
                content += firstFriendLink + ', ' + this.getFriendLink( friends[1] ) + ', and 1 other friend are';
                break;
            default:
                content += firstFriendLink + ', ' + this.getFriendLink( friends[1] ) + ', and ' + (friends.length - 2) + ' other friends are';
        }

        content += ' also in Baby Step ' + babyStep;

        html = '<p class="content-footer">' + content + '</p>';

        return html;
    }

}
