// <script src="http://code.jquery.com/jquery-1.10.1.min.js">
//</script>
//    <script src="https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false"></script>
//    <script>
function initialize() {
 

 //------the map avove that data below -----
 var yql_url = 'https://query.yahooapis.com/v1/public/yql';
var url = '54.186.110.31/viewReport';
$.ajax({
 'url': yql_url,
 'data': {
   'q': 'SELECT * FROM json WHERE url="'+url+'"',
   'format': 'json',
   'jsonCompat': 'new',
 },
 'dataType': 'jsonp',
 'success': function(response) {
   var rev = response.query.results.json.json;
   
   loadmap(rev);


 
 },
});
}
function loadmap(rev)
{
var myLatlng = new google.maps.LatLng(21.1458004, 79.0881546);
 var mapOptions = {
   zoom: 4,
   center: myLatlng
 }
 var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

 var marker = new google.maps.Marker({
     position: myLatlng,
     map: map,
     title: 'Hello World!'
 });

 //-------
 var markers = [];
 for (var i =0; i< rev.length;i++)
 {
   var latlng = new google.maps.LatLng(rev[i].latitude, rev[i].longitude);
   console.log(rev[i]);

   var marker2 = new google.maps.Marker({
                               
                               position: latlng,
                               map: map
                           
                           });

   google.maps.event.addListener(marker2, 'click', function() {
               
             //  console.log(marker.position);
               infowindow.open(map, marker);
             });

             markers.push(marker2);
 }
 var mcOptions = { gridSize: 50 };
          // var markerCluster = new MarkerClusterer(map, markers, mcOptions);

}
google.maps.event.addDomListener(window, 'load', initialize);

//    </script>
