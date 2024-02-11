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
        $sql = "SELECT * FROM nompang_user WHERE email=:email AND password=:pass";

        try{
            $result = $conn->prepare($sql);

            //bind
            $result->bindParam(':pass', $password);
            $result->bindParam(':email', $email);

            $result->execute();
            $row = $result->fetchAll(PDO::FETCH_ASSOC);

            if($row) {
                $response['status'] = array('loginStatus' => 'successfull');
                $response['process'] = array('process' => '200');
                $response['username'] = array('username' => $row[0]['username']);
                $response['userStatus'] = array('userStatus' => $row[0]['userStatus']);

                echo json_encode($response);
            }   else {
                $response['status'] = array('loginStatus' => 'failed');
                $response['process'] = array('process' => '500');

                echo json_encode($response);
            }
        }catch(PDOException $e) {
                header("HTTP/1.1 500 Internal Server Error");

                $response['status'] = array('status' => 'invalid');
                $response['error'] = array('error' => $e->getMessage());
                echo json_encode($response);
        }
    } else {
        echo json_encode(array('error' => $connectionInfo['DbConStatus']));
    }

?>