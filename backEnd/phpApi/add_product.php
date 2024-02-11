<?php 
    include 'header.php';
    include './condb.php';

    $connectionInfo = connectToDatabase();

    if($connectionInfo['status'] === 'success'){
        $conn = $connectionInfo['connection'];

        //data from login.jsx
        $name = $_POST['name'];
        $des = $_POST['des'];
        $detail = $_POST['detail'];
        $price = $_POST['price'];
        $tot = $_POST['tot'];
        $type = $_POST['type'];
        $src = basename($_FILES["file"]["name"]);
        $sql = "INSERT INTO nompang_products (Pro_name, Pro_des, Pro_detail, Pro_type, Pro_price, Pro_tot, Pro_src) VALUES(:name, :des, :detail, :type, :price, :tot, :src)";


        try{
            $result = $conn->prepare($sql);

            //bind
            $result->bindParam(':name', $name);
            $result->bindParam(':des', $des);
            $result->bindParam(':detail', $detail);
            $result->bindParam(':type', $type);
            $result->bindParam(':price', $price);
            $result->bindParam(':tot', $tot);
            $result->bindParam(':src', $src);

            try {
                $result->execute();

                //handle file
                $uploadDir = '../assets/shop/';
                $fileName = basename($_FILES['file']['name']);
                $filePath = $uploadDir . $fileName;
    
                if (move_uploaded_file($_FILES['file']['tmp_name'], $filePath)) {
                    //send status
                    $response['status'] = array('insertStatus' => 'Insert successfully');
                    $response['process'] = array('process' => '200');
                }

                echo json_encode($response);
            } catch(PDOException $e) {
                $response['error'] = array('error' => $e->getMessage());
                $response['process'] = array('process' => '500');

                echo json_encode($response);
            }

        }catch(PDOException $e) {
                $response['error'] = array('error' => $e->getMessage());
                $response['process'] = array('process' => '500');

                echo json_encode($response);
        }
    } else {
        echo json_encode(array('error' => $connectionInfo['DbConStatus']));
    }

?>