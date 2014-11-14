Meetup = new Meteor.Collection("meetup");

Meteor.publish('meetup',function(){
	return Meetup.find({});
})

Meteor.methods({
	'createMeetup':function(title,info,date,time,location,lat,lng,username,userId){
		Meetup.insert({title:title,info:info,date:date,time:time,location:location,lat:lat,lng:lng,username:username,userId:userId});
	}
	
})
