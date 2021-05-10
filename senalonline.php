<!DOCTYPE HTML>
<html lang="es">

  <!-- HEAD -->
  <head>
    <title>Early jazz radio</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    
    <style>
      html, body {
	  background-color: black; /*#084B8A;*/
	  color: #66FF66;
	  text-shadow: 0 0 10px #33FF33;  
      }

      #audioButton {
	  background-color: transparent; 
	  border: none;
      }

      #audioButton a:visited{
	  text-decoration: none; 

      }
            
      .col1 {
	  float: left;
	  width: 70px;
	  margin-top: 6px;
      }
      
      .col2 {
	  float: left;
	  width: 200px
      }

      .col2 p {
	  margin-bottom: 1px;
      }
      
      .col3 {
	  width: 250px;
	  float: left;
      }

      .column-all {
	  margin-top: 15px;
	  width: 100%;
	  float: left;
      }

      .box {
	  padding-left: 10px;
	  border-left: 1px dashed;
      }

      .column-all a:link {
	  color: #66FF66;
	  text-shadow: 0 0 10px #33FF33;  	  
      }
      
      .column-all a:visited {
	  text-decoration: none;	  
	  color: #66FF66;
	  text-shadow: 0 0 10px #33FF33;  
      }
      
      .column-all a:hover {
	  text-decoration: none;	  
	  color: white;
	  text-shadow: 0 0 10px #33FF33;  	  
      }
      
      .column-all a:active {
	  text-decoration: none;
	  color: white;
	  text-shadow: 0 0 10px #33FF33;  
      }
      
    </style>
    
  </head>

  <!--    Body    -->
  <body>
    <!-- Early Jazz Player -->
    <section class="mysection">
      <p><b>The Early Jazz Radio [Señal online]</b><p>

	<!-- Script PHP -->
	<?php
	 $mypath = '/var/www/html/EJR/';
	 $files  = scandir($mypath);
	 $nfiles = count($files) - 2;
	 $file   = $files[rand(2,$nfiles)];
	 $item = explode("_", $file);
	 $displayname = $item[0]." ".$item[1];
	 ?>

	<!-- Fila principal -->
	<div class="row">
	  <!-- Columna 1 -->
	  <div class="col1">
	    <audio id="myAudio" autoplay="autoplay" onended="nextSong()">
	      <source src=<?php echo "EJR/".$file?> type="audio/mp3">
		Your browser does not support the audio element.
	    </audio>
	    <button onclick="playAudio()" type="button" id="audioButton"><img src="imagenes/play1.png" width="50" height="50" alt="Botón de play" /></button>
	  </div>

	  <!-- Columna 2 -->
	  <div class="col2">
	    <p id="estado"><b>Sonando</b></p>
	      <?php echo $displayname?>
	  </div>
	</div> <!-- Cierre fila principal -->
	  
	<!-- Columna institucion -->
	<div class="row">
	  <div class="column-all">
	    Cortesía: David W. Nieven<br>
	    Laboratorios Ciberpunk <a href="index.html">[Visítanos aquí]</a>
	  </div>
	</div>

    </section>    

    <!-- Javascript -->
    <script>
      var x = document.getElementById("myAudio");
      var audioButton = document.getElementById("audioButton")
      var estado = document.getElementById("estado")
      function playAudio() { 
	  x.play();
	  estado.innerHTML = "<b>Sonando</b>";
	  audioButton.innerHTML = "<img src='imagenes/pause1.png' width='50' height='50' alt='Botón de pausado' />";
	  audioButton.onclick = pauseAudio;
      } 
      
      function pauseAudio() { 
	  x.pause();
	  estado.innerHTML = "<b>Pausado</b>";	  
	  audioButton.innerHTML = "<img src='imagenes/play1.png' width='50' height='50' alt='Botón de play' />";
	  audioButton.onclick = playAudio;
      }
      
      function nextSong() {
          location.reload();
      }
      
      </script>
    
  </body>
</html>


