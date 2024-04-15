<?php
header('Access-Control-Allow-Origin: http://localhost:3000');
session_start();
# `id`, `correo`, `username`, `password`, `nombre`, `apellido`, `celular`


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
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $correo = $_POST['email'];
    $password = $_POST['contra'];
    $nombre = $_POST['nombre'];
    $apellido = $_POST['apellido'];
// Preparar consulta SQL para verificar si el correo ya está en uso
$correo_escapado = $conn->real_escape_string($correo);
$query = "SELECT email FROM docente WHERE email = '$correo_escapado'";
$result = $conn->query($query);

// Verificar si se encontraron resultados
if ($result && $result->num_rows > 0) {
    #$_SESSION['error_message'] = "El correo electrónico ya está en uso.";
    header('Location: error.php?error=Email duplicado'); // Redirigir de vuelta al formulario de registro
    exit; // Asegúrate de salir del script después de redirigir
} else {
    // Hash de la contraseña
    #$hashed_password = password_hash($password, PASSWORD_DEFAULT);

    // Insertar nuevo registro si el correo no está en uso
    $query_insert = "INSERT INTO `docente` (`firstname`, `lastname`, `email`, `password`) VALUES ('$nombre', '$apellido', '$correo_escapado', '$password')";
    if ($conn->query($query_insert) === TRUE) {
        // Registro exitoso
        header('Location: http://localhost:3000/IniciarSe');
        exit;
    } else {
        // Error en la consulta SQL
        header('Location: registro.php?error=Error en el registro');
        exit;
    }
}}
if ($_SERVER["REQUEST_METHOD"] == "GET") {
    // Aquí va tu código PHP que deseas ejecutar cuando se envía el formulario con GET

    // Por ejemplo, obtener los datos del formulario
    $correoE = $_GET['email'];
    $passwordE = $_GET['contra'];
    $nombreE = $_GET['nombre'];
    $apellidoE = $_GET['apellido'];

   // Preparar consulta SQL para verificar si el correo ya está en uso
$correo_escapado = $conn->real_escape_string($correoE);
$query = "SELECT email FROM estudiante WHERE email = '$correo_escapado'";
$result = $conn->query($query);

// Verificar si se encontraron resultados
if ($result && $result->num_rows > 0) {
   # $_SESSION['error_message'] = "El correo electrónico ya está en uso.";
    header('Location: registro-estudiante.php?error=Error duplicado'); // Redirigir de vuelta al formulario de registro
    exit; // Asegúrate de salir del script después de redirigir
} else {
    // Hash de la contraseña

    // Insertar nuevo registro si el correo no está en uso
    $query_insert = "INSERT INTO `estudiante` (`firstname`, `lastname`, `email`, `password`) VALUES ('$nombreE', '$apellidoE', '$correo_escapado', '$passwordE')";
    if ($conn->query($query_insert) === TRUE) {
        // Registro exitoso
        header('Location: http://localhost:3000/IniciarSe');
        exit;
    } else {
        // Error en la consulta SQL
        header('Location: registro-estudiante.php?error=Error en el registro');
        exit;
    }
}
}
?>

// Cerrar conexión
