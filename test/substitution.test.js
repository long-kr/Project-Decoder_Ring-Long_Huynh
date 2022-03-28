// Write your tests here!
const { expect } = require("chai");
const { substitution } = require("../src/substitution");

describe("substituion", () => {
    it("Should encode if given datas are corrects, special chars and space", () => {
        input = "abc abc";
        alphabet = "xo!qmcgrukswaflnthdjpzibev";
        const actual = substitution(input, alphabet);
        const expected = "xo! xo!";
        expect(actual).to.equal(expected);
    });

    it("Should decode if given datas are corrects, special chars and space", () => {
        input = "xo! xo!!";
        alphabet = "xo!qmcgrukswaflnthdjpzibev";
        const actual = substitution(input, alphabet, false);
        const expected = "abc abcc";
        expect(actual).to.equal(expected);
    });

});

describe("substitution", () => {
    it("Encode should return false if alphabet is missing", () => {
        input = "abc";
        alphabet = "";
        const actual = substitution(input, alphabet);
        expect(actual).to.be.false;
    });

    it("Decode should return false if alphabet is missing", () => {
        input = "abc";
        alphabet = "";
        const actual = substitution(input, alphabet, false);
        expect(actual).to.be.false;
    });

    it("Encode should return false if alphabet doesnt have unique chars", () => {
        input = "abc";
        alphabet = "abcabcabcabcabcabcabcabcyz";
        const actual = substitution(input, alphabet);
        expect(actual).to.be.false;
    });

    it("Decode should return false if alphabet doesnt have unique chars", () => {
        input = "abc";
        alphabet = "abcabcabcabcabcabcabcabcyz";
        const actual = substitution(input, alphabet, false);
        expect(actual).to.be.false;
    });

    it("Encode should return false if alphabet lack of length", () => {
        input = "abc";
        alphabet = "xoyqmcgrukswaflnthdjpzi";
        const actual = substitution(input, alphabet);
        expect(actual).to.be.false;
    });

    it("Decode should return false if alphabet lack of length", () => {
        input = "abc";
        alphabet = "xoyqmcgrukswaflnthdjpzi";
        const actual = substitution(input, alphabet, false);
        expect(actual).to.be.false;
    });
});