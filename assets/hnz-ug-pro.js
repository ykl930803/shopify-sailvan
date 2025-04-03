$(document).ready(function() {

    toggleIt();
    toggleScroll();

    section3();
    section5();
    section6();
    section7();
    section8();
    section9();

    /* 7 ----------------------------------------- */

    let owl_7 = $("#hnz-ug-pro-7 .owl-imgtext").owlCarousel({
        items: 1,
        nav: false,
        dots: false,
        smartSpeed: 800,
        margin: 20,
        autoHeight: true,
        touchDrag: false,
        mouseDrag: false,
        animateIn: 'fadeIn',
        animateOut: 'fadeOut',
    });

    let total_7 = '';
    let progress_7 = '';

    let owl_7_2 = $("#hnz-ug-pro-7 .owl-title").owlCarousel({
        items: 1,
        nav: false,
        dots: false,
        smartSpeed: 800,
        margin: 20,
        stagePadding: 120,
        autoHeight: true,
        touchDrag: false,
        mouseDrag: false,
        responsive: {
            0: {
                stagePadding: 90
            },
            375: {
                stagePadding: 90
            },
            390: {
                stagePadding: 90
            },
            414: {
                stagePadding: 90
            },
            428: {
                stagePadding: 100
            },
            480: {
                stagePadding: 120
            },
        }
    }).on('changed.owl.carousel', function(event) {
        let index = event.item.index;
        let pR = $(this).find('.owl-stage').css('padding-right');

        if (index == 0) {
            $(this).find('.owl-stage').css('padding-left', '0');
            $(this).find('.toggle-title').css('text-align', 'start');
        }
        else {
            $(this).find('.owl-stage').css('padding-left', `${pR}`)
            $(this).find('.toggle-title').css('text-align', 'center');
        }
        
        $('#hnz-ug-pro-7 .toggle-title').removeClass('active');
        $(`#hnz-ug-pro-7 .toggle-title:eq(${index})`).addClass('active');

        setTimeout(() => {
            progress_7 = (100 / total_7) * (index + 1);
            $('#hnz-ug-pro-7 .owl-progress .progress').css('width', `${progress_7}%`);
        }, 10);
    });

    total_7 = $('#hnz-ug-pro-7 .owl-title .owl-item').length;
    progress_7 = (100 / total_7) * (0 + 1);
    $('#hnz-ug-pro-7 .owl-progress .progress').css('width', `${progress_7}%`);

    owl_7_2.find('.owl-stage').css('padding-left', '0');

    $('#hnz-ug-pro-7').swipe({
        swipeLeft:function() {
            owl_7.trigger('next.owl.carousel');
            owl_7_2.trigger('next.owl.carousel');
        },
        swipeRight:function() {
            owl_7.trigger('prev.owl.carousel');
            owl_7_2.trigger('prev.owl.carousel');
        },
        threshold: 50
    });

    /* 10 ----------------------------------------- */

    let owl_10 = $("#hnz-ug-pro-10 .owl-carousel").owlCarousel({
        items: 1,
        nav: false,
        dots: true,
        smartSpeed: 800,
        stagePadding: 100,
        margin: 30,
        responsive: {
            0: {
                margin: 20,
                stagePadding: 20
            },
            768: {
                margin: 30
            },
            1280: {
                margin: 30,
                stagePadding: 200
            },
            1366: {
                margin: 30,
                stagePadding: 200
            },
            1440: {
                margin: 30,
                stagePadding: 200
            },
            1536: {
                margin: 30,
                stagePadding: 200
            },
            1600: {
                margin: 30,
                stagePadding: 180
            },
            1920: {
                margin: 30,
                stagePadding: 100
            }
        }
    }).on('changed.owl.carousel', function(event) {
        if (event.item.index === 0)
            $('#hnz-ug-pro-10 .float-nav .owl-prev').prop('disabled', true);
        else 
            $('#hnz-ug-pro-10 .float-nav .owl-prev').prop('disabled', false);

        if (event.item.index === event.item.count - event.page.size)
            $('#hnz-ug-pro-10 .float-nav .owl-next').prop('disabled', true);
        else
            $('#hnz-ug-pro-10 .float-nav .owl-next').prop('disabled', false);
    });

    $("#hnz-ug-pro-10 .float-nav .owl-prev").on('click', function() {
        owl_10.trigger('prev.owl.carousel');
    });
    $("#hnz-ug-pro-10 .float-nav .owl-next").on('click', function() {
        owl_10.trigger('next.owl.carousel');
    });

    /* 15 ----------------------------------------- */

    let owl_15 = $("#hnz-ug-pro-15 .owl-carousel").owlCarousel({
        items: 3,
        nav: false,
        dots: true,
        smartSpeed: 800,
        stagePadding: 50,
        slideBy: 1,
        margin: 30,
        responsive: {
            0: {
                items: 1,
                margin: 20,
                stagePadding: 30,
            },
            768: {
                items: 2,
                margin: 20,
                stagePadding: 40,
            },
            1280: {
                items: 3,
                margin: 30,
                stagePadding: 50,
            }
        }
    }).on('changed.owl.carousel', function(event) {
        if (event.item.index === 0)
            $('#hnz-ug-pro-15 .float-nav .owl-prev').prop('disabled', true);
        else 
            $('#hnz-ug-pro-15 .float-nav .owl-prev').prop('disabled', false);

        if (event.item.index === event.item.count - event.page.size)
            $('#hnz-ug-pro-15 .float-nav .owl-next').prop('disabled', true);
        else
            $('#hnz-ug-pro-15 .float-nav .owl-next').prop('disabled', false);
    });

    $("#hnz-ug-pro-15 .float-nav .owl-prev").on('click', function() {
        owl_15.trigger('prev.owl.carousel');
    });
    $("#hnz-ug-pro-15 .float-nav .owl-next").on('click', function() {
        owl_15.trigger('next.owl.carousel');
    });

    /* 16 ----------------------------------------- */

    let owl_16 = $("#hnz-ug-pro-16 .owl-carousel").owlCarousel({
        items: 1,
        nav: false,
        dots: true,
        smartSpeed: 800,
        margin: 20
    });
});

