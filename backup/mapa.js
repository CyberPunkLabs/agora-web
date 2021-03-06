// MAPA
function elmapa() {
    mymap = L.map('mapid').setView([-36.827089, -73.050241], 15, {draggable: false});
    mymap.doubleClickZoom.disable();    

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
	attribution:
	'&copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors' +
	    ', Tiles courtesy of <a href="https://geo6.be/">GEO-6</a>',
	maxZoom: 18
    }).addTo(mymap);

    marker = L.marker([-36.82699, -73.04977], {draggable: true}).addTo(mymap);
    marker.bindPopup("<p><b>Bienvenida/o a la Plaza Caupolicán</b><br>Haz <b>doble click</b> en los lugares del mapa donde veas una oportunidad para mejorar tu barrio. <br><br>¡No olvides guardar la info presionando <q>Guardar</q>!</p>").openPopup();

    function onMapClick(e) {
	//marker = L.marker(e.latlng, {draggable: true}).addTo(mymap);
	marker = L.marker(e.latlng).addTo(mymap);	
	marker.bindPopup("<form name='form' id='formulario'><br><label for='titulo'>Nombre</label><br><input type='text' id='titulo' name='titulo' class='popupInput' placeholder='Ej Parque, biblioteca, centro cultural, etc' required/><br><label for='choice'>Eje programático</label><br><input list='flavors' class='popupInput' id='choice' name='categoria' placeholder='Asigna a un eje programático' required/><datalist id='flavors'><option value='Democracia y Ciudadanía'><option value='Ecología y Protección ambiental'><option value='Educación'><option value='Salud'><option value='Justicia social y Solidaridad'><option value='Economía local y creativa'><option value='Economía sustentable y a escala humana'><option value='Cultura'><option value='Otro'></datalist><br><label for='titulo'>Descripción</label><br><input type='text' name='descripcion' class='popupInput' id='descripcion' placeholder='¡Expláyate!' required><br><label for='Participar'>¿Quieres participar?</label><br><input list='participar' name='participar' class='popupInput' id='participar2' placeholder='¿Te gustaría que te contactáramos?'/><datalist id='participar'><option value='Sí'><option value='No'></datalist><br><input type='submit' class='popupButtons' onclick='connect()' value='Guardar'><input type='button' class='popupButtons' onclick='deleteMarker()' value='Eliminar'></form>", {closeButton: false, closeOnClick: false, keepInView: true}).openPopup();

	LATLNG = e.latlng.toString(); //marker.getLatLng();
	console.log("latlng: " + LATLNG)
	console.log("type latlng: " + typeof LATLNG)	
    }
    
    mymap.on('dblclick', onMapClick);  
}

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

elmapa();
