import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

//ADDED AS AN EXAMPLE OF HOW DATA GETS PASSED TO HTML FILE
//Notice the "testvariable" part in the line below.  In the HTML file, 
//we insert it by {{testvariable}}
//In application, this would actually have code that asks the database
//for information and then returns it
Template.main.testvariable = function() {
	var example = "This is a test variable -- pretend we asked the DB for it"
	return example;
}

//Same thing, just another example.  This is called by {{clientID}}
Template.main.clientID = function() {
	var ID = 123456;
	return ID;
}
//ADDED AS AN EXAMPLE OF HOW DATABASE DATA GETS PASSED TO HTML FILE



Template.main.events({
	'submit form': function(event) {
		event.preventDefault();
		Router.go("home");
	}
});
