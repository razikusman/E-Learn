<?php 
	require 'connect.php';
	//$parent = [];
	$user = [];
	
	//////////////////
	
	$sql2 = "SELECT * FROM `teacher`";
	if($result = mysqli_query($con,$sql2))
	{
		$cr = 0;
		while($row = mysqli_fetch_assoc($result)){
			$user[$cr]['name'] = $row['tName'];
			$user[$cr]['password'] = $row['NIC'];
			$teacher[$cr]['type'] = $row['qualification'];
			//$user[$cr]['type'] = $row['uType'];
			//$id = $teacher[$cr]['Parent_NIC'];
			$cr++;
		}
		echo json_encode($user);
		
		
		
		
	}
	else{
		http_response_code(404);
	}
	
	//echo json_encode($teacher);
			
			/*$sql1 = "SELECT * FROM `parent` where NIC = $id ";
			if($result = mysqli_query($con,$sql1))
			{
				$cr = 0;
				while($row = mysqli_fetch_assoc($result)){
					//$student[$cr]['ParentNIC'] = $row['NIC'];
					$teacher[$cr]['Parent_Name'] = $row['pName'];
					$teacher[$cr]['Parent_Contact'] = $row['pContact'];
					
				}
				
			}
			
			else{
				http_response_code(404);
			}*/
?>