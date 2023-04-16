<?php
error_reporting(E_WARNING);

$servername='localhost';
$username='root';
$password='';
$dbname='booking_details';

$conn =mysqli_connect($servername,$username,$password, $dbname);

if (!$conn){
    die("Connection failed:".mysqli_connect_error());
}

    echo "Details submitted successfully";

?>