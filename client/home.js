import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Template.home.events({
	'click .adminlink': function() {
		Router.go("admin");
	},
	'click .consultlink': function() {
		Router.go("consults");
	},
	'click .traininglink': function() {
		Router.go("trainings");
	},
	'click .reportquerylink': function() {
		Router.go("reportquery");
	},
	'click .communityaccesslink': function() {
		Router.go("communityaccess");
	}
});
