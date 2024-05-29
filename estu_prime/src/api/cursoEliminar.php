<?php
$origin = isset($_SERVER['HTTP_ORIGIN']) ? $_SERVER['HTTP_ORIGIN'] : '';
header('Access-Control-Allow-Origin: ' . $origin);
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Access-Control-Allow-Credentials: true');
session_start();
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "estuprime";
$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
  die("Error de conexión: " . $conn->connect_error);
}
$json_data = file_get_contents("php://input");
$data = json_decode($json_data, true);
$id = $data['cursoIden'];
$sql = "DELETE FROM `estuprime`.`curso` WHERE (`IDCURSO` = '$id')";
$result = $conn->query($sql);
$response = array("messange"=>"Curso eliminado Con Exito");
echo json_encode($respone);