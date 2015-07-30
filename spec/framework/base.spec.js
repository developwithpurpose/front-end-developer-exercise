import Base from '../../app/assets/javascripts/framework/base'

describe( 'Module: framework/base', function() {

    let baseInstance;

    beforeEach( function() {
        baseInstance = new Base();
    });

    it( 'Data property is initialized with an empty object', function() {
        expect( baseInstance.data ).toEqual( {} );
    });

    it( 'set() method sets a property on the data object', function() {
        baseInstance.set( 'aProperty', 'a value' );

        expect( baseInstance.data.aProperty ).toEqual( 'a value' );
    });

    it( 'get() method gets a property from the data object', function() {
        baseInstance.set( 'aProperty', 'a value' );
        let result = baseInstance.get( 'aProperty' );

        expect( result ).toEqual( 'a value' );
    });

    it( 'listen() method adds a subscription that is triggered by the notify() method on the target', function() {
        let testEventCallback = jasmine.createSpy();
        let subscriber = baseInstance;
        let publisher = new Base();

        subscriber.listen.call( subscriber, publisher, 'testEvent', testEventCallback );
        publisher.notify.call( publisher, 'testEvent' );

        expect( testEventCallback ).toHaveBeenCalledWith( publisher );
    });

    it( 'set() method notifies subscribers of a change event', function() {
        let testEventCallback = jasmine.createSpy();
        let subscriber = baseInstance;
        let publisher = new Base();

        subscriber.listen.call( subscriber, publisher, 'change', testEventCallback );
        publisher.set( 'testProperty', 'testValue' );

        expect( testEventCallback ).toHaveBeenCalledWith( publisher );
    });

});
