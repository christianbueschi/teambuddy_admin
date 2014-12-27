Template.members.helpers({

	teams: function () {
		return Teams.find({});
	},

	team: function() {
		return Teams.findOne({_id: Session.get('teamId') });
	},

	teamIsSelected: function() {
		return Session.get('teamId');
	}

});

Template.members.rendered = function(){
	$('.selectTeam').val(Session.get('teamId'));
};

Template.members.events({

	'change .selectTeam': function(event) {
		Session.set('teamId', $('.selectTeam :selected').val());
		Session.set('teamName', $('.selectTeam :selected').text());
	},

	"submit .newMember": function (event) {
		// This function is called when the new task form is submitted

		var firstName = event.target.firstName.value;
		var lastName = event.target.lastName.value;

		Teams.update(Session.get('teamId'), {$push: {members: {
			firstName: firstName,
			lastName: lastName
		}
		}});

//			// Clear form
		event.target.firstName.value = "";
//			event.target.description.value = "";

		// Prevent default form submit
		return false;
	}
});