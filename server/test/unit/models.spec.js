const expect = require('chai').expect;
var TodoTask = require('../../models/TodoTask');
 
describe('add todotask', () => {
    it('should be invalid if description is empty', (done) => {
        var task = new TodoTask();
 
        task.validate((err) => {
            expect(err.errors.description).to.exist;
            done();
        });
    });

    it('should be valid if description is not empty', (done) => {
        var task = new TodoTask({description: "hejhej"});
 
        task.validate((err) => {
            expect(err).to.not.exist;
            done();
        });
    });

    it('should be valid because description is exactly 50 characters', (done) => {
        var task = new TodoTask({description: "o".repeat(50)});
 
        task.validate((err) => {
            expect(err).to.not.exist;
            done();
        });
    });

    it('should be invalid because description is over 50 characters', (done) => {
        var task = new TodoTask({description: "o".repeat(51)});
 
        task.validate((err) => {
            expect(err).to.exist;
            done();
        });
    });
});