Template.meetups.meetupList = function(){
	return Meetup.find({});
}

Template.meetups.events({
	'click .viewMeetupBtn':function(e,t){
		Session.set("current_meetup",this._id);
		Router.go("viewMeetup");
	}
});