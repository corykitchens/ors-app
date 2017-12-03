const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = chai.expect;
const Course = require('../api/models/Course.Model.js');


chai.use(chaiHttp);

const server = require('../server.js');

describe('ORS-App API Endpoints', () => {
  const host = 'http://localhost';
  const port = process.env.PORT || 3000;
  var url = `${host}/${port}`;

  var course;
  

  before(() => {
    course = new Course();
    course.save((err) => {
      if (err) throw err;
      url = '/api/courses/' + course._id;
    })
  });

  it('accept a GET request at landing page', (done) => {
    chai.request('http://localhost:3000')
      .get('/api')
      .end(function (err, res) {
         expect(err).to.be.null;
         expect(res).to.have.status(200);
         expect(res).to.be.json;
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
         done();
      });
  });
  //GET /api/courses/:courseId
  it('accept a GET request and params for a specific course', (done) => {
    chai.request('http://localhost:3000')
      .get(url)
      .end(function (err, res) {
         expect(err).to.be.null;
         expect(res).to.have.status(200);
         expect(res).to.be.json;
         done();
      });
  });
  //PUT /api/courses/:courseId
  it('accept a PUT request and params for a specific course', (done) => {
    chai.request('http://localhost:3000')
      .put(url)
      .end(function (err, res) {
        console.log(err);
         expect(err).to.be.null;
         expect(res).to.have.status(200);
         expect(res).to.be.json;
         done();
      });
  });
  //DELETE /api/courses/:courseId
  it('accept a PUT request and params for a specific course', (done) => {
    chai.request('http://localhost:3000')
      .delete(url)
      .end(function (err, res) {
         expect(err).to.be.null;
         expect(res).to.have.status(200);
         expect(res).to.be.json;
         done();
      });
  });
  //GET /api/fsdfkm3e
  it('redirect a user for misguided endpoints', (done) => {
    chai.request('http://localhost:3000')
      .get('/api/asdasdasd')
      .end(function (err, res) {
         expect(err).to.not.be.null;
         expect(res).to.have.status(404);
         expect(res).to.be.json;
         done();
      });
  });
});