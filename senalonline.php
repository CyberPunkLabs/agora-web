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
      
      
      .col-25 {
	  float: left;
	  width: 70px;
	  margin-top: 6px;
      }
      
      .col-75 {
	  float: left;
	  margin-left: 10px;
      }

      .column-all {
	  width: 100%;
	  float: left;
	  margin-left: 2px;
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

	<!-- El player -->
	<div class="row">
	  <div class="col-25">
	    <audio id="myAudio">
	      <source src=<?php echo "EJR/".$file?> type="audio/mp3">
		Your browser does not support the audio element.
	    </audio>
	    <button onclick="playAudio()" type="button" id="audioButton"><img src="images/play1.png" width="50" height="50"/></button>
	  </div>
	  
	  <div class="col-75">
	    <p><b>Sonando</b><br>
	      <?php echo $displayname?></p> 
	  </div>
	</div>
	      
    	<div class="row">
	  <div class="column-all">
	    <p>Laboratorios Ciberpunk<br>
	    Contáctanos en el inframundo</p>
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


  <!--
<style>

  html, body {
    background-color: black; /*#084B8A;*/
    color: #66FF66;
    text-shadow: 0 0 10px #33FF33;  
  }

/*
  .main-section li a {
    background-color: black; /*#084B8A;*/
    color: #66FF66;
    text-shadow: 0 0 10px #33FF33;  
  }

  .main-section li a:visited {
    background-color: black; /*#084B8A;*/
    color: #66FF66;
    text-shadow: 0 0 10px #33FF33;  
  }
  
  
  #player {
      background-color: black; /*#084B8A;*/
      color: #66FF66;
      text-shadow: 0 0 10px #33FF33;  
      
      /*background-image: url("../images/banner_test4.png") */
      width:400px;
      margin-left:3px;
      padding:1px;
      box-sizing:border-box;
  }

  
</style> -->
