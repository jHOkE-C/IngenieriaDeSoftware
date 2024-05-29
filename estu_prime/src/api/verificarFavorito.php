<?php
session_start();

$origin = isset($_SERVER['HTTP_ORIGIN']) ? $_SERVER['HTTP_ORIGIN'] : '';
header('Access-Control-Allow-Origin: ' . $origin);
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Access-Control-Allow-Credentials: true');
header('Content-Type: application/json; charset=utf-8');

$idEstudiante = $_SESSION['id_estudiante']; // Obtener el ID del curso desde la sesión del estudiante

// Verificar si el curso está marcado como favorito para el estudiante
// Aquí debes hacer una consulta a tu base de datos para verificar si existe una entrada en la tabla estudiantedecurso
// con el ID del curso y el ID del estudiante, y si la columna CURSOFAVORITO es igual a 1.
// Si existe, devolver "true", de lo contrario, devolver "false".

// Ejemplo de conexión a la base de datos
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "estuprime";
$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    $response = array("success" => false, "message" => "Error en la conexión a la base de datos");
    echo json_encode($response);
    exit();
}
$json_data = file_get_contents("php://input");

// Verificar si el JSON es válido
$data = json_decode($json_data, true);
if (json_last_error() !== JSON_ERROR_NONE) {
    $response = array("success" => false, "mensaje" => "JSON inválido");
    echo json_encode($response);
    exit();
}
$idCurso = $data['idCurso'];

$sql = "SELECT * FROM estudiantedecurso WHERE IDCURSO = $idCurso AND IDESTUDIANTE = $idEstudiante AND CURSOFAVORITO = 1";

$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // El curso está marcado como favorito
    $response = array("success" => true, "esFavorito" => true);
    echo json_encode($response);
} else {
    // El curso no está marcado como favorito
    $response = array("success" => true, "esFavorito" => false);
    echo json_encode($response);
}

$conn->close();
?>
