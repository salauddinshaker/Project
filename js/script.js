function checkUserName(){
	var user = $('#userName').val();
	if(user=='salauddin'){
		$('#userError').text('');
		return true;
	
	}else{
		$('#userError').text('User name doesn\'t match.');		
		return false;
	}	
}
$('#userName').blur(function(){
	checkUserName()
});

$('#userName').keydown(function(){
	checkUserName()
});


//for password


function passwordCheck(){
	var password = $('#psd').val();
	if(password==12345 ){
		$('#psdError').text('');
		return true;
	}else{
		$('#psdError').text('Password doesn\'t match;.');
		return false;
	}
}

$('#psd').blur(function(){
	passwordCheck();
});





//for submit

$('#loginForm').submit(function(){
	user_error = false;
	password_error = false;


	user_error = checkUserName();
	password_error = passwordCheck();

	if(user_error && password_error){
		return true;
	}else{
		return false;
	}

})



