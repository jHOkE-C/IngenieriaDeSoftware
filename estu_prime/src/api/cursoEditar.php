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

$idGet;
if ($conn->connect_error) {
  die("Error de conexión: " . $conn->connect_error);
}
    $json_data = file_get_contents("php://input");

    // Decodificar los datos JSON a un array asociativo de PHP
    $data = json_decode($json_data, true);

    //Enviar id
    if ($_SERVER["REQUEST_METHOD"] == "GET") {
        $idGet = $_GET['id'];
        $sql = "SELECT c.titulo, c.descripcion, c.precio, c.ruta, CONCAT(d.firstname, ' ', d.lastname) AS nombre_docente 
        FROM curso c 
        INNER JOIN docente d ON c.docente_id = d.id 
        WHERE c.docente_id = '$id' AND c.idCurso = '$idGet'";
        $result = $conn->query($sql);
        $row = $result->fetch_assoc();
        $response = array(
            'titulo' => $row['titulo'],
            'precio' => $row['precio'],
            'descripcion' => $row['descripcion'],
            'ruta' => $row['ruta'],
            'nombre_docente' => $row['nombre_docente']
        );
        echo json_encode($response);
        
    }
// Verificar si se recibieron los datos del formulario
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $titulo = $data['title'];
    $descripcion = $data['descripcion'];
    #$docente = $data['docente'];
    $precio = $data['precio'];
      $cursoId = $data['cursoIden'];
    // Procesar la imagen
    $rutaImagen = 'C:/xampp/htdocs/IngenieriaDeSoftware/estu_prime/archivo/';

    // Obtener la imagen en base64 del JSON
     // $imagenBase64 = $imagenData->imagen;
    
    // Decodificar la imagen base64
     
    
    // Guardar la imagen en un archivo (opcional)
    // Obtener la imagen en base64 del JSON
    $imagenBase64 = $data['img'];
 
    $idUnic = uniqid()."."."jpeg";
    $idFront = $rutaImagen.$idUnic;
    $idBase = "http://localhost:80/IngenieriaDeSoftware/estu_prime/archivo/". $idUnic;
    // Decodificar la imagen base64
    $imagenDecodificada = base64_decode($imagenBase64);
    $imagenDecodificada = base64_decode(preg_replace('#^data:image/\w+;base64,#i', '', $imagenBase64));
    file_put_contents($idFront, $imagenDecodificada);

      $query_update = "UPDATE `estuprime`.`curso` SET `titulo` = '$titulo', `descripcion` = '$descripcion', `precio` = '$precio', `ruta` = '$idBase' WHERE (`idCurso` = '$cursoId')";
      $conn->query($query_update);
            // Registro exitoso
            $response = array("mensaje" => "a");
            header('Content-Type: application/json');
            echo json_encode($response);
        

}
