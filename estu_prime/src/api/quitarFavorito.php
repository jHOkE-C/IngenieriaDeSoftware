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

// Verificar si el estudiante ya está inscrito en el curso
$sql_check = "SELECT * FROM estudiantedecurso WHERE IDESTUDIANTE = '$id' AND IDCURSO = '$idCurso'";
$result_check = $conn->query($sql_check);

if ($result_check->num_rows > 0) {
    // Actualizar el curso como favorito
    $sql_update = "UPDATE estudiantedecurso SET CURSOFAVORITO = 0 WHERE IDESTUDIANTE = '$id' AND IDCURSO = '$idCurso'";
    if ($conn->query($sql_update) === TRUE) {
        $response = array("success" => true, "mensaje" => "Curso quitado de favoritos");
    } else {
        $response = array("success" => false, "mensaje" => "Error al añadir el curso a favoritos: " . $conn->error);
    }
} else {
    $response = array("success" => false, "mensaje" => "El estudiante no está inscrito en este curso");
}

echo json_encode($response);

$conn->close();
?>
