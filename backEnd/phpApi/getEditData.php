<?php 
    include './header.php';

    include './condb.php';

    $connectionInfo = connectToDatabase();

    if($connectionInfo['status'] === 'success'){
        $conn = $connectionInfo['connection'];

        $data = json_decode(file_get_contents('php://input'));

        $id = $data->id;
        $sql = "SELECT * FROM nompang_products WHERE Pro_code=:id";

        try{
            $result = $conn->prepare($sql);

            $result->bindParam(":id", $id);
            $result->execute();
            $row = $result->fetchAll(PDO::FETCH_ASSOC);
            
            if($row){
                $response['status'] = array('queryStatus' => 'resultValid');
                $response['data'] = array('result' => $row[0]);
                $response['process'] = array('process' => '200');

                echo json_encode($response);
            } else{
                $response['process'] = array('process' => '500');
                echo json_encode($response);
            }
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