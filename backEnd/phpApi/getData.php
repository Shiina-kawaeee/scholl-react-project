<?php 
    include './header.php';

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