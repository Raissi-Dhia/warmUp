




// 1- Using recursion Write a JavaScript program to find the greatest common divisor (gcd) of two positive numbers.

function greatestCommonDivisor(a, b) {

	if ((a % b === 0) || b === 0){
		return b;
		};

	return greatestCommonDivisor(a, b - 1); 
};



// 2-Write a function called sum that accepts two numbers as parameters, 
//and sum them together but without suming them togther directly
//you can only add one at each summetion, you'll need to use recursion in this. 

function sum(a, b) {
	
	 if(a < 0 ){
	 	
	 	return -1 + sum(a + 1, b) 
	 }
	 else if(a === 0){
	 	return b;
	 }
	 else if(a > 0){
	 	return 1 +sum(a - 1, b);
	 } else if(a === 0){
	 	return b;
	 }
};
