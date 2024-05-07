<?php
$origin = isset($_SERVER['HTTP_ORIGIN']) ? $_SERVER['HTTP_ORIGIN'] : '';
header('Access-Control-Allow-Origin: ' . $origin);
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Access-Control-Allow-Credentials: true');
session_start();
$id = $_SESSION['id_docente'];
// Conexión a la base de datos
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

// Verificar si se recibieron los datos del formulario
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $titulo = $data["title"];
  $descripcion = $data["descripcion"];
  $precio = $data["precio"];
    // Procesar la imagen
  $rutaImagen = 'C:/Users/ETHAN PIERCE/Desktop/archivo/12.jpg';
  #$imagenData = $data['image'];

// Obtener la imagen en base64 del JSON
#$imagenBase64 = $imagenData->image;

// Decodificar la imagen base64
#$imagenDecodificada = base64_decode(preg_replace('#^data:image/\w+;base64,#i', '', $imagenBase64));

// Guardar la imagen en un archivo (opcional)
#file_put_contents($rutaImagen, $imagenDecodificada);

    $query_insert = "INSERT INTO `curso` (`titulo`, `descripcion`, `precio`, `ruta`, `docente_id`) VALUES ('$titulo','$descripcion','$precio', '$rutaImagen','$id')";
       $conn->query($query_insert);
            // Registro exitoso
            $response = array("mensaje" => "a");
            header('Content-Type: application/json');
            echo json_encode($response);
        

}
