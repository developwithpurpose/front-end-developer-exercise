import Model from '../../app/assets/javascripts/framework/model'

describe("Module: framework/model", function() {

    let modelInstance;

    it( 'Exception is thrown when object is not passed to the constructor', function() {
        const initWithString = function() {
            modelInstance = new Model( 'a string' );
        };

        expect( initWithString ).toThrow();
    });

    it( 'Object passed to the constructor is set on the data property', function() {
        const testObject = {
            aProperty: 'a value'
        };

        modelInstance = new Model( testObject );

        expect( modelInstance.data ).toEqual( testObject );
    });

});
