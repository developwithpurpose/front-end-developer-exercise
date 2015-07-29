import BabyStepCollection from './collections/baby-step';
import NavigationView from './views/navigation';
import ContentView from './views/content';

export default class {

    start() {
        const babySteps = new BabyStepCollection();

        this.initNavigation( babySteps );
        this.initContent( babySteps );
    }

    initNavigation( babySteps ) {
        new NavigationView( babySteps );
    }

    initContent( babySteps ) {
        new ContentView( babySteps );
    }

}
