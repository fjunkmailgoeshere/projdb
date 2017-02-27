/* code here */

Template.trainings.events({
        'click .trainings_addnewsession': function() {
                Router.go("trainings_addnewsession");
        },

	'click .trainings_createnewtrainingmodule': function() {
		Router.go("trainings_createnewtrainingmodule");
	}
});

