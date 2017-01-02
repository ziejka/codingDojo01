var chai = require('chai');
var nock = require('nock');
var expect = chai.expect;
var Setup = require('./../../src/setup/setup');


describe('Setup', function () {

    var message = "hello",
        setup = new Setup(message);

    it('should create setup', function () {
        expect(setup.getMessage()).to.equal(message);
    });

    it('should return age', function () {
        expect(setup.getAge()).to.equal(1);
    });

    it('should add age', function () {
        setup.addYear();
        expect(setup.getAge()).to.equal(2);
    });

    it('should change message', function () {
        setup.changeMessage('aloha');
        expect(setup.getMessage()).to.equal('aloha');
    });
});