/*!
  * RSG-JS-GIT v0.0.1
  * Copyright 2019 Ryner S. Galaus (https://profiles.wordpress.org/rynergalaus)
*/
(function($) {
/*
*********************************
* CUSTOM SELECTS
*********************************
*/window.rsg_input_select = rsg_input_select();
    function rsg_input_select(){
        $('.rsg-input_select .rsg-input_select_enters input').focus(function(){
            var id = $(this).attr('id');
            $('.rsg-input_select .rsg-input_select_options').slideUp();
            $('.rsg-input_select .rsg-input_select_enters input').prop('disabled',false).removeClass('opened');

            $(this).prop('disabled',true);
            var options = $('.rsg-input_select_options.'+id);
            options.slideDown();   
            $(this).addClass('opened'); 

        });

        $('.rsg-input_select .rsg-input_select_options span').click(function(){
            var data = $(this).attr('data');
            var vals = $(this).attr('value');
            $('.rsg-input_select .rsg-input_select_enters input').prop('disabled',false).removeClass('opened');
            $('.rsg-input_select .rsg-input_select_enters input#'+data).val(vals).attr('value',vals);
            $('.rsg-input_select .rsg-input_select_options').slideUp();
        });

    };

/*
*********************************
* CHECKBOXES
*********************************
*/window.rsg_checkboxes = rsg_checkboxes();
    function rsg_checkboxes(){
        $(".rsg-checkboxes").click(function(){
            var sss = '';
            if( $(this).hasClass('single-check') ){
                if( $(this).hasClass('checked') ){ sss = 'removeAll'; }
                $(".rsg-checkboxes.single-check").removeClass('checked');
            }
            if( $(this).hasClass('checked') ){
                $(this).removeClass('checked'); 
            }else{
                $(this).addClass('checked');
            }
            if(sss == 'removeAll'){
                $(".rsg-checkboxes.single-check").removeClass('checked');
            }
        });
    }

/*
*********************************
* BACK TO TOP
* CLASS NAME: rsg-back-to-top
*********************************
*/  
    window.rsg_backtotop = rsg_backtotop();
    function rsg_backtotop(){ $(document).scroll(function(){$(document).scrollTop()>20?$(".rsg-back-to-top").css("opacity","1"):$(".rsg-back-to-top").css("opacity","0")}),$(".rsg-back-to-top").click(function(){$("html, body").stop().animate({scrollTop:0},500),$("html, body").animate({scrollTop:0},500)}); }

/*
*********************************
* BACK TO TOP PREPEND
* CLASS NAME: rsg-back-to-top
*********************************
*/
    window.rsg_backtotop_prepend = rsg_backtotop_prepend();
    function rsg_backtotop_prepend(){ $(document).scroll(function(){$(document).scrollTop()>20?$(".rsg-back-to-top").css("opacity","1"):$(".rsg-back-to-top").css("opacity","0")}),1!=$(".rsg-back-to-top").length&&$("body").prepend('<div class="rsg-back-to-top" id="back-to-top"><strong><i class="fas fa-angle-up"></i></strong></div>'),$(".rsg-back-to-top").click(function(){$("html, body").stop().animate({scrollTop:0},500),$("html, body").animate({scrollTop:0},500)}); }


/*
*********************************
* MODALS
*********************************
*/
    $(document).ready(function(){
        $('.rsg-vertical-menu-popup').prepend('<li class="rsg-close-menu-popup"><span> <i class="fas fa-times"></i> </span></li>');

        $('.rsg-vertical-menu-popup-container .rsg-close-menu-popup span').click(function (){
            $('.rsg-vertical-menu-popup-container').removeClass('active');
            $('body').removeClass('rsg-modal-active');
            $('.rsg-vertical-menu-popup').addClass('inactive');
        })

        $('.rsg-vertical-menu-popup-toggle').click(function(){
            $('.rsg-vertical-menu-popup-container').addClass('active');
            $('.rsg-vertical-menu-popup').removeClass('inactive');
            $('body').addClass('rsg-modal-active');
        })

    })
    

/*
*************************************************
* CLOSE MODALS
* CLASS NAME: rsg-close_modal
* DESCRIPTION: 
    removes all elements with rsg-modal classname
    removes rsg-modal_active classname of body
*************************************************
*/
    window.rsg_closemodal = rsg_closemodal(); function rsg_closemodal(){ $(".rsg-close_modal").click(function(){$("body").removeClass("rsg-modal_active"),$(".rsg-modal").fadeOut().delay(1e3).remove()}); }

/*
*************************************************
* CLOSE MODALS
* CLASS NAME: rsg_closes_notifs_relative
* DESCRIPTION: 
    hides all elements with rsg-relative_notif classname
*************************************************
*/  
    0!=$(".rsg_closes_notifs_relative").length&&$(".rsg_closes_notifs_relative").click(function(){$(".rsg-relative_notif").slideUp()});



/*
**********************************************************
* SIMPLE LOADER
* CLASS NAMES:
    rsg-loader_fixed -> rsg-loading -> rsg-loading-in
    rsg-loader_absolute -> rsg-loading -> rsg-loading-in
**********************************************************
*/
    window.rsg_loader_fixed = '<div class="rsg-loader_fixed"><div class="rsg-loading"><div class="rsg-loading-in"></div></div></div>';
    window.rsg_loader_absol = '<div class="rsg-loader_absolute rsg-loading-container_black"><div class="rsg-loading"><div class="rsg-loading-in"></div></div></div>';

/*
*********************************
* CHANGE LINK FOR LOGOUT
* CLASS NAME: rsg_wp_logout_link
*********************************
*/
    window.rsg_wp_logout_link = rsg_wp_logout_link();
    function rsg_wp_logout_link(){ $("body").find(".rsg_wp_logout_link a").click(function(n){n.preventDefault(),rsg_wp_logout_nonce()}),$("body").find("a.rsg_wp_logout_link").click(function(n){n.preventDefault(),rsg_wp_logout_nonce()}); }
    function rsg_wp_logout_nonce(){ $("body").prepend(rsg_loader_fixed),jQuery.ajax({type:"get",dataType:"json",url:rsg_ajax.ajaxurl,data:{action:"rsg_wp_logout_nonce",nonce:rsg_ajax.logout_nonce},success:function(a){window.location=rsg_ajax.home_url}}); }

/*
*********************************
* DISABLE LINK REDIRECT
* CLASS NAME: rsg_wp_disable_link
*********************************
*/
    if( $('.rsg_wp_disable_link').length!=0 ){
        $('a.rsg_wp_disable_link').click(function(supra){
            supra.preventDefault();
        })
        $('rsg_wp_disable_link a').click(function(supra){
            supra.preventDefault();
        })
    }

/*
*********************************
* LOGIN
* CLASS NAME: rsg-wp_login_toggle
*********************************
*/window.rsg_wp_login = rsg_wp_login();
    function rsg_wp_login(){ $("a.rsg-wp_login_toggle").click(function(g){g.preventDefault(),rsg_login_display()}),$(".rsg-wp_login_toggle a").click(function(g){g.preventDefault(),rsg_login_display()}); }
    function rsg_login_display(){
        $('body').addClass('rsg-modal_active').prepend('<div class="rsg-loader_fixed"><div class="rsg-loading"><div class="rsg-loading-in"></div></div></div>');
        jQuery.ajax({ type: "get", dataType: "json", url: rsg_ajax.ajaxurl,
            data: { action: "rsg_wp_login",do:'modal'},
            success: function(s) {
                $('.rsg-loader_fixed').remove();
                // APPEND HTML
                $('body').prepend(s['modal']).hide().fadeIn();

                // INPUT ENTER
                $(".rsg-modal").find("input").keypress(function(o){"13"==(o.keyCode?o.keyCode:o.which)&&$(".rsg_wp_login").click(),o.stopPropagation()});

                // SUBMIT
                $('.rsg_wp_login').click(function(estes){
                    estes.preventDefault();
                    
                    var nameORemail = $('#rsg_login_name');
                    var password    = $('#rsg_login_pass');
                    var rememberMe  = $("#rsg-login_rem");
                    var errros      = 0;
                    $('.rsg_eror_nameORemail').remove();
                    $('.rsg_eror_password').remove();
                    if( nameORemail.val() == '' ){
                        $('<div style="display:block; color:#e04e4e; font-size:12px; font-style:italic;" class="rsg_eror_nameORemail rsg_error_field" >Username or Email is required.</div>').insertAfter(nameORemail);
                        errros++;
                    }else{
                        if( $('.rsg_eror_nameORemail').length == 1 ){
                            $('.rsg_eror_nameORemail').remove();    
                        }
                    }
                    if( password.val() == '' ){
                        $('<div style="display:block; color:#e04e4e; font-size:12px; font-style:italic;" class="rsg_eror_password rsg_error_field" >Password is required.</div>').insertAfter(password);
                        errros++;
                    }else{
                        if( $('.rsg_eror_password').length == 1 ){
                            $('.rsg_eror_password').remove();    
                        }
                    }
                    
                    if( errros == 0 ){
                        var pageURL = location.href;
                        $('.rsg-modal').prepend('<div class="rsg-loader_fixed"><div class="rsg-loading"><div class="rsg-loading-in"></div></div></div>');
                        rememberMe.hasClass("checked")?rememberMe="true":rememberMe="false";
                        jQuery.ajax({ type: "get", dataType: "json", url: rsg_ajax.ajaxurl,
                            data: { action: "rsg_wp_login",nameORemail:nameORemail.val(),password:password.val(),pageURL:pageURL,do:'login',login_nonce:rsg_ajax.login_nonce, rememberMe:rememberMe},
                            success: function(s) {
                                if(s['stat'] == 'error'){
                                    console.log("Username/Email and Password does not match or incorrect");var html='<div class="rsg-top_notif_red"><div>';html+="Username/Email and Password does not match.",html+="</div></div>",$("body").prepend(html).hide().fadeIn(),$(".rsg-top_notif_red").delay(5e3).fadeOut(),$(".rsg-modal .rsg-loader_fixed").remove();
                                }else if( s['stat'] == 'success' ){
                                    location.href=s.redirect,$(".rsg-top_notif_red").remove(),$(".rsg-modal").fadeOut().remove(),$(".rsg_eror_nameORemail").remove(),$(".rsg_eror_password").remove(),$(".rsg-modal .rsg-loader_fixed").remove(),nameORemail.val(""),password.val("");
                                }else if(s['stat'] == 'error_session'){
                                    console.log("Session expired");var html='<div class="rsg-top_notif_red"><div>';html+="Invalid link. For security purposes, please try again after 0-12 hours.",html+="</div></div>",$("body").prepend(html).hide().fadeIn(),$(".rsg-top_notif_red").delay(5e3).fadeOut(),$(".rsg-modal .rsg-loader_fixed").remove();
                                }else{
                                    console.log(s['stat']);
                                }
                            },error:function(){
                                console.log("Username/Email and Password does not match or incorrect");var html='<div class="rsg-top_notif_red"><div>';html+="Username/Email and Password does not match. Please try again after a few minutes.",html+="</div></div>",$("body").prepend(html).hide().fadeIn(),$(".rsg-top_notif_red").delay(5e3).fadeOut(),$(".rsg-modal .rsg-loader_fixed").remove();
                            }
                        })
                    }
                });

                // CLOSE
                $(".rsg-close_modal").click(function(){$("body").removeClass("rsg-modal_active"),$(".rsg-modal").fadeOut().delay(1e3).remove()});
            }
        })
    }

/*
*********************************
* DISABLE LINK REDIRECT
* CLASS NAME: rsg_wp_disable_link
*********************************
*/
$(document).ready(function(){
    if( $('.rsg-git-content .rsg-git-header').length!=0 ){
        ham_menu = '<div class="container"><div class="row rsg-tright"><div class="rsg-top-nav rsg-block rsg-tright">';
        ham_menu +=  '<span class="rsg-big_title rsg-custom_link-white-green  rsg-hover-ham-menu">';
        ham_menu +=   '<i class="fas fa-grin-tears rsg-hover-rotate-left-90"></i>';
        ham_menu +=   '<div class="rsg-hover-ham-menu-menu"><ul><li>';
        ham_menu +=    '<a href="https://rynergalaus.github.io/"> <i class="fas fa-home"></i> Home</a>';
        ham_menu +=    '<a href="https://rynergalaus.github.io/me/about.html"> <i class="fas fa-question"></i> About Me</a>';
        ham_menu +=    '<a href="https://rynergalaus.github.io/me/wordpress-journey.html"> <i class="fab fa-wordpress"></i> Wordpress Journey</a>';
        ham_menu +=   '</li></ul></div>';
        ham_menu +=  '</span>';
        ham_menu += '</div></div></div>';
        $('.rsg-git-content .rsg-git-header').html(ham_menu);
    }

    if( $('.rsg-git-content .rsg-git-social-links').length!=0 ){
        soc_link = '<div class="container-fluid rsg-tcenter"><div class="row"><div class="rsg-block">';
        soc_link +=  '<div class="rsg-reg_title rsg-padding_5_0">Social Links</div>';
        soc_link +=   '<div class="rsg-block rsg-padding_5_0 rsg-socials-a">';
        soc_link +=     '<a href="instagram.com" class="rsg-insta rsg-big_title" target="_blank"><i class="fab fa-instagram "></i></a>';
        soc_link +=     '<a href="https://www.facebook.com/rynergalaus" class="rsg-fb rsg-big_title" target="_blank"><i class="fab fa-facebook-square"></i></a>';
        soc_link +=     '<a href="https://www.linkedin.com/in/ryner-galaus-944236136/" class="rsg-linkin rsg-big_title" target="_blank"><i class="fab fa-linkedin-in "></i></a>';
        soc_link +=     '<a href="https://github.com/rynergalaus" class="rsg-git rsg-big_title" target="_blank"><i class="fab fa-github "></i></a>';
        soc_link +=     '<a href="https://profiles.wordpress.org/rynergalaus/" class="rsg-wp-link rsg-big_title" target="_blank"><i class="fab fa-wordpress "></i></a>';
        soc_link +=  '</div>';
        soc_link += '</div></div></div>';
        $('.rsg-git-content .rsg-git-social-links').html(soc_link);
    }

    if( $('.rsg-git-content .rsg-git-copyright').length!=0 ){
        var r_copyright = '<div class="rsg-tcenter rsg-block">&copy; Copyright 2019 Ryner Galaus</div>';
        $('.rsg-git-content .rsg-git-copyright').html(r_copyright);
    }
})
$(window).load(function(){
    $(document).ready(function(){
        if( $('.rsg-git-content .rsg-loader_fixed_black').length!=0 ){
            $('.rsg-git-content .rsg-loader_fixed_black').fadeOut();
        }
    })
})


}(jQuery));