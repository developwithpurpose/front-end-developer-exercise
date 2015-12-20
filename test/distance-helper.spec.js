/*global expect*/
describe('distance helper', function () {
    var helper;
    
    beforeEach(function () {
        helper = require('../lib/scripts/util/distance-helper.js');
    });
    
    it('should expose a mechanism to determine distance', function () {
        expect(typeof helper.distance).toBe('function');
    });
    describe('#distance', function () {
        it('should be able to handle `a` larger than `b`', function () {
            expect(helper.distance(4, 1)).toBe(3);
        });
        it('should be able to handle `b` larger than `a`', function () {
            expect(helper.distance(1, 3)).toBe(2);
        });
        it('should be able to handle string input', function () {
            expect(helper.distance('1', '5')).toBe(4);
        });
    });
});