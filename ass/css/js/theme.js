/*
 Theme Name: Bespoke - Creative One Page HTML5 Template 
 Theme URL: http://nasfactor.com/themes/bespoke/
 Author: nasirwd
 Author URI: http://nasfactor.com/
 Description: Bespoke - Creative One Page HTML5 Template 
 Version: 1.0
 */

/*=======================================================================
 [Table of contents]
 =========================================================================
 [01] HEADER
 [02] TESTMONIAL
 [03] TESTMONIAL WITH BG
 [04] WORK CAROUSEL
 [05] STICKY HEADER
 [06] BACK TO TOP
 [07] AJAX CONTACT FORM
 [08] AJAX SUBSCRIPTION FORM
 
 
 
 ==========================================================================*/

(function($){
    'use strict';
    /*=======================================================================
     [01] REVOLUTION SLIDER
     =========================================================================*/
    var win = $(window);
    
    var rev = $(".slider"),
        tp_b = $('.tp-banner');
    if(rev.length > 0)
    {
        tp_b.revolution({
            delay : 7000,
            startwidth : 1170,
            startheight : 700,
            startWithSlide : 0,
            fullScreenAlignForce : "off",
            navigationType : "bullet",
            navigationArrows : "on",
            navigationStyle : "round",
            touchenabled : "on",
            onHoverStop : "on",
            navOffsetHorizontal : 0,
            navOffsetVertical : 20,
            shadow : 0,
            fullWidth : "on",
            fullScreen : "on",
            navigationVOffset : 65
        });
    }
    ;


    /*=======================================================================
     [02] TESTMONIAL
     =========================================================================*/
    var testCarousel = $('#testmonial');
    if(testCarousel.length > 0){
        testCarousel.owlCarousel({
            items : 1,
            dots : false,
            autoplay : true
        });
    }
    ;


    /*=======================================================================
     [03] TESTMONIAL WITH BG
     =========================================================================*/
    var testmonialCaro = $('#testmonialCaro');
    if(testmonialCaro.length > 0){
        testmonialCaro.owlCarousel({
            items : 1,
            dots : true,
            autoplay : false
        });
    }
    ;

    /*=======================================================================
     [04] WORK CAROUSEL
     =========================================================================*/
    var workCarousel = $('#workCarousel');
    if(workCarousel.length > 0){
        workCarousel.slick({
            centerMode : true,
            slidesToShow : 1,
            centerPadding : '275px',
            dots : false,
            prevArrow : '<div class="slick-prev slick-arrow"><i class="flaticon-arrows-2"></i></div>',
            nextArrow : '<div class="slick-next slick-arrow"><i class="flaticon-arrows-3"></i></div>',
            responsive : [
                {
                    breakpoint : 1440,
                    settings : {
                        slidesToShow : 1,
                        centerPadding : '175px'
                    }
                },
                {
                    breakpoint : 767,
                    settings : {
                        slidesToShow : 1,
                        centerPadding : '0'
                    }
                },
                {
                    breakpoint : 1280,
                    settings : {
                        slidesToShow : 1,
                        centerPadding : '80px'
                    }
                }
            ]
        });
    }
    ;


    /*=======================================================================
     [05] STICKY HEADER
     =========================================================================*/
    var sticky = $(".isSticky"),
        menu_a = $('.mainMenu ul li.scroll > a, .mouseSlider a, .mainMenu_home3 ul li.scroll > a'),
        bodyhtml = $('html, body');
    win.on('scroll', function(){
        if(win.scrollTop() > 300)
        {
            sticky.addClass('fixedHeader animated slideInDown');
        }else
        {
            sticky.removeClass('fixedHeader animated slideInDown');
        }

        /*====== Menu Active on Scroll ======*/
        Scroll();
        Scroll2();
        Scroll3();
    });

    menu_a.on('click', function(){
        if($(this).parent().hasClass('has-child'))
        {
            $(this).parent().children('ul').slideToggle('slow');
        }
        bodyhtml.animate({scrollTop : $(this.hash).offset().top - 68}, 1000);
        return false;
    });

    function Scroll(){

        var contentTop = [];
        var contentBottom = [];
        var winTop = win.scrollTop();
        var rangeTop = 200;
        var rangeBottom = 500;
        var mainmenu = $('.mainMenu');
        var mainmenu_scroll = $('.mainMenu li.scroll');

        mainmenu.find('.scroll > a').each(function(){
            var atr = $(this).attr('href');
            if($(atr).length > 0)
            {
                contentTop.push($($(this).attr('href')).offset().top);
                contentBottom.push($($(this).attr('href')).offset().top + $($(this).attr('href')).height());
            }
        });

        $.each(contentTop, function(i){
            if(winTop > contentTop[i] - rangeTop){
                mainmenu_scroll.removeClass('active').eq(i).addClass('active');
            }
        });
    }
    var fhscroll =  $('.fixednavHeader ul li.scroll > a, .mouseSlider2 > a');

    fhscroll.on('click', function(){
        if($(this).parent().hasClass('has-child'))
        {
            $(this).parent().children('ul').slideToggle('slow');
        }
        bodyhtml.animate({scrollTop : $(this.hash).offset().top + 10}, 1000);
        return false;
    });



    function Scroll2(){

        var contentTop = [];
        var contentBottom = [];
        var winTop = win.scrollTop();
        var rangeTop = 200;
        var rangeBottom = 500;
        var fix_header = $('.fixednavHeader');
        var fix_headerli = $('.fixednavHeader li.scroll, .mouseSlider2');

        fix_header.find('.scroll > a').each(function(){
            var atr = $(this).attr('href');
            if($(atr).length > 0)
            {
                contentTop.push($($(this).attr('href')).offset().top);
                contentBottom.push($($(this).attr('href')).offset().top + $($(this).attr('href')).height());
            }
        });
        $.each(contentTop, function(i){
            if(winTop > contentTop[i] - rangeTop){
                fix_headerli.removeClass('active').eq(i).addClass('active');
            }
        });
    }

    function Scroll3(){

        var contentTop = [];
        var contentBottom = [];
        var winTop = win.scrollTop();
        var rangeTop = 200;
        var rangeBottom = 500;
        var mm3 = $('.mainMenu_home3');
        var mm3li = $('.mainMenu_home3 li.scroll');

        mm3.find('.scroll > a').each(function(){
            var atr = $(this).attr('href');
            if($(atr).length > 0)
            {
                contentTop.push($($(this).attr('href')).offset().top);
                contentBottom.push($($(this).attr('href')).offset().top + $($(this).attr('href')).height());
            }
        });
        $.each(contentTop, function(i){
            if(winTop > contentTop[i] - rangeTop){
                mm3li.removeClass('active').eq(i).addClass('active');
            }
        });
    }

    /*=======================================================================
     [06] BACK TO TOP
     =========================================================================*/
    var back = $("#backToTop");
    win.on('scroll', function(){
        if(win.scrollTop() > $(window).height())
        {
            back.addClass('showit');
        }
        else
        {
            back.removeClass('showit');
        }

    });
    bodyhtml.on("click", "#backToTop", function(e){
        e.preventDefault();
        bodyhtml.animate({scrollTop : 0}, 800);
    });



    /*=======================================================================
     [07] AJAX CONTACT FORM
     =========================================================================*/
    var contact = $("#contactForm"),
        con_submit = $('#con_submit'),
        con_suc = $(".contactSuccess");
    if(contact.length > 0)
    {
        contact.on('submit', function(e){
            e.preventDefault();
            con_submit.val('Processsing...');

            var con_name = $("#con_name").val(),
                con_phone = $("#con_phone").val(),
                con_email = $("#con_email").val(),
                con_company = $("#con_company").val(),
                con_msg = $("#con_msg").val(),
                required = 0;

            $(".required", this).each(function()
            {
                if($(this).val() === '')
                {
                    $(this).addClass('reqError');
                    required += 1;
                }
                else
                {
                    if($(this).hasClass('reqError'))
                    {
                        $(this).removeClass('reqError');
                        if(required > 0)
                        {
                            required -= 1;
                        }
                    }
                }
            });
            if(required === 0)
            {
                $.ajax({
                    type : "POST",
                    url : 'php/mail.php',
                    data : {
                        con_name : con_name,
                        con_phone : con_phone,
                        con_email : con_email,
                        con_company : con_company,
                        con_msg : con_msg
                    },
                    success : function()
                    {
                        $("#contactForm input, #contactForm textarea").val('');
                        con_suc.fadeIn('slow');
                        con_submit.val('Done!');
                        setTimeout(function(){
                            con_suc.fadeOut('slow');
                        }, 2500);
                    }
                });
            }
            else
            {
                con_submit.val('Failed!');
            }

        });
        $(".required").on('keyup', function(){
            $(this).removeClass('reqError');
        });
    }


    /*=======================================================================
     [08] AJAX SUBSCRIPTION FORM
     =========================================================================*/
    var sub_form = $("#subscriptForm"),
        sub_submit = $('#sub_submit'),
        sub_suc = $(".subscriptionSuccess");
    if(sub_form.length > 0)
    {
        sub_form.on('submit', function(e){
            e.preventDefault();
            var sub_email = $("#sub_email").val();
            sub_submit.val('Processsing...');

            if(sub_email === '')
            {
                $("#sub_email").addClass('reqError');
                sub_submit.val('Failed!');
            }
            else
            {
                $("#sub_email").removeClass('reqError');
                $.ajax({
                    type : "POST",
                    url : "php/subscribe.php",
                    data : {sub_email : sub_email},
                    success : function()
                    {
                        $("#subscriptForm input").val('');
                        sub_submit.val('Done!');
                        sub_suc.fadeIn('slow');
                        setTimeout(function(){
                            sub_suc.fadeOut('slow');
                        }, 2500);
                    }
                });
            }
        });
    }

    /*=======================================================================
     [08] PERELAX
     =========================================================================*/
    $(document).ready(function(){
        var per1 = $('.perelaxBg1'),
            per2 = $('.perelaxBg2'),
            per3 = $('.perelaxBg3'),
            per4 = $('.perelaxBg4'),
            per5 = $('.perelaxBg5');
        if(per1.length > 0){
            per1.parallax("0", 0.1);
        }
        if(per2.length > 0){
            per2.parallax("0", 0.1);
        }
        if(per3.length > 0){
            per3.parallax("0", 0.1);
        }
        if(per4.length > 0){
            per4.parallax("0", 0.1);
        }
        if(per5.length > 0){
            per5.parallax("0", 0.1);
        }
    });

    /*=======================================================================
     [09] BLOG CAT TOGGLE
     =========================================================================*/
    var bcat = $('.blogCat'),
        bc6 = $('.blogCat h6');
    if(bcat.length > 0){
        bc6.on('click', function(){
            bcat.toggleClass('active');
        });
    }

    /*=======================================================================
     [10] PRELOADER
     =========================================================================*/
    win.load(function(){
        var preload = $('.preloader');
        if(preload.length > 0){
            preload.delay(800).fadeOut('slow');
        }
    });

    /*=======================================================================
     [11] Single Blog Comment Has Top
     =========================================================================*/
    var jon_comment = $('.jon_comment');
    jon_comment.on('click', function(){
        bodyhtml.animate({scrollTop : $(this.hash).offset().top - 100}, 1000);
        return false;
    });

    /*=======================================================================
     [11] Typing Animation
     =========================================================================*/
    var TxtType = function(el, toRotate, period){
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };
    TxtType.prototype.tick = function(){
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if(this.isDeleting){
            this.txt = fullTxt.substring(0, this.txt.length - 1);
        }else{
            this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

        var that = this;
        var delta = 200 - Math.random() * 100;

        if(this.isDeleting){
            delta /= 2;
        }
        if(! this.isDeleting && this.txt === fullTxt){
            delta = this.period;
            this.isDeleting = true;
        }else if(this.isDeleting && this.txt === ''){
            this.isDeleting = false;
            this.loopNum ++;
            delta = 500;
        }

        setTimeout(function(){
            that.tick();
        }, delta);
    };
    window.onload = function(){
        var elements = document.getElementsByClassName('typewrite');
        for(var i = 0; i < elements.length; i ++){
            var toRotate = elements[i].getAttribute('data-type');
            var period = elements[i].getAttribute('data-period');
            if(toRotate){
                new TxtType(elements[i], JSON.parse(toRotate), period);
            }
        }
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".typewrite > .wrap{border-right: 10px solid #fff;}";
        document.body.appendChild(css);
    };

    /*=======================================================================
     [11] Home3 Header Nav
     =========================================================================*/
    win.on('scroll', function(){
        var head3 = $(".header3");
        var wh = parseInt($(document).height(), 10) - 1000;
        if($(this).scrollTop() > wh){
            head3.addClass('active');
        }
        else{
            head3.removeClass('active');
        }
    });

    /*=======================================================================
     [12] Mobile Menu
     =========================================================================*/
    var menu_bar = $('.mobileBar');
    if(menu_bar.length > 0){
        menu_bar.on('click', function(){
            $(this).toggleClass('active');
            $('.mainMenu > ul').slideToggle('slow');
        });
        if(win.width() < 1280)
        {
            $(".mainMenu li.has-menu-items > a").on('click', function(){
                $(this).parent().toggleClass('active');
                $(this).parent().children('.sub-menu').slideToggle('slow');
                return false;
            });
        }
    }

    //=======================================================
    // Home 3 Mobile Menu
    //=======================================================
    var menu_h3 = $(".mainMenu_home3"),
        menu_ul = $(".mainMenu_home3 > ul");
    if(menu_h3.length > 0)
    {
        var todg = true;
        menu_h3.on("click", function(e){
            e.preventDefault();
            if(todg)
            {
                menu_ul.animate({'right' : '0px'}, 400);
                todg = false;
            }else
            {
                menu_ul.animate({'right' : '-245px'}, 400);
                todg = true;
            }
        });
        $(document).on('mouseup', function(e){
            var container = menu_ul;

            if(! container.is(e.target) && container.has(e.target).length === 0)
            {
                menu_ul.animate({'right' : '-245px'}, 400);
                todg = true;
            }

        });
        if($(".mainMenu_home3 > ul li a").on('click', function(e){
            e.preventDefault();
            menu_ul.animate({'right' : '-245px'}, 400);
        }))
            ;
    }
    ;

})(jQuery);