var windowHeight = $(window).outerHeight();
$(window).scroll(function () {
    toggleScroll();

    section3();
    section5();
    section6();
    section7();
    section8();
});

$(window).resize(function () {
    section9();
});

function toggleIt() {
    let uniqueValues = [];
    $('[data-toggle]').each(function() {
        if ($(this).css('display') !== 'none') {
            let toggleValue = $(this).attr('data-toggle');
            let nameValue = $(this).attr('data-name');
            let data = {
                toggle: toggleValue,
                name: nameValue
            };
            
            if (!uniqueValues.some(item => JSON.stringify(item) === JSON.stringify(data))) {
                uniqueValues.push(data);
                let toggleElement = $('<div class="toggle" data-go="'+toggleValue+'">' +
                                        '<span class="dot"></span>' +
                                        '<span class="name">' + nameValue + '</span>' +
                                    '</div>');
                
                $('.toggle-it').append(toggleElement);
            }
        }
    });

    if (uniqueValues.length > 0)
        $('.toggle-it').css('opacity', '1');
}

function toggleScroll() {
    const sections = $('section').filter(function() {
        return $(this).css('display') !== 'none';
    });
    let currentSection = '';

    sections.each(function () {
        const sectionTop = $(this).offset().top - 50;
        const sectionHeight = $(this).height();
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            currentSection = $(this).data('toggle');
        }
    });

    const links = $('.toggle-it .toggle');
    links.removeClass('active');
    links.filter('[data-go="'+currentSection+'"]').addClass('active');

    $('.toggle-it').each(function() {
        if ($(this).find('.active').length > 0)
            $('.toggle-it').css('opacity', '1');
        else
            $('.toggle-it').css('opacity', '0');
    });
}

$(document).on('click', '.toggle-it .toggle', function() {
    const targetSection = $(this).data('go');
    let targetOffset = 0;

    $('section').each(function() {
        if ($(this).css('display') !== 'none' && $(this).data('toggle') === targetSection) {
            targetOffset = $(this).offset().top;
            return false;
        }
    });

    $('html, body').animate({
        scrollTop: targetOffset
    }, 0);
});

$('#hnz-ug-pro-1 .color-toggle .color').on('click', function() {
    if (!$(this).hasClass('active')) {
        $(this).addClass('active').siblings().removeClass('active');

        let index = $('#hnz-ug-pro-1 .color-toggle .color.active').index();
        $(`#hnz-ug-pro-1 .slide-data .data:eq(${index})`).addClass('active').siblings().removeClass('active');

        $('#hnz-ug-pro-1 .background-img').removeClass('active');
        $(`#hnz-ug-pro-1 .background-img:eq(${index})`).addClass('active');

        $('#hnz-ug-pro-1 .product-img').css({
            'left': '-200%',
            'opacity': '0'
        });

        setTimeout(() => {
            let imgSrc = $('#hnz-ug-pro-1 .slide-data .data.active').data('img');
            $('#hnz-ug-pro-1 .product-img').attr('src', `${imgSrc}`);
            $('#hnz-ug-pro-1 .product-img').css({
                'left': '0',
                'opacity': '1'
            });
        }, 500);
    }
});

