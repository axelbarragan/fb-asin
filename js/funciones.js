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
			database_id: 42
		},

		mouseover: function(e){
			if(console.log)
				console.log(e);
		}
	});

	$(".selector").hover(function(){
		var id=$(this).attr("id");
		$("."+id).show();
	},function() {
		var id=$(this).attr("id");
		$("."+id).hide();
	});

	var sourceSwap = function () {
		var $this = $(this);
		var newSource = $this.data('alt-src');
		$this.data('alt-src', $this.attr('src'));
		$this.attr('src', newSource);
	}

	$(function() {
		$('img[data-alt-src]').each(function() { 
			new Image().src = $(this).data('alt-src'); 
		}).hover(sourceSwap, sourceSwap); 
	});

});