$(function () {
    var navbar = $('.navbar');

    $(window).scroll(function () {
        if ($(window).scrollTop() <= 30) {
            navbar.removeClass('navbar-scroll');
        } else {
            navbar.addClass('navbar-scroll');
        }
    });
});

$(document).ready(function(){
    $('.customer-logos').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,
        dots: false,
        pauseOnHover: false,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 4
            }
        }, {
            breakpoint: 520,
            settings: {
                slidesToShow: 3
            }
        }]
    });
});



// select custom js

/*
Reference: http://jsfiddle.net/BB3JK/47/
*/

$('select').each(function(){
    var $this = $(this), numberOfOptions = $(this).children('option').length;

    $this.addClass('select-hidden'); 
    $this.wrap('<div class="select"></div>');
    $this.after('<div class="select-styled"></div>');

    var $styledSelect = $this.next('div.select-styled');
    $styledSelect.text($this.children('option').eq(0).text());

    var $list = $('<ul />', {
        'class': 'select-options'
    }).insertAfter($styledSelect);

    for (var i = 0; i < numberOfOptions; i++) {
        $('<li />', {
            text: $this.children('option').eq(i).text(),
            rel: $this.children('option').eq(i).val()
        }).appendTo($list);
    }

    var $listItems = $list.children('li');

    $styledSelect.click(function(e) {
        e.stopPropagation();
        $('div.select-styled.active').not(this).each(function(){
            $(this).removeClass('active').next('ul.select-options').hide();
        });
        $(this).toggleClass('active').next('ul.select-options').toggle();
    });

    $listItems.click(function(e) {
        e.stopPropagation();
        $styledSelect.text($(this).text()).removeClass('active');
        $this.val($(this).attr('rel'));
        $list.hide();
        //console.log($this.val());
    });

    $(document).click(function() {
        $styledSelect.removeClass('active');
        $list.hide();
    });

});



// accordion script
$('.custom-accordion ul.inner-list').hide();

$('.custom-accordion > li > a').click(function () {
    if ($(this).next('ul.inner-list').css('display') == 'block') {
        $(this).next('ul.inner-list').slideUp();
        $(this).find('.fa-minus').removeClass('fa-minus');
        $(this).find('.fa').addClass('fa-plus');
    }
    else {
        $('.custom-accordion ul.inner-list').slideUp();
        $('a >.fa').removeClass('fa-minus').addClass('fa-plus');
        $(this).next('ul.inner-list').slideDown();
        $(this).find('.fa-plus').removeClass('fa-plus');
        $(this).find('.fa').addClass('fa-minus');

    }
});