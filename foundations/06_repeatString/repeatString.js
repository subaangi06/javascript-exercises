
const repeatString = function(string, num) {
    let outputString = "";
    if (num<0) {
        return "ERROR";
    } else {
        for (let i=0; i<=num; i++){
            if (i==0){
                continue;
            }
            outputString=outputString+string;
        }
        return outputString;
    }
};

// Do not edit below this line
module.exports = repeatString;
