
Template.events.helpers({

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


Template.events.rendered = function(){
	$('.selectTeam').val(Session.get('teamId'));

	$(function() {
		$( ".from, .to" ).datepicker({
			dateFormat: 'd MM, yy'
		});
	});

};


Template.events.events({

	'change .selectTeam': function(event) {
		Session.set('teamId', $('.selectTeam :selected').val());
		Session.set('teamName', $('.selectTeam :selected').text());
		console.log(Session.get('teamId'));
	},

	"submit .newEvent": function (event) {
		// This function is called when the new task form is submitted

		var eventName = event.target.eventName.value;
		var fromDate = event.target.fromDate.value;
		var fromTime = event.target.fromTime.value;
		var toDate = event.target.toDate.value;
		var toTime = event.target.toTime.value;

		Teams.update(Session.get('teamId'), {$push: {events: {
			eventName: eventName,
			fromDate: fromDate,
			fromTime: fromTime,
			toDate: toDate,
			toTime: toTime
		}
		}});

//			// Clear form
		event.target.eventName.value = "";
//			event.target.description.value = "";

		// Prevent default form submit
		return false;
	}

});