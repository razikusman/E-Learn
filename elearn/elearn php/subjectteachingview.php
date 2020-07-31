<?php 
	require 'connect.php';
	
	$subjects = [];
	
	//////////////////
	
	$sql1 = "SELECT * FROM `subjects_teaching`";
	if($result = mysqli_query($con,$sql1))
	{
		$cr = 0;
		while($row = mysqli_fetch_assoc($result)){
			$subjects[$cr]['Sub_ID'] = $row['subID'];
			$subjects[$cr]['tID'] = $row['tNIC'];
			$cr++;
		}echo json_encode($subjects);
			
	}
	else{
		http_response_code(404);
	}
	
?>