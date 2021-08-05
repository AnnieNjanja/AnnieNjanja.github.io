mapboxgl.accessToken = 'pk.eyJ1IjoiYW5uaWVrbiIsImEiOiJja3J3eG9iOXIwa3V1MnZzM3dwdjlwc3plIn0.ZNObNI-TmxPO4oMCipBJVg';
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/anniekn/ckrwxdfqp1jtv17nwbk35mwqk',
    zoom: 6.5,
    center: [-79, 41],
    maxZoom: 10,
    minZoom: 6.5,
    maxBounds: [
        [-86, 34],
        [-52, 48]]
   
});
map.on('load', function () {
  map.addLayer({
      'id': 'Coal',
      'type': 'circle',
      'source': {
          'type': 'geojson',
          'data': 'data/Coal.geojson'
      },
      'paint': {
          'circle-color': '#ff7f50',
          'circle-stroke-color': '#4d4d4d',
          'circle-stroke-width': 0.5,
          'circle-radius': 5
      }
  });
});
// Create the popup
map.on('click', 'Coal', function (e) {
    var CLIENTNAME = e.features[0].properties.CLIENT_NAME;
    var SUBFACILITYSTATUS = e.features[0].properties.SUB_FACILITY_STATUS;
    new mapboxgl.Popup()
        .setLngLat(e.lngLat)
        .setHTML(CLIENTNAME  +  '<br>' + SUBFACILITYSTATUS)
        .addTo(map);
});
// Change the cursor to a pointer when the mouse is over the turnstileData layer.
map.on('mouseenter', 'Coal', function () {
    map.getCanvas().style.cursor = 'pointer';
});
// Change it back to a pointer when it leaves.
map.on('mouseleave', 'Coal', function () {
    map.getCanvas().style.cursor = '';
});
