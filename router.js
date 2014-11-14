Router.map(function() {
	this.route('home', {path: '/'});
	this.route('home');
	this.route('signIn')
	this.route('profile')
	this.route('createMeetup')
	this.route('meetups');
	this.route('viewMeetup');

});

Router.configure({
	layoutTemplate: 'layout'
});

