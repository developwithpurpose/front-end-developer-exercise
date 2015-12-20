/*global expect*/
describe('client', function () {
    it('should expose an initialization mechanism', function () {
        var client = require('../lib/scripts/client');
        
        expect(typeof client.init).toBe('function');
    });
})