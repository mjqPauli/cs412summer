const {sortString} = require('../PS1.P1');
const {evaluate} = require('../PS1.P2');
const {expression1,expression2} = require('../PS1.P3');
const {describe, it} = require('mocha');
const {expect} = require('chai');

describe('Test cases for P1', () => {

    it('should be sorted to aaacccdeefgiiiiiiillloopprrssstuux', function () {
        let sorted = sortString('supercalifragilisticexpialidocious');
        expect(sorted).to.be.equal('aaacccdeefgiiiiiiillloopprrssstuux');
    });
    it('should reserve only characters', function () {
        let sorted = sortString("abcdef123#$%^@*");
        expect(sorted).to.be.equal('abcdef');
    });
    it('should throw an Error: input must be a string', function () {
        let sorted = sortString(40);
        expect(sorted).to.be.an('error');
    })
})

describe('Test cases for P2', () => {

    it('should return a function that correspond to the operator', function () {
        let value = evaluate('1/2')('1/2');
        expect(value).to.be.equal(0.5);
    });
    it('should throw an Error: Operator is not supported', function () {
        let value = evaluate("8%3");
        expect(value).to.be.an('error');
    });
    it('should throw an Error: input must be a string', function () {
        let value = evaluate(40/3);
        expect(value).to.be.an('error');
    })
})

describe('Test cases for P3', () => {

    it('expression1 should return an array of strings split at character c', function () {
        let array = expression1('supercalifragilisticexpialidocious');
        expect(array).to.deep.equal(['super', 'califragilisti', 'cexpialido', 'cious'])
    });
    it('expression1 should return an array of strings split at character c', function () {
        let array = expression1('ccccccc');
        expect(array).to.deep.equal(['c','c','c','c','c','c','c'])
    })
    it('expression2 should return an object', function () {
        let obj = expression2('supercalifragilisticexpialidocious');
        expect(obj).to.deep.equal({
            originalString: 'supercalifragilisticexpialidocious',
            modifiedString: 'supercAlifrAgilisticexpiAlidocious',
            numberReplaced: 3,
            length: 34
        })
    })
})