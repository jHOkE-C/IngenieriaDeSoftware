<?php
$origin = isset($_SERVER['HTTP_ORIGIN']) ? $_SERVER['HTTP_ORIGIN'] : '';

header('Access-Control-Allow-Origin: ' . $origin);
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Access-Control-Allow-Credentials: true');

session_start();
$host = "localhost";
$user = "root";
$pass = "";
$db = "estuprime";
$conn = new mysqli($host, $user, $pass, $db);

// Verificar si la solicitud es de tipo POST
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Obtener los datos enviados en formato JSON
    $json_data = file_get_contents("php://input");

    // Decodificar los datos JSON a un array asociativo de PHP
    $data = json_decode($json_data, true);

    // Verificar si se recibieron los datos esperados
    if (isset($data['correo']) && isset($data['contrasena'])) {
        // Obtener los datos del correo y la contraseña
        $correo = $data['correo'];
        $contrasena = $data['contrasena'];
        $query = "SELECT id FROM docente where email = '$correo' AND password = '$contrasena'";
        $queryE = "SELECT id FROM estudiante where email = '$correo' AND password = '$contrasena'";
        $result = $conn->query($query);
        $resultE = $conn->query($queryE);
        if ($result && $result->num_rows > 0) {
            $row = $result->fetch_assoc();
            $_SESSION['id_docente'] = $row['id'];
            $response = array("mensaje" => "Inicio docente");
        } 
        if ($resultE && $resultE->num_rows > 0) {
            $rowE = $resultE->fetch_assoc();
            $_SESSION['id_estudiante'] = $rowE['id'];
            $response = array("mensaje" => "Inicio estudiante");
        } 
        // Enviar la respuesta como JSON
        header('Content-Type: application/json');
        echo json_encode($response);
    } else{
        // Si no se reciben los datos esperados, responder con un error
        $response = array("error" => "Datos incompletos");
        header('Content-Type: application/json');
        echo json_encode($response);
    }
} else {
    // Si la solicitud no es de tipo POST, responder con un error
    $response = array("error" => "Método no permitido");
    header('Content-Type: application/json');
    echo json_encode($response);
}

