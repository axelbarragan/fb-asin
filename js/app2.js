$(document).ready(function(){	
	if($('#map-canvas').length != 0){
		var map;
		function initialize() {
			var mapOptions = {
				zoom: 8,
				scrollwheel: false,
			 	center: new google.maps.LatLng(-34.397, 150.644),
			 	styles: [
			 				{"stylers": [{ "hue": "#dd0d0d" }]},
    					{
					      "featureType": "road",
					      "elementType": "labels",
					      "stylers": [{"visibility": "off"}]
					    },
					    {
					      "featureType": "road",
					      "elementType": "geometry",
					      "stylers": [{"lightness": 100},
					            {"visibility": "simplified"}]
					    }
			 	]
			};
			map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
			var image = '_assets/images/map-marker.png';
			var myLatLng = new google.maps.LatLng(-34.397, 150.644);
			var beachMarker = new google.maps.Marker({
				position: myLatLng,
				map: map,
				icon: image
			 });
		}

		google.maps.event.addDomListener(window, 'load', initialize);
	}

	
	'use strict';