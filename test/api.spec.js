const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = chai.expect;

chai.use(chaiHttp);

const server = require('../server.js');

describe('ORS-App API Endpoints', () => {
  //GET '/api/
  it('accept a GET request at landing page', (done) => {
    chai.request('http://localhost:3000')
      .get('/api')
      .end(function (err, res) {
         expect(err).to.be.null;
         expect(res).to.have.status(200);
         expect(res).to.be.json;
         expect(res.body).to.have.keys('message');
         done();
      });
  });
  //GET /api/courses
  it('accept a GET request for courses', (done) => {
    chai.request('http://localhost:3000')
      .get('/api/courses')
      .end(function (err, res) {
         expect(err).to.be.null;
         expect(res).to.have.status(200);
         expect(res).to.be.json;
         expect(res.body).to.have.keys('message');
         done();
      });
  });
  //GET /api/courses/:courseId
  it('accept a GET request and params for a specific course', (done) => {
    chai.request('http://localhost:3000')
      .get('/api/courses/cmps211')
      .end(function (err, res) {
         expect(err).to.be.null;
         expect(res).to.have.status(200);
         expect(res).to.be.json;
         expect(res.body).to.have.keys('message');
         done();
      });
  });
  //PUT /api/courses/:courseId
  it('accept a PUT request and params for a specific course', (done) => {
    chai.request('http://localhost:3000')
      .put('/api/courses/cmps211')
      .end(function (err, res) {
         expect(err).to.be.null;
         expect(res).to.have.status(200);
         expect(res).to.be.json;
         expect(res.body).to.have.keys('message');
         done();
      });
  });
  //DELETE /api/courses/:courseId
  it('accept a PUT request and params for a specific course', (done) => {
    chai.request('http://localhost:3000')
      .delete('/api/courses/cmps211')
      .end(function (err, res) {
         expect(err).to.be.null;
         expect(res).to.have.status(200);
         expect(res).to.be.json;
         expect(res.body).to.have.keys('message');
         done();
      });
  });
  //GET /api/fsdfkm3e
  it('redirect a user for misguided endpoints', (done) => {
    chai.request('http://localhost:3000')
      .delete('/api/asdkmnj23123')
      .end(function (err, res) {
         expect(err).to.not.be.null;
         expect(res).to.have.status(404);
         expect(res).to.be.json;
         expect(res.body).to.have.keys('message');
         done();
      });
  });
});