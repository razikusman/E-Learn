<?php 
	require 'connect.php';
	
	$subjects = [];
	
	//////////////////
	
	$sql1 = "SELECT * FROM `subjects`";
	if($result = mysqli_query($con,$sql1))
	{
		$cr = 0;
		while($row = mysqli_fetch_assoc($result)){
			$subjects[$cr]['Sub_ID'] = $row['subId'];
			$subjects[$cr]['Name'] = $row['subName'];
			$cr++;
		}echo json_encode($subjects);
			
	}
	else{
		http_response_code(404);
	}
	
?>