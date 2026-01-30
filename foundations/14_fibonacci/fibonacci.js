const fibonacci = function(position) {
    position = parseInt(position);
    if (position===1 || position === 2){
        return 1;
    } else if (position===0){
        return 0;
    } else if (position<0){
        return "OOPS";
    }    
    let first = 1
    let second = 1
    let currentValue = 0;
    for (let i = 2; i<position;i++){
        currentValue = first+second;
        first = second;
        second = currentValue;
    }
    return currentValue;
};


// Do not edit below this line
    module.exports = fibonacci;
