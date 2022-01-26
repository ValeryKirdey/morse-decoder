const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    var everything = "";
    while (true) {
        var piece = "";
        for (var j = 0; j < 5; j++) {
            if (expr.substring(0, 2) == "**") {
                expr = expr.substring(10);
                everything += " ";
            }

            if (expr.substring(0, 2) == "10")
                piece += ".";
            else if (expr.substring(0, 2) == "11")
                piece += "-";

            expr = expr.substring(2);
        }

        if (piece)
            everything += MORSE_TABLE[piece];

        if (expr.length == 0)
            break;
    }

    return everything;
}


module.exports = {
    decode
}