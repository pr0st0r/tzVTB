<?
	include "../inst/instapi.php";
	
	$arrayUrlImage = array();
	
	if(!empty($_POST["tag"])){
		
		$instapi = new InstApi();
		$content = $instapi->getImageOnTag($_POST["tag"]);
		
		if(!empty($content)){
			$items = json_decode($content, true);
			foreach($items["data"] as $item){
				$url = $item["images"]["standard_resolution"]["url"];
				array_push($arrayUrlImage, $url);
			}
		}
	}
	
	if(count($arrayUrlImage) > 0):
		foreach($arrayUrlImage as $url):?>
			<img src="<?=$url?>" alt="foto" />		
		<?endforeach?>
	<?endif?>