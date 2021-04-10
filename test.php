<!DOCTYPE HTML>
<html>
<body>
Test<br>

<?php
$servername = "localhost";
$username = "root";
$password = "r3volucion2021Server!!";

// Create connection
$conn = new mysqli($servername, $username, $password);
// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

// Create database
$sql = "CREATE DATABASE trivia_municiberpunk";
if ($conn->query($sql) === TRUE) {
  echo "Database created successfully";
} else {
  echo "Error creating database: " . $conn->error;
}

$conn->close();
?>

</body>
</html>
