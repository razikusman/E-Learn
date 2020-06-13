<?php
require 'connect.php';
$subid = $_GET['subid'];

$sql = "DELETE FROM subjects WHERE subId = {$subid}";

if(mysqli_query($con,$sql))
{
	http_response_code(204);
}


?>