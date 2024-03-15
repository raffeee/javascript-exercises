const caesar = function(text, shiftAmt) {
    const splitText = []
    const deciphered = []
    for (let i = 0; i < text.length; i++) {
        splitText.push(text.charCodeAt(i))
    }
    for (let j = 0; j < splitText.length; j++) {
        // check if Unicode is between codes for 'A' and 'z'
        // TODO:: Implement wrapping
        deciphered.push(splitText[j] >= 65 && splitText[j] <= 122
            ? String.fromCharCode(splitText[j] + shiftAmt)
            : String.fromCharCode(splitText[j]))
    }
    return deciphered.join('')
};

// Do not edit below this line
module.exports = caesar;
