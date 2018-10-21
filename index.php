<!DOCTYPE html>
<html>
	<head>
		<title>Монитор тегов</title>
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
		<link rel="stylesheet" href="css/style.css">
		<link href="https://fonts.googleapis.com/css?family=Charmonman" rel="stylesheet">
	</head>
	<body>
	<header>
		<div class="title">
			Поиск по # тегам
		</div>
		<a href="foto.php">Просмотреть сохранённые фотографии</a>
	</header>
	<section>
		<div id="tagFirst">
			<input type="text" name="tagFirst" placeholder="# Введите тег"  onkeyup="getImage(this)" />
			<div id="tagFirstResult" style="padding-top:15px;"></div>
		</div>
		<div id = "tagSecond">
			<input type="text" name="tagSecond" placeholder="# Введите тег"  onkeyup="getImage(this)" />
			<div id="tagSecondResult" style="padding-top:15px;"></div>
		</div>
		<div id = "general">
			<p>Общие фотографии</p>
			<button onclick="saveImage(this)" >Сохранить</button>
			<div id="generalImg" ></div>
		</div>
		<div style="clear:both"></div>
	</section>
	
		<script src="js/main.js"></script>
		<script src="js/update.js"></script>
	</body>
</heml>