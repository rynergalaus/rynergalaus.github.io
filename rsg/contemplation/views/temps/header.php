<!DOCTYPE html>

<head>
    <title><?php echo isset($title) ? $title . ' | RSG' : 'RSG - Codeigniter'; ?></title>
	<?php
		include_once('includes/meta_styles.php');
	?>
</head>

<body class="rsg-codeigniter">
	<header class="rsg-vertical-menu-popup-toggle">
		<div> <span><i class="fas fa-cogs"></i></span> </div>
	</header>
	<nav class="rsg-popup-nav rsg-vertical-menu-popup-container">
		<ul class="rsg-vertical-menu-popup">
			<li> <a href="<?php echo $rsg_home; ?>">Home</a> </li>
			<li> <a href="<?php echo $rsg_about; ?>">About</a> </li>
			<li> <a href="<?php echo $rsg_contact; ?>">Contact</a> </li>
			<li> <a href="<?php echo $rsg_wp_plugins; ?>">Wordpress Plugins</a> </li>
			<li> <a href="<?php echo $rsg_wp_themes; ?>">Wordpress Themes</a> </li>
			<li> <br><span href="#" class="rsg-button_main rsg-btn_gray">Login</span> </li>
		</ul>
	</nav>