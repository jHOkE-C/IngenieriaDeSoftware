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
        $queryDocente = "SELECT IDDOCENTE, NOMBREDOCENTE, APELLIDODOCENTE FROM docente where EMAILDOCENTE = '$correo' AND CONTRASENADOCENTE = '$contrasena'";
        $queryEstudiante = "SELECT IDESTUDIANTE FROM estudiante where EMAILESTUDIANTE = '$correo' AND CONTRASENAESTUDIANTE = '$contrasena'";
        $resultDocente = $conn->query($queryDocente);
        $resultEstudiante = $conn->query($queryEstudiante);

        if ($resultDocente && $resultDocente->num_rows > 0) {
            $row = $resultDocente->fetch_assoc();
            $_SESSION['id_docente'] = $row['IDDOCENTE'];
            $_SESSION['nombre_docente'] = $row['NOMBREDOCENTE']." ".$row['APELLIDODOCENTE'];
            $response = array("mensaje" => "Inicio de sesión exitoso como docente", "tipo" => "docente");
        } 
        elseif ($resultEstudiante && $resultEstudiante->num_rows > 0) {
            $rowE = $resultEstudiante->fetch_assoc();
            $_SESSION['id_estudiante'] = $rowE['IDESTUDIANTE'];
            $response = array("mensaje" => "Inicio de sesión exitoso como estudiante", "tipo" => "estudiante");
        } 
        else {
            $response = array("error" => "Credenciales incorrectas");
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

