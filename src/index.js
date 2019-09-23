const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    // write your solution here
    let mas = expr.split(/\*\*\*\*\*\*\*\*\*\*/);
    sentence = "";

    for (i = 0; i < mas.length; i++) {
        word = mas[i];
        count = 0;
        letter = "";
        for (j = 0; j < word.length; j++) {
            count++;
            if (word[j] == "0") {

            } else {
                j++;
                count++;
                n = word[j - 1] + word[j];
                if (n == "10") {
                    letter = letter + ".";
                } else if (n == "11") {
                    letter = letter + "-";
                }
            }

            if (count == 10) {
                if (letter != "") {
                    sentence = sentence + MORSE_TABLE[letter];
                    count = 0;
                    letter = "";
                }    
            }
        }
        if ((mas.length > 1)&&(i != mas.length - 1)) {
            sentence = sentence + " ";
        }
    }
    return sentence;
}

module.exports = {
    decode
}