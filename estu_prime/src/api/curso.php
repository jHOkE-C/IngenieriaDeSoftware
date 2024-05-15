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

    //Enviar id
    if ($_SERVER["REQUEST_METHOD"] == "GET") {
      $query = "SELECT MAX(idCurso) AS max_id FROM curso";
      $resultado = $conn->query($query);
      $row = $resultado->fetch_assoc();
      $max_id = $row['max_id'] + 1;
      $response = array("idCurso" => $max_id);
      header('Content-Type: application/json');
      echo json_encode($response);
    }
// Verificar si se recibieron los datos del formulario
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $titulo = $data['title'];
    $descripcion = $data['descripcion'];
    $docente = $data['docente'];
    $precio = $data['precio'];
    //$imagen = $data['img'];
    // Procesar la imagen
  $rutaImagen = 'C:/xampp/htdocs/IngenieriaDeSoftware/estu_prime/archivo/';

// Obtener la imagen en base64 del JSON
 // $imagenBase64 = $imagenData->imagen;

// Decodificar la imagen base64
 

// Guardar la imagen en un archivo (opcional)
// Obtener la imagen en base64 del JSON
$imagenBase64 = $data['img'];
$idUnic = $rutaImagen.uniqid()."."."jpeg";
// Decodificar la imagen base64
//$imagenDecodificada = base64_decode($imagenBase64);
$imagenDecodificada = base64_decode(preg_replace('#^data:image/\w+;base64,#i', '', $imagenBase64));
  file_put_contents($idUnic, $imagenDecodificada);

    $query_insert = "INSERT INTO `curso` (`titulo`, `descripcion`, `precio`, `ruta`, `docente_id`) VALUES ('$titulo','$descripcion','$precio', '$idUnic','$id')";
       $conn->query($query_insert);
            // Registro exitoso
            $response = array("mensaje" => "a");
            header('Content-Type: application/json');
            echo json_encode($response);
        

}
