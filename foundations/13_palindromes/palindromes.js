const palindromes = function (text) {
    const reversedWord = text.split("").reverse().join("").toLowerCase(); //splits each character into an array, then reverses the array, then joins the array back into a word
    return text==reversedWord;
};

// Do not edit below this line
module.exports = palindromes;
