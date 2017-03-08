/* code here */


Template.reportquery_querytable.helpers({
    'data': function(){
	var db_entry = Consults.findOne();
	console.log(db_entry);
        return db_entry;
    }



});


Template.reportquery.events({
	'submit form': function(event) {
		event.preventDefault();
		alert("Form submitted");
	}
});
