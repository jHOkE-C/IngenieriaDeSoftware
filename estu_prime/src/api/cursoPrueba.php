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

// Consulta SQL para seleccionar los 12 cursos más baratos
$sql = "SELECT c.*, CONCAT(d.NOMBREDOCENTE, ' ', d.APELLIDODOCENTE) AS nombre_docente 
        FROM curso AS c
        INNER JOIN docente AS d ON c.docente_IDDOCENTE = d.IDDOCENTE
        ORDER BY c.PRECIOCURSO ASC
        LIMIT 12"; // Limitar los resultados a los primeros 12 cursos más baratos
$result = $conn->query($sql);

$cursos = array();

if ($result->num_rows > 0) {
  // Iterar sobre los resultados y agregar cada curso a la lista de cursos
  while($row = $result->fetch_assoc()) {
    $curso = array(
      "idCurso" => $row["IDCURSO"],
      "titulo" => $row["NOMBRECURSO"],
      "descripcion" => $row["DESCRIPCIONCURSO"],
      "precio" => $row["PRECIOCURSO"],
      "nombre_docente" => $row["nombre_docente"],
      "ruta" => $row["RUTACURSO"], // Asegúrate de incluir la ruta de la imagen del curso
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
