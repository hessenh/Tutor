Template.viewLocationMap.rendered = function() {  
	var location = {
		lat:Session.get("lat"),
		lng:Session.get("lng")
	};
	geocoder = new google.maps.Geocoder();
    var mapOptions = {
        zoom: 12,
        center: new google.maps.LatLng(location),
        mapTypeId: google.maps.MapTypeId.HYBRID
    };

    map = new google.maps.Map(document.getElementById('map-canvas'),mapOptions);
    
	var marker = new google.maps.Marker({
	        position: location,
	        map: map
	});
	map.setCenter(location);
};