var formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function(e) {
    e.preventDefault();
    
    console.log("Me diste click") 

    var datos = new FormData(formulario);
    datos.append('latlng', '-76.543,-33.654');
    console.log(datos.get('usuario'))
    console.log(datos.get('categoria'))
    console.log(datos.get('descripcion'))
    console.log(datos.get('latlng'))    

    fetch('post2.php', {
	method: 'POST',
	body: datos
    })
//	.then(res => res)
//	.then(data => {
//	    console.log(data)
//	})

    
}) 
