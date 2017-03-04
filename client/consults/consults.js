/* code here */
Template.consults.rendered=function() {
	$('#my-datepicker').datepicker();
}


Consults = new Mongo.Collection('consults');

Template.consults.events({
	'submit form': function(event) {
		event.preventDefault();

		var data = {
			date: event.target.thedate.value,
			name: event.target.name.value,
			entity: event.target.entity.value,
			hearingstatus: event.target.hearingstatus.value,
			methodofcontact: event.target.methodofcontact.value,
			reasonforcontact: event.target.reasonforcontact.value,
			age: event.target.age.value,
			gender: event.target.gender.value,
			persontakingcall: event.target.persontakingcall.value,
			resultofcall: event.target.resultofcall.value,
			notes: event.target.notes.value
		};

		console.log(data);
		Consults.insert(data);
	}
});
