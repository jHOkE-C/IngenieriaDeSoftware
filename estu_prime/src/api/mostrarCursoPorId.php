<?php
// Permitir acceso desde cualquier origen (útil para desarrollo, pero no recomendado para producción)
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
  die("Error de conexión: " . $conn->connect_error);
}

// Consulta SQL para obtener los detalles del curso según su ID
$sql = "SELECT c.IDCURSO, c.NOMBRECURSO AS titulo, c.DESCRIPCIONCURSO AS descripcion, c.PRECIOCURSO AS precio, c.RUTACURSO AS ruta, 
               CONCAT(d.NOMBREDOCENTE, ' ', d.APELLIDODOCENTE) AS nombre_docente 
        FROM curso c 
        INNER JOIN docente d ON c.docente_IDDOCENTE = d.IDDOCENTE 
        WHERE c.IDCURSO = '$idCurso'";
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
