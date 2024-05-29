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
    //Procesando los textos
    $texto = $data['textos'];
    $groupedTexts = [];
    
    foreach ($texto as $item) {
        // Verificar si la clave 'text' está definida en el elemento actual
        if (isset($item['text'])) {
            $pos = $item['posicion'];
            $text = $item['text'];
    
            // Verificar si el texto no es null y agregarlo al array agrupado
            if ($text !== null) {
                // Verificar si la posición aún no existe en el array agrupado
                if (!isset($groupedTexts[$pos])) {
                    $groupedTexts[$pos] = [];
                }
    
                // Agregar el texto al array agrupado
                $groupedTexts[$pos][] = $text;
            }
        }
    }
    
    $length = count($groupedTexts);
    

  
  $rutaImagen = 'C:/xampp/htdocs/IngenieriaDeSoftware/estu_prime/archivo/';
  
if(isset($data['img'])){
  $imagenBase64 = $data['img'];
  $idUnic = uniqid()."."."png";
  $idFront = $rutaImagen.$idUnic;
  $idBase = "http://localhost:80/IngenieriaDeSoftware/estu_prime/archivo/". $idUnic;
  // Decodificar la imagen base64
  //$imagenDecodificada = base64_decode($imagenBase64);
  $imagenDecodificada = base64_decode(preg_replace('#^data:image/\w+;base64,#i', '', $imagenBase64));
    file_put_contents($idFront, $imagenDecodificada);
  
      $query_insert = "INSERT INTO `curso` (`NOMBRECURSO`, `DESCRIPCIONCURSO`, `PRECIOCURSO`, `RUTACURSO`, `docente_IDDOCENTE`, `FECHACREACION`) VALUES ('$titulo','$descripcion','$precio', '$idBase','$id', NOW())";
         $conn->query($query_insert);
         $ultimo_id = $conn->insert_id;
         //Procesar textos
         foreach ($groupedTexts as $pos => $texts) {
          // Suponiendo que deseas insertar solo el último texto de cada posición
          $lastText = end($texts);
  
          // Preparar la consulta de inserción
          $stmt = $conn->prepare("INSERT INTO `inputtext` (`IDCURSO`, `POSITIONTEXT`, `STRINGTEXT`) VALUES (?, ?, ?)");
           
  
          // Vincular los parámetros
          $stmt->bind_param("iis", $ultimo_id, $pos, $lastText);
  
          // Ejecutar la consulta
          $stmt->execute();
  
          // Cerrar la declaración preparada
          $stmt->close();
      }

}else{
  $idBase = "http://localhost:80/IngenieriaDeSoftware/estu_prime/archivo/NA.jpg";
  
      $query_insert = "INSERT INTO `curso` (`NOMBRECURSO`, `DESCRIPCIONCURSO`, `PRECIOCURSO`, `RUTACURSO`, `docente_IDDOCENTE`, `FECHACREACION`) VALUES ('$titulo','$descripcion','$precio', '$idBase','$id', NOW())";
         $conn->query($query_insert);
         $ultimo_id = $conn->insert_id;
         //Procesar textos
         foreach ($groupedTexts as $pos => $texts) {
          // Suponiendo que deseas insertar solo el último texto de cada posición
          $lastText = end($texts);
  
          // Preparar la consulta de inserción
          $stmt = $conn->prepare("INSERT INTO `inputtext` (`IDCURSO`, `POSITIONTEXT`, `STRINGTEXT`) VALUES (?, ?, ?)");
           
  
          // Vincular los parámetros
          $stmt->bind_param("iis", $ultimo_id, $pos, $lastText);
  
          // Ejecutar la consulta
          $stmt->execute();
  
          // Cerrar la declaración preparada
          $stmt->close();
      }
}





            // Registro exitoso
            $response = array("mensaje" => "a");
            header('Content-Type: application/json');
            echo json_encode($response);
        

}
