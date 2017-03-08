Router.route('/', {
    name: 'main',
    template: 'main'
});

Router.route('/main', {
	name: 'main2',
	template: 'main'
});
Router.route("/home");
Router.route("/consults");
Router.route("/admin");
Router.route("/communityaccess");
Router.route("/trainings");
Router.route("/reportquery");
Router.route("/testing");





// Trainings will change just like admin changed below
Router.route('/trainings/addnewsession', {
	name: 'trainings_addnewsession',
	template: 'trainings_addnewsession'
});

Router.route('/trainings/createnewtrainingmodule', {
	name: 'trainings_createnewtrainingmodule',
	template: 'trainings_createnewtrainingmodule'
});

Router.route('/trainings/editprevioustraining', { 
	name: 'trainings_editprevioustraining',
	template: 'trainings_editprevioustraining'
});

Router.route('/trainings/uploadsurveyresults', {
	name: 'trainings_uploadsurveyresults',
	template: 'trainings_uploadsurveyresults'
});

Router.route('/trainings/trainingmaterials', {
	name: 'trainings_trainingmaterials',
	template: 'trainings_trainingmaterials'
});

Router.route('/trainings/surveymode', {
	name: 'trainings_surveymode',
	template: 'trainings_surveymode'

});


//Admin pages
Router.route('/admin/addnewuser', {
	name: 'admin_addnewuser',
	template: 'admin_addnewuser'
});

Router.route('/admin/edituser', {
	name: 'admin_edituser',
	template: 'admin_edituser'
});

Router.route("/admin/changepassword", {
	name: 'admin_changepassword',
	template: 'admin_changepassword'
});


Router.route("/admin/backupdata", {
	name: 'admin_backupdata',
	template: 'admin_backupdata'
});

Router.route("/testing/testing", {
	name: 'testing_testing',
	template: 'testing_testing'

});


//Router.route('home', {
//    path: "/home",
//    layoutTemplate: 'home'
//});
