(g=>{var h,a,k,p="The Google Maps JavaScript API",c="google",l="importLibrary",q="__ib__",m=document,b=window;b=b[c]||(b[c]={});var d=b.maps||(b.maps={}),r=new Set,e=new URLSearchParams,u=()=>h||(h=new Promise(async(f,n)=>{await (a=m.createElement("script"));e.set("libraries",[...r]+"");for(k in g)e.set(k.replace(/[A-Z]/g,t=>"_"+t[0].toLowerCase()),g[k]);e.set("callback",c+".maps."+q);a.src=`https://maps.${c}apis.com/maps/api/js?`+e;d[q]=f;a.onerror=()=>h=n(Error(p+" could not load."));a.nonce=m.querySelector("script[nonce]")?.nonce||"";m.head.append(a)}));d[l]?console.warn(p+" only loads once. Ignoring:",g):d[l]=(f,...n)=>r.add(f)&&u().then(()=>d[l](f,...n))})({
    key: "AIzaSyDxd7IX1wjzcBA2j55d_Qmx4b7ITrvsy4w",
});

let mapCenter = citymap[0].center;
let map;

$(document).ready(function() {

    if (citymap.length > 0) {
        for (const city in citymap) {

            let append = '<div class="location" data-lat="'+citymap[city].center.lat+'" data-lng="'+citymap[city].center.lng+'">'+
                            '<p class="location-name">'+citymap[city].title+'</p>'+
                            '<p class="location-details">'+citymap[city].service+'</p>'+
                            '<p class="location-details"><i class="fa-solid fa-house"></i>'+citymap[city].address+'</p>'+
                            '<p class="location-details"><i class="fa-solid fa-phone-flip"></i>'+citymap[city].phone+'</p>'+
                         '</div>';

            if ((citymap[city].type).includes('Test Ride')) {
                append = '<div class="location" data-lat="'+citymap[city].center.lat+'" data-lng="'+citymap[city].center.lng+'">'+
                            '<p class="location-name">'+citymap[city].title+'</p>'+
                            '<p class="location-details">'+citymap[city].service+'</p>'+
                            '<p class="location-details"><i class="fa-solid fa-house"></i>'+citymap[city].address+'</p>'+
                            '<p class="location-details"><i class="fa-solid fa-phone-flip"></i>'+citymap[city].phone+'</p>'+
                            '<button class="location-btn btn hnz-modal" data-modal="store" data-lng="'+citymap[city].center.lng+'" data-product=\'' + JSON.stringify(citymap[city].product) + '\'>Book</button>'+
                         '</div>';
            }

            $('.locations .location-body').append(append);
        }

        $('.locations .location-body').show();
        $('.locations .location-none').hide();
    }

    async function initMap() {
        const { Map } = await google.maps.importLibrary("maps");

        map = new Map(document.getElementById("map"), {
            center: mapCenter,
            zoom: 9.8,
            mapTypeControl: false,
            streetViewControl: false,
            fullscreenControl: false,
            styles: [
                {
                    "elementType": "geometry",
                    "stylers": [{
                        "color": "#f5f5f5"
                    }]
                },
                {
                    "elementType": "labels.icon",
                    "stylers": [{
                        "visibility": "off"
                    }]
                },
                {
                    "elementType": "labels.text.fill",
                    "stylers": [{
                        "color": "#616161"
                    }]
                },
                {
                    "elementType": "labels.text.stroke",
                    "stylers": [{
                        "color": "#f5f5f5"
                    }]
                },
                {
                    "featureType": "administrative",
                    "elementType": "geometry",
                    "stylers": [{
                        "visibility": "off"
                    }]
                },
                {
                    "featureType": "administrative.land_parcel",
                    "elementType": "labels.text.fill",
                    "stylers": [{
                        "color": "#bdbdbd"
                    }]
                },
                {
                    "featureType": "poi",
                    "stylers": [{
                        "visibility": "off"
                    }]
                },
                {
                    "featureType": "poi",
                    "elementType": "geometry",
                    "stylers": [{
                        "color": "#eeeeee"
                    }]
                },
                {
                    "featureType": "poi",
                    "elementType": "labels.text.fill",
                    "stylers": [{
                        "color": "#757575"
                    }]
                },
                {
                    "featureType": "poi.park",
                    "elementType": "geometry",
                    "stylers": [{
                        "color": "#e5e5e5"
                    }]
                },
                {
                    "featureType": "poi.park",
                    "elementType": "labels.text.fill",
                    "stylers": [{
                        "color": "#9e9e9e"
                    }]
                },
                {
                    "featureType": "road",
                    "elementType": "geometry",
                    "stylers": [{
                        "color": "#ffffff"
                    }]
                },
                {
                    "featureType": "road",
                    "elementType": "labels.icon",
                    "stylers": [{
                        "visibility": "off"
                    }]
                },
                {
                    "featureType": "road.arterial",
                    "elementType": "labels.text.fill",
                    "stylers": [{
                        "color": "#757575"
                    }]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "geometry",
                    "stylers": [{
                        "color": "#dadada"
                    }]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "labels.text.fill",
                    "stylers": [{
                        "color": "#616161"
                    }]
                },
                {
                    "featureType": "road.local",
                    "elementType": "labels.text.fill",
                    "stylers": [{
                        "color": "#9e9e9e"
                    }]
                },
                {
                    "featureType": "transit",
                    "stylers": [{
                        "visibility": "off"
                    }]
                },
                {
                    "featureType": "transit.line",
                    "elementType": "geometry",
                    "stylers": [{
                        "color": "#e5e5e5"
                    }]
                },
                {
                    "featureType": "transit.station",
                    "elementType": "geometry",
                    "stylers": [{
                        "color": "#eeeeee"
                    }]
                },
                {
                    "featureType": "water",
                    "elementType": "geometry",
                    "stylers": [{
                        "color": "#c9c9c9"
                    }]
                },
                {
                    "featureType": "water",
                    "elementType": "labels.text.fill",
                    "stylers": [{
                        "color": "#9e9e9e"
                    }]
                }
            ]
        });

        const defaultMarker = {
            path: "M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z",
            fillColor: "#1a1a1a",
            fillOpacity: 1,
            strokeWeight: 0,
            rotation: 0,
            scale: 2,
            anchor: { x: 12, y: 24 },
        };
        const hoveredMarker = {
            path: "M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z",
            fillColor: "#CD0E2A",
            fillOpacity: 1,
            strokeWeight: 0,
            rotation: 0,
            scale: 2,
            anchor: { x: 12, y: 24 },
        };

        for (const city in citymap) {

            const marker = new google.maps.Marker({
                position: citymap[city].center,
                map,
                background: "#323232",
                icon: defaultMarker,
            });

            let contentString = 
                '<h4 class="store-name">'+citymap[city].title+'</h4>'+
                '<p class="store-address">'+citymap[city].address+'</p>';

            if ((citymap[city].type).includes('Test Ride')) {
                contentString = 
                    '<h4 class="store-name">'+citymap[city].title+'</h4>'+
                    '<p class="store-address">'+citymap[city].address+'</p>'+
                    '<button class="btn btn-black hnz-modal" data-modal="store" data-product=\'' + JSON.stringify(citymap[city].product) + '\'>Book a test ride</button>';
            }

            marker.infowindow = new google.maps.InfoWindow({
                content: contentString
            });      

            marker.addListener("click", () => {
                marker.infowindow.open(map, marker);
            });

            google.maps.event.addListener(marker, 'mouseover', function() {
                marker.setIcon(hoveredMarker);
            });
            google.maps.event.addListener(marker, 'mouseout', function() {
                marker.setIcon(defaultMarker);
            });
        }
    }
    initMap();

    let owl_video = $("#hnz-video-highlights .owl-carousel").owlCarousel({
        items: 1,
        nav: false,
        dots: true,
        startPosition: 1,
        smartSpeed: 800,
        margin: 30,
    }).on('changed.owl.carousel', function(event) {
        if (event.item.index === 0)
            $('#hnz-video-highlights .float-nav .owl-prev').prop('disabled', true);
        else 
            $('#hnz-video-highlights .float-nav .owl-prev').prop('disabled', false);

        if (event.item.index === event.item.count - event.page.size)
            $('#hnz-video-highlights .float-nav .owl-next').prop('disabled', true);
        else
            $('#hnz-video-highlights .float-nav .owl-next').prop('disabled', false);

        $('#hnz-video-highlights video').each(function() {
            this.pause();
        });
        $('#hnz-video-highlights .video-play').show();
    });

    $("#hnz-video-highlights .float-nav .owl-prev").on('click', function() {
        owl_video.trigger('prev.owl.carousel');
    });
    $("#hnz-video-highlights .float-nav .owl-next").on('click', function() {
        owl_video.trigger('next.owl.carousel');
    });

    $('#hnz-video-highlights .video-play').click(function() {
        $(this).hide();
        $(this).closest('.video-container').find('video')[0].play();
    });
});

