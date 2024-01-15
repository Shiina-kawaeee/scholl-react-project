<?php 
    function connectToDatabase(){
        $servername = 'localhost';
        $username = 'root';
        $password = '';
        $dbname = 'nompang';

        try{
            $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);

            $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

            echo 'connec to database successfully'
            return array('status' => 'success' ,'DbConStatus' => "Database Connect Success fully", 'connection' => $conn);

        }catch (PDOException $e) {
            echo 'connec to database failed'

            return array('status' => 'failed' ,'DbConStatus' => "Database Connect FAILED : " .$e->getMessage());
        }
    }
?>