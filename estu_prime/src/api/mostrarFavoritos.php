<?php
session_start();
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

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
  die("Error de conexión: " . $conn->connect_error);
}

// ID del estudiante (puedes obtenerlo de la autenticación)
$idEstudiante = $_SESSION["id_estudiante"];

// Consulta SQL para seleccionar todos los cursos comprados por el estudiante
$sql = "SELECT c.IDCURSO, c.NOMBRECURSO, c.PRECIOCURSO, c.RUTACURSO, CONCAT(d.NOMBREDOCENTE, ' ', d.APELLIDODOCENTE) AS nombre_docente,
        IFNULL(ec.CURSOFAVORITO, 0) AS esFavorito
        FROM curso c 
        INNER JOIN estudiantedecurso ec ON c.IDCURSO = ec.IDCURSO
        INNER JOIN docente d ON c.docente_IDDOCENTE = d.IDDOCENTE
        WHERE ec.IDESTUDIANTE = $idEstudiante AND ec.CURSOFAVORITO = 1";
$result = $conn->query($sql);

$cursos = array();

if ($result->num_rows > 0) {
  // Iterar sobre los resultados y agregar cada curso a la lista de cursos
  while($row = $result->fetch_assoc()) {
    $curso = array(
      "idCurso" => $row["IDCURSO"],
      "titulo" => $row["NOMBRECURSO"],
      "precio" => $row["PRECIOCURSO"],
      "ruta" => $row["RUTACURSO"],
      "nombre_docente" => $row["nombre_docente"]
      // Puedes agregar más campos aquí si es necesario
    );
    array_push($cursos, $curso);
  }
}

// Devolver los cursos como JSON
header('Content-Type: application/json');
echo json_encode($cursos);

$conn->close();
?>
