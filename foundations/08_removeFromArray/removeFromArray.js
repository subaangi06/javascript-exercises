const removeFromArray = function(array) {
    let numUserArg = arguments.length-1
    for (let i = 1; i<=numUserArg; i++){
        
        let currentArg = (element) => element === arguments[i];
        
        found = true
        while (found = true){
            let currentIndex = array.findIndex(currentArg);
            if (currentIndex==-1){
                break;
            }
            array.splice(currentIndex, 1);
        }
    }
    return array;
};

let newArray = [1, 2, 2, 4]
console.log(removeFromArray(newArray,4));

// Do not edit below this line
module.exports = removeFromArray;

