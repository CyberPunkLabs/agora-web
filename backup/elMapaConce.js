// MAPA
var greenIcon = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

var blueIcon = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

var redIcon = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});


// Crea layers
var hortaliceres = L.layerGroup();
var farmacias = L.layerGroup();



var mbAttr = 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
    '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
    'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    mbUrl = 'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw';


var streets  = L.tileLayer(mbUrl, {id: 'mapbox/streets-v11', tileSize: 512, zoomOffset: -1, attribution: mbAttr});

// CREA EL MAPA
var mymap = L.map('mapid', {
    center: [-36.827089, -73.050241],
    zoom: 13,
    layers: [streets, hortaliceres, farmacias]
});
mymap.doubleClickZoom.disable();    

//    mymap = L.map('mapid').setView([-36.827089, -73.050241], 15, {draggable: false});

//    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
//	attribution:
//	'&copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors' +
//	    ', Tiles courtesy of <a href="https://geo6.be/">GEO-6</a>',
//	maxZoom: 18
//    }).addTo(mymap);

//marker = L.marker([-36.82699, -73.04977], {draggable: true}).addTo(mymap);
//marker.bindPopup("<p><b>Bienvenida/o a la Plaza Caupolicán</b><br>Haz <b>doble click</b> en los lugares del mapa donde veas una oportunidad para mejorar tu barrio. <br><br>¡No olvides guardar la info presionando <q>Guardar</q>!</p>").openPopup();

var baseLayers = {
    "Streets": streets
};

var overlays = {
    "Hortalizas": hortaliceres,
    "Farmacias": farmacias
};

L.control.layers(baseLayers, overlays).addTo(mymap);

for (var i=0; i < markers.length; ++i) {
    
    switch(markers[i].categoria) {
    case "Otro":
	console.log(markers[i].categoria)
	thisIcon = redIcon;
	categoria = farmacias;
	break;
    case "Cultura":
	console.log(markers[i].categoria)	    
	thisIcon = greenIcon;
	categoria = hortaliceres;
	break;
    default:
	console.log(markers[i].categoria)	    
	thisIcon = blueIcon;
	categoria = hortaliceres;
    } 
    
    L.marker([markers[i].lat, markers[i].lng], {icon: thisIcon})
	.bindPopup('<b>' + markers[i].titulo + '</b><br>' + markers[i].categoria + '<br><br>' + markers[i].descripcion)
	.addTo(categoria);
}   
    
function onMapClick(e) {
    //marker = L.marker(e.latlng, {draggable: true}).addTo(mymap);
    marker = L.marker(e.latlng).addTo(mymap);	
    marker.bindPopup("<form name='form' id='formulario'><br><label for='titulo'>Nombre</label><br><input type='text' id='titulo' name='titulo' class='popupInput' placeholder='Ej Parque, biblioteca, centro cultural, etc' required/><br><label for='choice'>Eje programático</label><br><input list='flavors' class='popupInput' id='choice' name='categoria' placeholder='Asigna a un eje programático' required/><datalist id='flavors'><option value='Democracia y Ciudadanía'><option value='Ecología y Protección ambiental'><option value='Educación'><option value='Salud'><option value='Justicia social y Solidaridad'><option value='Economía local y creativa'><option value='Economía sustentable y a escala humana'><option value='Cultura'><option value='Otro'></datalist><br><label for='titulo'>Descripción</label><br><input type='text' name='descripcion' class='popupInput' id='descripcion' placeholder='¡Expláyate!' required><br><label for='Participar'>¿Quieres participar?</label><br><input list='participar' name='participar' class='popupInput' id='participar2' placeholder='¿Te gustaría que te contactáramos?'/><datalist id='participar'><option value='Sí'><option value='No'></datalist><br><input type='submit' class='popupButtons' value='Guardar'><input type='button' class='popupButtons' onclick='deleteMarker()' value='Eliminar'></form>", {closeButton: false, closeOnClick: false, keepInView: true}).openPopup();
    
    LATLNG = e.latlng.toString(); //marker.getLatLng();
    console.log("latlng: " + LATLNG)
    console.log("type latlng: " + typeof LATLNG)	
}

mymap.on('dblclick', onMapClick);  


function deleteMarker() {
    mymap.removeLayer(marker);
}

function connect() {
    var formulario = document.getElementById("formulario");
    
    formulario.addEventListener("submit", function(e) {
	NMARKERS = NMARKERS + 2;
	e.preventDefault();
	console.log("Me diste click") 
	
	var datos = new FormData(formulario);
	datos.append('nombre', NOMBRE)
	datos.append('latlng', LATLNG);
	console.log("latlng inside: " + LATLNG)
	
	fetch('post2.php', {
	    method: 'POST',
	    body: datos
	})

	mymap.closePopup();
    }) 
}

