let center = [41, 69];
let placemark;

function init() {
  let map = new ymaps.Map('map-test', {
    center: center,
    zoom: 17
  });

  placemark = new ymaps.Placemark(center, {}, {
    preset: 'islands#blueDotIcon', // Default Yandex Maps icon
  });

  map.controls.remove('geolocationControl');
  map.controls.remove('searchControl');
  map.controls.remove('trafficControl');
  map.controls.remove('typeSelector');
  map.controls.remove('fullscreenControl');
  map.controls.remove('zoomControl');
  map.controls.remove('rulerControl');

  map.geoObjects.add(placemark);

  // Event listener for the "Get Location" button
  document.getElementById('getLocationButton').addEventListener('click', function() {
    // Check if geolocation is supported by the browser
    if ("geolocation" in navigator) {
      // Prompt user for permission to access their location
      navigator.geolocation.getCurrentPosition(
        function(position) {
          const lat = position.coords.latitude;
          const lng = position.coords.longitude;
          const userLocation = [lat, lng];

          // Update the map with the user's location
          map.setCenter(userLocation);
          placemark.geometry.setCoordinates(userLocation);

          // Reverse geocode to get the address
          ymaps.geocode(userLocation).then(function(res) {
            const firstGeoObject = res.geoObjects.get(0);
            const address = firstGeoObject.getAddressLine();

            // Display the address on the page
            document.getElementById('address').textContent = address;
          });
        },
        function(error) {
          console.error("Error getting user location:", error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  });
}

// Wait for the Yandex Maps API script to load
window.onload = function() {
  ymaps.ready(init);
};


// Render table

// Rendering table 
const formData = JSON.parse(localStorage.getItem('formData'));
let workStatus = 'primary'
let Orders = formData

Orders.forEach(order => {
    const tr = document.createElement('tr');
    const trContent = `
        <td>${order.workType}</td>
        <td>${order.taskType}</td>
        <td>${order.address}</td>
        <td>${order.phoneNumber}</td>
        <td class="${ workStatus === 'Declined' ? 'danger' : workStatus === 'Pending' ? 'warning' : 'primary'}"> ${workStatus} </td>
        <td class="primary">Details</td>
    `;
    tr.innerHTML = trContent;
    document.querySelector('table tbody').appendChild(tr);
});