Template.login

Template.login.events({
	'submit form': function(event) {
		event.preventDefault();
		login = event.target.login.value;
		pass = event.target.password.value;

		if (login == "testing" && pass == "testing") {
			Router.go("/home");
		}
		else {
			alert("Incorrect username/password.");
		}

	}
});
