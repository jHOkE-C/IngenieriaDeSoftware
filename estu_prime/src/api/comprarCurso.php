<?php
session_start();
$origin = isset($_SERVER['HTTP_ORIGIN']) ? $_SERVER['HTTP_ORIGIN'] : '';
header('Access-Control-Allow-Origin: ' . $origin);
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Access-Control-Allow-Credentials: true');
header('Content-Type: application/json; charset=utf-8'); // Asegúrate de que la respuesta sea JSON

// Manejadores de errores
function handleErrors($errno, $errstr, $errfile, $errline) {
    $response = array(
        "success" => false,
        "mensaje" => "Error interno del servidor"
    );
    echo json_encode($response);
    exit();
}

function handleShutdown() {
    $error = error_get_last();
    if ($error !== null) {
        $response = array(
            "success" => false,
            "mensaje" => "Error interno del servidor"
        );
        echo json_encode($response);
        exit();
    }
}

set_error_handler("handleErrors");
register_shutdown_function("handleShutdown");

$id = $_SESSION["id_estudiante"];
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "estuprime";

$conn = new mysqli($servername, $username, $password, $dbname);
$json_data = file_get_contents("php://input");

// Decodificar los datos JSON a un array asociativo de PHP
$data = json_decode($json_data, true);
$idCurso = $data['idCurso'];

// Verificar si hay errores en la conexión
if ($conn->connect_error) {
    $response = array(
        "success" => false,
        "mensaje" => "Error de conexión a la base de datos"
    );
    echo json_encode($response);
    exit();
}

// Verificar si el estudiante ya está inscrito en el curso
$sql_verificar = "SELECT * FROM estudiantedecurso WHERE IDCURSO = ? AND IDESTUDIANTE = ?";
$stmt_verificar = $conn->prepare($sql_verificar);
$stmt_verificar->bind_param("ii", $idCurso, $id);
$stmt_verificar->execute();
$result_verificar = $stmt_verificar->get_result();

if ($result_verificar->num_rows > 0) {
    $response = array(
        "success" => false,
        "mensaje" => "El estudiante ya está inscrito en este curso"
    );
    echo json_encode($response);
} else {
    // Insertar en la tabla estudiantedecurso si el estudiante no está inscrito
    $sql = "INSERT INTO estudiantedecurso (IDCURSO, IDESTUDIANTE, FECHAINSCRIPCION) VALUES (?, ?, NOW())";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("ii", $idCurso, $id);

    if ($stmt->execute()) {
        $response = array(
            "success" => true,
            "mensaje" => "Inscrito en el curso"
        );
    } else {
        $response = array(
            "success" => false,
            "mensaje" => "Error al inscribirse en el curso"
        );
    }
    echo json_encode($response);
}

$stmt_verificar->close();
$stmt->close();
$conn->close();
?>
