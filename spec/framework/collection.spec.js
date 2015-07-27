import Collection from '../../app/assets/javascripts/framework/collection'

describe("Module: framework/collection", function() {

    let collectionInstance;

    it( 'Models property is initialized to an empty array', function() {
        collectionInstance = new Collection();

        expect( collectionInstance.models ).toEqual( [] );
    });

    it( 'push() method adds an object to the models array', function() {
        const testObject = {
            aProperty: 'a value'
        };

        collectionInstance = new Collection();
        collectionInstance.push( testObject );

        expect( collectionInstance.models ).toEqual( [ testObject ] );
    });

});
