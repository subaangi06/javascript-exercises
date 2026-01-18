const leapYears = function(year) {
    const isDivisibleByFour = year%4 ===0;
    const century = year%100===0;
    const isDivisibleByFourHundred = year%400===0;

    if (isDivisibleByFour&&!century||isDivisibleByFourHundred){
        return true;
    } else {return false;}
};

// Do not edit below this line
module.exports = leapYears;
