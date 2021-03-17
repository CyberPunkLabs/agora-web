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

      .col3 {
	  width: 250px;
	  float: left;
      }

      .column-all {
	  width: 100%;
	  float: left;
      }


      .box {
	  padding-left: 10px;
	  border-left: 1px dashed;
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
	    <audio id="myAudio">
	      <source src=<?php echo "EJR/".$file?> type="audio/mp3">
		Your browser does not support the audio element.
	    </audio>
	    <button onclick="playAudio()" type="button" id="audioButton"><img src="images/play1.png" width="50" height="50"/></button>
	  </div>

	  <!-- Columna 2 -->
	  <div class="col2">
	    <p><b>Sonando</b><br>
	      <?php echo $displayname?></p> 
	  </div>

	  <!-- Columna 3 -->
	  <div class="col3">
	    <div class="box">
	      <p>Anuncios<br>
		Los laboratorios Ciberpunk haran un curso de seguridad digital doméstica. Contáctanos.</p>
	    </div>
	  </div> <!-- Cierre columna 3 -->
	</div> <!-- Cierre fila principal -->

	<!-- Columna institucion -->
	<div class="row">
	  <div class="column-all">
	    Laboratorios Ciberpunk
	  </div>
	</div>

    </section>    


    
    <script>
      var x = document.getElementById("myAudio");
      var audioButton = document.getElementById("audioButton")
      function playAudio() { 
	  x.play();
	  audioButton.innerHTML = "<img src='images/pause1.png' width='50' height='50'/>";
	  audioButton.onclick = pauseAudio;
      } 
      
      function pauseAudio() { 
	  x.pause(); 
	  audioButton.innerHTML = "<img src='images/play1.png' width='50' height='50'/>";
	  audioButton.onclick = playAudio;
      } 
    </script>

  </body>
</html>


