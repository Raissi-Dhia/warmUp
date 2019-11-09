// You are given an input string.

// For each symbol in the string if it's the first character occurence, replace it with a '1', else replace it with the amount of times you've already seen it...

// But will your code be performant enough?
// Examples:

// input   =  "Hello, World!"
// result  =  "1112111121311"

// input   =  "aaaaaaaaaaaa"
// result  =  "123456789101112"
// we are going to create an empty array and than itterate over the  array of the value that we inputed and each time check if the 
// index of the element equals to -1 which is missing we push 1 to the new arr else if it's not -1 that means that the value has been 
// found before so we add the 1 to the initial value which is one and keep the variable inside the itteration at the end we should join the array to get a string of the result
	function count(string){
	  
	  var array = string.split('') ;
	  
	       var curr = []
	  for ( var i = 0; i < array.length; i++){
	  		var initial = 1 ;
	       if (curr.indexOf(array[i]) === -1 ) {
	         curr.push(initial) 
	       } else if(curr.indexOf(array[i]) !== -1){

	          curr.push(initial + 1)
	     
	         }
	   
	     return curr.join('');
	}
}