let mapCenter = citymap[0].center;
let map;

$(document).ready(function() {
    map = L.map('map').setView([mapCenter.lat, mapCenter.lng], 10);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

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

        for (let i = 0; i < citymap.length;i++) {
          L.marker([citymap[i].center.lat, citymap[i].center.lng]).addTo(map);
        }
    }

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
     map.flyTo(
          {lat:$(this).data('lat'), lng:$(this).data('lng')},10
      );
});

const handleSearch = debounce(function(event) {
    let term = event.target.value;
    // console.log('term', term)
    // searchLocation(term);
    // const res = geocode({ address: term })
    const res = geocode(term)
    // searchLocation(res)
},500)

$('.input-search').on('input', handleSearch);

// $('.input-search').on('input', function() {
//     let term = $(this).val();
//     // searchLocation(term);
//     const res = geocode({ address: term })
//     searchLocation(res)
// });

$('.clear-search').on('click', function() {
    $('.input-search').val('');
    searchLocation('');
});

function searchLocation(term) {
    // console.log('res', term)
    let type = $('.types .type.active').data('type');
    // 给原始列表加上distance字段，表示和搜索的地点的距离
    let _cityList
    if (term == '') {
      _cityList = citymap.slice()
    } else {
      _cityList = citymap.map(function(v,i) {
        return {...v,distance:calculateDistance(v.center.lng,v.center.lat,term.lng,term.lat)};
      })
      _cityList.sort(function(a,b){return a['distance'] - b['distance']})
    }
    // let _cityList = citymap.map(function(v,i) {
    //   return {...v,distance:calculateDistance(v.long,v.lat,term.lng,term.lat)};
    // })
    // // 列表按距离排序
    // if (term.lng) {
    //   _cityList.sort(function(a,b){return a['distance'] - b['distance']})
    // }
    // 选出当前的类型
    let show = _cityList.filter(x => x.type.toLowerCase().indexOf(type.toLowerCase()) >= 0)
    

    // let show = citymap.filter(x => 
    //     x.title.toLowerCase().indexOf(term.toLowerCase()) >= 0 && 
    //     x.type.toLowerCase().indexOf(type.toLowerCase()) >= 0
    // );

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

        map.flyTo(
            {lat:show[0].center.lat, lng:show[0].center.lng},10
        );

        // map.setZoom(10);
        // map.panTo({
        //     lat : show[0].center.lat,
        //     lng : show[0].center.lng
        // });

        $('.locations .location-body').show();
        $('.locations .location-none').hide();
    }
    else {
        $('.locations .location-body').hide();
        $('.locations .location-none').show();
    }
}
// 计算距离
function calculateDistance(end_lon,end_lat,cLng,cLat) {
  var start_lat = cLat || currentLat;
  var start_lon = cLng || currentLong;
  let radLat1 = (start_lat * Math.PI) / 180.0;
  let radLat2 = (Number(end_lat) * Math.PI) / 180.0;
  let a = radLat1 - radLat2;
  let b = (start_lon * Math.PI) / 180.0 - (Number(end_lon) * Math.PI) / 180.0;
  let s = 2 * Math.asin(Math.sqrt(Math.pow(Math.sin(a / 2), 2) + Math.cos(radLat1) * Math.cos(radLat2) * Math.pow(Math.sin(b / 2), 2)));
  s = s * 6378.137; // 地球半径;
  s = Math.round(s * 10000) / 10000; // 千米/公里
  s = s * 0.621371; // 英里
  return s.toFixed(2);
}

function geocode(request) {
  fetch(`https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(request)}&format=json`)
    .then(response => response.json())
    .then(data => {
      if (data && data.length > 0) {
        const lat = parseFloat(data[0].lat);
        const lng = parseFloat(data[0].lon);
        searchLocation({lat:lat,lng:lng})
        return {lat:lat,lng:lng}
      }
    })
    .catch(error => {
      console.error('Error:', error);
    });
}
// 请求输入地点的经纬度
// function geocode(request) {
//   if (request && request.address) {
//     geocoder.geocode(request).then((result) => {
//         const { results } = result;
//         console.log({lat:results[0].geometry.location.lat(),lng:results[0].geometry.location.lng()})
//         const res = {lat:results[0].geometry.location.lat(),lng:results[0].geometry.location.lng()}
//         return res
//         // searchLocation({lat:results[0].geometry.location.lat(),lng:results[0].geometry.location.lng()})
//         // renderSortListHtml({lat:results[0].geometry.location.lat(),lng:results[0].geometry.location.lng()})
//       }).catch(
//       (e) => {
//         alert("Geocode was not successful for the following reason: " + e);
//       });
//   }
// }
// 防抖
function debounce(func, wait) {
  let timeout;
  return function(...args) {
    const context = this;
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(context, args), wait);
  };
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

        // map.setZoom(10);
        // map.panTo({
        //     lat : show[0].center.lat,
        //     lng : show[0].center.lng
        // });
        // map.flyTo({
        //   center: [show[0].center.lat, show[0].center.lng],
        //   zoom: 10
        // });

        map.flyTo(
            {lat:show[0].center.lat, lng:show[0].center.lng},10
        );

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
    $('.mdl-container[data-id="calendly"] iframe').attr('src',url);

    // Calendly.initInlineWidget({
    //     "url": url,
    //     "parentElement": $('.mdl-container .calendly-inline-widget'),
    //     "prefill": {},
    //     "utm": {}
    // });

    // Calendly.initInlineWidget({
    //     "url": url
    // });

    $('.mdl-container[data-id="calendly"]').show();
});