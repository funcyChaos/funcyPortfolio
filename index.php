<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>funcyChaos.com</title>

	<?php wp_head();?>
</head>
<body>
	<div class="header">
		<div class="left" id="logo_left">
			<img src="<?php echo get_theme_file_uri('/img/funcyLogo-sm.png');?>" alt="funcy logo">
		</div>
		<div class="right">
			<a href="">
				<h1>funcyChaos</h1>
			</a>
		</div>
		<!-- <div class="right">
			<i class="fas fa-bars fa-lg" id="dropdown_bars"></i>
		</div> -->
	</div>
	
	<div class="content">
		<div class="left">
			<div class="text-wrapper">
				<h3>Heavy Experience</h3>
				<ul>
					<li>Wordpress Development</li>
					<li>PHP</li>
					<li>HTML/CSS</li>
					<li>Javascript</li>
				</ul>
			</div>
			<div class="text-wrapper">
				<h3>Medium Experience</h3>
				<ul>
					<li>Embedded C</li>
					<li>Assembly</li>
					<li>C++</li>
				</ul>
			</div>
			<div class="text-wrapper">
				<h3>Light Experience</h3>
				<ul>
					<li>REACT</li>
					<li>Python</li>
					<li>Node</li>
					<li>MongoDB</li>
				</ul>
			</div>
		</div>

		<div class="right">
			<div class="site-slide active" id="slide_1">
				<div class="text-wrapper">
					<h3>Wordpress Blog Theme</h3>
					<a href="https://a-reilly.dev" target="_blank"><h5>a-reilly.dev</h5></a>
				</div>
				<div class="img-wrapper" href="https://a-reilly.dev" target="_blank">
					<img src="<?php echo get_theme_file_uri('/img/screenshot-a-reilly.dev.png');?>" alt="a-reilly.dev screenshot">
				</div>
			</div>

			<div class="site-slide" id="slide_2">
				<div class="text-wrapper">
					<h3>Wordpress Store Theme</h3>
					<a href="https://github.com/funcyChaos/funcyStore" target="_blank"><h5>Repository</h5></a>
				</div>
				<div class="img-wrapper">
					<a href="https://github.com/funcyChaos/funcyStore" target="_blank">
						<img src="<?php echo get_theme_file_uri('/img/funcy-store-screenshot.png');?>" alt="a-reilly.dev screenshot">
					</a>
				</div>
			</div>

			<div class="site-slide" id="slide_3">
				<div class="text-wrapper">
					<h3>React Home Page</h3>
					<a href="https://funcychaos.github.io/" target="_blank"><h5>funcychaos.github.io</h5></a>
				</div>
				<div class="img-wrapper">
					<a href="https://funcychaos.github.io/" target="_blank">
						<img src="<?php echo get_theme_file_uri('/img/the-game.png');?>" alt="a-reilly.dev screenshot">
					</a>
				</div>
			</div>

			<div class="site-slide" id="slide_4">
				<div class="text-wrapper">
					<h3>Wordpress Slap Count Plugin</h3>
					<a href="https://github.com/funcyChaos/count_slaps" target="_blank"><h5>Repository</h5></a>
				</div>
				<div class="img-wrapper">
					<a href="https://github.com/funcyChaos/count_slaps" target="_blank">
						<img src="<?php echo get_theme_file_uri('/img/slap-fight.png');?>" alt="a-reilly.dev screenshot">
					</a>
				</div>
			</div>

			<div class="selector">
				<div class="arrow" id="left_arrow">
					<-
				</div>
				<div class="options" id="bubbles">
					<i class="fas fa-circle active" id="bubble_1"></i>
					<i class="fas fa-circle" id="bubble_2"></i>
					<i class="fas fa-circle" id="bubble_3"></i>
					<i class="fas fa-circle" id="bubble_4"></i>
				</div>
				<div class="arrow" id="right_arrow">
					->
				</div>
			</div>
		</div>
	</div>

	<div class="footer">
		<a href="https://github.com/funcyChaos" target="_blank">
			<i class="fab fa-github"></i>
		</a>
		<a href="https://www.linkedin.com/in/austin-reilly-7a60814a/" target="_blank">
			<i class="fab fa-linkedin"></i>
		</a>
		<a href="http://www.a-reilly.dev" target="_blank">
			<i class="fab fa-blogger-b"></i>
		</a>
		<a href="https://www.instagram.com/funcychaos/" target="_blank">
			<i class="fab fa-instagram"></i>
		</a>
	</div>

	<script src="https://kit.fontawesome.com/aebdbe8212.js" crossorigin="anonymous"></script>
	<?php wp_footer();?>
</body>
</html>