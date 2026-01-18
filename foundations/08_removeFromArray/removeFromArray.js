const removeFromArray = function(array, count) {
    let numUserArg = arguments.length-1
    for (let i = 1; i<=numUserArg; i++){
        let currentArg = (element) => element == arguments[i];
        let index = array.findIndex(currentArg);
        array.splice(index, 1);
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;


console.log(removeFromArray([1, 2, 3, 4], 4,2));