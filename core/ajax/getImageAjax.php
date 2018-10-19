<?
	include "../inst/instapi.php";
	
	$arrayUrlImage = array();
	
	if(!empty($_POST["tag"])){
		
		$instapi = new InstApi();
		$content = $instapi->getImageOnTag($_POST["tag"]);
		
		if(count($content) > 0){
			foreach($content["data"] as $item){
				$url = $item["images"]["standard_resolution"]["url"];
				array_push($arrayUrlImage, $url);
			}
		}
	
	echo json_encode($arrayUrlImage);
	}

?>