function section3() {
    let title = $('#hnz-ug-pro-3 .title');
    let scrollPosition = $(this).scrollTop();
    let titlePosition = title.offset().top;
    let windowHeight = $(window).height();

    if (!title.hasClass('active')) {
        if (titlePosition - scrollPosition < windowHeight - 100) {
            title.addClass('active');
        } 
    }
    else {
        if (!(titlePosition - scrollPosition < windowHeight - 100)) {
            title.removeClass('active');
        } 
    }
}

function section5() {
    if ($('#hnz-ug-pro-5 .go-down').data('item') > 1) {
        let item = $('#hnz-ug-pro-5 .go-down').data('item');
        let section = visiblePercent($('#hnz-ug-pro-5'));

        if (item == 2) {
            //33.33333333333333
            if (section >= 1 && section <= 66.66666666666666) {
                $('#hnz-ug-pro-5 .container:eq(0)').css('opacity', '1');
                $('#hnz-ug-pro-5 .container:eq(1)').css('opacity', '0');

                $('#hnz-ug-pro-5 .container:eq(0) .text').css({'opacity': '1', 'top': '0' });
                $('#hnz-ug-pro-5 .container:eq(1) .text').css({'opacity': '0', 'top': '20%' });
            }
            else if (section >= 66.76666666666666 && section <= 100) {
                $('#hnz-ug-pro-5 .container:eq(0)').css('opacity', '0');
                $('#hnz-ug-pro-5 .container:eq(1)').css('opacity', '1');

                $('#hnz-ug-pro-5 .container:eq(0) .text').css({'opacity': '0', 'top': '20%'});
                $('#hnz-ug-pro-5 .container:eq(1) .text').css({'opacity': '1', 'top': '0'});
            }
        }
        if (item == 3) {
            //25
            if (section >= 1 && section <= 50) {
                $('#hnz-ug-pro-5 .container:eq(0)').css('opacity', '1');
                $('#hnz-ug-pro-5 .container:eq(1)').css('opacity', '0');
                $('#hnz-ug-pro-5 .container:eq(2)').css('opacity', '0');

                $('#hnz-ug-pro-5 .container:eq(0) .text').css({'opacity': '1', 'top': '0' });
                $('#hnz-ug-pro-5 .container:eq(1) .text').css({'opacity': '0', 'top': '20%' });
                $('#hnz-ug-pro-5 .container:eq(2) .text').css({'opacity': '0', 'top': '20%' });
            }
            else if (section >= 51 && section <= 75) {
                $('#hnz-ug-pro-5 .container:eq(0)').css('opacity', '0');
                $('#hnz-ug-pro-5 .container:eq(1)').css('opacity', '1');
                $('#hnz-ug-pro-5 .container:eq(2)').css('opacity', '0');

                $('#hnz-ug-pro-5 .container:eq(0) .text').css({'opacity': '0', 'top': '20%'});
                $('#hnz-ug-pro-5 .container:eq(1) .text').css({'opacity': '1', 'top': '0'});
                $('#hnz-ug-pro-5 .container:eq(2) .text').css({'opacity': '0', 'top': '20%'});
            }
            else if (section >= 76 && section <= 100) {
                $('#hnz-ug-pro-5 .container:eq(0)').css('opacity', '0');
                $('#hnz-ug-pro-5 .container:eq(1)').css('opacity', '0');
                $('#hnz-ug-pro-5 .container:eq(2)').css('opacity', '1');

                $('#hnz-ug-pro-5 .container:eq(0) .text').css({'opacity': '0', 'top': '20%'});
                $('#hnz-ug-pro-5 .container:eq(1) .text').css({'opacity': '0', 'top': '20%'});
                $('#hnz-ug-pro-5 .container:eq(2) .text').css({'opacity': '1', 'top': '0'});
            }
        }
        if (item == 4) {
            //20
            if (section >= 1 && section <= 40) {
                $('#hnz-ug-pro-5 .container:eq(0)').css('opacity', '1');
                $('#hnz-ug-pro-5 .container:eq(1)').css('opacity', '0');
                $('#hnz-ug-pro-5 .container:eq(2)').css('opacity', '0');
                $('#hnz-ug-pro-5 .container:eq(3)').css('opacity', '0');

                $('#hnz-ug-pro-5 .container:eq(0) .text').css({'opacity': '1', 'top': '0' });
                $('#hnz-ug-pro-5 .container:eq(1) .text').css({'opacity': '0', 'top': '20%' });
                $('#hnz-ug-pro-5 .container:eq(2) .text').css({'opacity': '0', 'top': '20%' });
                $('#hnz-ug-pro-5 .container:eq(3) .text').css({'opacity': '0', 'top': '20%' });
            }
            else if (section >= 41 && section <= 60) {
                $('#hnz-ug-pro-5 .container:eq(0)').css('opacity', '0');
                $('#hnz-ug-pro-5 .container:eq(1)').css('opacity', '1');
                $('#hnz-ug-pro-5 .container:eq(2)').css('opacity', '0');
                $('#hnz-ug-pro-5 .container:eq(3)').css('opacity', '0');

                $('#hnz-ug-pro-5 .container:eq(0) .text').css({'opacity': '0', 'top': '20%'});
                $('#hnz-ug-pro-5 .container:eq(1) .text').css({'opacity': '1', 'top': '0'});
                $('#hnz-ug-pro-5 .container:eq(2) .text').css({'opacity': '0', 'top': '20%'});
                $('#hnz-ug-pro-5 .container:eq(3) .text').css({'opacity': '0', 'top': '20%'});
            }
            else if (section >= 61 && section <= 80) {
                $('#hnz-ug-pro-5 .container:eq(0)').css('opacity', '0');
                $('#hnz-ug-pro-5 .container:eq(1)').css('opacity', '0');
                $('#hnz-ug-pro-5 .container:eq(2)').css('opacity', '1');
                $('#hnz-ug-pro-5 .container:eq(3)').css('opacity', '0');

                $('#hnz-ug-pro-5 .container:eq(0) .text').css({'opacity': '0', 'top': '20%'});
                $('#hnz-ug-pro-5 .container:eq(1) .text').css({'opacity': '0', 'top': '20%'});
                $('#hnz-ug-pro-5 .container:eq(2) .text').css({'opacity': '1', 'top': '0'});
                $('#hnz-ug-pro-5 .container:eq(3) .text').css({'opacity': '0', 'top': '20%'});
            }
            else if (section >= 81 && section <= 100) {
                $('#hnz-ug-pro-5 .container:eq(0)').css('opacity', '0');
                $('#hnz-ug-pro-5 .container:eq(1)').css('opacity', '0');
                $('#hnz-ug-pro-5 .container:eq(2)').css('opacity', '0');
                $('#hnz-ug-pro-5 .container:eq(3)').css('opacity', '1');

                $('#hnz-ug-pro-5 .container:eq(0) .text').css({'opacity': '0', 'top': '20%'});
                $('#hnz-ug-pro-5 .container:eq(1) .text').css({'opacity': '0', 'top': '20%'});
                $('#hnz-ug-pro-5 .container:eq(2) .text').css({'opacity': '0', 'top': '20%'});
                $('#hnz-ug-pro-5 .container:eq(3) .text').css({'opacity': '1', 'top': '0'});
            }
        }
        if (item == 5) {
            //33.33
            if (section >= 1 && section <= 33.33333333333333) {
                $('#hnz-ug-pro-5 .container:eq(0)').css('opacity', '1');
                $('#hnz-ug-pro-5 .container:eq(1)').css('opacity', '0');
                $('#hnz-ug-pro-5 .container:eq(2)').css('opacity', '0');
                $('#hnz-ug-pro-5 .container:eq(3)').css('opacity', '0');
                $('#hnz-ug-pro-5 .container:eq(4)').css('opacity', '0');

                $('#hnz-ug-pro-5 .container:eq(0) .text').css({'opacity': '1', 'top': '0' });
                $('#hnz-ug-pro-5 .container:eq(1) .text').css({'opacity': '0', 'top': '20%' });
                $('#hnz-ug-pro-5 .container:eq(2) .text').css({'opacity': '0', 'top': '20%' });
                $('#hnz-ug-pro-5 .container:eq(3) .text').css({'opacity': '0', 'top': '20%' });
                $('#hnz-ug-pro-5 .container:eq(4) .text').css({'opacity': '0', 'top': '20%' });
            }
            else if (section >= 33.43333333333333 && section <= 50) {
                $('#hnz-ug-pro-5 .container:eq(0)').css('opacity', '0');
                $('#hnz-ug-pro-5 .container:eq(1)').css('opacity', '1');
                $('#hnz-ug-pro-5 .container:eq(2)').css('opacity', '0');
                $('#hnz-ug-pro-5 .container:eq(3)').css('opacity', '0');
                $('#hnz-ug-pro-5 .container:eq(4)').css('opacity', '0');

                $('#hnz-ug-pro-5 .container:eq(0) .text').css({'opacity': '0', 'top': '20%' });
                $('#hnz-ug-pro-5 .container:eq(1) .text').css({'opacity': '1', 'top': '0' });
                $('#hnz-ug-pro-5 .container:eq(2) .text').css({'opacity': '0', 'top': '20%' });
                $('#hnz-ug-pro-5 .container:eq(3) .text').css({'opacity': '0', 'top': '20%' });
                $('#hnz-ug-pro-5 .container:eq(4) .text').css({'opacity': '0', 'top': '20%' });
            }
            else if (section >= 51 && section <= 66.66666666666667) {
                $('#hnz-ug-pro-5 .container:eq(0)').css('opacity', '0');
                $('#hnz-ug-pro-5 .container:eq(1)').css('opacity', '0');
                $('#hnz-ug-pro-5 .container:eq(2)').css('opacity', '1');
                $('#hnz-ug-pro-5 .container:eq(3)').css('opacity', '0');
                $('#hnz-ug-pro-5 .container:eq(4)').css('opacity', '0');

                $('#hnz-ug-pro-5 .container:eq(0) .text').css({'opacity': '0', 'top': '20%' });
                $('#hnz-ug-pro-5 .container:eq(1) .text').css({'opacity': '0', 'top': '20%' });
                $('#hnz-ug-pro-5 .container:eq(2) .text').css({'opacity': '1', 'top': '0' });
                $('#hnz-ug-pro-5 .container:eq(3) .text').css({'opacity': '0', 'top': '20%' });
                $('#hnz-ug-pro-5 .container:eq(4) .text').css({'opacity': '0', 'top': '20%' });
            }
            else if (section >= 66.76666666666667 && section <= 83.33333333333334) {
                $('#hnz-ug-pro-5 .container:eq(0)').css('opacity', '0');
                $('#hnz-ug-pro-5 .container:eq(1)').css('opacity', '0');
                $('#hnz-ug-pro-5 .container:eq(2)').css('opacity', '0');
                $('#hnz-ug-pro-5 .container:eq(3)').css('opacity', '1');
                $('#hnz-ug-pro-5 .container:eq(4)').css('opacity', '0');

                $('#hnz-ug-pro-5 .container:eq(0) .text').css({'opacity': '0', 'top': '20%' });
                $('#hnz-ug-pro-5 .container:eq(1) .text').css({'opacity': '0', 'top': '20%' });
                $('#hnz-ug-pro-5 .container:eq(2) .text').css({'opacity': '0', 'top': '20%' });
                $('#hnz-ug-pro-5 .container:eq(3) .text').css({'opacity': '1', 'top': '0' });
                $('#hnz-ug-pro-5 .container:eq(4) .text').css({'opacity': '0', 'top': '20%' });
            }
            else if (section >= 83.43333333333334 && section <= 100) {
                $('#hnz-ug-pro-5 .container:eq(0)').css('opacity', '0');
                $('#hnz-ug-pro-5 .container:eq(1)').css('opacity', '0');
                $('#hnz-ug-pro-5 .container:eq(2)').css('opacity', '0');
                $('#hnz-ug-pro-5 .container:eq(3)').css('opacity', '0');
                $('#hnz-ug-pro-5 .container:eq(4)').css('opacity', '1');

                $('#hnz-ug-pro-5 .container:eq(0) .text').css({'opacity': '0', 'top': '20%' });
                $('#hnz-ug-pro-5 .container:eq(1) .text').css({'opacity': '0', 'top': '20%' });
                $('#hnz-ug-pro-5 .container:eq(2) .text').css({'opacity': '0', 'top': '20%' });
                $('#hnz-ug-pro-5 .container:eq(3) .text').css({'opacity': '0', 'top': '20%' });
                $('#hnz-ug-pro-5 .container:eq(4) .text').css({'opacity': '1', 'top': '0' });
            }
        }
    }
}

