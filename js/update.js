
setInterval(updateFirstTag, 10000);
setInterval(updateSecondTag, 10000);

function updateFirstTag(){
	if(firstTag){
		var content = document.getElementById("tagFirstResult");
		
		var xhr = new XMLHttpRequest();	
		var formData = new FormData();
		
		formData.append("tag", firstTag);
		xhr.open("POST", 'core/ajax/getImageAjax.php', false);
		xhr.send(formData);
		
		if(xhr.responseText && content.innerHTML !== xhr.responseText){
			content.innerHTML = xhr.responseText;
		}else{
			content.innerHTML = "По данному запросу ничего не найдено";
		}
	}
}

function updateSecondTag(){
	if(secondTag){
		var content = document.getElementById("tagSecondResult");
		
		var xhr = new XMLHttpRequest();	
		var formData = new FormData();
		
		formData.append("tag", secondTag);
		xhr.open("POST", 'core/ajax/getImageAjax.php', false);
		xhr.send(formData);
		
		if(xhr.responseText && content.innerHTML !== xhr.responseText){
			content.innerHTML = xhr.responseText;
		}else{
			content.innerHTML = "По данному запросу ничего не найдено";
		}
	}
}