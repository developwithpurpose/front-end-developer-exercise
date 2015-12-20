/*global expect,jasmine*/
describe('animator', function () {
    var animator;
    var jquery;
    var selection;
    
    beforeEach(function () {
        animator = require('../lib/scripts/util/animator.js');
        jquery = jasmine.createSpy('jquery');
        selection = {
            animate: jasmine.createSpy('animate')
        };
        jquery.and.returnValue(selection);
        animator._jquery(jquery);
    });
    
    it('should expose an animate function', function () {
        expect(typeof animator.animate).toBe('function');
    });
    describe('#animate', function () {
        it('should delegate to jquery', function () {
            var element = document.createElement('div');
            var callback = jasmine.createSpy('success');
            var myOptions = {
                option1: true
            };
            animator.animate(element, myOptions, '600s', callback);
            
            expect(jquery).toHaveBeenCalledWith(element);
            expect(selection.animate).toHaveBeenCalledWith(myOptions, '600s', callback);
        });
    });
});