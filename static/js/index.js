var ipAddress = '192.168.8.120';
var id = '353ae7b31ae3fa0e173e08fe46cf7456';

$(function(){
	console.log('on clicked')
	$('#on').click(function(){
		$.ajax('http://'+ipAddress+'/api/'+id+'/lights/1/state', {
		  method: 'PUT',
		  data: '{"on":true}',
		}).then(function(data) {
			console.log('it is lit');
		    console.log(data);
		});
		detLightStatus();
	});
	$('#off').click(function(){
		console.log('off clicked')
		$.ajax('http://'+ipAddress+'/api/'+id+'/lights/1/state', {
		  method: 'PUT',
		  data: '{"on":false}',
		}).then(function(data) {
			console.log('it is not lit');
		    console.log(data);
		});
		detLightStatus();
	});
});

function brighten() {
	for(i = 0; i <= 254; i+=10) {
		var str = '{"on":true,"bri": '+ i +'}'
		$.ajax('http://'+ipAddress+'/api/'+id+'/lights/1/state', {
		  method: 'PUT',
		  data: str,
		}).then(function(data) {
			console.log('it is not lit');
		    console.log(data);
		});
	}
	detLightStatus();
}

function dim() {
	for(i = 254; i >= 0; i-=10) {
		var str = '{"on":true,"bri": '+ i +'}'
		$.ajax('http://'+ipAddress+'/api/'+id+'/lights/1/state', {
		  method: 'PUT',
		  data: str,
		}).then(function(data) {
			console.log('it is not lit');
		    console.log(data);
		});
	}
	detLightStatus();
}

function level(bri) {
	var str = '{"on":true,"bri": '+ bri +'}'
	$.ajax('http://'+ipAddress+'/api/'+id+'/lights/1/state', {
	  method: 'PUT',
	  data: str,
	}).then(function(data) {
		console.log(data)
	});
	detLightStatus();
}

function detLightStatus() {
	var state;
	$.ajax({
		url: 'http://'+ipAddress+'/api/'+id+'/lights/1',
		type: 'GET',
		success: function(response){
			console.log(response);
			state = response.state.on
			if (state === true) {
				// $('#onOrOff').text("The Light is On");
				$('#imgLightOff').css('visibility', 'hidden')
				$('#imgLightOn').css('visibility', 'visible')
			}
			if (state === false) {
				// $('#onOrOff').text("The Light is Off");
				$('#imgLightOn').css('visibility', 'hidden')
				$('#imgLightOff').css('visibility', 'visible')
			}
		},
		error: function(error){
			console.log(error);
		}
	});
	return status;
}



function usingMotionSensing() {
	$('#motionSensingText').text("Motion Sensing is: On");
	$.ajax({
	  url: '/sensorStatus',
	  type: 'PUT',
	  contentType: 'text',
	  data: 'true',
	  success: function(data) {
	    console.log('Load was performed.');
	  }
	});
}

function notUsingMotionSensing() {
	$('#motionSensingText').text("Motion Sensing is: Off");
	$.ajax({
	  url: '/sensorStatus',
	  type: 'PUT',
	  contentType: 'text',
	  data: 'false',
	  success: function(data) {
	    console.log('Load was performed.');
	  }
	});
}