$(document).on('click', '.location', function() {;
    map.setZoom(10);
    map.panTo({
		lat : $(this).data('lat'),
		lng : $(this).data('lng')
	});
});

$('.input-search').on('input', function() {
    let term = $(this).val();
    searchLocation(term);
});

$('.clear-search').on('click', function() {
    $('.input-search').val('');
    searchLocation('');
});

function searchLocation(term) {
    let type = $('.types .type.active').data('type');

    let show = citymap.filter(x => 
        x.title.toLowerCase().indexOf(term.toLowerCase()) >= 0 && 
        x.type.toLowerCase().indexOf(type.toLowerCase()) >= 0
    );

    if (show.length > 0) {
        $('.locations .location-body').html('');
        
        for (let city in show) {
            
            let append = '<div class="location" data-lat="'+show[city].center.lat+'" data-lng="'+show[city].center.lng+'">'+
                            '<p class="location-name">'+show[city].title+'</p>'+
                            '<p class="location-details">'+show[city].service+'</p>'+
                            '<p class="location-details"><i class="fa-solid fa-house"></i>'+show[city].address+'</p>'+
                            '<p class="location-details"><i class="fa-solid fa-phone-flip"></i>'+show[city].phone+'</p>'+
                         '</div>';

            if ((show[city].type).includes('Test Ride')) {
                append = '<div class="location" data-lat="'+show[city].center.lat+'" data-lng="'+show[city].center.lng+'">'+
                            '<p class="location-name">'+show[city].title+'</p>'+
                            '<p class="location-details">'+show[city].service+'</p>'+
                            '<p class="location-details"><i class="fa-solid fa-house"></i>'+show[city].address+'</p>'+
                            '<p class="location-details"><i class="fa-solid fa-phone-flip"></i>'+show[city].phone+'</p>'+
                            '<button class="location-btn btn hnz-modal" data-modal="store" data-lng="'+show[city].center.lng+'" data-product=\'' + JSON.stringify(show[city].product) + '\'>Book</button>'+
                         '</div>';
            }

            $('.locations .location-body').append(append);
        }

        map.setZoom(10);
        map.panTo({
            lat : show[0].center.lat,
            lng : show[0].center.lng
        });

        $('.locations .location-body').show();
        $('.locations .location-none').hide();
    }
    else {
        $('.locations .location-body').hide();
        $('.locations .location-none').show();
    }
}

