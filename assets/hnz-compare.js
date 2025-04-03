$(document).ready(function() {
    
    getCompare();

    if ($(window).outerWidth() >= 1280) {
        $('#hnz-compare-2 .sticky').css('top', `${$('.nav-header').height()}px`);
    }

});

$(window).resize(function() {
    if ($(window).outerWidth() >= 1280) {
        $('#hnz-compare-2 .sticky').css('top', `${$('.nav-header').height()}px`);
    }
});

function getCompare() {

    $('.compare .data').html('');
    $('.compare .data--product img').attr('src', '');
    $('.compare .data--product a').attr('href', '');
    $('.compare .data--product .product-title').html('');

    $('.selection .btn-select div').html('Select');

    let idx = 0;
    compare.forEach(product => {

        $(`.selection .btn-select:eq(${idx})`).attr('data-selected', product.id);
        $(`.selection .btn-select:eq(${idx}) div`).html(product.title);

        $(`.compare .data--product:eq(${idx}) img`).attr('src', product.featured_image);
        $(`.compare .data--product:eq(${idx}) .product-title`).html(product.title);
        $(`.compare .data--product:eq(${idx}) a`).attr('href', product.url);

        $(`.compare .data--color:eq(${idx})`).html(product.color);
        $(`.compare .data--frame_size:eq(${idx})`).html(product.frame_size);
        $(`.compare .data--mode:eq(${idx})`).html(product.mode);
        $(`.compare .data--power:eq(${idx})`).html(product.power);
        $(`.compare .data--battery_capacity:eq(${idx})`).html(product.battery_capacity);
        $(`.compare .data--assist_speed:eq(${idx})`).html(product.assist_speed);
        $(`.compare .data--range:eq(${idx})`).html(product.range);
        $(`.compare .data--front_fork:eq(${idx})`).html(product.front_fork);
        $(`.compare .data--motor:eq(${idx})`).html(product.motor);
        $(`.compare .data--sensor:eq(${idx})`).html(product.sensor);
        $(`.compare .data--charger:eq(${idx})`).html(product.charger);
        $(`.compare .data--throttle:eq(${idx})`).html(product.throttle);
        $(`.compare .data--rear_derailleur:eq(${idx})`).html(product.rear_derailleur);
        $(`.compare .data--brakes:eq(${idx})`).html(product.brakes);
        $(`.compare .data--stem:eq(${idx})`).html(product.stem);
        $(`.compare .data--seat_post:eq(${idx})`).html(product.seat_post);

        $(`.model[data-model="${product.id}"]`).addClass('active');

        idx++;
    });
}

$('.btn-select').hover(function(){
    if ($(window).outerWidth() >= 1280) {
        let btnRight = $(this).position().left + $(this).outerWidth();
        let modelsWidth = $('.models').outerWidth();
        let modelsLeft = btnRight - modelsWidth;

        $('.models').css('left', modelsLeft);
        $('.models').show();
    }
    else if ($(window).outerWidth() >= 768) {
        $('.models').css('left', '30px');
        $('.models').show();
    }
    else {
        $('.models').css('left', '20px');
        $('.models').show();
    }
});

$('.selection, .models').mouseenter(function(){
    if ($('.models').is(':visible')) {
        $('.models').show();
    }
}).mouseleave(function(){
    if (!$('.models').is(':hover')) {
        $('.models').hide();
    }
});

$('.model').on('click', function() {
    if (!$(this).hasClass('active')) {
        if (compare.length < 3) {
        
            $(this).addClass('active');
            let modelId = $(this).data('model');

            let matchingProduct = compare_products.find(function(product) {
                return product.id == modelId;
            });
    
            if (matchingProduct) {
                compare.push(matchingProduct);
            }
    
            getCompare();
        }
    }
    else {
        $(this).removeClass('active');
        let modelId = $(this).data('model');
        
        let index = compare.findIndex(function(product) {
            return product.id == modelId;
        });
    
        if (index !== -1) {
            compare.splice(index, 1);
        }

        getCompare();
    }
});