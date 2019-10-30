//create a function isSubset that should take two arrays and determine whether the second array is a subset of the first array. 
//For example:  array: [ 1, 2, 3, 4 ], sub:[ 2, 3, 4 ] => true
//              array: [ 2, 2, 2, 3, 4 ], sub:[ 2, 4, 3 ] => true
//              array: [ 2, 3, 3, "a" ],  sub:[ 3, 3, 3, "a" ] => false
function isSubset(array1 , array2){
	
   
    for(var i = 0; i < array2.length; i++){
    	for(var j = 0; j < array1.length; j++){
    		  if(array2[i] === array1[j]){
    break;
}
      
      if(array2[i]!== array1[j]){
         return false;
      }
}

    return true;
}


  if(array2[i] === array1[j])
    break;