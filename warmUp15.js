// write a function that takes a string as an argument 
// and returns the string reversed word by word 
// Example : reverseStr("hi there how is the weather today") ==>> "today weather the is how there hi"
//
//
// Note : you can`t use any built-in functions .
 function reverseStr(string) {
	 	var array = string.split(' ')
	 	var newArr = [] ;
	 	var i = array.length - 1

	 	while (i >= 0){
	 		newArr.push(array[i]); 
	 		i-- ;
	 	}
		
	 	return newArr.join(' ')
	 }