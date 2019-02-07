
(function($) {

    if( $('body').hasClass('toplevel_page_rsg_addons_page') ){
        var cons = $('li.toplevel_page_rsg_addons_page');
        var sub = cons.find('.wp-submenu');
        var url = $('.rsg-basis').attr('dataurl');

        $('a.rsg_plugin_links').each(function(){
            hre = $(this).attr('href');
            $(this).attr('href',url+hre);

            dat = $(this).attr('data');
            sub.find('a').each(function(){
                refs = $(this).attr('href');
                if( hre == refs ){
                    $('.rsg-hide.'+dat).slideDown();
                }else{
                    $('.rsg-hide.'+dat).slideUp();
                }
            });
        });
    }

}(jQuery));