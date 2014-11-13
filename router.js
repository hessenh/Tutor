Router.map(function() {
	this.route('home', {path: '/'});
	this.route('home');
	this.route('signIn')
	this.route('profile')
});

Router.configure({
	layoutTemplate: 'layout'
});

