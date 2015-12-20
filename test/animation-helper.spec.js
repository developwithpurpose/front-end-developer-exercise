/*global expect*/
describe('animation helper', function () {
    var helper;
    
    beforeEach(function () {
        helper = require('../lib/scripts/util/animation-helper.js');
    });
    
    it('should expose a mechanism to determine animation duration', function () {
        expect(typeof helper.speed).toBe('function');
    });
    describe('#speed', function () {
        it('should return a duration based on a default setting and the specified distance', function () {
            expect(helper.speed(1)).toBe('0.4s');
            expect(helper.speed(2)).toBe('0.8s');
        });
        it('should provide a max speed', function () {
            expect(helper.speed(20)).toBe('1s');
        });
    });
});