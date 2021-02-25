<!DOCTYPE html >
<html>

<!-- HEAD -->
<head>
  <title>Early jazz radio - El Ágora</title>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
    <!-- <meta http-equiv="refresh" content="900" > 
  <link rel="stylesheet" href="css/main.css" /> -->

  
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
<section> <!-- class="earlyjazzplayer"> 
  <figure id="mainPlayer" class="mainPlayer"> -->

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
    <!-- <a href="" style="text-decoration:none;" onclick=""><- Anterior | </a> -->
    <a href="" style="text-decoration:none;" onclick="nextSong()">-> Siguiente</a><p>
</section>


</body>
</html>




<!--

<html>
<head>
<script type="text/javascript" src="player.js"></script>
<link rel="stylesheet" type="text/css" href="player.css">
</head>


<body>
<div id="wrapper">
<div id='player'>
<audio id="music_player">
<source src="music/sample_music.mp3"/>
</audio>
<input type="image" src="images/play.png" onclick="play_aud()" id="play_button">
<input type="image" src="images/pause.png" onclick="pause_aud()" id="play_button">
<input type="image" src="images/stop.png" onclick="stop_aud()" id="play_button">
<img src="images/volume.png" id="vol_img">
<input type="range" id="change_vol" onchange="change_vol()" step="0.05" min="0" max="1" value="1">
</div>
</div>
</body>
</html>

-->
