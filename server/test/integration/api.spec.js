const app = require('../../server');
const expect = require('chai').expect;
const request = require('supertest');
const mongoose = require('mongoose');

after((done) => {
  mongoose.connection.close();
  app.close(done);
});

describe('API Tests', () => { 
  var task = { 
    description: 'gotta do this' 
  };

  it('should get all tasks', (done) => { 
    request(app).get('/todo/').end((err, res) => { 
      expect(res.statusCode).to.equal(200); 
      expect(res.body).to.be.an('array');
      done(); 
    }); 
  }); 
  
  it('should create a task', (done) => { 
    request(app).post('/todo/').send(task).end((err, res) => { 
      expect(res.statusCode).to.equal(200); 
      expect(res.body.description).to.equal('gotta do this');
      expect(res.body.completed).to.equal(false);
      task = res.body; 
      done(); 
    }); 
  }); 
  
  it('should update the task', (done) => { 
    request(app).put('/todo/' + task._id).send({completed: true}).end((err, res) => { 
      expect(res.statusCode).to.equal(204); 
      done(); 
    }); 
  });
  
  it('should delete the task', (done) => { 
    request(app).delete('/todo/' + task._id).send().end((err, res) => { 
      expect(res.statusCode).to.equal(204); 
      done();
    }); 
  }); 
});