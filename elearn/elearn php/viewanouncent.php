<?php 
	require 'connect.php';
	
	$anouncemnt = [];
	
	//////////////////
	
	$sql1 = "SELECT * FROM `anouncement`";
	if($result = mysqli_query($con,$sql1))
	{
		$cr = 0;
		while($row = mysqli_fetch_assoc($result)){
			$anouncemnt[$cr]['h1'] = $row['heading1'];
			$anouncemnt[$cr]['h2'] = $row['heading2'];
			$anouncemnt[$cr]['content'] = $row['content'];
			$anouncemnt[$cr]['id'] = $row['id'];
			$cr++;
		}echo json_encode($anouncemnt);
		
		
		
	}
	else{
		http_response_code(404);
	}
	
?>