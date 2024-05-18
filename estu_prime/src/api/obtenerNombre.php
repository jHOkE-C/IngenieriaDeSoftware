<?php
session_start();
$origin = isset($_SERVER['HTTP_ORIGIN']) ? $_SERVER['HTTP_ORIGIN'] : '';
header('Access-Control-Allow-Origin: ' . $origin);
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Access-Control-Allow-Credentials: true');
$host = "localhost";
$user = "root";
$pass = "";
$db = "estuprime";
$conn = new mysqli($host, $user, $pass, $db);
$id_docente = $_SESSION['id_docente'];
$nombreD = $_SESSION['nombre_docente'];
$responseData = array('nombre_docente' => $nombreD);

echo json_encode($responseData);


