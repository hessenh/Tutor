Template.navigation.events({
	'click .signOut':function(e,t){
		Meteor.logout();
	}
})