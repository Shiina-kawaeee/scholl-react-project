<?php 
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: access");
    header("Access-Control-Allow-Methods: POST");
    header("Content-Type: application/json; charset=UTF-8");
    header("Access-Control-Allow-Headers: Content-Type,
        Access-Control-Allow-Headers, Authorization, X-Requested-With");

    include './condb.php';

    $data = json_decode(file_get_contents('php://input'));

    $collectionName = $data->collectionName;
    $sql = "SELECT * FROM $collectionName";

    $result = $conn->query($sql);

    if($result){
        $response['data'] = array('status' => 'valid');
        echo json_encode($response);
    } else {
        $response['data'] = array('status' => 'invalid');
        echo json_encode($response);
    }
?>