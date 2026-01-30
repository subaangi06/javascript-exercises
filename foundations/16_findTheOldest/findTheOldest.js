const getAge = function(birth, death){
    if (!death){
        death = new Date().getFullYear();
    }
    return death-birth;
}                                       

const findTheOldest = function(peopleArray) {
    return peopleArray.reduce((oldest,currentPerson)=>{
        let oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
        let currentPersonAge = getAge(currentPerson.yearOfBirth, currentPerson.yearOfDeath);
        return currentPersonAge>oldestAge ?currentPerson : oldest; //updating accumulator
    });
    
};

//result of applying reudce on an array returns the accumulator's value.
// Do not edit below this line
module.exports = findTheOldest;
