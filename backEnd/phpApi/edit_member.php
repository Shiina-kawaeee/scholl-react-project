<?php 
    include './header.php';

    $data = json_decode(file_get_contents('php://input'));

    $name = $data->name;
    $contact = $data->contact;
    $username = $data->username;
    $password = $data->password;
    $email = $data->email;
?>