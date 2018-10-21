<?
	$db;
	
	if(!empty($_POST["image"])){
		if(!file_exists('../../mydb.db')){
			$db = new SQLite3('../../mydb.db');
			$sql="CREATE TABLE 'image'
				   ('id' INTEGER PRIMARY KEY  AUTOINCREMENT  NOT NULL  UNIQUE , 
				   'name' VARCHAR(255))";
			$db->query($sql);
		}else{
			$db = new SQLite3('../../mydb.db');
		}
	
		$items = json_decode($_POST["image"]);
	
		foreach($items as $item){
			$sql = "INSERT INTO image (name) VALUES ('".$item."')";
			$db->query($sql);
		}
		
		$db->close();
		
		echo 1;
	}
?>