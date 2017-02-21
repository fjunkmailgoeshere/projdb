import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Template.home.events({
	'click .adminlink': function() {
		Router.go("admin");
	},
	'click .contactlink': function() {
		Router.go("contact");
	},
	'click .traininglink': function() {
		Router.go("trainings");
	},
	'click .reportquerylink': function() {
		Router.go("reportquery");
	}
});
