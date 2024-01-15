<?php 
    if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
        header("Access-Control-Allow-Origin: http://localhost:5173");
        header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
        header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
        header("Content-Type: application/json; charset=UTF-8");
        http_response_code(200);
        exit;
    }

    header("Access-Control-Allow-Origin: http://localhost:5173");
    header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
    header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
    header("Content-Type: application/json; charset=UTF-8");

    include './condb.php';

    $connectionInfo = connectToDatabase();

    if($connectionInfo['status'] === 'success'){
        $conn = $connectionInfo['connection'];

        $data = json_decode(file_get_contents('php://input'));
        $collectionName = $data->collectionName;
        $sql = "SELECT * FROM $collectionName";

        try{
            $result = $conn->prepare($sql);
            $result->execute();
            $row = $result->fetchAll(PDO::FETCH_ASSOC);
            
            $response['status'] = array('queryStatus' => 'resultValid');
            $response['data'] = array('result' => $row);
            echo json_encode($response);
        }catch(PDOException $e) {
                header("HTTP/1.1 500 Internal Server Error");

                $response['status'] = array('queryStatus' => 'invalid');
                $response['error'] = array('error' => $e->getMessage());
                echo json_encode($response);
        }
    } else {
        echo json_encode(array('error' => $connectionInfo['DbConStatus']));
    }
?>