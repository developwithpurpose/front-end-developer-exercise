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

    it( 'each() loops over the model array and executes a callback', function() {
        collectionInstance = new Collection();

        collectionInstance.push( { id: 'item1' } );
        collectionInstance.push( { id: 'item2' } );
        collectionInstance.push( { id: 'item3' } );

        let returnValues = [];
        collectionInstance.each(
            ( item ) => {
                returnValues.push( item.id );
            }
        );

        expect( returnValues ).toEqual( [ 'item1', 'item2', 'item3' ] );
    });

});
