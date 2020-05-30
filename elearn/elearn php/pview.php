<?php 
	require 'connect.php';
	$parent = [];
	$sql = "SELECT * FROM `parent`";

	if($result = mysqli_query($con,$sql))
	{
		$cr = 0;
		while($row = mysqli_fetch_assoc($result)){
			$parent[$cr]['NIC'] = $row['NIC'];
			$parent[$cr]['student'] = $row['sID'];
			$parent[$cr]['Contact number'] = $row['pContact'];
			$cr++;
		}
		
		echo json_encode($parent);
	}
	else{
		http_response_code(404);
	}
?>