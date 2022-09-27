function sendEmail() {
	Email.send({
	Host: "smtp.gmail.com",
	Username : "wordpresstesterpr@gmail.com",
	Password : "wordpress1tester2pr",
	To : 'wordpresstesterpr@gmail.com',
	From : "asaaddata990@gmail.com",
	Subject : "testing",
	Body : "testing if email sent",
	}).then(
		message => alert("mail sent successfully")
	);
}