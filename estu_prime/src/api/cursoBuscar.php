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
$data = json_decode($json_data, true);
if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($data['buscado'])) {
    $buscado = $data['buscado'];
    if($buscado == null){
        $response = array(
            "mensaje" => "Buscado vacio"
        );
    }else{
    $sql = "SELECT idCurso, titulo,ruta, precio FROM curso WHERE titulo LIKE '%$buscado%' AND docente_id = '$id'";
    $result = $conn->query($sql);
    $cursos = array();
if ($result->num_rows > 0) {
  while($row = $result->fetch_assoc()) {
    $curso = array(
      "idCurso" => $row["idCurso"],
      "titulo" => $row["titulo"],
      "ruta" => $row["ruta"],
      "precio" => $row["precio"]
    );
    array_push($cursos, $curso);
  }
}
    echo json_encode($cursos);
}
}else{

    $response = array(
        "mensaje" => "Buscado vacio");
        echo json_encode($response);
}