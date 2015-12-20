/*global expect, jasmine*/
describe('step details friends', function () {
    var friends;
    var ajax;
    
    function friend(first, last, step) {
        return {
            firstName: first,
            lastName: last,
            babyStep: step
        };
    }
    
    beforeEach(function () {
        friends = require('../lib/scripts/step-details/friends.js');
        ajax = jasmine.createSpyObj('ajax', ['json']);
        friends._ajax(ajax);
    });
    
    it('should expose a mechanism to find friends for a specified step', function () {
        expect(typeof friends.getFriendsInStep).toBe('function');
    });
    describe('#getFriendsInStep', function () {
        it('should retrieve friends from json input', function () {
            var success = jasmine.createSpy('success');
            var error = jasmine.createSpy('error');
            
            friends.getFriendsInStep(1, success, error);
            
            var ajaxInput = ajax.json.calls.first().args;
            
            expect(ajaxInput[0]).toBe('baby-steps.json');
        });
        it('should filter friends from json based on step', function () {
            var success = jasmine.createSpy('success');
            var error = jasmine.createSpy('error');
            
            var expectedFriend = friend('a', 'b', 1);
            var unexpectedFriend = friend('a', 'b', 2);
            
            friends.getFriendsInStep(1, success, error);
            
            var ajaxInput = ajax.json.calls.first().args;
            
            ajaxInput[1]({
                friends: [expectedFriend, unexpectedFriend]
            });
            
            expect(success).toHaveBeenCalledWith([expectedFriend]);
        });
        it('should sort friends from json based on last name', function () {
            var success = jasmine.createSpy('success');
            var error = jasmine.createSpy('error');
            
            var friend1 = friend('a', 'ac', 1);
            var friend2 = friend('a', 'a', 1);
            var friend3 = friend('a', 'b', 1);
            var friend4 = friend('a', 'c', 1);
            var friend5 = friend('z', 'd', 1);
            var friend6 = friend('a', 'd', 1);
            
            var expected = [
                friend2,
                friend1,
                friend3,
                friend4,
                friend5,
                friend6
            ];
            
            friends.getFriendsInStep(1, success, error);
            
            var ajaxInput = ajax.json.calls.first().args;
            
            ajaxInput[1]({
                friends: [
                    friend1,
                    friend2,
                    friend3,
                    friend4,
                    friend5,
                    friend6
                ]
            });
            
            expect(success).toHaveBeenCalledWith(expected);
        });
    });
});