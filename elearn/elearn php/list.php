<?php 
require 'connect.php';
$Students = [];
$sql = "SELECT * FROM `Students`";

if($result = mysqli_query($con,$sql))
{
	$cr = 0;
	while($row = mysqli_fetch_assoc($result)){
		$Students[$cr]['sID'] = $row['sID'];
		$Students[$cr]['sname'] = $row['sname'];
		$cr++;
	}
	
	echo json_encode($Students);
}
else{
	http_response_code(404);
}


?>