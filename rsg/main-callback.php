<?php

if( !function_exists('rsg_addons_page_callback') ){
	function rsg_addons_page_callback(){
		?>
		<style>
		
		</style>
		<div style="padding: 20px;">
			<h1 style="text-align:center; font-size:30px; color:#fff;" >COMPILATION OF ADDONS</h1><br>
			Active Addons / Plugins
			<div style="padding:10px 20px;">
				<?php
					if(class_exists('RSGLTA')){
						echo '<a href="'.get_home_url().'/wp-admin/admin.php?page=rsglta"><strong>RSG Libraries Theme Addon</strong></a>';
						echo '<div style="padding:5px 20px;">
								Includes common libraries usable for your theme.
							 </div><br>';
					}
					if(class_exists('RSGCAD')){
						echo '<a href="'.get_home_url().'/wp-admin/admin.php?page=rsgcad"><strong>RSG Countries Array for Developers</strong></a>';
						echo '<div style="padding:5px 20px;">
								List of all countries and their respective states / provinces / regions / municipalities.<br>
								List update as of February 2019.
							 </div><br>';
					}
					if(class_exists('RSGGDS')){
						echo '<a href="'.get_home_url().'/wp-admin/admin.php?page=rsggds"><strong>RSG Retrieve Google Drive Spreadsheet</strong></a>';
						echo '<div style="padding:5px 20px;">
								Retrieve contents from google drive spreadsheet and display it as a table.<br>
								Uses the <a href="https://mottie.github.io/tablesorter/docs/">tablesorter script library</a>.
							 </div><br>';
					}
				?>
			</div>
		</div>
		<?php
	}	
}