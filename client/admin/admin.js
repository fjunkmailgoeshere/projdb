/* code here */


Template.admin.events({
        'click .admin_addnewuser': function() {
                Router.go("admin_addnewuser");
        },

        'click .admin_resetpassword': function() {
                Router.go("admin_resetpassword");
        },

	'click .admin_downloaddata': function() {
		Router.go("admin_downloaddata");
	},

	'click .admin_editpermissions': function() {
		Router.go("admin_editpermissions");
	},

	'click .admin_backup': function() {
		Router.go("admin_backup");
	}
});
