function initMap() {
  if (document.getElementById('map')) {
    // Google Maps Scripts
    let map = null
    // When the window has finished loading create our google map below
    google.maps.event.addDomListener(window, 'load', initMap)
    google.maps.event.addDomListener(window, 'resize', function() {
      map.setCenter(new google.maps.LatLng(33.9501295, -84.5442008))
    })

    function initMap() {
      console.log('google maps init')
      // Basic options for a simple Google Map
      // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
      const mapOptions = {
        // How zoomed in you want the map to start at (always required)
        zoom: 15,

        // The latitude and longitude to center the map (always required)
        center: new google.maps.LatLng(33.9501295, -84.5442008), // EDPLANNERS ADDRESS

        // Disables the default Google Maps UI components
        // disableDefaultUI: true,
        scrollwheel: false,
        draggable: false,

        // How you would like to style the map.
        // This is where you would paste any style found on Snazzy Maps.
        styles: [
          {
            featureType: 'administrative',
            elementType: 'labels.text.fill',
            stylers: [{ color: '#444444' }],
          },
          {
            featureType: 'landscape',
            elementType: 'all',
            stylers: [{ color: '#f2f2f2' }],
          },
          {
            featureType: 'poi',
            elementType: 'all',
            stylers: [{ visibility: 'off' }],
          },
          {
            featureType: 'road',
            elementType: 'all',
            stylers: [{ saturation: -100 }, { lightness: 45 }],
          },
          {
            featureType: 'road.highway',
            elementType: 'all',
            stylers: [{ visibility: 'simplified' }],
          },
          {
            featureType: 'road.arterial',
            elementType: 'labels.icon',
            stylers: [{ visibility: 'off' }],
          },
          {
            featureType: 'transit',
            elementType: 'all',
            stylers: [{ visibility: 'off' }],
          },
          {
            featureType: 'water',
            elementType: 'all',
            stylers: [{ color: '#46bcec' }, { visibility: 'on' }],
          },
        ],
      }

      // Get the HTML DOM element that will contain your map
      // We are using a div with id="map" seen below in the <body>
      const mapElement = document.getElementById('map')

      // Create the Google Map using out element and options defined above
      map = new google.maps.Map(mapElement, mapOptions)

      // Custom Map Marker Icon - Customize the map-marker.png file to customize your icon
      // var image = 'img/map-marker.png';
      const myLatLng = new google.maps.LatLng(33.9501295, -84.5442008)
      const beachMarker = new google.maps.Marker({
        position: myLatLng,
        map,
        // icon: image
      })
    }

    // function initMap() {
    //   var mapDiv = document.getElementById('map')
    //   var map = new google.maps.Map(mapDiv, {
    //     center: { lat: 33.9501295, lng: -84.5442008 },
    //     zoom: 15,
    //   })
    // }
  }
}

export default initMap
