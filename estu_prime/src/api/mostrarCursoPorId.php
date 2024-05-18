<?php
$origin = isset($_SERVER['HTTP_ORIGIN']) ? $_SERVER['HTTP_ORIGIN'] : '';

header('Access-Control-Allow-Origin: ' . $origin);
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Access-Control-Allow-Credentials: true');

// Conexión a la base de datos
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "estuprime";

// Obtener el ID del curso de la solicitud
$idCurso = isset($_GET['id']) ? $_GET['id'] : null;

if (!$idCurso) {
  echo json_encode(array('error' => 'No se proporcionó el ID del curso'));
  exit;
}

$conn = new mysqli($servername, $username, $password, $dbname);

// Comprobar la conexión
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

// Consulta SQL para obtener los detalles del curso según su ID
$sql = "SELECT c.idCurso, c.titulo, c.descripcion, c.precio, c.ruta, CONCAT(d.firstname, ' ', d.lastname) AS nombre_docente 
        FROM curso c 
        INNER JOIN docente d ON c.docente_id = d.id 
        WHERE c.idCurso = '$idCurso'";
$result = $conn->query($sql);

// Verificar si se encontraron resultados
if ($result->num_rows > 0) {
  // Convertir el resultado a formato JSON y enviarlo como respuesta
  $curso = $result->fetch_assoc();
  echo json_encode($curso);
} else {
  echo json_encode(array('error' => 'No se encontró ningún curso con el ID proporcionado'));
}

$conn->close();
?>
