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
        $sql = "SELECT c.NOMBRECURSO, c.DESCRIPCIONCURSO, c.PRECIOCURSO, c.RUTACURSO, CONCAT(d.NOMBREDOCENTE, ' ', d.APELLIDODOCENTE) AS nombre_docente 
        FROM curso c 
        INNER JOIN docente d ON c.docente_IDDOCENTE = d.IDDOCENTE 
        WHERE c.docente_IDDOCENTE = '$id' AND c.IDCURSO = '$idGet'";
        $result = $conn->query($sql);
        $row = $result->fetch_assoc();
        $response = array(
            'titulo' => $row['NOMBRECURSO'],
            'precio' => $row['PRECIOCURSO'],
            'descripcion' => $row['DESCRIPCIONCURSO'],
            'ruta' => $row['RUTACURSO'],
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
    
    if(($data['fueCambiadoImg'])){
      $imagenBase64 = $data['img'];
 
      $idUnic = uniqid()."."."jpeg";
      $idFront = $rutaImagen.$idUnic;
      $idBase = "http://localhost:80/IngenieriaDeSoftware/estu_prime/archivo/". $idUnic;
      // Decodificar la imagen base64
      $imagenDecodificada = base64_decode($imagenBase64);
      $imagenDecodificada = base64_decode(preg_replace('#^data:image/\w+;base64,#i', '', $imagenBase64));
      file_put_contents($idFront, $imagenDecodificada);
  
        $query_update = "UPDATE `estuprime`.`curso` SET `NOMBRECURSO` = '$titulo', `DESCRIPCIONCURSO` = '$descripcion', `PRECIOCURSO` = '$precio', `RUTACURSO` = '$idBase', `FECHAACTUALIZACION` = NOW() WHERE (`IDCURSO` = '$cursoId')";
        $conn->query($query_update);
              // Registro exitoso
              $response = array("mensaje" => "a");
              header('Content-Type: application/json');
              echo json_encode($response);

    }else {
        $query_update = "UPDATE `estuprime`.`curso` SET `NOMBRECURSO` = '$titulo', `DESCRIPCIONCURSO` = '$descripcion', `PRECIOCURSO` = '$precio', `FECHAACTUALIZACION` = NOW() WHERE (`IDCURSO` = '$cursoId')";
        $conn->query($query_update);
              // Registro exitoso
              $response = array("mensaje" => "a");
              header('Content-Type: application/json');
              echo json_encode($response);
    }

        

}
