const sumAll = function(num1, num2) {
    let biggerNum =0;
    let smallerNum = 0;
    if (num1<0 || num2<0||Number.isInteger(num1)!=true||Number.isInteger(num2)!=true){
        return "ERROR";
    }
    if (num1>num2){
        biggerNum = num1;
        smallerNum = num2;
    } else if (num2>num1){
        biggerNum = num2;
        smallerNum = num1;
    } else{
        return num1;
    }
    let sum = 0;
    for (let i = smallerNum; i<=biggerNum; i++){
        sum+=i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
