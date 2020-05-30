<?php 
	require 'connect.php';
	$postdata = file_get_contents("php://input");
	
	if(isset($postdata) && !empty($postdata))
	{
		$request=json_decode($postdata);
		
		$name = mysqli_real_escape_string($con, trim($request -> name));
		$pContact = mysqli_real_escape_string($con, (int)($request -> pContact));
		$user = mysqli_real_escape_string($con, trim($request -> user));
		$NIC = mysqli_real_escape_string($con, trim($request -> NIC));
		$password = mysqli_real_escape_string($con, trim($request -> password));

		$sql1 = "INSERT INTO user( uType,uID,uPassword ) VALUES( '{$user}','{$NIC}','{$password}' )";
		
		if(mysqli_query($con,$sql1))
		{
			http_response_code(201);
		}
		
		$sql2 = "INSERT INTO parent( NIC,pName,pContact ) VALUES( '{$NIC}','{$name}','{$pContact}' )";
		
		if(mysqli_query($con,$sql2))
		{
			http_response_code(201);
		}
	}
	
?>