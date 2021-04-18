// Crea iconos  
var cruzIcon = L.icon({
    iconUrl: 'assets/imagenes/cruz-roja.png',
    iconSize:     [30, 30], // size of the icon
    iconAnchor:   [19, 0], // point of the icon which will correspond to marker's location
    popupAnchor:  [0, -10] // point from which the popup should open relative to the iconAnchor
});

var lechugaIcon = L.icon({
    iconUrl: 'assets/imagenes/lechuga.png',
    iconSize:     [30, 40], // size of the icon
    iconAnchor:   [19, 0], // point of the icon which will correspond to marker's location
    popupAnchor:  [0, -10] // point from which the popup should open relative to the iconAnchor
});

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

var goldIcon = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-gold.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

var orangeIcon = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-orange.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

var yellowIcon = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-yellow.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

var violetIcon = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-violet.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});


// Crea layers
var almacenes = L.layerGroup();
var abarrotes = L.layerGroup();
var distribuidoras = L.layerGroup();
var hortalizas = L.layerGroup();
var farmacias = L.layerGroup();
var panaderias = L.layerGroup();
var cultura = L.layerGroup();
var graneleros = L.layerGroup();
var otro = L.layerGroup();


//// BASE DATOS
// Nn
//L.marker([-33.3920816,-70.6139342], {icon: lechugaIcon}).bindPopup('<b>NN</b><br>Del Valle<br>tel: NN').addTo(hortaliceres);
// Nn
//L.marker([-33.1881735132313,-70.6607013372956], {icon: cruzIcon}).bindPopup('<b>NN</b><br>Abate Juan Ignacio Molina 2010<br>tel: NN').addTo(farmacias);


var mbAttr = 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
    '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
    'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    mbUrl = 'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw';


var streets  = L.tileLayer(mbUrl, {id: 'mapbox/streets-v11', tileSize: 512, zoomOffset: -1, attribution: mbAttr});



// CREA EL MAPA
var map = L.map('mapid', {
    center: [-35.03, -70.75],
    zoom: 6,
    layers: [streets,abarrotes,distribuidoras,hortalizas,almacenes,farmacias,panaderias,cultura,graneleros,otro]
});

var baseLayers = {
    "Rutas": streets
};

var overlays = {
    "Abarrotes y aseo": abarrotes,
    "Distribuidoras": distribuidoras,
    "Hortaliceros y huertas": hortalizas,
    "Almacenes populares": almacenes,
    "Farmacias": farmacias,
    "Panaderías": panaderias,
    "Educación y cultura": cultura,
    "Camiones graneleros": graneleros,
    "Otro": otro    
};

L.control.layers(baseLayers, overlays).addTo(map);

map.locate({setView: true, maxZoom: 10});
      
function onLocationFound(e) {
    var radius = e.accuracy;
    
    L.marker(e.latlng).addTo(map)
        .bindPopup("<b>Bienvenido</b><br>Al lado puedes seleccionar rubros y redes de interés<br><br>Haz doble click en el mapa para agregar un punto nuevo.").openPopup();
    
    L.circle(e.latlng, radius).addTo(map);
}

map.on('locationfound', onLocationFound);


function onLocationError(e) {
    console.log("pass")
	  //alert(e.message);
    //L.marker([-35.03, -70.75]).addTo(map)
    //    .bindPopup("<b>Bienvenido</b><br>Al lado puedes seleccionar rubros y redes de interés<br><br>Haz doble click en el mapa para agregar un punto nuevo.").openPopup();
    
    //L.circle([-35.03, -70.75], radius).addTo(map);
}
      
map.on('locationerror', onLocationError);


for (var i=0; i < mymarkers.length; ++i) {
    
    switch(mymarkers[i].categoria) {
    case "cruzIcon":
	thisIcon = redIcon;
	categoria = farmacias;
	break;
    case "lechugaIcon":
	thisIcon = greenIcon;
	categoria = hortalizas;
	break;
    case "otro":
	thisIcon = blueIcon;
	categoria = otro;
	break;
    case "abarrotes":
	thisIcon = yellowIcon;
	categoria = hortalizas;
	break;
    case "distribuidoras":
	thisIcon = orangeIcon;
	categoria = distribuidoras;
	break;
    case "panaderias":
	thisIcon = violetIcon;
	categoria = panaderias;
	break;
 //   default:
//	thisIcon = blueIcon;
//	categoria = otro;
//	break
	  } 
    
    L.marker([mymarkers[i].lat, mymarkers[i].lng], {icon: thisIcon})
	.bindPopup('<b>' + mymarkers[i].nombre + '</b><br>' + mymarkers[i].direccion + '<br>' + mymarkers[i].tel)
	.addTo(categoria);
}

function onMapClick(e) {
    //marker = L.marker(e.latlng, {draggable: true}).addTo(mymap);
    marker = L.marker(e.latlng).addTo(map);	
    marker.bindPopup("<form name='form' id='formulario'><br><label for='titulo'>Nombre</label><br><input type='text' id='titulo' name='titulo' class='popupInput' placeholder='Ej Parque, biblioteca, centro cultural, etc' required/><br><label for='choice'>Eje programático</label><br><input list='flavors' class='popupInput' id='choice' name='categoria' placeholder='Asigna a un eje programático' required/><datalist id='flavors'><option value='Democracia y Ciudadanía'><option value='Ecología y Protección ambiental'><option value='Educación'><option value='Salud'><option value='Justicia social y Solidaridad'><option value='Economía local y creativa'><option value='Economía sustentable y a escala humana'><option value='Cultura'><option value='Otro'></datalist><br><label for='titulo'>Descripción</label><br><input type='text' name='descripcion' class='popupInput' id='descripcion' placeholder='¡Expláyate!' required><br><label for='Participar'>¿Quieres participar?</label><br><input list='participar' name='participar' class='popupInput' id='participar2' placeholder='¿Te gustaría que te contactáramos?'/><datalist id='participar'><option value='Sí'><option value='No'></datalist><br><input type='submit' class='popupButtons' onclick='connect()' value='Guardar'><input type='button' class='popupButtons' onclick='deleteMarker()' value='Eliminar'></form>", {closeButton: false, closeOnClick: false, keepInView: true});
    
    LATLNG = e.latlng.toString(); //marker.getLatLng();
    console.log("latlng: " + LATLNG)
    console.log("type latlng: " + typeof LATLNG)	
}

map.on('dblclick', onMapClick);  

function deleteMarker() {
    map.removeLayer(marker);
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

      
