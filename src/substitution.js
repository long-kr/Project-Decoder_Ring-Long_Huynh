// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function() {
    // you can add any code you want within this function scope

    function substitution(input, alphabet, encode = true) {
        // your solution code here
        const alphabetData = [
            'a', 'b', 'c', 'd', 'e', 'f',
            'g', 'h', 'i', 'j', 'k', 'l',
            'm', 'n', 'o', 'p', 'q', 'r',
            's', 't', 'u', 'v', 'w', 'x',
            'y', 'z'
        ];

        if (!alphabet) return false;
        //check for length alphabet
        if (alphabet.length !== 26) return false;

        //call function to check if Unique
        if (checkIfUnique(alphabet)) return false;

        const alphabetInput = alphabet.toLowerCase().split("");

        let data = {};

        if (encode) {
            //store date
            for (let i = 0; i < alphabetData.length; i++) {
                const char = alphabetData[i];
                data[char] = alphabetInput[i];
            }

            return input.split("")
                .map((char) => data[char] || char)
                .join("")
        }

        if (!encode) {
            //store date
            for (let i = 0; i < alphabetData.length; i++) {
                const char = alphabetData[i];
                data[alphabetInput[i]] = char;
            }

            return input.split("")
                .map((char) => data[char] || char)
                .join("");
        }

    }

    function checkIfUnique(alphabet) {
        let check = {};

        alphabet.split("").forEach((char) => {
            if (check[char] === undefined) {
                check[char] = 1;
            } else {
                check[char] += check[char];
            };
        });
        const result = Object.keys(check).some((key) => {
            const value = check[key];
            return value > 1;
        })

        return result;
    }

    return {
        substitution,
    };
})();

module.exports = { substitution: substitutionModule.substitution };