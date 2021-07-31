function getDate(){
	document.write(new Date().getFullYear());
}

function checkValidation(){
	var firstname = document.forms["contactForm"]["firstname"].value;
	var lastname = document.forms["contactForm"]["lastname"].value;
	var email = document.forms["contactForm"]["email"].value;
	var phone = document.forms["contactForm"]["phone"].value;
	var address = document.forms["contactForm"]["address"].value;
	var message = document.forms["contactForm"]["message"].value;

	if(firstname =='' || lastname =='' || email =='' || phone =='' || address =='' || message =='')
	{
		var element = document.getElementById('error-msg');
		element.innerHTML = "Opps, looks like you missed some fields";
		return false;
	}else{
		alert('Thanks for your message.');
		return true;
	}
}

function greetUser(){
	var date = new Date();
	
	var monthNames = [
	"January", "February", "March",
	"April", "May", "June", "July",
	"August", "September", "October",
	"November", "December"
	];

	var day = date.getDate();
	var monthIndex = date.getMonth();
	var year = date.getFullYear();

	//return day + ' ' + monthNames[monthIndex] + ' ' + year;
	document.write("<h3>Today - "+day + ' ' + monthNames[monthIndex] + ' ' + year+"</h3>");
	
}
