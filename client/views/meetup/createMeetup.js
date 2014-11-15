Template.createMeetup.events({
	'click .submitMeetup':function(e,t){
		var title = t.find('.meetupTitle').value;
		var info = t.find('.meetupInfo').value;
		var date = t.find('.meetupDate').value;
		var time = t.find('.meetupTime').value;
		var location = t.find('.setLocation').value;
		var lat = Session.get("lat");
		var lng = Session.get("lng");

		Meteor.call('createMeetup',title,info,date,time,location,lat,lng,Meteor.user().profile.name,Meteor.user()._id);
		Router.go("home");
	},
	'click .setLocation':function(e,t){
		$('.createMeetup').addClass('blurClass');
		Session.set("show_map",true)
	},
	'click .cancelMeetup':function(e,t){
		Router.go("home");
	}
})

Template.createMeetup.showMap = function(){
	if(Session.get("show_map")==true){
		return true;
	}
	return false;
}