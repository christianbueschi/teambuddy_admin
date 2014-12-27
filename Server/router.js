Router.map(function() {
	this.route('home', {path: '/'});
	this.route('teams');
	this.route('members');
	this.route('events');
})


Router.configure({
	layoutTemplate: 'appLayout'
});