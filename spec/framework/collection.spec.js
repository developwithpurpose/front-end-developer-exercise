import Collection from '../../app/assets/javascripts/framework/collection';
import Model from '../../app/assets/javascripts/framework/model';

describe("Module: framework/collection", function() {

    let collectionInstance;

    it( 'Models property is initialized to an empty array', function() {
        collectionInstance = new Collection();

        expect( collectionInstance.models ).toEqual( [] );
    });

    it( 'push() method adds an model to the models array', function() {
        const testModel = new Model({
            aProperty: 'a value'
        });

        collectionInstance = new Collection();
        collectionInstance.push( testModel );

        expect( collectionInstance.models ).toEqual( [ testModel ] );
    });

    it( 'push() method throws error when param is not a Model instance', function() {
        collectionInstance = new Collection();
        let invalidPush = () => {
            collection.push( { testObject: 'a pojo' } );
        }

        expect( invalidPush ).toThrow();
    });

    it( 'each() loops over the model array and executes a callback', function() {
        collectionInstance = new Collection();

        collectionInstance.push( new Model({ id: 'item1' }) );
        collectionInstance.push( new Model({ id: 'item2' }) );
        collectionInstance.push( new Model({ id: 'item3' }) );

        let returnValues = [];
        collectionInstance.each(
            ( item ) => {
                returnValues.push( item.get( 'id' ) );
            }
        );

        expect( returnValues ).toEqual( [ 'item1', 'item2', 'item3' ] );
    });

    describe( 'Collection load() tests', function() {

        beforeEach( function( done ) {
            collectionInstance = new Collection();
            collectionInstance.url = '/spec/fixtures/collection-fixture.json';
            collectionInstance.resource = 'testResource';
            collectionInstance.load( function() {
                done();
            });
        }, 1000);

        it( 'Collection loads data through a GET request and creates models', function() {
            expect( collectionInstance.models.length ).toEqual( 2 );
        });
    });

});
