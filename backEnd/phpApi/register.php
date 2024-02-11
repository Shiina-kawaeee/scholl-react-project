<?php 
    include 'header.php';
    include './condb.php';

    $connectionInfo = connectToDatabase();

    if($connectionInfo['status'] === 'success'){
        $conn = $connectionInfo['connection'];

        $data = json_decode(file_get_contents('php://input'));

        //data from login.jsx
        $name = $data->name;
        $username = $data->username;
        $password = $data->password;
        $email = $data->email;
        $contact = $data->contact;
        $sql = "SELECT * FROM nompang_user WHERE email=:email";

        try{
            $result = $conn->prepare($sql);

            //bind
            $result->bindParam(':email', $email);

            $result->execute();
            $row = $result->fetchAll(PDO::FETCH_ASSOC);

            if($row) {
                $response['status'] = array('registerStatus' => 'This Email already used');
                $response['process'] = array('process' => '500');

                echo json_encode($response);
            }   else {
                $sql = "INSERT INTO nompang_user (name, contact, username, password, email, userStatus) VALUES (:name, :contact, :username, :password, :email, 2)";
                $result = $conn->prepare($sql);

                //bind
                $result->bindParam(':name', $name);
                $result->bindParam(':contact', $contact);
                $result->bindParam(':username', $username);
                $result->bindParam(':password', $password);
                $result->bindParam(':email', $email);

                try{
                    $result->execute();

                    $response['status'] = array('registerStatus' => 'Register successfully');
                    $response['process'] = array('process' => '200');

                    echo json_encode($response);
                } catch(PDOException $e) {
                    $response['error'] = array('error' => $e->getMessage());
                    echo json_encode($response);
                }
            }
        }catch(PDOException $e) {
                $response['error'] = array('error' => $e->getMessage());
                echo json_encode($response);
        }
    } else {
        echo json_encode(array('error' => $connectionInfo['DbConStatus']));
    }

?>