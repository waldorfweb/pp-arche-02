//Chat
//var Tawk_API = Tawk_API || {},
//    Tawk_LoadStart = new Date();
//(function() {
//    var s1 = document.createElement("script"),
//        s0 = document.getElementsByTagName("script")[0];
//    s1.async = true;
//    s1.src = 'https://embed.tawk.to/5de915d1d96992700fcaea9b/default';
   // s1.charset = 'UTF-8';
//    s1.setAttribute('crossorigin', '*');
//    s0.parentNode.insertBefore(s1, s0); 
//})();


/// Set Cookies -->
function setCookie(key, value, expiry) {
    var expires = new Date();
    expires.setTime(expires.getTime() + (expiry * 24 * 60 * 60 * 1000));
    document.cookie = key + '=' + value + ';expires=' + expires.toUTCString();
}

function getCookie(key) {
    var keyValue = document.cookie.match('(^|;) ?' + key + '=([^;]*)(;|$)');
    return keyValue ? keyValue[2] : null;
}

function eraseCookie(key) {
    var keyValue = getCookie(key);
    setCookie(key, keyValue, '-1');
}

$(function() { 


});

 
  
//require(['jQuery'], function ($) {
    //$(document).ready(function(){
    $(window).on("load", function(){
        //$().ready(function(){

        //$('.brand-wrapper').append('<a href="https://www.instagram.com/arche_naturkueche/" target="_blank" class="instagram"><img src="https://cdn02.plentymarkets.com/rm2ukznxe8l9/frontend/Arche/Icons/Instagram_font_awesome.png" alt="Instagram" width="23" height="23"></a>');
        
        $('.footerpayment').prepend('<hr>');
        //$('.footerpayment').append('<hr class="lasthr">');

        $('.textrow_color01').wrap('<div class="widget-full-width textrow_color01_wrapper"></div>');


        $(window).on("scroll touchmove", function()
            {
                $("body").addClass("touched-fixed");
                if ($(document).scrollTop() <= $("body").position().top - 140 )
                {
                    //$(".et_toggle_fullscreen_menu").addClass("showplus");
                    console.log('add fixed class');
                    $("body").removeClass("fixed");
                    
                } else {
                    //$(".et_toggle_fullscreen_menu").removeClass("showplus");
                    console.log('remove fixed class');
                    $("body").addClass("fixed");
                    $("body").addClass("touched-fixed");
                }
    
            });

        //remove canonical tag
        //$(".cano").removeClass("cano");
    $(".search-input ").attr("placeholder", "Suche");

	if ($("body").hasClass("item-10000621")) {
      //alert('test3');
      		//alert('test4');

	}

$('.normalmenu .level2').each(function(){
	$(this).siblings( ".level1" ).addClass('navpfeil');
});
$('.megamenu .level1').each(function(){
	$(this).siblings( ".level2" ).addClass('navpfeil');
});
$('.megamenu .level2').each(function(){
	$(this).siblings( ".level2" ).addClass('navpfeil');
});


        $('.page-singleitem .widget_badge .badge span').css('display', 'none');
        $('.page-singleitem .widget_badge .badge span').each(function () {
            
                if ($(this).text() == 'Bio') {
                $(this).css('display', 'block');
                $(this).html('<img src="https://cdn02.plentymarkets.com/rm2ukznxe8l9/frontend/Bilddatenbank/Grafiken/Piktogramme/2021/Bio-EU-Siegel.jpg" alt="Bio">');
            }
            if ($(this).text() == 'Bio-Siegel') {
                $(this).css('display', 'block');
                $(this).html('<img src="https://cdn02.plentymarkets.com/rm2ukznxe8l9/frontend/Bilddatenbank/Grafiken/Piktogramme/2021/Bio-EU-Siegel.jpg" alt="Bio-Siegel">');
            }
            if ($(this).text() == 'Vegan') {
                $(this).css('display', 'block');
                $(this).html('<img src="https://cdn02.plentymarkets.com/rm2ukznxe8l9/frontend/Arche/Icons/ARCHE-Vegan-Logo.png" alt="Vegan">');
            }
            if ($(this).text() == 'Glutenfrei') {
                console.log('Spielgut');
                $(this).css('display', 'block');
                $(this).html('<img src="https://cdn02.plentymarkets.com/rm2ukznxe8l9/frontend/Arche/Icons/ARCHE_Gluten_free_Symbol_3.png" alt="Glutenfrei">');
            } 
            if ($(this).text() == 'Ecofriednly') {
                console.log('Ecofriednly');
                $(this).css('display', 'block');
                $(this).html('<img src="https://cdn02.plentymarkets.com/rm2ukznxe8l9/frontend/Arche/Icons/ARCHE-ecofriendly-Siegel-3.png" alt="Ecofriednly">');
            } 
        });


//Tooltip Varianten Farben
		$('.v-s-box img').attr('title', function () {
		    if (!this.title) {
		        return this.alt;
		    }
		});
	//$("#close-nb").click(function(){
	//  $("#notificationbar").hide();
	//});

	//$('.top-bar.wd_search #notificationbar').remove();



	//if(localStorage.getItem("close-nb") != "true"){
//
//		$('.top-bar.header-fw.wd_search').css('top','64px');
//		   	$('.wd_menu.megamenu').css('top','102px');
//	} else {
//		$('.top-bar.header-fw.wd_search').css('top','38px');
//	   $('.wd_menu.megamenu').css('top','82px');
//	}


//	$("#close-nb").click(function(){
//	  $('.top-bar.header-fw.wd_search').css('top','38px');
//	   $('.wd_menu.megamenu').css('top','82px');
//	});



	//alert('test');
	//alert('test');
	//Shipping Method
	//$('#ShippingProfileID267').addClass('selbstabholericon');
	// $('img[alt="DHL"]').remove();
	//$('.method-list  .icon').prepend('<img src="https://cdn02.plentymarkets.com/rm2ukznxe8l9/frontend/Bilddatenbank/Grafiken/Versandicons/selbstabholer.jpg" width="100%">');
// $(".method-list-item[data-id='6'] .icon" ).prepend('<img src="https://cdn02.plentymarkets.com/rm2ukznxe8l9/frontend/Bilddatenbank/Grafiken/Piktogramme/versand/DHl_Sammelversand.png" width="100%">');
// $(".method-list-item[data-id='20'] .icon" ).prepend('<img src="https://cdn02.plentymarkets.com/rm2ukznxe8l9/frontend/Bilddatenbank/Grafiken/Piktogramme/versand/DHL_Sofor-Teilung.png" width="100%">');
// $(".method-list-item[data-id='7'] .icon" ).prepend('<img src="https://cdn02.plentymarkets.com/rm2ukznxe8l9/frontend/Bilddatenbank/Grafiken/Piktogramme/versand/Abholer.png" width="100%">');
// $(".method-list-item[data-id='8'] .icon" ).prepend('<img src="https://cdn02.plentymarkets.com/rm2ukznxe8l9/frontend/Bilddatenbank/Grafiken/Piktogramme/versand/E-Mail.png" width="100%">');
// $(".method-list-item[data-id='13'] .icon" ).prepend('<img src="https://cdn02.plentymarkets.com/rm2ukznxe8l9/frontend/Bilddatenbank/Grafiken/Piktogramme/versand/Sperrgut.png" width="100%">');
// $(".method-list-item[data-id='26'] .icon" ).prepend('<img src="https://cdn02.plentymarkets.com/rm2ukznxe8l9/frontend/Bilddatenbank/Grafiken/Piktogramme/versand/Warensendung-DHL.png" width="100%">');
// $(".method-list-item[data-id='15'] .icon" ).prepend('<img src="https://cdn02.plentymarkets.com/rm2ukznxe8l9/frontend/Bilddatenbank/Grafiken/Piktogramme/versand/Grossbrief.png" width="100%">');
// $(".method-list-item[data-id='18'] .icon" ).prepend('<img src="https://cdn02.plentymarkets.com/rm2ukznxe8l9/frontend/Bilddatenbank/Grafiken/Piktogramme/versand/Dialogpost.png" width="100%">');
// $(".method-list-item[data-id='30'] .icon" ).prepend('<img src="https://cdn02.plentymarkets.com/rm2ukznxe8l9/frontend/Bilddatenbank/Grafiken/Piktogramme/versand/Katlaogversand.png" width="100%">');
// $(".method-list-item[data-id='14'] .icon" ).prepend('<img src="https://cdn02.plentymarkets.com/rm2ukznxe8l9/frontend/Bilddatenbank/Grafiken/Piktogramme/versand/Spedition.png" width="100%">');
// $(".method-list-item[data-id='19'] .icon" ).prepend('<img src="https://cdn02.plentymarkets.com/rm2ukznxe8l9/frontend/Bilddatenbank/Grafiken/Piktogramme/versand/Kostenloser-Versand.png" width="100%">');
    //Blog


	// 	$('.top-bar .mx-0 .top-bar-items').prepend('<ul class="blog-entrypoint controls-list list-inline"><li class="list-inline-item"><a href="https://blog.waldorfshop.eu"><i class="fas fa-blog"></i><span class="telefonnummer">Blog/Ideenforum</span></a></li><li class="kundenhotline"><a href="tel:+49 8191 9369 300"><i class="fa fa-phone"></i><span class="telefonnummer"> +49 8191 9369 300</span></a></li></ul><div class="kundenhotline"></div>');


    // if (window.location.href.indexOf("https://www.waldorfshop.eu/spielen/kaufladen/einkaufskoerbchen_4191000_6080?utm_source=newsletter&utm_medium=email&utm_campaign=Adresse%2B%C3%BCberpr%C3%BCfen#login") > -1) {
    //     //alert("found it");
    //     window.location.href = '/login';
    // }

    //iframe
    // Find all iframes
    //var $iframes = $("iframe");

    // Find &amp;amp;#x26; save the aspect ratio for all iframes
    //$iframes.each(function() {
    //    $(this).data("ratio", this.height / this.width)
    //        // Remove the hardcoded width &amp;amp;#x26; height attributes
    //        .removeAttr("width")
    //        .removeAttr("height");
    //});

    // Resize the iframes when the window is resized
   // $(window).resize(function() {
   //     $iframes.each(function() {
   //         // Get the parent container&amp;amp;#x27;s width
   //         var width = $(this).parent().width();
   //         $(this).width(width)
   //             .height(width * $(this).data("ratio"));
   //     });
   //     // Resize to fix all iframes on page load.
   // }).resize();






    //Bugfix Single Owl-Carousel if only one image
    $('.page-singleitem .owl-stage').each(function() {
        if ($('> div', this).length === 1) {
            //console.log('gleich 1');
            $('.page-singleitem .owl-thumbs').hide();
        } else {}
    });




    if ($(".single_herstellerlogo .widget-inner img").length) {
        $(".single_herstellerlogo").show();
    } else {
        $(".single_herstellerlogo").hide();
    }




    $(".widget_crosselling_aehnlich .widget-inner:empty").parent().hide();
    $(".widget_crosselling_zubehoer .widget-inner:empty").parent().hide();
    $('.widget_crosselling_zubehoer .widget-caption div p').wrapInner('<span class="wd-topseller"></span>');
    $('.widget_crosselling_aehnlich .widget-caption div p').wrapInner('<span class="wd-topseller"></span>');


	//Kategorie Beschreibung
        $('.parallax-img-container').removeClass('widget-background');
        $('.category-description img').wrap('<div class="category-description-img"></div>');


    //Login Passwort Hinweis
    //$(".modal-title, .login-view-title").append("<div class='passworthinweis'>Liebe Kunden, wie Sie vielleicht bermerkt haben ist unser neuer Webshop da. Daher müssen wir Sie leider bitten ein neues Passwort mit der Funktion \"Passwort vergessen\" zu vergeben. </div>");

    $("#login .login-pwd-reset form").append("<div class='passworthinweis gastbestellung'>Hier können Sie als Gast bestellen ohne sich registrieren oder anmelden zu müssen. <br /><button href=\"/anmelden\" class=\"btn btn-primary btn-appearance btn-medium\">Weiter mit Gastbestellung. <i class=\"fa fa-user-secret\"></i></button></div>");

    //Widget Startseite

	$('.widget_box_moebel').prepend('<div class="special-tags"><span class="badge badge-offer badge-danger">-20% auf Artikel von Livipur</span></div>');

    $('.page-home .widget_katalog article').wrap('<div class="owl-item"></div>');

    //////// is in Viewport Newsletter aktion
    // ps: disable on small devices!
    var $animationElements = $('.widget_newsletteraktion_bild');
    var $window = $(window);

    // ps: Let's FIRST disable triggering on small devices!
    var isMobile = window.matchMedia("only screen and (max-width: 768px)");
    if (isMobile.matches) {
        //$animationElements.removeClass('animation-element');
    }

    function checkIfInView() {

        var windowHeight = $window.height();
        var windowTopPosition = $window.scrollTop();
        var windowBottomPosition = (windowTopPosition + windowHeight);

        $.each($animationElements, function() {
            var $element = $(this);
            var elementHeight = $element.outerHeight();
            var elementTopPosition = $element.offset().top;
            var elementBottomPosition = (elementTopPosition + elementHeight);

            //check to see if this current container is within viewport
            if ((elementBottomPosition >= windowTopPosition) &&
                (elementTopPosition <= windowBottomPosition)) {
                $element.addClass('widget_newsletteraktion_bild_rollin');
            } else {
                $element.removeClass('widget_newsletteraktion_bild_rollin');
            }
        });
    }

    $window.on('scroll resize', checkIfInView);
    $window.trigger('scroll');

    /// is in Viewport ende


    //Über Uns Sub-Navigation
    


    // Search
    //$(".wd_search .search-shown").prepend('<div class="wd_logo"><a href="/" title="Arche.eu" alt="waldorfshop.eu"><img alt="Arche" src="https://cdn02.plentymarkets.com/rm2ukznxe8l9/frontend/logo.svg"></a></div>');
    //$('#page-header-parent .page-header').wrapInner('<div class="wd_searchbar"></div>');




    $(".upperpaginationinner").last().css("margin-bottom", "40px");

    $('.widget-image-carousel').wrapInner('<div class="svgform"></div>');
    //$('.widget_baby').wrapInner('<div class="svgform_widget"></div>');
    $('.modFooterBox').wrapInner('<div class="svgformfooter"></div>');
    //KontaktLink
    $('a[href="/contact"]').attr('href', '/kontakt/');



    //Crosselling und Topseller
    $('.widget_crosselling .widget-caption > div > p').wrapInner('<span style="color:#302e2f"></span>');
    $('.widget_topseller .widget-caption > div > p').wrapInner('<span class="wd-topseller"></span>');
    //$(".page-home .wd-topseller").replaceWith($(".wd-topseller").contents());
    $(".widget_topseller .crossprice").each(function() {
        var text = $(this).text();
        text = text.replace("UVP", "");
        $(this).text(text);
    });

    //Genussrechte
    // $('.bildremovelink a').attr('href', '#');

    // if (top.location.pathname === '/genussrechte' || top.location.pathname === '/genussrechte/' || top.location.pathname === '/ueber-uns/waldorfshop-sinnorientiert-in-die-zukunft/' || top.location.pathname === '/ueber-uns/waldorfshop-sinnorientiert-in-die-zukunft') {

    //     $.fn.isInViewport = function() {
    //         let elementTop = $(this).offset().top;
    //         let elementBottom = elementTop + $(this).outerHeight();

    //         let viewportTop = $(window).scrollTop();
    //         let viewportBottom = viewportTop + $(window).height();

    //         return elementBottom > viewportTop && elementTop < viewportBottom;
    //     };

    //     if ($('#score-progress-bar-angebot-1').isInViewport()) {
    //         $('#score-progress-bar-angebot-1').animate({
    //             //value: 77
    //         }, {
    //             duration: 2000,
    //             complete: function() {
    //                 console.log('done!');

    //             }
    //         });
    //     } else {
    //         // The element is NOT visible, do something else
    //     }

    //     if ($('#score-progress-bar-angebot-2').isInViewport()) {
    //         $('#score-progress-bar-angebot-2').animate({
    //             //value: 25
    //         }, {
    //             duration: 2000,
    //             step: 0,
    //             complete: function() {
    //                 console.log('done!');
    //             }
    //         });
    //     } else {
    //         // The element is NOT visible, do something else
    //     }

    //     $(window).on('resize scroll', function() {
    //         if ($('#score-progress-bar-angebot-1').isInViewport()) {
    //             $('#score-progress-bar-angebot-1').animate({
    //                 //value: 77
    //             }, {
    //                 duration: 2000,
    //                 complete: function() {
    //                     console.log('done!');

    //                 }
    //             });
    //             //$('#score-progress-bar-angebot-1').prepend('77%');
    //         } else {
    //             // The element is NOT visible, do something else
    //         }

    //         if ($('#score-progress-bar-angebot-2').isInViewport()) {
    //             $('#score-progress-bar-angebot-2').animate({
    //                 //value: 25
    //             }, {
    //                 duration: 2000,
    //                 step: 0,
    //                 complete: function() {
    //                     console.log('done!');
    //                 }
    //             });
    //             //$('#score-progress-bar-angebot-2').prepend('25%');
    //         } else {
    //             // The element is NOT visible, do something else
    //         }
    //     });

    // }

    //Genussrechte ende

    //Buttons inner
    //$('#page-body button').wrapInner('<div class="innerbutton"></div>');
    //$('#page-body.btn').wrapInner('<div class="innerbutton"></div>');



    //Kategorie Sidebar


    if ($(window).width() < 576) {
			//alert('mobile');
			$('.sidebar-categories').prepend('<p><button class="btn btn-primary sidebar-categories-mobile-btn" type="button" data-toggle="collapse" data-target="#Subkatmenu" aria-expanded="false" aria-controls="collapseExample">Kategorien <i aria-hidden="true" class="fa fa-caret-down sidebar-categories-mobile-i" style="color:white !Important;float: right !important; margin-top: 12px !important;"></i></button></p>');
			$('.sidebar-categories .widget-inner').wrap('<div class="collapse" id="Subkatmenu"><div class="card card-body"></div></div>');
			$('.sidebar-categories').append('');

	    }
	    else {
		    //$('#referenzdetail .et_pb_column_1_4').removeClass('police');
	    }


    if ($(".nav-item").hasClass("active")) {
        $(".sidebar-categories .active > a").addClass("activeinner");
        //$(".");
    } else {
        $(".sidebar-categories .active > a").removeClass("activeinner");
    }

    //Menü Selected Entry
    $('.mainmenu a').each(function() {
        var ThisHref = ($(this).attr('href').split('?'))[0];
        if (window.location.href.indexOf(ThisHref) > -1) {
            $(this).addClass('selected');
        }
    });




    // Landing Pages




    //Bug Workaround externer Blog - Owl Carousel Neuheiten Bilder werden nicht geladen

    $(".page-home .owl-carousel .carousel-control.right .owl-single-item-control").click(function() {
        $("html, body").animate({
            scrollTop: ($(window).scrollTop() + 1)
        });
        //alert('>');
    });
    $(".page-home .owl-single-item-control.right").click(function() {
        $("html, body").animate({
            scrollTop: ($(window).scrollTop() + 1)
        });

    });

    // Blog Button Ideenforum
    $('.widget_button_ideenforum a').addClass('btn btn-primary');

});
//});