var video_6 = $('#hnz-ug-pro-6 video')[0];
var video_6m = $('#hnz-ug-pro-6 video')[1];
function section6() {
    if (visiblePercent($('#hnz-ug-pro-6')) >= 90) {
        if (video_6.paused)
            video_6.play();
        if (video_6m.paused)
            video_6m.play();
    }
}
video_6.addEventListener('ended', function(){
    video_6.currentTime = 0;
    video_6.pause();
});

function section7() {
    if ($('#hnz-ug-pro-7 .go-down').data('item') > 1) {
        let item = $('#hnz-ug-pro-7 .go-down').data('item');
        let section = visiblePercent($('#hnz-ug-pro-7 .go-down'));

        if (item == 2) {
            //33.33333333333333
            if (section >= 1 && section <= 66.66666666666666) {
                $('#hnz-ug-pro-7 .background-image:eq(0)').css('top', '0');
                $('#hnz-ug-pro-7 .background-image:eq(1)').css('top', '100%');

                $('#hnz-ug-pro-7 .container .text').css({'opacity': '0', 'top': '20%'});
                $('#hnz-ug-pro-7 .container:eq(0) .text').css({'opacity': '1', 'top': '0' });
            }
            else if (section >= 66.76666666666666 && section <= 100) {
                $('#hnz-ug-pro-7 .background-image:eq(0)').css('top', '0');
                $('#hnz-ug-pro-7 .background-image:eq(1)').css('top', '0');

                $('#hnz-ug-pro-7 .container .text').css({'opacity': '0', 'top': '20%'});
                $('#hnz-ug-pro-7 .container:eq(1) .text').css({'opacity': '1', 'top': '0' });
            }
        }
        if (item == 3) {
            //25
            if (section >= 1 && section <= 50) {
                $('#hnz-ug-pro-7 .background-image:eq(0)').css('top', '0');
                $('#hnz-ug-pro-7 .background-image:eq(1)').css('top', '100%');
                $('#hnz-ug-pro-7 .background-image:eq(2)').css('top', '100%');

                $('#hnz-ug-pro-7 .container .text').css({'opacity': '0', 'top': '20%'});
                $('#hnz-ug-pro-7 .container:eq(0) .text').css({'opacity': '1', 'top': '0' });
            }
            else if (section >= 51 && section <= 75) {
                $('#hnz-ug-pro-7 .background-image:eq(0)').css('top', '0');
                $('#hnz-ug-pro-7 .background-image:eq(1)').css('top', '0');
                $('#hnz-ug-pro-7 .background-image:eq(2)').css('top', '100%');

                $('#hnz-ug-pro-7 .container .text').css({'opacity': '0', 'top': '20%'});
                $('#hnz-ug-pro-7 .container:eq(1) .text').css({'opacity': '1', 'top': '0' });
            }
            else if (section >= 76 && section <= 100) {
                $('#hnz-ug-pro-7 .background-image:eq(0)').css('top', '0');
                $('#hnz-ug-pro-7 .background-image:eq(1)').css('top', '0');
                $('#hnz-ug-pro-7 .background-image:eq(2)').css('top', '0');

                $('#hnz-ug-pro-7 .container .text').css({'opacity': '0', 'top': '20%'});
                $('#hnz-ug-pro-7 .container:eq(2) .text').css({'opacity': '1', 'top': '0' });
            }
        }
        if (item == 4) {
            //20
            if (section >= 1 && section <= 40) {
                $('#hnz-ug-pro-7 .background-image:eq(0)').css('top', '0');
                $('#hnz-ug-pro-7 .background-image:eq(1)').css('top', '100%');
                $('#hnz-ug-pro-7 .background-image:eq(2)').css('top', '100%');
                $('#hnz-ug-pro-7 .background-image:eq(3)').css('top', '100%');

                $('#hnz-ug-pro-7 .container .text').css({'opacity': '0', 'top': '20%'});
                $('#hnz-ug-pro-7 .container:eq(0) .text').css({'opacity': '1', 'top': '0' });
            }
            else if (section >= 41 && section <= 60) {
                $('#hnz-ug-pro-7 .background-image:eq(0)').css('top', '0');
                $('#hnz-ug-pro-7 .background-image:eq(1)').css('top', '0');
                $('#hnz-ug-pro-7 .background-image:eq(2)').css('top', '100%');
                $('#hnz-ug-pro-7 .background-image:eq(3)').css('top', '100%');

                $('#hnz-ug-pro-7 .container .text').css({'opacity': '0', 'top': '20%'});
                $('#hnz-ug-pro-7 .container:eq(1) .text').css({'opacity': '1', 'top': '0' });
            }
            else if (section >= 61 && section <= 80) {
                $('#hnz-ug-pro-7 .background-image:eq(0)').css('top', '0');
                $('#hnz-ug-pro-7 .background-image:eq(1)').css('top', '0');
                $('#hnz-ug-pro-7 .background-image:eq(2)').css('top', '0');
                $('#hnz-ug-pro-7 .background-image:eq(3)').css('top', '100%');

                $('#hnz-ug-pro-7 .container .text').css({'opacity': '0', 'top': '20%'});
                $('#hnz-ug-pro-7 .container:eq(2) .text').css({'opacity': '1', 'top': '0' });
            }
            else if (section >= 81 && section <= 100) {
                $('#hnz-ug-pro-7 .background-image:eq(0)').css('top', '0');
                $('#hnz-ug-pro-7 .background-image:eq(1)').css('top', '0');
                $('#hnz-ug-pro-7 .background-image:eq(2)').css('top', '0');
                $('#hnz-ug-pro-7 .background-image:eq(3)').css('top', '0');

                $('#hnz-ug-pro-7 .container .text').css({'opacity': '0', 'top': '20%'});
                $('#hnz-ug-pro-7 .container:eq(3) .text').css({'opacity': '1', 'top': '0' });
            }
        }
        if (item == 5) {
            //33.33
            if (section >= 1 && section <= 33.33333333333333) {
                $('#hnz-ug-pro-7 .background-image:eq(0)').css('top', '0');
                $('#hnz-ug-pro-7 .background-image:eq(1)').css('top', '100%');
                $('#hnz-ug-pro-7 .background-image:eq(2)').css('top', '100%');
                $('#hnz-ug-pro-7 .background-image:eq(3)').css('top', '100%');
                $('#hnz-ug-pro-7 .background-image:eq(4)').css('top', '100%');

                $('#hnz-ug-pro-7 .container .text').css({'opacity': '0', 'top': '20%'});
                $('#hnz-ug-pro-7 .container:eq(0) .text').css({'opacity': '1', 'top': '0' });
            }
            else if (section >= 33.43333333333333 && section <= 50) {
                $('#hnz-ug-pro-7 .background-image:eq(0)').css('top', '0');
                $('#hnz-ug-pro-7 .background-image:eq(1)').css('top', '0');
                $('#hnz-ug-pro-7 .background-image:eq(2)').css('top', '100%');
                $('#hnz-ug-pro-7 .background-image:eq(3)').css('top', '100%');
                $('#hnz-ug-pro-7 .background-image:eq(4)').css('top', '100%');

                $('#hnz-ug-pro-7 .container .text').css({'opacity': '0', 'top': '20%'});
                $('#hnz-ug-pro-7 .container:eq(1) .text').css({'opacity': '1', 'top': '0' });
            }
            else if (section >= 51 && section <= 66.66666666666667) {
                $('#hnz-ug-pro-7 .background-image:eq(0)').css('top', '0');
                $('#hnz-ug-pro-7 .background-image:eq(1)').css('top', '0');
                $('#hnz-ug-pro-7 .background-image:eq(2)').css('top', '0');
                $('#hnz-ug-pro-7 .background-image:eq(3)').css('top', '100%');
                $('#hnz-ug-pro-7 .background-image:eq(4)').css('top', '100%');

                $('#hnz-ug-pro-7 .container .text').css({'opacity': '0', 'top': '20%'});
                $('#hnz-ug-pro-7 .container:eq(2) .text').css({'opacity': '1', 'top': '0' });
            }
            else if (section >= 66.76666666666667 && section <= 83.33333333333334) {
                $('#hnz-ug-pro-7 .background-image:eq(0)').css('top', '0');
                $('#hnz-ug-pro-7 .background-image:eq(1)').css('top', '0');
                $('#hnz-ug-pro-7 .background-image:eq(2)').css('top', '0');
                $('#hnz-ug-pro-7 .background-image:eq(3)').css('top', '0');
                $('#hnz-ug-pro-7 .background-image:eq(4)').css('top', '100%');

                $('#hnz-ug-pro-7 .container .text').css({'opacity': '0', 'top': '20%'});
                $('#hnz-ug-pro-7 .container:eq(3) .text').css({'opacity': '1', 'top': '0' });
            }
            else if (section >= 83.43333333333334 && section <= 100) {
                $('#hnz-ug-pro-7 .background-image:eq(0)').css('top', '0');
                $('#hnz-ug-pro-7 .background-image:eq(1)').css('top', '0');
                $('#hnz-ug-pro-7 .background-image:eq(2)').css('top', '0');
                $('#hnz-ug-pro-7 .background-image:eq(3)').css('top', '0');
                $('#hnz-ug-pro-7 .background-image:eq(4)').css('top', '0');

                $('#hnz-ug-pro-7 .container .text').css({'opacity': '0', 'top': '20%'});
                $('#hnz-ug-pro-7 .container:eq(4) .text').css({'opacity': '1', 'top': '0' });
            }
        }
    }
}

