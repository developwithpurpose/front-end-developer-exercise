import BabyStepCollection from './collections/baby-step';
import NavigationView from './views/navigation';
import ContentView from './views/content';

/**
 * Handles the launching of the application by setting up the container views
 *
 * @module application
 */
export default class {

    /**
     * Creates a collection to hold the baby step data and creates the container views
     *
     * @function
     * @return {undefined} 
     */
    start() {
        const babySteps = new BabyStepCollection();

        this.initNavigation( babySteps );
        this.initContent( babySteps );
    }

    /**
     * Creates the container view for the navigation sidebar
     *
     * @function
     * @param {module:collection/baby-step} babySteps The baby steps collection
     * @return {undefined}
     */
    initNavigation( babySteps ) {
        new NavigationView( babySteps );
    }

    /**
     * Creates the container view for the content area
     *
     * @function
     * @param {module:collection/baby-step} babySteps The baby steps collection
     * @return {undefined}
     */
    initContent( babySteps ) {
        new ContentView( babySteps );
    }

}
