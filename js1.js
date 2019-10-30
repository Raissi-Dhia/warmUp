
$('#left').on('click' function(){
 var x ;
 x = 'left' 
}

$('#right').on('click', function(){
	var x ;
	x = 'right'
}

$('#create').on('click',function(){
	if(x === 'left')
		$('#llist').prepend('<li > element </li>');
}else if(x === 'right'){

$('#rlist').prepend('<li > element</li>');
})

 