function section8() {
    let section = visiblePercent($('#hnz-ug-pro-8 .clip-image'));
    section /= 5;

    $('#hnz-ug-pro-8 .clip-image').css('clip-path', `inset(0% ${20-section}% 0% ${20-section}% round ${20-section}px)`);

    let section_m = visiblePercent($('#hnz-ug-pro-8 .clip-mobile'));
    section_m /= 5;

    $('#hnz-ug-pro-8 .clip-mobile').css('clip-path', `inset(${20-section_m}% ${20-section_m}% ${20-section_m}% ${20-section_m}% round ${20-section_m}px)`);

    if (visiblePercent($('#hnz-ug-pro-8 .clip-mobile')) == 100)
        $('#hnz-ug-pro-8 .float-title').css({'opacity': '1', 'top': '50%'});
    else 
        $('#hnz-ug-pro-8 .float-title').css({'opacity': '0', 'top': '70%'});
}

function section9() {
    let firstH = $('#hnz-ug-pro-9 .slides:not(.mobile) .slide:first-child').height();
    $('#hnz-ug-pro-9 .slides').height(`${firstH+50}px`);

    let firstH_m = $('#hnz-ug-pro-9 .slides.mobile .slide:first-child').height();
    $('#hnz-ug-pro-9 .slides.mobile').height(`${firstH_m+150}px`);

    let children = $('#hnz-ug-pro-9 .slides.mobile .slide');
    let zIndexValue = children.length;
    
    children.each(function() {
        $(this).css('z-index', zIndexValue);
        zIndexValue--;
    });
}

