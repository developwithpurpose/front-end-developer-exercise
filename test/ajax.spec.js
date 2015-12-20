/*global expect,jasmine*/
describe('ajax', function () {
    var ajax;
    var jquery;
    
    beforeEach(function () {
        ajax = require('../lib/scripts/util/ajax.js');
        jquery = {
            getJSON: jasmine.createSpy()
        };
        ajax._jquery(jquery);
    });
    
    it('should expose a getter for JSON', function () {
        expect(typeof ajax.json).toBe('function');
    });
    describe('#json', function () {
        it('should execute an ajax call for json data', function () {
            var success = jasmine.createSpy('success');
            ajax.json('myurl', success);
            expect(jquery.getJSON).toHaveBeenCalledWith('myurl', success);
        });
        it('should assign an error callback if specified', function () {
            var jxhr = {
                fail: jasmine.createSpy('fail')
            };
            
            var success = jasmine.createSpy('success');
            var error = jasmine.createSpy('error');
            
            jquery.getJSON.and.returnValue(jxhr);
            ajax.json('myurl', success, error);
            
            expect(jxhr.fail).toHaveBeenCalledWith(error);
            
        });
    });
})