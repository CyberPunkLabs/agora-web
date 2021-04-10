function connect() {
    // var latlng = document.getElementById("paragraph").innerHTML; 
    var formulario = document.getElementById("formulario");
    
    formulario.addEventListener("submit", function(e) {

	//LATLNG = document.getElementById("paragraph").innerHTML;
	NMARKERS++;
	e.preventDefault();
	
	console.log("Me diste click") 

	var datos = new FormData(formulario);
	datos.append('rut', RUT)
	datos.append('latlng', LATLNG);
	//datos.append('participar', "Noo!!!");	
	console.log("latlng inside: " + LATLNG)
	
	fetch('post2.php', {
	    method: 'POST',
	    body: datos
	})
    }) 
}

function connect2() {
    var datos2 = new FormData();

    datos2.append('rut', RUT);
    datos2.append('nombre', NOMBRE);
    datos2.append('correo', CORREO);    
    datos2.append('respuestas_trivia', RESPUESTAS_TRIVIA);
    datos2.append('puntaje_trivia', PUNTAJE_TRIVIA);    
    datos2.append('nmarkers', NMARKERS);        

    console.log(datos2.get('puntaje_trivia'))    

    fetch('post.php', {
	method: 'POST',
	body: datos2
    })
}
