var map;
var infowindow;

var directionsDisplay;
var directionsService = new google.maps.DirectionsService();

var start;
var end;
var mode;
var transit_flag=false;
	
function initialize() {
  var mapOptions = {
    center: new google.maps.LatLng(-37.8136, 144.9631),
    zoom: 12
  };
  map = new google.maps.Map(document.getElementById('map-canvas'),
    mapOptions);
}

google.maps.event.addDomListener(window, 'load', initialize);