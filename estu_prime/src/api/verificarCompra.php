<?php
session_start();
$origin = isset($_SERVER['HTTP_ORIGIN']) ? $_SERVER['HTTP_ORIGIN'] : '';
header('Access-Control-Allow-Origin: ' . $origin);
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Access-Control-Allow-Credentials: true');

// Verificar que la sesión esté configurada correctamente
if (!isset($_SESSION["id_estudiante"])) {
    echo json_encode(["success" => false, "message" => "ID de estudiante no encontrado en la sesión"]);
    exit();
}

$origin = isset($_SERVER['HTTP_ORIGIN']) ? $_SERVER['HTTP_ORIGIN'] : '';
header('Access-Control-Allow-Origin: ' . $origin);
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Access-Control-Allow-Credentials: true');

$id = $_SESSION["id_estudiante"];
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "estuprime";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}

$json_data = file_get_contents("php://input");
$data = json_decode($json_data, true);

if (!isset($data['idCurso'])) {
    echo json_encode(["success" => false, "message" => "ID del curso faltante"]);
    exit();
}

$idCurso = $data['idCurso'];

$sql_verificar = "SELECT * FROM estudiantedecurso WHERE IDCURSO = ? AND IDESTUDIANTE = ?";
$stmt_verificar = $conn->prepare($sql_verificar);
$stmt_verificar->bind_param("ii", $idCurso, $id);
$stmt_verificar->execute();
$result_verificar = $stmt_verificar->get_result();

$haComprado = $result_verificar->num_rows > 0;

echo json_encode(["success" => true, "haComprado" => $haComprado]);

$stmt_verificar->close();
$conn->close();
?>
