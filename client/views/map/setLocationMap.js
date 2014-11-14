Template.setLocationMap.events({
	'click .close':function(e,t){
		Session.set("show_map",false);
		$('.createMeetup').removeClass('blurClass');
	}
});


Template.setLocationMap.rendered = function() {  
	geocoder = new google.maps.Geocoder();
    var mapOptions = {
        zoom: 12,
        center: new google.maps.LatLng(-44.6895642,169.1320571),
        mapTypeId: google.maps.MapTypeId.HYBRID
    };

    map = new google.maps.Map(document.getElementById('map-canvas'),mapOptions);
    var location = {
		lat:-44.6895642,
		lng:169.1320571
	};
	var marker = new google.maps.Marker({
	        position: location,
	        map: map
	});

	google.maps.event.addListener(map, 'click', function(event) {
		marker.setMap(null);
	    marker = new google.maps.Marker({
	        position: event.latLng,
	        map: map
	    });
	    //map.setCenter(event.latLng);

	    geocoder.geocode( { 'latLng': event.latLng}, function(results, status) {
	        if (status == google.maps.GeocoderStatus.OK) {
	        	$('.meetupAddress').val(results[0].formatted_address);
	        	$('.setLocation').val(results[0].formatted_address);
	        	
	        	Session.set("lat",event.latLng.k);
	        	Session.set("lng",event.latLng.B);

	        } else {
	            alert("Can't find address. Pick new place!");
	        }
	    });
    });
	map.setCenter(location);
};