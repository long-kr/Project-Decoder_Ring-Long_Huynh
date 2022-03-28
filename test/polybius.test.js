// Write your tests here!
const { polybius } = require("../src/polybius")
const { expect } = require("chai");

describe("polybius", () => {
    it("Function should run with correct input", () => {
        input = "abcd";
        const actual = polybius(input);
        const expected = "11213141";
        expect(actual).to.eql(expected);
    });

    it("Function should ingore special character", () => {
        input = "abc!d";
        const actual = polybius(input);
        const expected = "11213141";
        expect(actual).to.eql(expected);
    });

    it("It should translate 42 to (i/j) when decoding", () => {
        input = "42";
        const actual = polybius(input, false);
        const expected = "(i/j)";
        expect(actual).to.eql(expected);
    });
})