$('.types .type').on('click', function() {
    $('.input-search').val('');

    $(this).addClass('active').siblings().removeClass('active');

    let term = $(this).data('type');

    let show = citymap.filter(x => x.type.toLowerCase().indexOf(term.toLowerCase()) >= 0 );
    if (show.length > 0) {
        $('.locations .location-body').html('');
        
        for (let city in show) {
            
            let append = '<div class="location" data-lat="'+show[city].center.lat+'" data-lng="'+show[city].center.lng+'">'+
                            '<p class="location-name">'+show[city].title+'</p>'+
                            '<p class="location-details">'+show[city].service+'</p>'+
                            '<p class="location-details"><i class="fa-solid fa-house"></i>'+show[city].address+'</p>'+
                            '<p class="location-details"><i class="fa-solid fa-phone-flip"></i>'+show[city].phone+'</p>'+
                         '</div>';

            if ((show[city].type).includes('Test Ride')) {
                append = '<div class="location" data-lat="'+show[city].center.lat+'" data-lng="'+show[city].center.lng+'">'+
                            '<p class="location-name">'+show[city].title+'</p>'+
                            '<p class="location-details">'+show[city].service+'</p>'+
                            '<p class="location-details"><i class="fa-solid fa-house"></i>'+show[city].address+'</p>'+
                            '<p class="location-details"><i class="fa-solid fa-phone-flip"></i>'+show[city].phone+'</p>'+
                            '<button class="location-btn btn hnz-modal" data-modal="store" data-lng="'+show[city].center.lng+'" data-product=\'' + JSON.stringify(show[city].product) + '\'>Book</button>'+
                         '</div>';
            }

            $('.locations .location-body').append(append);
        }

        map.setZoom(10);
        map.panTo({
            lat : show[0].center.lat,
            lng : show[0].center.lng
        });

        $('.locations .location-body').show();
        $('.locations .location-none').hide();
    }
    else {
        $('.locations .location-body').hide();
        $('.locations .location-none').show();
    }
});

$(document).on('click', '.hnz-modal', function() {
    let product = $(this).data('product');
    
    $('.row-models').html('');
    $('.btn-calendly').attr('disabled', true);
    
    $.each(product, function(i) {
        $('.row-models').append(
            '<div class="col-lg-3 col-md-4 col-sm-6">'+
                '<div class="model" data-url="'+product[i].calendly+'">'+
                    '<i class="fa-regular fa-circle-check"></i>'+
                    '<div class="model-image">'+
                        '<img src="'+product[i].image+'">'+
                    '</div>'+
                    '<div class="model-details">'+
                        '<h5 class="model-title">'+product[i].title+'</h5>'+
                        '<p class="model-description">'+product[i].description+'</p>'+
                    '</div>'+
                '</div>'+
            '</div>'
        )
    });
});

$(document).on('click', '.model', function() {
    $('.model').removeClass('active');
    $(this).addClass('active');

    let url = $(this).data('url');
    $('.btn-calendly').attr('data-url', url);

    $('.btn-calendly').attr('disabled', false);
});

$(document).on('click', '.btn-calendly', function() {
    let url = $(this).data('url');
    $('.mdl-container').hide();
    $('.calendly-inline-widget').attr('data-url', url).html('');

    Calendly.initInlineWidget({
        "url": url,
        "parentElement": $('.calendly-inline-widget'),
        "prefill": {},
        "utm": {}
    });

    Calendly.initInlineWidget({
        "url": url
    });

    $('.mdl-container[data-id="calendly"]').show();
});