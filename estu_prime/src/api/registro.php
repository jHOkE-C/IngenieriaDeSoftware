<?php
header('Access-Control-Allow-Origin: http://localhost:3000');
session_start();

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
function redirectToError($errorMessage) {
    header("Location: http://localhost:3000/CrearCuentaEstu?error=$errorMessage");
    exit;
}

// Función para redirigir con un mensaje de éxito
function redirectToSuccess() {
    header("Location: http://localhost:3000/CrearCuentaEstu?success=Registrado");
    exit;
}

// Procesar solicitud POST
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $correo = $_POST['email'];
    $password = $_POST['password'];
    $nombre = $_POST['firstName'];
    $apellido = $_POST['lastName'];

    // Consulta SQL para verificar si el correo ya está en uso
    $correo_escapado = $conn->real_escape_string($correo);
    $query = "SELECT email FROM docente WHERE email = '$correo_escapado'";
    $result = $conn->query($query);

    // Verificar si se encontraron resultados
    if ($result && $result->num_rows > 0) {
        redirectToError("Email duplicado");
    } else {
        // Insertar nuevo registro si el correo no está en uso
        $query_insert = "INSERT INTO `docente` (`firstname`, `lastname`, `email`, `password`) VALUES ('$nombre', '$apellido', '$correo_escapado', '$password')";
        if ($conn->query($query_insert) === TRUE) {
            // Registro exitoso
            redirectToSuccess();
        } else {
            // Error en la consulta SQL
           redirectToError("Error en el registro: " . $conn->error);
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
    $query = "SELECT email FROM estudiante WHERE email = '$correo_escapado'";
    $result = $conn->query($query);

    // Verificar si se encontraron resultados
    if ($result && $result->num_rows > 0) {
        redirectToError("Error email duplicado");
    } else {
        // Insertar nuevo registro si el correo no está en uso
        $query_insert = "INSERT INTO `estudiante` (`firstname`, `lastname`, `email`, `password`) VALUES ('$nombreE', '$apellidoE', '$correo_escapado', '$passwordE')";
        if ($conn->query($query_insert) === TRUE) {
            // Registro exitoso
            redirectToSuccess();
        } else {
            // Error en la consulta SQL
            redirectToError("Error en el registro");
        }
    }
}

// Cerrar conexión
$conn->close();
?>
