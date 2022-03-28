// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function() {
    // you can add any code you want within this function scope
    const encodeData = {
        "a": "11",
        "b": "21",
        "c": "31",
        "d": "41",
        "e": "51",
        "f": "12",
        "g": "22",
        "h": "32",
        "i": "42",
        "j": "42",
        "k": "52",
        "l": "13",
        "m": "23",
        "n": "33",
        "o": "43",
        "p": "53",
        "q": "14",
        "r": "24",
        "s": "34",
        "t": "44",
        "u": "54",
        "v": "15",
        "w": "25",
        "x": "35",
        "y": "45",
        "z": "55"
    }

    const decodeData = {
        '11': 'a',
        '12': 'f',
        '13': 'l',
        '14': 'q',
        '15': 'v',
        '21': 'b',
        '22': 'g',
        '23': 'm',
        '24': 'r',
        '25': 'w',
        '31': 'c',
        '32': 'h',
        '33': 'n',
        '34': 's',
        '35': 'x',
        '41': 'd',
        '42': '(i/j)',
        '43': 'o',
        '44': 't',
        '45': 'y',
        '51': 'e',
        '52': 'k',
        '53': 'p',
        '54': 'u',
        '55': 'z'
    }

    function polybius(input, encode = true) {
        // your solution code here
        if (encode) {
            input = input.toLowerCase()
                //store alphabetic and space
                .match(/[a-z]|\s/g)
                //map follow data
                .map((char) => encodeData[char] || char)
                .join("");
            return input;
        };

        if (!encode) {
            if (checkLength(input)) {
                //store number and space
                input = input.match(/[0-9]{2}|\s/g)
                    //map follow data
                    .map((char) => decodeData[char] || char)
                    .join("");
                return input;
            } else {
                return false;
            }
        };
    }

    function checkLength(input) {
        const checkLength = input.match(/[0-9]/g);
        return (checkLength.length % 2 === 0) ? true : false;
    };

    return {
        polybius,
    };

})();

module.exports = { polybius: polybiusModule.polybius };