// Document Ready End

//load extern Blog from WP

$(window).on('load', function() {

    //$(".blog-extern-iframe").load("https://blog.waldorfshop.eu/blog-extern");

    //$(".widget_slider_new").load("https://slider.waldorfshop.eu/startseite_waldorfshop.php", function() {
    //     		$(".widget_slider_new").load("https://slider.waldorfshop.eu/startseite_waldorfshop.php", function(slider) {
    //     				slider.stopPropagation()
    //    if ($(this).height() > 100) {

    //    }
    //});
    //return false;

    if ($(window).width() > 576) {
			//alert('mobile');
		}
	    else {
	    }

		$(".blog-extern-iframe").load("https://blog.waldorfshop.eu/blog-extern", function() {
	    if ($(this).height() > 100) {
	            $(".et_pb_image_container .be_img").prepend('.entry-title');
	            $(".entry-title").insertBefore('.et_pb_image_container .be_img');
	        }
	    });
	    return false;


});

//load extern Blog from WP end




$(function() {

    $(".mainmenu li a").each(function() {
        if ($(this).attr("href") == window.location.pathname) {
            $(this).parent().parent().parent().addClass("selected");
        }
    });

});



// scroll to anchor fix

$(document).on('click', 'a[href^="#"]', function(event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top - 240
        // 100 is the sticky nav height
    }, 500);
});