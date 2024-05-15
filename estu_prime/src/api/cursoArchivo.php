<?php
$origin = isset($_SERVER['HTTP_ORIGIN']) ? $_SERVER['HTTP_ORIGIN'] : '';
header('Access-Control-Allow-Origin: ' . $origin);
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Access-Control-Allow-Credentials: true');
session_start();
$id = $_SESSION['id_docente'];
// Conexión a la base de datos
//Conexion y decodificacion
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "estuprime";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
  die("Error de conexión: " . $conn->connect_error);
}
    $json_data = file_get_contents("php://input");

    // Decodificar los datos JSON a un array asociativo de PHP
    $data = json_decode($json_data, true);
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $posicion = $data['posicion'];
        $idCurso  = $data['idCursoDocente'];
        $texto = $data['texto'];
        $query = "INSERT INTO `estuprime`.`archivoTexto` (`texto`, `posicion`, `curso_idCurso`, `curso_docente_id`) VALUES ('$texto', '$posicion', '$idCurso', '$id');";
        $result = $conn->query($query_insert);
        if($result === true){
            $response = array("mensaje" => "Registro existoso");
            echo json_encode($response);
        }
    }