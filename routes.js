// Login
Router.route('/', {
    name: 'home2',
    template: 'home'
});

Router.route('/login', {
	name: 'login',
	template: 'login'
});

Router.route('/forgot', {
	name: 'forgot',
	template: 'forgot'
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

Router.route('/admin', {
	name: 'admin',
	template: 'admin'
});



// Home

Router.route('/home', {
name: 'home',
template: 'home'
});


// Consults
Router.route('/consults', {
	name: 'consults',
	template: 'consults'
});



// Report Query
Router.route('/reportquery', {
	name: 'reportquery',
	template: 'reportquery'
});



// Trainings 
Router.route('/trainings',{
	name: 'trainings',
	template: 'trainings'
});

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

})







