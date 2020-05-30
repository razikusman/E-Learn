<?php 
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers:*');
header('Access-Control-Allow-Methods: GET, POST, PUT, PATCH, DELETE, HEAD, OPTIONS');

Header ('Access-Control-Max-Age “1000”');
Header ('Access-Control-Allow-Headers "X-Requested-With, Content-Type, Origin, Authorization,Access-Control-Allow-Origin “*”');
Header ('Access-Control-Allow-Headers “Origin, X-Requested-With, Content-Type, Access-Control-Allow-Origin”');
Header ('Access-Control-Allow-Methods “PUT, GET, POST, DELETE, OPTIONS”');

	//db connection
	define('db_host','localhost');
	define('db_user','root');
	define('db_pass','');
	define('db_name','elearn');

	//connect with database
	function connect(){
		$connect = mysqli_connect(db_host ,db_user ,db_pass ,db_name);
		
		if(mysqli_connect_error($connect)){
			die("failed to connect : " .mysql_connect_error());
		}
		mysqli_set_charset($connect,"utf8");
		
		return $connect;
	}
	$con = connect();
?>