



$('#butt').on('click', function(){

if($('ul')[0].children.length % 2 === 0 ){
	$('#list').append('<li class ="green">'+ $('#input').val()+'</li>' );
}else {
 	$('#list').append('<li class ="blue">' + $('#input').val()+'</li>') ;
}

}) 
