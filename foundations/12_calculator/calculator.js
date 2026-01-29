const add = function(num1, num2) {
	 return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1-num2;
};

const sum = function(array) {
	return array.reduce((total, number) => total=total+number, 0);
};

const multiply = function(array) {
  return array.reduce((product, number)=> product*number, 1);
};

const power = function(base, exponent) {
	return base**exponent;
};

const factorial = function(number) {
	let factorial = 1;
  if (number==0){
    return 1;
  }
  for (let i = number; i>0; i--){
    factorial=factorial*i;
  }
  return factorial;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
