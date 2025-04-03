$(document).ready(function() {
    headerPos();

    displayRecentlyViewed();

    if ($('#hnz-text-yt').length) {
        let owl = $("#hnz-text-yt .owl-carousel").owlCarousel({
            items: 1,
            nav: false,
            dots: false,
            smartSpeed: 800,
            margin: 30,
        }).on('changed.owl.carousel', function(event) {
            if (event.item.index === 0)
                $('#hnz-text-yt .float-nav .owl-prev').prop('disabled', true);
            else 
                $('#hnz-text-yt .float-nav .owl-prev').prop('disabled', false);
    
            if (event.item.index === event.item.count - event.page.size)
                $('#hnz-text-yt .float-nav .owl-next').prop('disabled', true);
            else
                $('#hnz-text-yt .float-nav .owl-next').prop('disabled', false);
        });

        $("#hnz-text-yt .float-nav .owl-prev").on('click', function() {
            owl.trigger('prev.owl.carousel');
        });
        $("#hnz-text-yt .float-nav .owl-next").on('click', function() {
            owl.trigger('next.owl.carousel');
        });
    }
});

$(window).resize(function() {
    headerPos();
});

$(window).scroll(function() {
    headerPos();
});

function headerPos() {
    if ($(window).scrollTop() > 0) {
        $('.vanpower-header').css('top', '0');
    }
    else {
      if ($('.gta-content__container').prevObject.length > 0) {
        $('.vanpower-header').css('top', `${$('.gta-content__container').innerHeight()}px`);
      } else if($('.announcement-container').length>0){
        $('.vanpower-header').css('top', '68px');
      } else{
        $('.vanpower-header').css('top', '0');
      }
       // $('.vanpower-header').css('top', `${$('.announcement-container').innerHeight()}px`);
    }
}

$('.btn-video[data-video]').on('click', function(){
    let videoUrl = $(this).data('video');
    let playerElement = '<video controls autoplay><source src="' + videoUrl + '" type="video/mp4">Your browser does not support the video tag.</video>';

    $('.hnz-video .video-container').prepend(playerElement);
    $('.hnz-video .video-container video').trigger('play');
    $('.hnz-video .video-close').css('opacity', '1');
    $('html').css('overflow-y', 'hidden');
    $('.hnz-video').show();
});

$('.hnz-video .video-close').on('click', function() {
    $('.hnz-video').hide();
    $('html').css('overflow-y', 'auto');
    $('.hnz-video .video-close').css('opacity', '1');
    $('.hnz-video .video-container video').remove();
});

function visiblePercent($element) {
    let windowHeight = $(window).height();
    let scrollTop = $(window).scrollTop();
    let elementOffset = $element.offset().top;
    let elementHeight = $element.outerHeight();

    let distanceFromTop = elementOffset - scrollTop;
    let visiblePercent = (windowHeight - distanceFromTop) / elementHeight * 100;

    visiblePercent = Math.max(0, Math.min(100, visiblePercent));

    return visiblePercent;
}

$('.variant-colors li').on('click', function() {
    $(this).addClass('on').siblings().removeClass('on');
    let colorId = $(this).data('color');

    $(`.product-image img[data-variant="${colorId}"]`).addClass('active').siblings().removeClass('active');
});

function recentlyViewed(product) {
    let recentlyViewed = JSON.parse(localStorage.getItem('recentlyViewedProducts')) || [];

    recentlyViewed = recentlyViewed.filter(item => item.productId !== product.productId);
    recentlyViewed.unshift(product);

    if (recentlyViewed.length > 5) {
        recentlyViewed.pop();
    }

    localStorage.setItem('recentlyViewedProducts', JSON.stringify(recentlyViewed));
}

function displayRecentlyViewed() {
    let recentlyViewed = JSON.parse(localStorage.getItem('recentlyViewedProducts')) || [];
  
    if (recentlyViewed.length > 0) {
        if ($('.hnz-recently-viewed').length) {

            recentlyViewed.forEach(product => {
                $('.hnz-recently-viewed .owl-carousel').append(
                    
                    '<div class="item">'+
                        '<a class="product-image" href="'+product.productUrl+'">'+
                            '<img class="active" src="'+product.imageUrl+'">'+
                        '</a>'+
                        '<div class="product-details">'+
                            '<div class="star-badge">'+
                                '<div class="jdgm-widget jdgm-preview-badge" data-id="'+product.productId+'">'+product.starBadge+'</div> '+
                            '</div>'+
                            '<h6 class="product-title">'+product.title+'</h6>'+
                            '<p class="description">'+product.description+'</p>'+
                            '<div class="price-button">'+
                                '<div class="price">'+
                                    '<span class="price-regular">'+product.price+'</span>'+
                                '</div>'+
                                '<a class="btn btn-black" href="'+product.productUrl+'">Shop Now</a>'+
                            '</div>'+
                        '</div>'+
                    '</div>'
                );
            });

            let owl_15 = $(".hnz-recently-viewed .owl-carousel").owlCarousel({
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
                    $('.hnz-recently-viewed .float-nav .owl-prev').prop('disabled', true);
                else 
                    $('.hnz-recently-viewed .float-nav .owl-prev').prop('disabled', false);

                if (event.item.index === event.item.count - event.page.size)
                    $('.hnz-recently-viewed .float-nav .owl-next').prop('disabled', true);
                else
                    $('.hnz-recently-viewed .float-nav .owl-next').prop('disabled', false);
            });

            $(".hnz-recently-viewed .float-nav .owl-prev").on('click', function() {
                owl_15.trigger('prev.owl.carousel');
            });
            $(".hnz-recently-viewed .float-nav .owl-next").on('click', function() {
                owl_15.trigger('next.owl.carousel');
            });
        }
    }
    else {
        $('.hnz-recently-viewed').hide();
    }
}

const iframes = document.querySelectorAll('#hnz-videos .video');
iframes.forEach((iframe, index) => {
    const videoUrl = iframe.src;
    const videoId = videoUrl.split('/embed/')[1];
    const apiUrl = `https://noembed.com/embed?url=https://www.youtube.com/watch?v=${videoId}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const titleElement = document.getElementsByClassName('video-title')[index];
            const authorNameElement = document.getElementsByClassName('author-name')[index];

            titleElement.textContent = data.title;
            authorNameElement.textContent = data.author_name;
        })
        .catch(error => {
            console.error('Error fetching video details:', error);
            const titleElement = document.getElementsByClassName('video-title')[index];
            const authorNameElement = document.getElementsByClassName('author-name')[index];

            titleElement.textContent = 'Error fetching video title';
            authorNameElement.textContent = 'Error fetching author name';
        });
});

$(document).on('click', '.hnz-modal', function() {
    $(`.mdl-container[data-id="${$(this).data('modal')}"]`).show();
});

$('.mdl-container .close').on('click', function() {
    $('.mdl-container').hide();
});

document.addEventListener('DOMContentLoaded', function() {
    const openTidioButton = document.querySelector('.openTidio');
    
    if (openTidioButton) {
        openTidioButton.addEventListener('click', function() {
            if (window.tidioChatApi) {
                window.tidioChatApi.open();
            } else {
                console.error('Tidio API is not loaded yet.');
            }
        });
    }
});
