<?php
session_start();
$origin = isset($_SERVER['HTTP_ORIGIN']) ? $_SERVER['HTTP_ORIGIN'] : '';
header('Access-Control-Allow-Origin: ' . $origin);
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Access-Control-Allow-Credentials: true');
header('Content-Type: application/json; charset=utf-8');

$id = $_SESSION['id_estudiante'];
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "estuprime";
$conn = new mysqli($servername, $username, $password, $dbname);

$json_data = file_get_contents("php://input");

// Verificar si el JSON es válido
$data = json_decode($json_data, true);
if (json_last_error() !== JSON_ERROR_NONE) {
    $response = array("success" => false, "mensaje" => "JSON inválido");
    echo json_encode($response);
    exit();
}

$idCurso = $data['idCurso'];

// Verificar si hay errores en la conexión
if ($conn->connect_error) {
    $response = array("success" => false, "mensaje" => "Error en la conexión a la base de datos");
    echo json_encode($response);
    exit();
}

$sql = "INSERT INTO estudiantedecurso (IDCURSO, IDESTUDIANTE, FECHAINSCRIPCION) VALUES ('$idCurso', '$id', NOW())";
if ($conn->query($sql) === TRUE) {
    $response = array("success" => true, "mensaje" => "Inscrito en el curso");
} else {
    $response = array("success" => false, "mensaje" => "Error al inscribirse en el curso: " . $conn->error);
}

echo json_encode($response);

$conn->close();
?>
