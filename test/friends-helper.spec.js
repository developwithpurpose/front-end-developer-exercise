/*global expect*/
describe('step details friends helper', function () {
    var helper;
    
    function friend(first, last) {
        return {
            firstName: first,
            lastName: last
        };
    }
    
    beforeEach(function () {
        helper = require('../lib/scripts/step-details/friends-helper.js');
    });
    
    it('should expose a mechanism to format a friends list', function () {
        expect(typeof helper.format).toBe('function');
    });
    describe('#format', function () {
        it('should format a friends list of 0', function () {
            var output = helper.format([], 1);
            expect(output).toBe('');
        });
        it('should format a friends list of 1', function () {
            var output = helper.format([friend('a', 'b')], 1);
            expect(output).toBe('<a href="#">a b</a> is also in Baby Step 1');
        });
        it('should format a friends list of 2', function () {
            var output = helper.format([friend('a', 'b'), friend('b', 'c')], 2);
            expect(output).toBe('<a href="#">a b</a> and <a href="#">b c</a> are also in Baby Step 2');
        });
        it('should format a friends list of 3', function () {
            var output = helper.format([friend('a', 'b'), friend('b', 'c'), friend('x', 'y')], 4);
            expect(output).toBe('<a href="#">a b</a>, <a href="#">b c</a>, and 1 other friend are also in Baby Step 4');
        });
        it('should format a friends list greater than 3', function () {
            var friends = [friend('a', 'b'), friend('b', 'c')];
            for (var i = 0; i < 100; i++) {
                friends.push(friend('x', 'y'));
            }
            var output = helper.format(friends, 4);
            expect(output).toBe('<a href="#">a b</a>, <a href="#">b c</a>, and 100 other friends are also in Baby Step 4');
        });
    });
});