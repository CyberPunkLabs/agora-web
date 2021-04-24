// Formulario
var stringFormulario = "<form name='form' id='formulario'><br><label for='nombre'>Nombre</label><br><input type='text' id='nombre' name='nombre' class='popupInput' placeholder='Nombre o título' required/><br><label for='categoria'>Categoría</label><br><input list='flavors' class='popupInput' id='categoria' name='categoria' placeholder='Elige la categoría' required/><datalist id='flavors'><option value='Abarrotes'><option value='Distribuidoras'><option value='Hortaliceros'><option value='Almacenes'><option value='Farmacias'><option value='Panaderías'><option value='Ferreterías'><option value='Almacenes populares'><option value='Vestuario'><option value='Otro'></datalist><br><label for='direccion'>Dirección</label><br><input type='text' name='direccion' class='popupInput' id='direccion' placeholder='Dirección'><br><label for='telefono'>Teléfono</label><br><input type='text' name='telefono' class='popupInput' id='telefono' placeholder='Teléfono'><br><label for='aceptar'>¿Aceptas aparecer?</label><br><input list='aceptar' name='aceptar' class='popupInput' id='aceptar' placeholder='¿Aceptas aparecer?'/><datalist id='aceptar'><option value='Sí'><option value='No'></datalist><br><input type='submit' class='popupButtons' onclick='connect()' value='Guardar'><input type='button' class='popupButtons' onclick='deleteMarker()' value='Eliminar'></form>";


//<br><label for='direccion'>Dirección</label><br><input type='text' name='direccion' class='popupInput' id='direccion' placeholder='direccion'><br>


// Iconos  
var cruzIcon = L.icon({
    iconUrl: 'imagenes/cruz-roja.png',
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

var greyIcon = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-grey.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

var blackIcon = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-black.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

// Crea mapa
var mbAttr = 'Laboratorios Ciberpunk (<a href="../index.html">Visítanos aquí</a>)<br>' + 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' + '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' + 'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>', mbUrl = 'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw';


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

var streets  = L.tileLayer(mbUrl, {id: 'mapbox/streets-v11', tileSize: 512, zoomOffset: -1, attribution: mbAttr});

// CREA EL MAPA
var map = L.map('mapid', {
    center: [-35.03, -70.75],
    zoom: 8,
    layers: [streets,abarrotes,distribuidoras,hortalizas,almacenes,farmacias,panaderias,cultura,graneleros,otro]
});
//map.doubleClickZoom.disable();
map.locate({setView: true, maxZoom: 13});

function onLocationFound(e) {
    var radius = e.accuracy;
    
    L.marker(e.latlng).addTo(map).bindPopup("<b>Bienvenido</b><br>Al lado puedes seleccionar rubros y redes de interés<br><br>Haz doble click en el mapa para agregar un punto nuevo.").openPopup();
    
    L.circle(e.latlng, radius).addTo(map);
}
map.on('locationfound', onLocationFound);

function onLocationError(e) {
    console.log("location error")
    alert(e.message);
    //L.marker([-35.03, -70.75]).addTo(map)
    //    .bindPopup("<b>Bienvenido</b><br>Al lado puedes seleccionar rubros y redes de interés<br><br>Haz doble click en el mapa para agregar un punto nuevo.").openPopup();
    
    //L.circle([-35.03, -70.75], radius).addTo(map);
}      
map.on('locationerror', onLocationError);


var baseLayers = {
    "Rutas": streets
};

var overlays = {
    "Abarrotes y aseo": abarrotes,
    "Distribuidoras": distribuidoras,
    "<span style='color:#2AAD27'>Hortaliceros y huertas</span>": hortalizas,
    "Almacenes populares": almacenes,
    "<span style='color:#CB2B3E'>Farmacias</span>": farmacias,
    "Panaderías": panaderias,
    "Educación y cultura": cultura,
    "Camiones graneleros": graneleros,
    "Otro": otro    
};
L.control.layers(null, overlays).addTo(map);

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
	.bindPopup('<b>' + mymarkers[i].nombre + '</b><br>' + mymarkers[i].direccion + '<br>' + mymarkers[i].tel).addTo(categoria);
}

function onMapClick(e) {
    //marker = L.marker(e.latlng, {draggable: true}).addTo(mymap);
    marker = L.marker(e.latlng).addTo(map);	
    marker.bindPopup(stringFormulario, {closeButton: false, closeOnClick: false, keepInView: true}).openPopup();
    
    LAT = e.latlng.lat; //marker.getLatLng();
    LNG = e.latlng.lng; //marker.getLatLng();    
    console.log("lat: " + LAT)
    console.log("lng: " + LNG)

}
map.on('dblclick', onMapClick);
map.on('contextmenu', onMapClick);  

function deleteMarker() {
    map.removeLayer(marker);
      }

function connect() {
    var formulario = document.getElementById("formulario");
    
    formulario.addEventListener("submit", function(e) {
	e.preventDefault();
	console.log("Presionaste guardar") 
	
	var datos = new FormData(formulario);
	datos.append('lat', LAT);
	datos.append('lng', LNG);	

	console.log("nombre: " + datos.get('nombre'))
	console.log("categoria: " + datos.get('categoria'))
	console.log("direccion: " + datos.get('direccion'))
	console.log("telefono: " + datos.get('telefono'))
	console.log("latlng: " + datos.get('lat') + "," + datos.get('lng'))
	
	fetch('post.php', {
	    method: 'POST',
	    body: datos
	})
	map.closePopup();
    }) 
}

      
