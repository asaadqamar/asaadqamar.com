function sendEmail() {
	Email.send({
	Host: "smtp.gmail.com",
	Username : "asaadqamar641@gmail.com",
	Password : "Hungary@study786",
	To : 'asaadqamar641@gmail.com',
	From : "asaaddata990@gmail.com",
	Subject : "testing",
	Body : "testing if email sent",
	}).then(
		message => alert("mail sent successfully")
	);
}