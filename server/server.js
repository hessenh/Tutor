Meetup = new Meteor.Collection("meetup");
MeetupAttending = new Meteor.Collection("meetupAttending");

Meteor.publish('meetup',function(){
	return Meetup.find({});
})
Meteor.publish('meetupAttending',function(){
	return MeetupAttending.find({});
})

Meteor.methods({
	'createMeetup':function(title,info,date,time,location,lat,lng,username,userId){
		Meetup.insert({title:title,info:info,date:date,time:time,location:location,lat:lat,lng:lng,username:username,userId:userId});
	},
	'attendMeetup':function(meetupId,userId,userName){
		MeetupAttending.insert({meetupId:meetupId,userId:userId,userName:userName})
	},
	'notAttendMeetup':function(meetupId,userId,userName){
		MeetupAttending.remove({meetupId:meetupId,userId:userId,userName:userName})
	}

	
})
