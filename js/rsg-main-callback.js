

if( jQuery('body').hasClass('toplevel_page_rsg_addons_page') ){
    jQuery('body.toplevel_page_rsg_addons_page').ready(function(){
        console.log('RSG MAIN PAGE ACTIVE');

        var cons = jQuery('li.toplevel_page_rsg_addons_page');
        var sub = cons.find('.wp-submenu');
        var url = jQuery('.rsg-basis').attr('dataurl');

        jQuery('a.rsg_plugin_links').each(function(){
            hre = jQuery(this).attr('href');
            jQuery(this).attr('href',url+hre);

            dat = jQuery(this).attr('data');
            sub.find('a').each(function(){
                refs = jQuery(this).attr('href');
                if( hre == refs ){
                    jQuery('.rsg-hide.'+dat).slideDown();
                }
            });
        });
    });
    
}
