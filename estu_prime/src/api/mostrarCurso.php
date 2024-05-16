<?php
$origin = isset($_SERVER['HTTP_ORIGIN']) ? $_SERVER['HTTP_ORIGIN'] : '';

header('Access-Control-Allow-Origin: ' . $origin);
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Access-Control-Allow-Credentials: true');

session_start();
// Conexión a la base de datos
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "estuprime";

$conn = new mysqli($servername, $username, $password, $dbname);

// Comprobar la conexión
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}
$id_docente = $_SESSION['id_docente'];

// Consulta SQL para obtener los cursos con más información
$sql = "SELECT c.idCurso, c.titulo, c.precio, c.ruta, CONCAT(d.firstname, ' ', d.lastname) AS nombre_docente 
        FROM curso c 
        INNER JOIN docente d ON c.docente_id = d.id 
        WHERE docente_id = '$id_docente'";
$result = $conn->query($sql);

// Convertir el resultado a formato JSON
$cursos = array();
if ($result->num_rows > 0) {
  while($row = $result->fetch_assoc()) {
    $cursos[] = $row;
  }
}

echo json_encode($cursos);


$conn->close();
?>
