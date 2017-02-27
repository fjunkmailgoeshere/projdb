Router.route('/', {
    template: 'main'
});


Router.route("/home");
Router.route("/consults");
Router.route("/admin");
Router.route("/communityaccess");
Router.route("/trainings");
Router.route("/reportquery");


Router.route("/trainings_addnewsession");
Router.route("/trainings_createnewtrainingmodule");


Router.route("/admin_addnewuser");
Router.route("/admin_resetpassword");
Router.route("/admin_downloaddata");
Router.route("/admin_editpermissions");
Router.route("/admin_backup");

//Router.route('home', {
//    path: "/home",
//    layoutTemplate: 'home'
//});