$('#hnz-ug-pro-9 .slides').swipe({
    swipeUp:function() {
        let activeSlide = $('.slides .slide.active');
        let nextSlide = activeSlide.next('.slide');

        if (nextSlide.length > 0) {
            let currentPreview = $('.slides .preview');
            if (currentPreview.length > 0) {
                currentPreview.removeClass('preview').addClass('slide');
            }
            activeSlide.removeClass('active').addClass('preview');
            nextSlide.addClass('active');
        }

        let index = $('.slide.active').index();
        $(`.toggles .toggle:nth-child(${index+1})`).addClass('active').siblings().removeClass('active');

        if ($('.slides.mobile .slide').last().hasClass('active')) {
            $('.slides.mobile .slide').not('.active, .preview').css('opacity', 0);
            $('.slides.mobile .slide.preview').css('opacity', .5);
        }
        else {
            $('.slides.mobile .slide').not('.preview').css('opacity', 1);
            $('.slides.mobile .slide.preview').css('opacity', .5);
        }
    },
    swipeDown:function() {
        let activeSlide = $('.slides .slide.active');
        let prevSlide = activeSlide.prev('.slide');
        let nextPrev = prevSlide.prev('.slide');

        if (prevSlide.length > 0) {
            activeSlide.removeClass('active');
            prevSlide.removeClass('preview').addClass('active');

            if (nextPrev.length > 0) {
                nextPrev.addClass('preview');
            }
        }

        let index = $('.slide.active').index();
        $(`.toggles .toggle:nth-child(${index+1})`).addClass('active').siblings().removeClass('active');

        if ($('.slides.mobile .slide').last().hasClass('active')) {
            $('.slides.mobile .slide').not('.active, .preview').css('opacity', 0);
            $('.slides.mobile .slide.preview').css('opacity', .5);
        }
        else {
            $('.slides.mobile .slide').not('.preview').css('opacity', 1);
            $('.slides.mobile .slide.preview').css('opacity', .5);
        }
    },
    threshold: 50
});

