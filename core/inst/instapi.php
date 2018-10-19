<?
	class InstApi{
		
		const ACCESS_TOKEN = "7162480826.418b30a.3b61ffe5475e44659f53b5d8b5d676c4";
		
		function getImageOnTag($tag){		
			$info = file_get_contents("https://api.instagram.com/v1/tags/".$tag."/media/recent?access_token=".$this::ACCESS_TOKEN);
			return json_decode($info, true);
		}
	}
?>




