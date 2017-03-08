import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Template.main.events({
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