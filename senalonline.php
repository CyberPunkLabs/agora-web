<!DOCTYPE html >
<html>

<!-- HEAD -->
<head>
  <title>Early jazz radio - El Ágora</title>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />

  
<style>

#player
{
    background-color: transparent; /*#084B8A;*/
    /*background-image: url("../images/banner_test4.png") */
  width:400px;
  margin-left:3px;
  padding:1px;
  box-sizing:border-box;
}
      
  </style>
</head>


<!-- ########## -->
<!--    Body    -->
<body>

<!-- Early Jazz Player -->
<section> <!-- class="earlyjazzplayer"> -->

  <h1 style="font-size:16px;"><b>The Early Jazz Radio - Señal online</b></h1>

  <!-- Script PHP -->
  <?php
    $mypath = '/var/www/html/EJR/';
    $files  = scandir($mypath);
    $nfiles = count($files) - 2;
    $file   = $files[rand(2,$nfiles)];
    $name   = str_replace("_", " ", $file); 
    $name   = str_replace("Tape", "/ Tape", $name);
    $name   = str_replace(" 19", " / 19", $name);
    $displayname = substr($name,0,-11);
    $search = preg_replace("#(/ .*? /)#", "(circa ", $displayname);
    $search = $search.")";
  ?>

  
  <!-- El player -->
  <div id="wrapper">
  <div id='player'>

  <audio id="audioPlayer" controls autoplay="autoplay">
    <source src=<?php echo "EJR/".$file?> type="audio/mp3">

    Your browser does not support the audio element.
  </audio>

  </div>
  </div>
    
   <p><b>Artista:</b><br>
    <?php echo $displayname?><br>
    <a href="" style="text-decoration:none;" onclick="nextSong()">-> Siguiente</a><p>
</section>


</body>
</html>

