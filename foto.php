<?

$db = new SQLite3('mydb.db');

$result = $db->query("SELECT * FROM image");

?>

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
		<a href="/">На главную</a>
	</header>
	<section>
		<div class="image">
			<? while($row = $result->fetchArray()):?>
				<img src="<?=$row['name']?>">
			<?endwhile;?>
		</div>
	</section>
	
		<script src="js/main.js"></script>
	</body>
</heml>

<?$db->close();?>