/* code here */
Template.consults.rendered=function() {
	$('#my-datepicker').datepicker();
}


Template.consults.events({
	'submit form': function(event) {
		event.preventDefault();

		//Check the checkboxes for reasonforcontact
		var reason = [];
		
		if (event.target.communicationaccess.checked == true) { 
			reason.push(event.target.communicationaccess.value);
		}
		if (event.target.hearingassistivetechnology.checked == true) { 
			reason.push(event.target.hearingassistivetechnology.value);
		}
		if (event.target.cart.checked == true) { 
			reason.push(event.target.cart.value);
		}
		if (event.target.referral.checked == true) { 
			reason.push(event.target.referral.value);
		}
		if (event.target.technologyassistance.checked == true) { 
			reason.push(event.target.technologyassistance.value);
		}

		console.log(reason)


		var data = {
			date: event.target.thedate.value,
			name: event.target.name.value,
			entity: event.target.entity.value,
			hearingstatus: event.target.hearingstatus.value,
			methodofcontact: event.target.methodofcontact.value,
			reasonforcontact: reason,
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
