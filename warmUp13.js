/* 1. Create a function that takes a Roman numeral as its argument and returns its value as a numeric decimal integer. You don't need to validate the form of the Roman numeral.

        Modern Roman numerals are written by expressing each decimal digit of the number to be encoded separately, starting with the leftmost digit and skipping any 0s. So 1990 is rendered "MCMXC" (1000 = M, 900 = CM, 90 = XC) and 2008 is rendered "MMVIII" (2000 = MM, 8 = VIII). The Roman numeral for 1666, "MDCLXVI", uses each letter in descending order.

        Example:

            solution('XXI'); // should return 21

        Help:

            Symbol    Value
            I          1
            V          5
            X          10
            L          50
            C          100
            D          500
            M          1,000  */
            //we split our input to have every roman numeral alone and than create to variables of the symobls and the values . than itterate over the two arrays and check if the single roman is equal to the one in the symbol array if yes retur the value of it from the value array and so on . than add them and return into a new variable called result . 

            function romanInteger(Roman) {
            	var arr = []
            	var result = 0 ;
            	var roman = Roman.split('') 
            	arr.push(roman);
            	var value = [1, 5, 10, 50, 100, 500, 1000]; 
            	var symbol = ['I', 'V', 'X', 'L', 'C', 'D', 'M']
            	for (var i = 0; i < symbol.length; i++) {
            		for (var j=0 , j < roman.length , j++)
            		if(roman[j] = symbol[i]){
            			result += value[i]
            		}
            		result += 0
            	}
            	return arr ; 
            }

    
  /*  2. Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).
        Examples:

        toCamelCase("the-stealth-warrior") // returns "theStealthWarrior"

        toCamelCase("The_Stealth_Warrior") // returns "TheStealthWarrior"
       */
       // change the str which is our input to an array and and split it whenver we find an underscore or dash  and than itterate over that array and camelcase every element of the array and than join them together into a new variable to give us the strin with the camelcase

       function camelCase(str) {
       	var array = str.split('-') || str.split('_')
       	var result = ''
       	for (var i = 0; i < array.length ; i++){
       		array[i] = array[i].charAt(0).toUpperCase() + array[i].slice(1);
       	}
       		return result = array.join(' ')
       }

    /*
    3. In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.
        Example

            filter_list([1,2,'a','b']) == [1,2]
            filter_list([1,'a','b',0,15]) == [1,0,15]
            filter_list([1,2,'aasf','1','123',123]) == [1,2,123]

*/
// we are going to inter an array with mixed numbers and strings and we are gouing to itterate over that array . once we 
			function filter(array) {
				var newArr = []
				for (var i = 0 ; i<array.length ; i++) {
					if ( typeof array[i] === 'number'){
						newArr.push(array [i])
					}
				}
				return newArr;
			}