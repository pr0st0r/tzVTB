var firstTag = "";
var secondTag = "";

   /* ----- Получаем фотографии и добовляем на страницу ----- */
function getImage(item){
	
	var xhr = new XMLHttpRequest();	
	var formData = new FormData();
	
	var validTag = getValidTag(item.value);
	
	formData.append("tag", validTag);
	xhr.open("POST", 'core/ajax/getImageAjax.php', false);
	xhr.send(formData);
	

	if(item.name == "tagFirst"){
		firstTag = validTag;
	}else if(item.name == "tagSecond"){
		secondTag = validTag;
	}

	addImage(xhr.responseText, item.name);
};

	/* ----- Добавление на страницу ----- */
function addImage(content, idDiv){
	var elem = document.getElementById(idDiv + "Result");

	if(content){
		elem.innerHTML = content;
	}else{
		elem.innerHTML = "По данному запросу ничего не найдено";
	}
	
	getGeneralImage();
}

 /* ----- Проверка на общее фотографии и получание их ----- */
function getGeneralImage(){
	
	if(firstTag && secondTag){
		var elem = document.getElementById("generalImg");
		var xhr = new XMLHttpRequest();	
		var formData = new FormData();
		
		formData.append("firstTag", firstTag);
		formData.append("secondTag", secondTag);
		
		xhr.open("POST", 'core/ajax/getGeneralImageAjax.php', false);
		xhr.send(formData);
		
		elem.innerHTML = xhr.responseText;
	}
}

  /* ----- Получаем корректный тег ----- */
function getValidTag(tag){
	var validTag = tag.trim();
	if(validTag.charAt(0) == "#"){
		return validTag.substr(1);
	}else{
		return validTag;
	}
}

  /* ----- Сохранение фотографий в базу данных ----- */
function saveImage(item){
	var elem = document.getElementById("generalImg");
	var arrElement = document.getElementById("generalImg").children;
	var url = [];
	
	if(arrElement.length > 0){
		for(var i = 0; i < arrElement.length; i++){
			url.push(arrElement[i]["src"]);
		}
		var xhr = new XMLHttpRequest();	
		var formData = new FormData();
		formData.append("image", JSON.stringify(url));
		
		xhr.open("POST", 'core/ajax/saveAjax.php', false);
		xhr.send(formData);
		
		if(xhr.responseText == "1"){
			item.innerText = "Данные успешно сохранены";
			elem.innerHTML = "";
		}else{
			elem.innerHTML = "Данные не сохранены";
		}			
	}else{
		item.innerText = "Пустой блок. Попробовать снова?";
	}
}