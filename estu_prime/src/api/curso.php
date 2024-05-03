<?php
header('Access-Control-Allow-Origin: http://localhost:3000');
header('Access-Control-Allow-Headers: Content-Type');
header('Access-Control-Allow-Credentials: true');
session_start();
$id = $_SESSION['id_docente'];
echo "El id es: " . $id;
// Conexión a la base de datos
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "estuprime";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
  die("Error de conexión: " . $conn->connect_error);
}

// Verificar si se recibieron los datos del formulario
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  // Obtener los datos del formulario
  $titulo = $_POST['titulo'];
  $descripcion = $_POST['descripcion'];

  // Guardar la imagen
  $imagen = $_FILES['imagen']['tmp_name'];
  $imagenData = addslashes(file_get_contents($imagen)); // Convertir la imagen a formato binario
 // Obtener la ID del docente de la sesión

  // Insertar los datos en la tabla curso
  $sql = "INSERT INTO curso (nombre, descripcion, elemento1, creacion, docente_id)
          VALUES ('$titulo', '$descripcion', '$imagenData', NOW(), '$id')"; // Aquí deberías especificar el ID del docente correspondiente

  if ($conn->query($sql) === TRUE) {
    echo "Los datos se han guardado correctamente";
    header("Location: http://localhost:3000/LoginDocente/CrearCurso?success=Curso Creado");
  } else {
    echo "Error al guardar los datos: " . $conn->error;
  }
}

$conn->close();
?>
