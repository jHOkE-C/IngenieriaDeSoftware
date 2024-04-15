<?php
// Conexión a la base de datos
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "estuprime";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
  die("Error de conexión: " . $conn->connect_error);
}

// Obtener la imagen de la base de datos
$sql = "SELECT elemento1 FROM curso WHERE idcurso = 4"; // Suponiendo que la imagen que quieres mostrar tiene el ID 2
$result = $conn->query($sql);

if ($result->num_rows > 0) {
  $row = $result->fetch_assoc();
  $imagen = $row["elemento1"]; // Obtener los datos binarios de la imagen desde la base de datos

  // Mostrar la imagen como una respuesta HTTP
  header("Content-type: image/png"); // Cambia el tipo de contenido según el tipo de imagen que estés almacenando
  echo($imagen);
} else {
  echo "No se encontró la imagen";
}

$conn->close();
?>
