<?php
session_start();
// Verifica si se envió el formulario
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Obtiene los datos del formulario
    $correo = $_POST['email'];
    $password = $_POST['password'];

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

    // Consulta para verificar credenciales de docentes
    $queryDocente = "SELECT email, password FROM docente WHERE email = '$correo'";
    $resultDocente = $conn->query($queryDocente);

    // Consulta para verificar credenciales de estudiantes
    $queryEstudiante = "SELECT email, password FROM estudiante WHERE email = '$correo'";
    $resultEstudiante = $conn->query($queryEstudiante);

    // Verificar si se encontraron resultados para docentes
    if ($resultDocente->num_rows > 0) {
        $row = $resultDocente->fetch_assoc();
        if ($row['password'] == $password) {
            // Credenciales válidas para docente, redireccionar a la página de docente
            header('Location: docente.php');
            exit;
        } else {
            // Contraseña incorrecta para docente
            header('Location: login.php');
            $_SESSION['error_message'] = "Credenciales erróneas";
        }
    } elseif ($resultEstudiante->num_rows > 0) {
        $row = $resultEstudiante->fetch_assoc();
        if ($row['password'] == $password) {
            // Credenciales válidas para estudiante, redireccionar a la página de estudiante
            header('Location: estudiante.php');
            exit;
        } else {
            // Contraseña incorrecta para estudiante
            header('Location: login.php');
            $_SESSION['error_message'] = "Credenciales erróneas";
        }
    } else {
        // No se encontró ningún usuario con ese correo
        header('Location: login.php');
        $_SESSION['error_message'] = "Usuario no encontrado";
    }

    // Cerrar conexión
    $conn->close();
}
?>
