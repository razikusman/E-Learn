<?php 
	require 'connect.php'; //conection to database
	$postdata = file_get_contents("php://input"); //get the jason type data
	if(isset($postdata) && !empty($postdata))
	{
		$request=json_decode($postdata);//breake json data in to string array
		
		
		
		//asign data to variables
		$h1 = mysqli_real_escape_string($con, trim($request -> Heading1));
		$h2 = mysqli_real_escape_string($con, trim($request -> Heading2));
		$content = mysqli_real_escape_string($con, trim($request -> content));


		//add to user table from student form
		$sql1 = "INSERT INTO anouncement( heading1,heading2,content ) VALUES('{$h1}','{$h2}','{$content}' )"; 
		
		if(mysqli_query($con,$sql1))
		{
			http_response_code(201);
		}
		
	}
		
		
?>