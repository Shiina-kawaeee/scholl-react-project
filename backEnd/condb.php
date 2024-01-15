<?php 
    function connectToDatabase(){
        $servername = 'localhost';
        $username = 'root';
        $password = 'root';
        $dbname = 'nompang';

        try{
            $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);

            $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

            return array('status' => 'success' ,'DbConStatus' => "Database Connect Success fully", 'connection' => $conn);

        }catch (PDOException $e) {
            return array('status' => 'failed' ,'DbConStatus' => "Database Connect FAILED : " .$e->getMessage());
        }
    }
?>