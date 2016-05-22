if ($('.map').length) { //If we are on the contact page
	//Setting variables

	//Center location of map
	var mapCenter = new google.maps.LatLng(40.014986,-105.270546);
	var mapZoom = 10;
	var zoomMax = 21;
	var zoomMin = 8;

	var mapStyles = 

[
    {
        "featureType": "all",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#aab5bc"
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "gamma": 0.01
            },
            {
                "lightness": 20
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "saturation": -31
            },
            {
                "lightness": -33
            },
            {
                "weight": 2
            },
            {
                "gamma": 0.8
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "geometry",
        "stylers": [
            {
                "lightness": 30
            },
            {
                "saturation": 30
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
            {
                "saturation": 20
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "geometry",
        "stylers": [
            {
                "lightness": 20
            },
            {
                "saturation": -20
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [
            {
                "lightness": 10
            },
            {
                "saturation": -30
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "saturation": 25
            },
            {
                "lightness": 25
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
            {
                "lightness": -20
            }
        ]
    }
];

	var mapStyle = new google.maps.StyledMapType(mapStyles, {name: "Custom Google Map"});

	//JSON data settings to customize the map
	var mapOptions = { 
			  center: mapCenter, 
	          zoom: mapZoom, 
	          mapTypeId: google.maps.MapTypeId.ROADMAP,
			  maxZoom:zoomMax,
			  minZoom:zoomMin,
			  //Disabling map controls
			  panControl: false,
			  mapTypeControl: false,
			  mapTypeControlOptions: {
	     		mapTypeIds: [ 'map_style']
	   		 }
	};

	//This is an empty variable called map that will ultimately contain the map
	var map;

	//calls the loadMap function
	google.maps.event.addDomListener(window, 'load', loadMap);

	//Function that loads the map markers.
	function markers(){

		var markerPos = new google.maps.LatLng(40.014986,-105.270546);

		markerIcon = new google.maps.Marker({
			  position: markerPos,
		      map: map,
		      title: 'Special Title',
		});
	}



	//This function is the callback for the map and its markers
	function loadMap() {
		map = new google.maps.Map(document.getElementById("map"), mapOptions);	
		markers();
		map.mapTypes.set('map_style', mapStyle);
		map.setMapTypeId('map_style');
	}

}