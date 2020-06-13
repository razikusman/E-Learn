<?php
require 'connect.php';
$id = $_GET['id'];

$sql = "DELETE FROM anouncement WHERE id = {$id}";

if(mysqli_query($con,$sql))
{
	http_response_code(204);
}


?>