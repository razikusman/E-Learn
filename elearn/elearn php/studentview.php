<?php 
	require 'connect.php';
	
	$student = [];
	
	//////////////////
	
	$sql1 = "SELECT * FROM `student`";
	if($result = mysqli_query($con,$sql1))
	{
		$cr = 0;
		while($row = mysqli_fetch_assoc($result)){
			$student[$cr]['Student_ID'] = $row['sID'];
			$student[$cr]['Name'] = $row['sName'];
			$student[$cr]['Grade'] = $row['sGrade'];
			$student[$cr]['Contact'] = $row['sContact'];
			$student[$cr]['Parent_NIC'] = $row['sParentNIC'];
			$id = $student[$cr]['Parent_NIC'];
			
			$sql1 = "SELECT * FROM `parent` where NIC = $id ";
			if($result2 = mysqli_query($con,$sql1))
			{
				
				while($row = mysqli_fetch_assoc($result2)){
					//$student[$cr]['ParentNIC'] = $row['NIC'];
					$student[$cr]['Parent_Name'] = $row['pName'];
					$student[$cr]['Parent_Contact'] = $row['pContact'];
					
				}
				
			}
			$cr++;
		}echo json_encode($student);
		
		
		
	}
	else{
		http_response_code(404);
	}
	
	
	/*
	
			
			
			else{
				http_response_code(404);
			}*/
?>