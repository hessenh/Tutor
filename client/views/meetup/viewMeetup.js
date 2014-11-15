Template.viewMeetup.currentMeetup = function(){
	Session.set("lat",Meetup.findOne(Session.get("current_meetup")).lat);
	Session.set("lng",Meetup.findOne(Session.get("current_meetup")).lng);

	return Meetup.findOne(Session.get("current_meetup"));
}

Template.viewMeetup.viewMeetupParticipants = function(){
	return MeetupAttending.find({meetupId:Session.get("current_meetup")});
} 
Template.viewMeetup.isAttending = function(){
	if(MeetupAttending.findOne({meetupId:Session.get("current_meetup"),userId:Meteor.user()._id})!=undefined){
		return true;
	}
	return false;
}

Template.viewMeetup.events({
	'click .attendMeetup':function(e,t){
		Meteor.call('attendMeetup',Session.get("current_meetup"),Meteor.user()._id,Meteor.user().profile.name);
	},
	'click .notAttendMeetup':function(e,t){
		Meteor.call('notAttendMeetup',Session.get("current_meetup"),Meteor.user()._id,Meteor.user().profile.name);
	}
})