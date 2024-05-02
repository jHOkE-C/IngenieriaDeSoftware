<?php
header('Access-Control-Allow-Origin: http://localhost:3000');
header('Access-Control-Allow-Headers: Content-Type');
header('Access-Control-Allow-Credentials: true');


$host = "localhost";
$user = "root";
$pass = "";
$db = "estuprime";

// Conectar a la base de datos
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
        $query = "SELECT email,password FROM docente where email = '$correo' AND password = '$contrasena'";
        $result = $conn->query($query);
        if ($result && $result->num_rows > 0) {
            $response = array("mensaje" => "Inicio de sesion exitoso");
        } 
        // Enviar la respuesta como JSON
        header('Content-Type: application/json');
        echo json_encode($response);
    } else {
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

