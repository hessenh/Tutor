Template.createMeetup.events({
	'click .submitMeetup':function(e,t){
		var title = t.find('.meetupTitle').value;
		var info = t.find('.meetupInfo').value;
		var date = t.find('.meetupDate').value;
		var time = t.find('.meetupTime').value;
		var location = t.find('.meetupLoc').value;

		Meteor.call('createMeetup',title,info,date,time,location);


	},
	'click .setLocation':function(e,t){
		//$('.setLocationMap').addClass('show');
		$('.createMeetup').addClass('blurClass');
		Session.set("show_map",true)
	}
})

Template.createMeetup.showMap = function(){
	if(Session.get("show_map")==true){
		return true;
	}
	return false;
}