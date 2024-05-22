<?php
header('Access-Control-Allow-Origin: http://localhost:3000');
header('Access-Control-Allow-Headers: Content-Type');
header('Access-Control-Allow-Credentials: true');
#include("conexion.php");

$host = "localhost";
$user = "root";
$pass = "";
$db = "estuprime";

// Conectar a la base de datos
$conn = new mysqli($host, $user, $pass, $db);

// Verificar conexión
if ($conn->connect_error) {
    die("Error de conexión: " . $conn->connect_error);
}


// Función para redirigir con un mensaje de error
// Función para redirigir con un mensaje de error específico
function redirectToError() {
    $response = array("mensaje" => "Error");
            header('Content-Type: application/json');
            echo json_encode($response);
    exit;
}
function redirectToErrorCuenta() {
    $response = array("mensaje" => "Error cuenta");
            header('Content-Type: application/json');
            echo json_encode($response);
    exit;
}




// Procesar solicitud POST
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $json_data = file_get_contents("php://input");

    // Decodificar los datos JSON a un array asociativo de PHP
    $data = json_decode($json_data, true);
    $correo = $data['email'];
    $password = $data['password'];
    $nombre = $data['firstName'];
    $apellido = $data['lastName'];

    // Consulta SQL para verificar si el correo ya está en uso
    $correo_escapado = $conn->real_escape_string($correo);
    $query = "SELECT EMAILDOCENTE FROM docente WHERE EMAILDOCENTE = '$correo_escapado'";
    $queryE = "SELECT EMAILESTUDIANTE FROM estudiante WHERE EMAILESTUDIANTE = '$correo_escapado'";
    $result = $conn->query($query);
    $resultE = $conn->query($queryE);
//redirectToError();
    // Verificar si se encontraron resultados
    if ($result && $result->num_rows > 0) {
        redirectToError();
    } else if($resultE && $resultE->num_rows > 0){
        redirectToError();
    } else{
        // Insertar nuevo registro si el correo no está en uso
        $query_insert = "INSERT INTO `DOCENTE` (`NOMBREDOCENTE`, `APELLIDODOCENTE`, `EMAILDOCENTE`, `CONTRASENADOCENTE`) VALUES ('$nombre', '$apellido', '$correo_escapado', '$password')";
        if ($conn->query($query_insert) === TRUE) {
            // Registro exitoso
            $response = array("mensaje" => "Cuenta docente creada");
            header('Content-Type: application/json');
            echo json_encode($response);
        } 
    }
}

// Procesar solicitud GET
if ($_SERVER["REQUEST_METHOD"] == "GET") {
    $correoE = $_GET['email'];
    $passwordE = $_GET['password'];
    $nombreE = $_GET['firstName'];
    $apellidoE = $_GET['lastName'];

    // Consulta SQL para verificar si el correo ya está en uso
    $correo_escapado = $conn->real_escape_string($correoE);
    $query = "SELECT EMAILESTUDIANTE FROM estudiante WHERE EMAILESTUDIANTE = '$correo_escapado'";
    $result = $conn->query($query);
    $queryD = "SELECT EMAILDOCENTE FROM docente WHERE EMAILDOCENTE = '$correo_escapado'";
    $resultD = $conn->query($queryD);
    // Verificar si se encontraron resultados
    if ($result && $result->num_rows > 0) {
        redirectToError();
    } else if($resultD && $resultD->num_rows > 0){
        redirectToError();
    }else {
        // Insertar nuevo registro si el correo no está en uso
        $query_insert = "INSERT INTO `estudiante` (`NOMBREESTUDIANTE`, `APELLIDOESTUDIANTE`, `EMAILESTUDIANTE`, `CONTRASENAESTUDIANTE`) VALUES ('$nombreE', '$apellidoE', '$correo_escapado', '$passwordE')";
        if ($conn->query($query_insert) === TRUE) {
            $response = array("mensaje" => "Cuenta Estudiante creada");
            header('Content-Type: application/json');
            echo json_encode($response);
        } else {
            // Error en la consulta SQL
            redirectToErrorCuenta();
        }
    }
}

// Cerrar conexión
$conn->close();

