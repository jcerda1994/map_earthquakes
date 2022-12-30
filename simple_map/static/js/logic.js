// Add console.log to check to see if our code is working.
console.log("working");


// Create the map object with a center and zoom level.
let map = L.map('mapid').setView([40.7, -94.5], 4);


// We create the tile layer that will be the background of our map.
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// L.marker([51.5, -0.09]).addTo(map)
//     .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
//     .openPopup();
// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);

