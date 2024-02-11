<?php 
    include 'header.php';
    include './condb.php';

    $connectionInfo = connectToDatabase();

    if($connectionInfo['status'] === 'success'){
        $conn = $connectionInfo['connection'];

        $data = json_decode(file_get_contents('php://input'));

        //data from login.jsx
        $id = $data->id;
        $name = $data->name;
        $des = $data->des;
        $detail = $data->detail;
        $price = $data->price;
        $tot = $data->tot;
        $src = $data->src;
        $sql = "UPDATE nompang_products SET Pro_name=:name, Pro_des=:des, Pro_detail=:detail, Pro_price=:price, Pro_tot=:tot, Pro_src=:src WHERE Pro_code=:id";

        try{
            $result = $conn->prepare($sql);

            //bind
            $result->bindParam(':name', $name);
            $result->bindParam(':des', $des);
            $result->bindParam(':detail', $detail);
            $result->bindParam(':price', $price);
            $result->bindParam(':tot', $tot);
            $result->bindParam(':src', $src);
            $result->bindParam(':id', $id);

            try {
                $result->execute();

                $response['status'] = array('editStatus' => 'Edit successfully');
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