$('#hnz-ug-pro-9 .toggle').on('click', function() {
    let current = $('#hnz-ug-pro-9 .toggle.active').index();
    let clicked = $(this).index();

    if (clicked != current) {
        $('#hnz-ug-pro-9 .slide.preview').removeClass('preview');
        $('#hnz-ug-pro-9 .slide.active').removeClass('active');
        $(`#hnz-ug-pro-9 .slide:nth-child(${clicked+1})`).addClass('active');
        let prev = $('#hnz-ug-pro-9 .slide.active').prev('.slide');

        if (prev.length > 0)
            prev.addClass('preview');

        $(this).addClass('active').siblings().removeClass('active');
    }
});

$('#hnz-ug-pro-12 .title i').on('click', function() {
    $(this).toggleClass('hide');

    if ($(this).hasClass('hide')) {
        $('#hnz-ug-pro-12 .table-row').slideUp();
    }
    else {
        $('#hnz-ug-pro-12 .table-row').slideDown();
    }
})

$('#hnz-ug-pro-13 .toggle').on('click', function() {
    $(this).addClass('active').siblings().removeClass('active');

    let index = $(this).index();

    $(`#hnz-ug-pro-13 .nav-menu .menu:nth-child(${index+1})`).addClass('active').siblings().removeClass('active');
});