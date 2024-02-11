<?php 
    include 'header.php';
    include './condb.php';

    $connectionInfo = connectToDatabase();

    if($connectionInfo['status'] === 'success'){
        $conn = $connectionInfo['connection'];

        $data = json_decode(file_get_contents('php://input'));

        //data from login.jsx
        $id = $data->id;
        $sql = "DELETE FROM nompang_products WHERE Pro_code=:id";

        try{
            $result = $conn->prepare($sql);

            //bind
            $result->bindParam(':id', $id);

            try {
                $result->execute();

                $response['status'] = array('deleteStatus' => 'Delete successfully');
                $response['process'] = array('process' => '200');

                echo json_encode($response);
            } catch(PDOException $e) {
                $response['error'] = array('error' => $e->getMessage());
                $response['process'] = array('process' => '500');

                echo json_encode($response);
            }

        }catch(PDOException $e) {
                $response['error'] = array('error' => $e->getMessage());
                echo json_encode($response);
        }
    } else {
        echo json_encode(array('error' => $connectionInfo['DbConStatus']));
    }

?>