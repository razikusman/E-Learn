<?php 
	require 'connect.php';//conection to database
	$postdata = file_get_contents("php://input"); //get the jason type data
	
	if(isset($postdata) && !empty($postdata))
	{
		$request=json_decode($postdata);//breake json data in to string array
		
		//asign data to variables
		$name = mysqli_real_escape_string($con, trim($request -> name));
		$tContact = mysqli_real_escape_string($con, (int)($request -> contact));
		$user = mysqli_real_escape_string($con, trim($request -> user));
		$NIC = mysqli_real_escape_string($con, trim($request -> userid));
		$password = mysqli_real_escape_string($con, trim($request -> password));

		//add to user table
		$sql1 = "INSERT INTO user( uType,uID,uPassword ) VALUES( '{$user}','{$NIC}','{$password}' )";
		
		if(mysqli_query($con,$sql1))
		{
			http_response_code(201);
		}
		
		//add to teacher table
		$sql2 = "INSERT INTO teacher( NIC,tName,tContact ) VALUES( '{$NIC}','{$name}','{$tContact}' )";
		
		if(mysqli_query($con,$sql2))
		{
			http_response_code(201);
		}
	}
	
?>