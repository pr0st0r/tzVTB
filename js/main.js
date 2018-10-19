var firstTag = "";
var UrlImagesFirstTag = new Array();

var secondTag = "";
var UrlImagesSecondTag = new Array();

var UrlImagesGeneral = new Array();

   /* ----- Получаем фотографии и добовляем на страницу ----- */
function getImage(item){
	
	var xhr = new XMLHttpRequest();	
	var formData = new FormData();
	
	var validTag = getValidTag(item.value);
	
	formData.append("tag", validTag);
	xhr.open("POST", 'core/ajax/getImageAjax.php', false);
	xhr.send(formData);
	
	try{
		if(item.name == "tagFirst"){
			firstTag = validTag;
			UrlImagesFirstTag = JSON.parse(xhr.responseText);
			addImage(UrlImagesFirstTag, item.name);
		}else if(item.name == "tagSecond"){
			econdTag = validTag;
			UrlImagesSecondTag = JSON.parse(xhr.responseText);
			addImage(UrlImagesSecondTag, item.name);
		}
	}catch{
		var elem = document.getElementById(item.name + "Result");
		elem.innerHTML = "Некоректный запрос";
	}
	
	getGeneralImage(UrlImagesFirstTag, UrlImagesSecondTag);
};

	/* ----- Добавление на страницу ----- */
function addImage(arrayUrlImage, idDiv){
	var elem = document.getElementById(idDiv + "Result");

	if(arrayUrlImage.length > 0){
		var img = "";
		for(var i = 0; i < arrayUrlImage.length; i++){
			img += "<img src=" + arrayUrlImage[i] +" />"
		}
		elem.innerHTML = img;
	}else{
		elem.innerHTML = "По данному запросу ничего не найдено";
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

 /* ----- Проверка на общее фотографии и получание их ----- */
function getGeneralImage(UrlImagesFirstTag, UrlImagesSecondTag){
	var elem = document.getElementById("generalImg");
	
	if(UrlImagesFirstTag.length > 0 && UrlImagesSecondTag.length > 0){
		for(var i = 0; i < UrlImagesFirstTag.length; i++){
			if(UrlImagesSecondTag.indexOf(UrlImagesFirstTag[i]) != -1){
				UrlImagesGeneral.push(UrlImagesFirstTag[i]);
			}
		}
		
		if(UrlImagesGeneral.length > 0){
			var img = "";
			for(var i = 0; i < UrlImagesGeneral.length; i++){
				img += "<img src=" + UrlImagesGeneral[i] +" />"
			}
			elem.innerHTML = img;
		}else{
			elem.innerHTML = "Общих фотографий не найдено!";
		}
	}else{
		elem.innerHTML = "";
	}
}

  /* ----- Сохранение фотографий в базу данных ----- */
function saveImage(item){
	if(UrlImagesGeneral.length > 0){
		var xhr = new XMLHttpRequest();	
		var formData = new FormData();
		
		formData.append("image", JSON.stringify(UrlImagesGeneral));
		xhr.open("POST", 'core/ajax/saveAjax.php', false);
		xhr.send(formData);
		
		item.innerText = "Данные успешно сохранены";
		var elem = document.getElementById("generalImg");
		elem.innerHTML = "";
	}else{
		item.innerText = "Пустой блок. Попробовать снова?";
	}
}

 /* ----- Обновление каждые 10 секунд. Недочёт в том что в 3 столбец при каждом запросе добавляются фотографии.
          Зато видно что функции работаю и запросы проходят -----*/
setInterval(updateFirstTag, 10000);
setInterval(updateSecondTag, 10000);

function updateFirstTag(){
	if(firstTag){
		var item = {
			value : firstTag,
			name : "tagFirst"
		}
		getImage(item);
	}
}

function updateSecondTag(){
	if(secondTag){
		var item = {
			value : secondTag,
			name : "tagSecond"
		}
		getImage(item);
	}
}