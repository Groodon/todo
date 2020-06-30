var expect = require('chai').expect;
 
var TodoTask = require('./TodoTask');
 
describe('add todotask', function() {
    it('should be invalid if description is empty', function(done) {
        var task = new TodoTask();
 
        task.validate(function(err) {
            expect(err.errors.description).to.exist;
            done();
        });
    });

    it('should be valid if description is not empty', function(done) {
        var task = new TodoTask({description: "hejhej"});
 
        task.validate(function(err) {
            expect(err).to.not.exist;
            done();
        });
    });

    it('should be valid because description is exactly 50 characters', function(done) {
        var task = new TodoTask({description: "o".repeat(50)});
 
        task.validate(function(err) {
            expect(err).to.not.exist;
            done();
        });
    });

    it('should be invalid because description is exactly 51 characters', function(done) {
        var task = new TodoTask({description: "o".repeat(51)});
 
        task.validate(function(err) {
            expect(err).to.exist;
            done();
        });
    });
});