// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function() {
    // you can add any code you want within this function scope

    function caesar(input, shift, encode = true) {
        // your solution code here
        if (shift > 25 || shift < -25 || shift == 0) return false;

        //encode function
        if (encode) {
            let result = "";

            for (let i = 0; i < input.length; i++) {
                //convert letter to lower case
                const letter = input[i].toLowerCase();
                //check if letter is alphabet
                if (isAlphabetic(letter)) {
                    let letterToCode = toCode(letter);
                    letterToCode += shift;
                    //keep letter in Caesar code
                    letterToCode = checkInsideAlphabet(letterToCode);
                    let codeToLetter = toLetter(letterToCode);
                    result += codeToLetter;
                } else {
                    result += letter;
                }
            };

            return result;

        } else {
            //decode
            let result = "";

            for (let i = 0; i < input.length; i++) {
                let letter = input[i].toLowerCase()
                if (isAlphabetic(letter)) {
                    let letterToCode = toCode(letter);
                    letterToCode -= shift;
                    letterToCode = checkInsideAlphabet(letterToCode);
                    let codeToLetter = toLetter(letterToCode);
                    result += codeToLetter;
                } else {
                    result += letter;
                };
            };

            return result;
        };
    }

    function isAlphabetic(char) {
        return (/[a-z]/).test(char);
    }

    function checkInsideAlphabet(letterToCode) {
        if (letterToCode > 122) {
            letterToCode = letterToCode - 122 + 96;
            return letterToCode;
        }

        if (letterToCode < 97) {
            letterToCode = 122 - (96 - letterToCode);
            return letterToCode;
        }
        return letterToCode
    }

    function toCode(letter) {
        let code = letter.charCodeAt(0);
        return code;
    }

    function toLetter(code) {
        let letter = String.fromCharCode(code);
        return letter;
    }

    return {
        caesar,
    };
})();

module.exports = { caesar: caesarModule.caesar };