const app = require('../app');
const chai = require('chai');
const mocha = require('mocha');
const chaiHttp = require('chai-http');
const {expect} = chai;
const {describe} = mocha;

chai.use(chaiHttp);

describe ("PS4 test cases", () => {
    it('should return status code 200', function (done) {
        chai.request(app)
            .get('/')
            .end((err, response) => {
                expect(response).to.have.status(200);
                done();
            })
    })
    it('should return status code 200 for input zip code 91911', function (done) {
        chai.request(app)
            .post('/ps4')
            .send({
                'zipCode': 91911
            })
            .end((err, response) => {
                expect(response).to.have.status(200);
                done()
            })
    })
    it('should return HTML file showing weather of area of zip code 91911', function (done) {
        chai.request(app)
            .post('/ps4')
            .send({
                'zipCode': 91911
            })
            .end((err, response) => {
                expect(response).to.be.html;
                done()
            })
    })
})