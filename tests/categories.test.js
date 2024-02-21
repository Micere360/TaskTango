// test/categories.test.js
const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../index'); // Assuming your Express app is exported from index.js
const { expect } = chai;

chai.use(chaiHttp);

describe('Categories API', () => {
  // Write your tests for categories endpoints
  it('should get all categories', (done) => {
    chai
      .request(app)
      .get('/api/categories')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.an('object');
        // Add more assertions based on your expected response
        done();
      });
  });

  // Add more test cases for other endpoints
});

