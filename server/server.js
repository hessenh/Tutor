Meetup = new Meteor.Collection("meetup");

Meteor.publish('meetup',function(){
	return Meetup.find({});
})

Meteor.methods({
	'createMeetup':function(title,info,date,time,location){
		console.log(title,info,date,time,location);
	}
	
})
