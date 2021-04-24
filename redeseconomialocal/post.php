<?php

$servername = "localhost";
$database = "mapas";
$username = "root";
$password = "ninJaesbuts!!821982";

$nombre = $_REQUEST['nombre'];
$categoria = $_REQUEST['categoria'];
$direccion = $_REQUEST['direccion'];
$telefono = $_REQUEST['telefono'];
$lat = $_REQUEST['lat'];
$long = $_REQUEST['lng'];


// Create connection
$conn = mysqli_connect($servername, $username, $password, $database);

// Check connection
if (!$conn) {
      die("Connection failed: " . mysqli_connect_error());
}

$sql = "INSERT INTO mapa (nombre,categoria,direccion,telefono,lat,lng) VALUES ('$nombre','$categoria','$direccion','$telefono','$lat','$long')";

if (mysqli_query($conn, $sql)) {
     echo 'Operación exitosa!!';
} else {
      echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}
mysqli_close($conn);


?>

