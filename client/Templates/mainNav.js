Template.mainNav.events({
	'click .navItem': function(event, thisArg) {
		$('.nav li').removeClass('active');
		$(event.target).parent().addClass('active');
	}
});