<?php
# `id`, `correo`, `username`, `password`, `nombre`, `apellido`, `celular`
$correo = $_POST['email'];
#$username = $_POST['username'];
$password = $_POST['password'];
$nombre = $_POST['first_name'];
$apellido = $_POST['last_name'];
#$celular = $_POST['celular'];
$host = "localhost";
$user = "root";
$pass = "";
$db = "estuprime";

$conn = new mysqli($host, $user, $pass, $db);

// Verificar conexión
if ($conn->connect_error) {
    die("Error de conexión: " . $conn->connect_error);
}

// Preparar consulta SQL utilizando valores escapados
#id, firstname, lastname, email, password
$resultado = "INSERT INTO `docente` (`firstname`, `lastname`, `email`, `password`) VALUES ('$nombre', '$apellido', '$correo', '$password')";

// Ejecutar consulta
if ($conn->query($resultado) === TRUE) {
    echo "Registro exitoso";
} else {
    echo "Error: " . $resultado . "<br>" . $conn->error;
}

// Cerrar conexión
$conn->close();
?>
