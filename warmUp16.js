// Given a string text, you want to use the characters of text to form as many instances of the word "balloon" as possible.
// You can use each character in text at most once. Return the maximum number of instances that can be formed.

// Example 1:
// Input: text = "nlaebolko"
// Output: 1

// Example 2:
// Input: text = "loonbalxballpoon"
// Output: 2

// Example 3:
// Input: text = "RebootKamp"
// Output: 0
 
// Constraints:
// 1 <= text.length <= 10^4
// text consists of lower case English letters only.

// i had a problem in terms of syntax but i think i pretty much get the idea ! so what is really happening is that we are going to split the string into an array and declare var with multiple 
//values and then we are going to itterate over the array and each time the value of the index i equals to one of the values of the variable , it's going to add it into a new array . 
//once the itteration is over we are going to get the array that we pushed into it and see if it's length is mmultiple of seven or not if yes that means that the length of that array divided 
//by seven equals to the number of balloons inside that array and we add that value to the variable res that is initialized as 0 from the beggining .
function balloon (string) {
	var result =[] ;
	var res = 0 ;
	var array = string.split('');
	var alphabet = 'b' || 'a' || 'l' || 'o' || 'n' ;
	for (i = 0; i < array.length ; i++){
		if (array[i] === 'b' || array[i] ==='a' || array[i] ==='l' || array[i] ==='o' || array[i] ==='n'){
			result.push('b' || 'a' || 'l' || 'o' || 'n') 
		}if ((result.length % 7 ) === 0 ){
			res += (result.length / 7) ;
		}

	}
	return res ; 

};