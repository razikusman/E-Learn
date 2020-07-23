<?php 
	require 'connect.php'; //conection to database
	$postdata = file_get_contents("php://input"); //get the jason type data
	if(isset($postdata) && !empty($postdata))
	{
		$request=json_decode($postdata);//breake json data in to string array
		//asign data to variables
		$subid = mysqli_real_escape_string($con, trim($request -> name));
		$sid = mysqli_real_escape_string($con, trim($request -> grad));
		
		

		//add to subjects_following table
		$sql1 = "INSERT INTO subjects_following( subID,sID) VALUES( '{$subid}','{$sid}')"; 
		
		if(mysqli_query($con,$sql1))
		{
			http_response_code(201);
		}
	}
	
?>