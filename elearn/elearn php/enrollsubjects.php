<?php
	require 'connect.php'; //conection to database
	/*$postdata = file_get_contents("php://input"); //get the jason type data
	if(isset($postdata) && !empty($postdata))
	{
		$request=json_decode($postdata);//breake json data in to string array
		//asign data to variables
		$studentid = mysqli_real_escape_string($con, (int)($request -> stuid));
		$subid = mysqli_real_escape_string($con, (int)($request -> subid));
		
		

		//add to subjects_following table
		$sql1 = "INSERT INTO subjects_following(subID, sID) VALUES ( 1,1234)"; 
		
		{
			http_response_code(201);
		}
	}*/
	
	
	$data = $_GET['data'];
	$out=str_split($data);
	$d1= array_slice($out,0,4);
	$d2= array_slice($out,4);
	$stuid = implode("",$d1);
	$subid = implode("",$d2);



	$sql = "INSERT INTO subjects_following (subID, sID) VALUES ('{$subid}','{$stuid}')";


	if(mysqli_query($con,$sql))
	{
		http_response_code(204);
	}
	else{
		http_response_code(404);
	}/*	$stuid = implode("",$d);*/
?>