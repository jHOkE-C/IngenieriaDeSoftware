<?php
session_start();
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
$json_data = file_get_contents("php://input");

// Decodificar los datos JSON a un array asociativo de PHP
$data = json_decode($json_data, true);
$idCurso = $data['idCurso'];
$sql = "INSERT INTO `estuprime`.`estudiantedecurso` (`IDCURSO`, `IDESTUDIANTE`, `FECHAINSCRIPCION`) VALUES ('$idCurso', '$id', NOW())";
$query = $conn->query($sql);
$response = array(
    "mensaje" => "Inscrito en el curso"
);
echo json_encode($response);
