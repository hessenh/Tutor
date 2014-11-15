Meetup = new Meteor.Collection("meetup");
MeetupAttending = new Meteor.Collection("meetupAttending");

Meteor.subscribe('meetup');
Meteor.subscribe('meetupAttending');



