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
/*
$query = "SELECT MAX(idCurso) AS last_id FROM curso";
$result = $conn->query($query);
$row = $result->fetch_assoc();
$ultimo = $row['last_id'];
$query = "SELECT CONCAT(d.firstname, ' ', d.lastname) AS nombre_docente 
          FROM curso c 
          INNER JOIN docente d ON c.docente_id = d.id 
          WHERE c.idCurso = '$ultimo'";
$nombreDocenteResult = $conn->query($query);
$row = $nombreDocenteResult->fetch_assoc();
$nombreDocente = $row['nombre_docente'];
$responseData = array(
    'idCurso' => $ultimo,
    'nombreDocente' => $nombreDocente
);
*/
$nombreD = $_SESSION['nombre_docente'];
$responseData = array('nombre_docente' => $nombreD);

echo json_encode($responseData);


