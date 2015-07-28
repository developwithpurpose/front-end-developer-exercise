import Base from '../../app/assets/javascripts/framework/base'

describe("Module: framework/base", function() {

    let baseInstance;

    beforeEach(function() {
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

    it( 'on() method adds a listener that can be triggered by trigger()', function() {
        let testEventCallback = jasmine.createSpy();

        baseInstance.subscribers.testEvent = [];
        baseInstance.on( 'testEvent', testEventCallback );
        baseInstance.trigger( 'testEvent' );

        expect( testEventCallback ).toHaveBeenCalledWith( baseInstance );
    });

});
