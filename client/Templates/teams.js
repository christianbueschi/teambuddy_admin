Template.teams.helpers({

	teams: function () {
		return Teams.find({});
	}

});

Template.teams.events({
	"submit .newTeam": function (event) {
		// This function is called when the new task form is submitted

		var name = event.target.name.value;
		var description = event.target.description.value;

		Teams.insert({
			name: name,
			description: description
		});

		// Clear form
		event.target.name.value = "";
		event.target.description.value = "";

		// Prevent default form submit
		return false;
	}
})



if (Meteor.isClient) {



}