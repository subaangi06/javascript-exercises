const palindromes = function (text) {
    const alphanumerical = "abcdefghijklmnopqrstuvwxyz0123456789"
    const cleanText = text
                        .toLowerCase()
                        .split("")
                        .filter((character)=>alphanumerical.includes(character))
                        .join("");
    const reversedWord = cleanText.split("").reverse().join("").toLowerCase(); //splits each character into an array, then reverses the array, then joins the array back into a word
    return cleanText==reversedWord;
};

//filter takes a function, and if the function returns true, the filter will keep the elmement of the array, else discards it.  
//alphanumerical.includes(character) checks if the character is included in the string named "alphanumerical"


// Do not edit below this line
module.exports = palindromes;
