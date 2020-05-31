<?php 
	require 'connect.php';
	$user = [];
	$parent = [];
	$sql1 = "SELECT * FROM `user`";
	if($result = mysqli_query($con,$sql1))
	{
		$cr = 0;
		while($row = mysqli_fetch_assoc($result)){
			$user[$cr]['NIC'] = $row['uID'];
			//$user[$cr]['password'] = $row['uPassword'];
			$user[$cr]['user'] = $row['uType'];
			$cr++;
		}
		
		echo json_encode($user);
	}
	else{
		http_response_code(404);
	}
	
	//////////////////
	
	$sql2 = "SELECT * FROM `parent`";
	if($result = mysqli_query($con,$sql2))
	{
		$cr = 0;
		while($row = mysqli_fetch_assoc($result)){
			//$parent[$cr]['NIC'] = $row['NIC'];
			$parent[$cr]['name'] = $row['pName'];
			$parent[$cr]['contact'] = $row['pContact'];
			$cr++;
		}
		
		echo json_encode($parent);
	}
	else{
		http_response_code(404);
	}
?>