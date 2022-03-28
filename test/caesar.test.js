// Write your tests here!
const { caesar } = require("../src/caesar");
const { expect } = require("chai");

describe("caesar", () => {
    it("Should not run if shift is greater or small than 25, or equal 0 ", () => {
        input = "aaa";
        shift = 0;
        const actual = caesar(input, shift);
        expect(actual).to.be.false;
    })

    it("Should not run if shift is greater or small than 25, or equal 0 ", () => {
        input = "aaa";
        shift = -26;
        const actual = caesar(input, shift);
        expect(actual).to.be.false;
    })

    it("Should not run if shift is greater or small than 25, or equal 0 ", () => {
        input = "aaa";
        shift = 26;
        const actual = caesar(input, shift);
        expect(actual).to.be.false;
    })
});

describe("caesar", () => {
    it("Encode should run if correct input", () => {
        input = "aaa";
        shift = 3;
        const expected = "ddd"
        const actual = caesar(input, shift);
        expect(actual).to.equal(expected);
    });

    it("Encode should leave space and other symble, ignore capital letters, and allow negative shift", () => {
        input = "Aa !a";
        shift = -3;
        const actual = caesar(input, shift);
        const expected = "xx !x"
        expect(actual).to.equal(expected);
    });

    it("Decode should run if correct input", () => {
        input = "aaa";
        shift = 3;
        const expected = "xxx"
        const actual = caesar(input, shift, false);
        expect(actual).to.equal(expected);
    });

    it("Decode should leave space and other symble, ignore capital letters, and allow negative shift", () => {
        input = "Aa !a";
        shift = -3;
        const actual = caesar(input, shift, false);
        const expected = "dd !d"
        expect(actual).to.equal(expected);
    });
});