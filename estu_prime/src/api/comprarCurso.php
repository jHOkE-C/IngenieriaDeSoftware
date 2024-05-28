<?php
session_start();
$origin = isset($_SERVER['HTTP_ORIGIN']) ? $_SERVER['HTTP_ORIGIN'] : '';
header('Access-Control-Allow-Origin: ' . $origin);
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Access-Control-Allow-Credentials: true');
header('Content-Type: application/json; charset=utf-8'); // Asegúrate de que la respuesta sea JSON
$id = $_SESSION['id_estudiante'];
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
    // Insertar en la tabla estudiantedecurso si el estudiante no está inscrito
    $sql = "INSERT INTO estudiantedecurso (IDCURSO, IDESTUDIANTE, FECHAINSCRIPCION) VALUES ('$idCurso', '$id', NOW())";
    $result = $conn->query($sql);
    $response = array(
            "success" => true,
            "mensaje" => "Inscrito en el curso"
        );
    
    echo json_encode($response);


$stmt_verificar->close();
$stmt->close();
$conn->close();

