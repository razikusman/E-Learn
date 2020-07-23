<?php 
	require 'connect.php';//conection to database
	$postdata = file_get_contents("php://input"); //get the jason type data
	
	if(isset($postdata) && !empty($postdata))
	{
		$request=json_decode($postdata);//breake json data in to string array
		
		//asign data to variables
		$name = mysqli_real_escape_string($con, trim($request -> name));
		$id = mysqli_real_escape_string($con, trim($request -> id));

		//add to user table
		$sql1 = "INSERT INTO subjects( subName,subId ) VALUES( '{$name}','{$id}')";
		
		if(mysqli_query($con,$sql1))
		{
			http_response_code(201);
		}
	}
	
?>