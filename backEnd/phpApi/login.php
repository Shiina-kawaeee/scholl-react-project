<?php 
    include 'header.php';

    include './condb.php';

    $connectionInfo = connectToDatabase();

    if($connectionInfo['status'] === 'success'){
        $conn = $connectionInfo['connection'];

        $data = json_decode(file_get_contents('php://input'));

        //data from login.jsx
        $email = $data->email;
        $password = $data->password;
        $sql = "SELECT * FROM nompang_user WHERE Member_email=:email AND Member_password=:pass";

        echo $email;
        echo $password;

        try{
            $result = $conn->prepare($sql);

            //bind
            $result->bindParam(':pass', $password);
            $result->bindParam(':email', $email);

            $result->execute();
            $row = $result->fetchAll(PDO::FETCH_ASSOC);


            if($row) {
                echo 'login successfully';
            }   else {
                echo 'failed to login';
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