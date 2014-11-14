Template.viewMeetup.currentMeetup = function(){
	return Meetup.findOne(Session.get("current_meetup"));
}