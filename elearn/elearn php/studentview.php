<?php 
	require 'connect.php';
	$parent = [];
	$student = [];
	
	//////////////////
	
	$sql2 = "SELECT * FROM `student`";
	if($result = mysqli_query($con,$sql2))
	{
		$cr = 0;
		while($row = mysqli_fetch_assoc($result)){
			$student[$cr]['Student_ID'] = $row['sID'];
			$student[$cr]['Name'] = $row['sName'];
			$student[$cr]['Grade'] = $row['sGrade'];
			$student[$cr]['Contact'] = $row['sContact'];
			$student[$cr]['Parent_NIC'] = $row['sParentNIC'];
			$id = $student[$cr]['Parent_NIC'];
			$cr++;
			
			//echo json_encode($student);
			
			$sql1 = "SELECT * FROM `parent` where NIC = $id ";
			if($result = mysqli_query($con,$sql1))
			{
				$cr = 0;
				while($row = mysqli_fetch_assoc($result)){
					//$student[$cr]['ParentNIC'] = $row['NIC'];
					$student[$cr]['Parent_Name'] = $row['pName'];
					$student[$cr]['Parent_Contact'] = $row['pContact'];
					
				}
				
			}
			
			else{
				http_response_code(404);
			}
			
			echo json_encode($student);
			
		}
		
		
	}
	else{
		http_response_code(404);
	}
?>