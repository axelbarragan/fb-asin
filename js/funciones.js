$(document).ready(function() {
	var map;
	
	map = new GMaps({
		el: '#map',
		lat: 19.613514355658953,
		lng: -98.93547890000002
	});
	map.addMarker({
		lat: 19.613514355658953,
		lng: -98.93547890000002,
		title: 'Asesoria Integral',
		details: {
			database_id: 42,
			author: 'E&T'
		},

		mouseover: function(e){
			if(console.log)
				console.log(e);
		}
	});

});