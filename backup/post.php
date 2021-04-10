<!DOCTYPE HTML>
<html>
<body>
Test<br><br>

<?php

$servername = "localhost";
$database = "trivia";
$username = "root";
$password = "r3volucion2021Server!!";

$rut = $_REQUEST['name'];
$puntaje = 10000000; 
// $_REQUEST['puntaje'];
$address = $_REQUEST['detalles'];


// Create connection
$conn = mysqli_connect($servername, $username, $password, $database);

// Check connection
if (!$conn) {
      die("Connection failed: " . mysqli_connect_error());
}

$sql = "INSERT INTO datos (rut,marker,puntaje) VALUES ('$rut','$address','$puntaje')";

if (mysqli_query($conn, $sql)) {
     echo 'Operación exitosa!!';
} else {
      echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}
mysqli_close($conn);

?>


</body>
</html>
