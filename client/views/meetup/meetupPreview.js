Template.meetupPreview.events({
	'click .viewMeetupBtn':function(e,t){
		Session.set("current_meetup",this._id);
		Router.go("viewMeetup");
	},
	'click .viewMeetupLogo':function(e,t){
		Session.set("current_meetup",this._id);
		Router.go("viewMeetup");
	}
});