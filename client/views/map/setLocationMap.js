Template.setLocationMap.events({
	'click .close':function(e,t){
		Session.set("show_map",false);
		$('.createMeetup').removeClass('blurClass');
	},
	'click .gm-style':function(e,t){
		console.log(e);
	}
});


Template.setLocationMap.rendered = function() {  
	
	var p2 = Session.get('location');
	map.setCenter(new google.maps.LatLng(p2.lat, p2.lng));

	var marker = new google.maps.Marker({
		position: new google.maps.LatLng(p2.lat, p2.lng),
		title:'Meine Position',
		icon:'http://maps.google.com/mapfiles/ms/icons/blue-dot.png'
	});
	marker.setMap(map);   

	Session.set('map', true);
};

Meteor.startup(function() {
	var mapOptions = {
		zoom: 12,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	};
	map = new google.maps.Map(document.getElementById("map-canvas"),mapOptions);  
	var location = {
		lat : -34.397,
		lng : 150.644
	};
	Session.set("location",location);
	console.log(Session.get("location"))
});