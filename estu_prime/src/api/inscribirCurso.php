<?php
// inscribirCurso.php

header('Content-Type: application/json');

// Conexión a la base de datos
$host = "localhost";
$dbname = "estuprime";
$username = "root";
$password = "";

$conn = new mysqli($host, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}

// Obtener datos de la solicitud
$data = json_decode(file_get_contents('php://input'), true);
$idCurso = $data['idCurso'];
$idEstudiante = $data['idEstudiante'];

if (empty($idCurso) || empty($idEstudiante)) {
    echo json_encode(["success" => false, "message" => "ID de curso o estudiante faltante"]);
    exit();
}

// Verificar si el estudiante ya está inscrito en el curso
$sql_verificar = "SELECT * FROM estudiantedecurso WHERE IDCURSO = ? AND IDESTUDIANTE = ?";
$stmt_verificar = $conn->prepare($sql_verificar);
$stmt_verificar->bind_param("ii", $idCurso, $idEstudiante);
$stmt_verificar->execute();
$stmt_verificar->store_result();

if ($stmt_verificar->num_rows > 0) {
    // El estudiante ya está inscrito en el curso
    echo json_encode(["success" => false, "message" => "El estudiante ya está inscrito en este curso"]);
    exit();
}

// Insertar en la tabla estudiantedecurso
$sql_insertar = "INSERT INTO estudiantedecurso (IDCURSO, IDESTUDIANTE, FECHAINSCRIPCION) VALUES (?, ?, NOW())";
$stmt_insertar = $conn->prepare($sql_insertar);
$stmt_insertar->bind_param("ii", $idCurso, $idEstudiante);

if ($stmt_insertar->execute()) {
    echo json_encode(["success" => true]);
} else {
    echo json_encode(["success" => false, "message" => "Error al inscribir el curso"]);
}

$stmt_insertar->close();
$stmt_verificar->close();
$conn->close();
?>
