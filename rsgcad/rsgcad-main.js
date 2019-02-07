(function($) {
	if( $('body').hasClass('rsg-addons_page_rsgcad') )	{
		console.log( 'ACTIVE PAGE RSG Countries Array for Developers' );
		$('.rsgcad_page').ready(function(){
			jQuery.ajax({
	            type : "get",
	            dataType : "json",
	            url : myAjax.ajaxurl,
	            data : { action : "rsgcad_sample_disp_ajax"},
	            success: function(res) { 
	            	$('.rsgcad_sample_disp').html(res);
	            }
	        });
		});
	}
}(jQuery));
