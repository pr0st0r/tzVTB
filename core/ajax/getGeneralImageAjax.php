<?
	include "../inst/instapi.php";
	
	$arrayUrlImage = array();
	
	if(!empty($_POST["firstTag"]) && !empty($_POST["secondTag"])){
		$instapi = new InstApi();
		
		$firstTag = $instapi->getImageOnTag($_POST["firstTag"]);
		$secondTag = $instapi->getImageOnTag($_POST["secondTag"]);
		
		if(!empty($firstTag) && !empty($secondTag)){
			
			$itemsFirstTag = json_decode($firstTag, true);
			$itemsSecondTag = json_decode($secondTag, true);
		
			foreach($itemsFirstTag["data"] as $firstTagUrl){
				foreach($itemsSecondTag["data"] as $secondTagUrl){
					if($firstTagUrl["images"]["standard_resolution"]["url"] == $secondTagUrl["images"]["standard_resolution"]["url"]){
						$url = $firstTagUrl["images"]["standard_resolution"]["url"];
						array_push($arrayUrlImage, $url);
					}					
				}			
			}
		}
		
		if(count($arrayUrlImage) > 0){
			foreach($arrayUrlImage as $url){?>
				<img src="<?=$url?>" alt="foto">
			<?}
		}
	}
?>