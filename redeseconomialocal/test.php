<?php
/* Attempt MySQL server connection. Assuming you are running MySQL
server with default setting (user 'root' with no password) */
$servername = "localhost";
$database = "mapas";
$username = "root";
$password = "ninJaesbuts!!821982";

$connection = mysqli_connect($servername, $username, $password, $database);

// Check connection
if($connection === false){
    die("ERROR: Could not connect. " . mysqli_connect_error());
}
 
// Print host information
echo "Connect Successfully. Host info: " . mysqli_get_host_info($connection);

//fetch table rows from mysql db   
$sql = "select * from mapa";
$result = mysqli_query($connection, $sql) or die("Error in Selecting " . mysqli_error($connection));

//create an array
$emparray = array();
while($row = mysqli_fetch_assoc($result)) {
    $emparray[] = $row;
}

echo json_encode($emparray);


// Close connection
//mysqli_close($connection);
?>


