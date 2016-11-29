$(function(){
	$('#on').click(function(){
		
		$.ajax({
			url: 'https://jsonplaceholder.typicode.com/posts/1',
			//data: $('form').serialize(),
			type: 'GET',
			success: function(response){
				console.log('it is lit');
				console.log(response);
			},
			error: function(error){
				console.log(error);
			}
		});
	});
	// $('#off').click(function(){
		
	// 	$.ajax({
	// 		url: 'https://jsonplaceholder.typicode.com/posts/1',
	// 		//data: $('form').serialize(),
	// 		type: 'GET',
	// 		success: function(response){
				//console.log('its not lit')
	// 			console.log(response);
	// 		},
	// 		error: function(error){
	// 			console.log(error);
	// 		}
	// 	});
	// });
	$('#off').click(function(){
		$.ajax('http://jsonplaceholder.typicode.com/posts/1', {
		  method: 'PUT',
		  data: {
		    id: 1,
		    title: 'foo',
		    body: 'bar',
		    userId: 1
		  }
		}).then(function(data) {
			console.log('it is not lit');
		    console.log(data);
		});
	});
});
