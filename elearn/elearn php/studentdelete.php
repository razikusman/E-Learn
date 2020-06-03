<?php
require 'connect.php';
$students = [];
$userid = $_GET['userid'];

$sql = "DELETE FROM 'user' WHERE uID = {$userid}";

if(mysqli_query($con,$sql))
{
	http_response_code(204);
}


?>