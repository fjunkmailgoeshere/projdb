Router.route('/', {
    template: 'main'
});

Router.route("/main");
Router.route("/home");
Router.route("/consults");
Router.route("/admin");
Router.route("/communityaccess");
Router.route("/trainings");
Router.route("/reportquery");





// Trainings will change just like admin changed below
Router.route("/trainings_addnewsession");
Router.route("/trainings_createnewtrainingmodule");

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

//Router.route('home', {
//    path: "/home",
//    layoutTemplate: 'home'
//});
