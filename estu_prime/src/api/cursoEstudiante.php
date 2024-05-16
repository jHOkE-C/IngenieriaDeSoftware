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

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
  die("Error de conexión: " . $conn->connect_error);
}

// Consulta SQL para seleccionar todos los cursos con el nombre completo del docente
$sql = "SELECT c.*, CONCAT(d.firstname, ' ', d.lastname) AS nombre_docente 
        FROM curso AS c
        INNER JOIN docente AS d ON c.docente_id = d.id"; // Suponiendo que la columna que relaciona las tablas se llama `docente_id`
$result = $conn->query($sql);

$cursos = array();

if ($result->num_rows > 0) {
  // Iterar sobre los resultados y agregar cada curso a la lista de cursos
  while($row = $result->fetch_assoc()) {
    $curso = array(
      "idCurso" => $row["idCurso"],
      "titulo" => $row["titulo"],
      "descripcion" => $row["descripcion"],
      "precio" => $row["precio"],
      "nombre_docente" => $row["nombre_docente"],
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
