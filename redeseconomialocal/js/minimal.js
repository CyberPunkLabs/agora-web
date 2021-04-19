

var mbAttr = 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' + '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' + 'Imagery © <a href="https://www.mapbox.com/">Mapbox</a> ' + 'CITAR MARCADORES !!',
    mbUrl = 'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw';



// CREA EL MAPA
// mymap = L.map('mapid').setView([-36.827089, -73.050241], 15, {draggable: false});
var mymap = L.map('mapid', {
    center: [-36.827089, -73.050241],
    zoom: 15
});
mymap.doubleClickZoom.disable();    

// Marcador inicial
marker = L.marker([-36.82699, -73.04977], {draggable: true}).addTo(mymap);
marker.bindPopup("<p><b>Bienvenida/o a la Plaza Caupolicán</b><br>Haz <b>doble click</b> en los lugares del mapa donde veas una oportunidad para mejorar tu barrio. <br><br>¡No olvides guardar la info presionando <q>Guardar</q>!</p>"); //.openPopup();

