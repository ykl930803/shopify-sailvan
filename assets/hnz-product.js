var sync1 = $("#main-carousel");
var sync2 = $("#option-carousel");

$(document).ready(function() {

    productNav();

    /* 1 ------------------------------------------- */

    $('#hnz-product-1 .sticky').css('top', `${$('.nav-header').height()+30}px`);

    $('#hnz-product-1 .product-row > div:first-child').css({'left': '0', 'opacity': '1'});
    $('#hnz-product-1 .product-row > div:last-child').css({'right': '0', 'opacity': '1'});
    setTimeout(() => {
        $('#hnz-product-1').css('overflow', 'visible');
    }, 500);

    if (document.referrer) {
        $('.back-btn').attr('href', document.referrer);
    }

    let syncedSecondary = false;

    sync1.owlCarousel({
        items: 1,
        slideSpeed: 2000,
        nav: false,
        autoplay: false,
        dots: false,
        loop: false,
        margin: 15,
        responsiveRefreshRate: 200,
    }).on('changed.owl.carousel', syncPosition);

    $("#hnz-product-1 .float-nav.f-media .owl-prev").on('click', function() {
        sync1.trigger('prev.owl.carousel');
    });
    $("#hnz-product-1 .float-nav.f-media .owl-next").on('click', function() {
        sync1.trigger('next.owl.carousel');
    });

    sync2.on('initialized.owl.carousel', function () {
        sync2.find(".owl-item").eq(0).addClass("current");
    })
    .owlCarousel({
        items: 5,
        nav: false,
        dots: false,
        margin: 15,
        smartSpeed: 200,
        slideSpeed: 500,
        slideBy: 5,
        stagePadding: 0,
        responsiveRefreshRate: 100,
        autoWidth: true,
        responsive: {
            0: {
                margin: 10
            },
            768: {
                margin: 15
            }
        }
    }).on('changed.owl.carousel', syncPosition2);

    function syncPosition(el) {
        //if you set loop to false, you have to restore this next line
        var current = el.item.index;
        
        //if you disable loop you have to comment this block
        /* var count = el.item.count-1;
        var current = Math.round(el.item.index - (el.item.count/2) - .5);
        
        if(current < 0) {
            current = count;
        }
        if(current > count) {
            current = 0;
        } */
        
        //end block

        sync2.find(".owl-item")
            .removeClass("current")
            .eq(current)
            .addClass("current");
        var onscreen = sync2.find('.owl-item.active').length - 1;
        var start = sync2.find('.owl-item.active').first().index();
        var end = sync2.find('.owl-item.active').last().index();

        if (current > end) {
            sync2.data('owl.carousel').to(current, 100, true);
        }
        if (current < start) {
            sync2.data('owl.carousel').to(current - onscreen, 100, true);
        }

        if (el.item.index === 0)
            $('#hnz-product-1 .float-nav.f-media .owl-prev').prop('disabled', true);
        else 
            $('#hnz-product-1 .float-nav.f-media .owl-prev').prop('disabled', false);

        if (el.item.index === el.item.count - el.page.size)
            $('#hnz-product-1 .float-nav.f-media .owl-next').prop('disabled', true);
        else
            $('#hnz-product-1 .float-nav.f-media .owl-next').prop('disabled', false);
    }

    function syncPosition2(el) {
        if (syncedSecondary) {
            var number = el.item.index;
            sync1.data('owl.carousel').to(number, 100, true);
        }
    }

    sync2.on("click", ".owl-item", function (e) {
        e.preventDefault();
        var number = $(this).index();
        sync1.data('owl.carousel').to(number, 300, true);
    });

    if ($('.model-3d').length)
        $('.model-3d').height($('#main-carousel').height()+'px');

    let owl_accessory = $('.accessories .owl-carousel').owlCarousel({
        items: 1,
        nav: false,
        dots: false,
        smartSpeed: 800,
        margin: 20,
        stagePadding: 50,
        responsive: {
            0: {
                stagePadding: 0
            },
            414: {
                stagePadding: 20
            },
            1280: {
                stagePadding: 50
            }
        }
    }).on('changed.owl.carousel', function(event) {
        if (event.item.index === 0)
            $('#hnz-product-1 .float-nav.f-accessories .owl-prev').prop('disabled', true);
        else 
            $('#hnz-product-1 .float-nav.f-accessories .owl-prev').prop('disabled', false);

        if (event.item.index === event.item.count - event.page.size)
            $('#hnz-product-1 .float-nav.f-accessories .owl-next').prop('disabled', true);
        else
            $('#hnz-product-1 .float-nav.f-accessories .owl-next').prop('disabled', false);
    });

    $("#hnz-product-1 .float-nav.f-accessories .owl-prev").on('click', function() {
        owl_accessory.trigger('prev.owl.carousel');
    });
    $("#hnz-product-1 .float-nav.f-accessories .owl-next").on('click', function() {
        owl_accessory.trigger('next.owl.carousel');
    });

    if ($('.exclusive-offer').length) {
        $('.exclusive-offer').children('.offer').each(function() {
            let id = $(this).data('id');
            $('.atc-form').append($(`<input type="hidden" name="id[]" value="${id}">`));
            $('.atc-form input[name="id"]').attr('name', 'id[]');
        });
    }

    /* 3 ------------------------------------------- */

    let owl_3 = $("#hnz-product-3 .owl-carousel").owlCarousel({
        items: 3,
        nav: false,
        dots: true,
        smartSpeed: 800,
        margin: 30,
        stagePadding: 50,
        autoHeight: true,
        responsive: {
            0: {
                items: 1,
                margin: 20,
                stagePadding: 30
            },
            1280: {
                items: 3,
                margin: 30,
                stagePadding: 60
            },
            1440: {
                items: 3,
                margin: 30,
                stagePadding: 80
            },
            1536: {
                items: 3,
                margin: 30,
                stagePadding: 80
            },
            1920: {
                items: 3,
                margin: 30,
                stagePadding: 50
            },
        }
    }).on('changed.owl.carousel', function(event) {
        if (event.item.index === 0)
            $('#hnz-product-3 .float-nav .owl-prev').prop('disabled', true);
        else 
            $('#hnz-product-3 .float-nav .owl-prev').prop('disabled', false);

        if (event.item.index === event.item.count - event.page.size)
            $('#hnz-product-3 .float-nav .owl-next').prop('disabled', true);
        else
            $('#hnz-product-3 .float-nav .owl-next').prop('disabled', false);
    });

    $("#hnz-product-3 .float-nav .owl-prev").on('click', function() {
        owl_3.trigger('prev.owl.carousel');
    });
    $("#hnz-product-3 .float-nav .owl-next").on('click', function() {
        owl_3.trigger('next.owl.carousel');
    });

    /* form notify --------------------------------------------------- */

    function getLocalStorageItem(key) {
        return localStorage.getItem(key) || '';
    }

    $('input[name="contact[email]"]').val(getLocalStorageItem('contact_email'));

    if (!$('input[name="contact[variant]"]').val()) {
        $('input[name="contact[variant]"]').val(getLocalStorageItem('contact_variant'));
    }

    $('#form-notify').submit(function() {
        localStorage.setItem('contact_variant', $('input[name="contact[variant]"]').val());
        localStorage.setItem('contact_email', $('input[name="contact[email]"]').val());
    });

});

$(window).resize(function() {

    $('.main-media').show();
    $('.media-toggle .toggle:first-child').addClass('active').siblings().removeClass('active');

    if ($('.model-3d').length) {
        $('.model-3d').hide();
        $('.model-3d').height($('#main-carousel').height()+'px');
    }
});

$(window).scroll(function() {
    productNav();
});

$('.media-toggle .toggle').on('click', function() {
    $(this).addClass('active').siblings().removeClass('active');

    if ($(this).index() == 0) {
        $('.main-media').show();
        $('.model-3d').hide();
        $('#option-carousel').show();
    }
    else {
        $('.main-media').hide();
        $('.model-3d').show();
      $('#option-carousel').hide();
    }
});

$('.accessories .accessory .add').on('click', function() {
    $(this).parent().toggleClass('active');
    let id = $(this).data('id');
    
    if ($(this).parent().hasClass('active')) {
        $(this).parent().find('.sum span').html('1');

        $('.atc-form').append($(`<input type="hidden" name="id[]" value="${id}">`));
        $('.atc-form input[name="id"]').attr('name', 'id[]');
    }
    else {
        $(this).parent().find('.sum span').html('0');

        $(`.atc-form input[value="${id}"]`).remove();
    }
});

$(document).on('click', '.payments .payment:eq(1)', function(){
    let payments = $(".payments");
    let payment1 = payments.children().eq(0);
    let payment2 = payments.children().eq(1);
    
    payment1.css('opacity', 0);
    payment2.css('opacity', 0);

    setTimeout(function() {
        payment1.before(payment2);

        payment1.css('opacity', 1);
        payment2.css('opacity', 1);
    }, 300);
});

$('.measurement-toggle .toggle').on('click', function() {
    $(this).addClass('active').siblings().removeClass('active');

    let index = $(this).index();

    if (index == 0) {
        $('.measurement [name="measurement-type"]').val('cm');
    }
    else {
        $('.measurement [name="measurement-type"]').val('inch');
    }
});

$('.geo-toggle .toggle').on('click', function() {
    $(this).addClass('active').siblings().removeClass('active');

    let index = $(this).index();

    // if (index == 0) {
    //     $('table tr td:nth-child(3)').removeClass('hide');
    //     $('table tr td:nth-child(4)').addClass('hide');
    // }
    // else {
    //     $('table tr td:nth-child(3)').addClass('hide');
    //     $('table tr td:nth-child(4)').removeClass('hide');
    // }
  $('table tr .value-cell').each(function() {
        // var cellIndex = $(this).index();
        if ($(this).index() - 2 === index) {
            $(this).removeClass('hide');
        }
        else {
            $(this).addClass('hide');
        }
    })
});

$('.atc-form').on('submit', function (event) {
    event.preventDefault();
    let formData = $(this).serialize();

    $.ajax({
        type: 'POST',
        url: '/cart/add.js',
        data: formData,
        dataType: 'json',
        success: function (response) {
            $('.icon-header__cart').trigger('click');
            refreshCart();
        },
        error: function (xhr, status, error) {
            console.error('Error adding product to cart:', error);
        }
    });
});

// 加购并跳转
$('.atc-form .buy-button').on('click', function (event) {
    event.preventDefault();
    let formData = $('.atc-form').serialize();

    $.ajax({
        type: 'POST',
        url: '/cart/add.js',
        data: formData,
        dataType: 'json',
        success: function (response) {
            window.location.href = '/checkout';
        },
        error: function (xhr, status, error) {
            console.error('Error adding product to cart:', error);
        }
    });
});

function refreshCart() {
    drawerCart.loadCart();

    $.ajax({
        type: 'GET',
        url: window.location.href,
        dataType: 'html',
        success: function(cartHtml) {
            let count = $('#CartCount span').html();

            if (count != 0)
                $('#CartCount').removeClass('d-none');
            else 
                $('#CartCount').addClass('d-none');

            $('#CartCount span').html(count);
        },
        error: function(xhr, status, error) {
            console.error('Error fetching cart data:', error);
        }
    });
}

$('.product-nav .btn-atc').on('click', function() {
    $('.atc-form').trigger('submit');
});

var navTimer;
function productNav() {
    let section = visiblePercent($('#hnz-product-1'));
    clearInterval(navTimer);

    if (visiblePercent($('.footer')) > 0) {
        $('.product-nav').css('opacity', 0);
        navTimer = setTimeout(() => {
            $('.product-nav').hide();
        }, 500);
    }
    else {
        if (section >= 100) {
            $('.product-nav').show();
            navTimer = setTimeout(() => {
                $('.product-nav').css('opacity', 1);
            }, 10);
        }
        else {
            $('.product-nav').css('opacity', 0);
            navTimer = setTimeout(() => {
                $('.product-nav').hide();
            }, 500);
        }
    }
}

$('form.measurement').on('submit', function(event) {
    event.preventDefault();

    let formData = $(this).serializeArray();
    let formObject = {};

    $.each(formData, function(i, field) {
        formObject[field.name] = field.value;
    });

    getSize(formObject['measurement-type'], formObject['height'], formObject['leg'], formObject['weight']);
});

function getSize(type, height, legLength, weight) {

    if (type == 'inch') {
        height = height * 2.54;
        legLength = legLength * 2.54;
    }

    let matchScores = sizes.map(function(size) {
        return { name: size.name, score: 0, heightDiff: Infinity, saddleHeight: size.saddleHeight, description: size.description };
    });

    let criteria = '';
    let score = 0;
    let heightDiff = Infinity;

    sizes.forEach(function(size, index) {
        criteria = size.criteria;
        score = 0;
        heightDiff = Infinity;

        if (height < criteria.minHeight) {
            heightDiff = criteria.minHeight - height;
        } else if (height > criteria.maxHeight) {
            heightDiff = height - criteria.maxHeight;
        } else {
            heightDiff = 0;
            score += 3;
        }

        if (legLength >= criteria.minLegLength && legLength <= criteria.maxLegLength) {
            score++;
        }

        if (weight >= criteria.minWeight && weight <= criteria.maxWeight) {
            score++;
        }

        matchScores[index].score = score;
        matchScores[index].heightDiff = heightDiff;
    });

    let recommendedSize = matchScores.reduce(function(max, size) {
        if (size.heightDiff < max.heightDiff) {
            return size;
        } else if (size.heightDiff === max.heightDiff) {
            return size.score > max.score ? size : max;
        } else {
            return max;
        }
    });

    $('.recommended .rec.size').html(recommendedSize.name);
    $('.recommended .rec.saddle').html(recommendedSize.saddleHeight);
    $('.recommended .rec-desc').html(recommendedSize.description);

    $('.mdl-container').hide();
    $('.mdl-container[data-id="recommendation"]').show();

    $('.recommendation .reco-title').hide();
    $('.recommendation .suggested').show();
    $('.recommendation .bordered').addClass('active');
    $('.recommendation .btn span').html('Edit Measurement');
}

// 详情页主图点击放大
addDelegateEventListener = (
  element,
  eventName,
  selector,
  callback,
  addEventListenerParams = null
) => {
  const cb = (evt) => {
    const el = evt.target.closest(selector);
    if (!el) return;
    if (!element.contains(el)) return;
    callback.call(el, evt, el);
  };
  element.addEventListener(eventName, cb, addEventListenerParams);
  return cb;
};

const GalleryViewer = class extends HTMLElement {
  connectedCallback() {
    if (!this.initialised) {
      this.initialised = true;

      // ui
      this.classList.add("gallery-viewer--pre-reveal");
      this.zoomContainer = this.querySelector(
        ".gallery-viewer__zoom-container"
      );
      this.thumbContainer = this.querySelector(".gallery-viewer__thumbs");
      this.controlsContainer = this.querySelector(".gallery-viewer__controls");
      this.previousBtn = this.querySelector(".gallery-viewer__prev");
      this.nextBtn = this.querySelector(".gallery-viewer__next");

      // consts
      this.wheelZoomMultiplier = -0.001;
      this.pinchZoomMultiplier = 0.003;
      this.touchPanModifier = 1.0;

      // vars
      this.currentZoomImage = null;
      this.currentTransform = {
        panX: 0,
        panY: 0,
        zoom: 1,
      };
      this.pinchTracking = {
        isTracking: false,
        lastPinchDistance: 0,
      };
      this.touchTracking = {
        isTracking: false,
        lastTouchX: 0,
        lastTouchY: 0,
      };

      // events
      addDelegateEventListener(
        this,
        "click",
        ".gallery-viewer__thumb",
        this.onThumbClick.bind(this)
      );
      this.addEventListener("touchend", this.stopTrackingTouch.bind(this));
      this.addEventListener("touchmove", this.trackInputMovement.bind(this));
      this.addEventListener("mousemove", this.trackInputMovement.bind(this));
      this.addEventListener("wheel", this.trackWheel.bind(this));
      // prevent pan while swiping thumbnails
      this.thumbContainer.addEventListener("touchmove", (evt) =>
        evt.stopPropagation()
      );
      this.previousBtn.addEventListener(
        "click",
        this.selectPreviousThumb.bind(this)
      );
      this.nextBtn.addEventListener("click", this.selectNextThumb.bind(this));
      // this.zoomContainer.addEventListener(
      //   "click",
      //   this.onZoomContainerClick.bind(this)
      // );
    }

    document.documentElement.classList.add("gallery-viewer-open");
    this.addEventListener("keyup", this.handleKeyup.bind(this));
    setTimeout(() => this.classList.remove("gallery-viewer--pre-reveal"), 10);
  }

  // eslint-disable-next-line class-methods-use-this
  disconnectedCallback() {
    document.documentElement.classList.remove("gallery-viewer-open");
  }

  static createEl(type, className, appendTo, innerHTML) {
    const el = document.createElement(type);
    el.className = className;
    if (type === "a") {
      el.href = "#";
    }
    if (appendTo) {
      appendTo.insertAdjacentElement("beforeend", el);
    }
    if (innerHTML) {
      el.innerHTML = innerHTML;
    }
    return el;
  }

  init(currentFullUrl) {
    this.selectThumb(
      [...this.thumbContainer.children].find(
        (el) => el.dataset.zoomUrl === currentFullUrl
      ) || this.thumbContainer.firstElementChild
    );
  }

  panZoomImageFromCoordinate(inputX, inputY) {
    // do nothing if the image fits, pan if not
    const doPanX = this.currentZoomImage.clientWidth > this.clientWidth;
    const doPanY = this.currentZoomImage.clientHeight > this.clientHeight;

    if (doPanX || doPanY) {
      const midX = this.clientWidth / 2;
      const midY = this.clientHeight / 2;

      const offsetFromCentreX = inputX - midX;
      const offsetFromCentreY = inputY - midY;

      // the offsetMultipler ensures it can only pan to the edge of the image, no further
      let finalOffsetX = 0;
      let finalOffsetY = 0;

      if (doPanX) {
        const offsetMultiplierX =
          (this.currentZoomImage.clientWidth - this.clientWidth) / 2 / midX;
        finalOffsetX = Math.round(-offsetFromCentreX * offsetMultiplierX);
      }
      if (doPanY) {
        const offsetMultiplierY =
          (this.currentZoomImage.clientHeight - this.clientHeight) / 2 / midY;
        finalOffsetY = Math.round(-offsetFromCentreY * offsetMultiplierY);
      }

      this.currentTransform.panX = finalOffsetX;
      this.currentTransform.panY = finalOffsetY;
      this.alterCurrentPanBy(0, 0); // sanitise
      this.updateImagePosition();
    }
  }

  alterCurrentPanBy(x, y) {
    this.currentTransform.panX += x;
    // limit offset to keep most of image on screen
    let panXMax =
      (this.currentZoomImage.naturalWidth * this.currentTransform.zoom -
        this.clientWidth) /
      2.0;
    panXMax = Math.max(panXMax, 0);
    this.currentTransform.panX = Math.min(this.currentTransform.panX, panXMax);
    this.currentTransform.panX = Math.max(this.currentTransform.panX, -panXMax);

    this.currentTransform.panY += y;
    let panYMax =
      (this.currentZoomImage.naturalHeight * this.currentTransform.zoom -
        this.clientHeight) /
      2.0;
    panYMax = Math.max(panYMax, 0);
    this.currentTransform.panY = Math.min(this.currentTransform.panY, panYMax);
    this.currentTransform.panY = Math.max(this.currentTransform.panY, -panYMax);
    this.updateImagePosition();
  }

  setCurrentTransform(panX, panY, zoom) {
    this.currentTransform.panX = panX;
    this.currentTransform.panY = panY;
    this.currentTransform.zoom = zoom;
    this.alterCurrentTransformZoomBy(0);
  }

  alterCurrentTransformZoomBy(delta) {
    this.currentTransform.zoom += delta;
    // do not zoom out further than fit
    const maxZoomX = this.clientWidth / this.currentZoomImage.naturalWidth;
    const maxZoomY = this.clientHeight / this.currentZoomImage.naturalHeight;
    this.currentTransform.zoom = Math.max(
      this.currentTransform.zoom,
      Math.min(maxZoomX, maxZoomY)
    );

    // do not zoom in further than native size
    this.currentTransform.zoom = Math.min(this.currentTransform.zoom, 1.0);

    // reasses pan bounds
    this.alterCurrentPanBy(0, 0);
    this.updateImagePosition();
  }

  updateImagePosition() {
    this.currentZoomImage.style.transform = `translate3d(${this.currentTransform.panX}px, ${this.currentTransform.panY}px, 0) scale(${this.currentTransform.zoom})`;
  }

  selectThumb(thumb) {
    [...thumb.parentElement.children].forEach((el) => {
      if (el === thumb) {
        el.classList.add("gallery-viewer__thumb--active");
      } else {
        el.classList.remove("gallery-viewer__thumb--active");
      }
    });

    // replace zoom image
    this.zoomContainer.classList.add("gallery-viewer__zoom-container--loading");
    this.currentZoomImage = GalleryViewer.createEl(
      "img",
      "gallery-viewer__zoom-image"
    );

    this.currentZoomImage.addEventListener(
        "click",
        this.onZoomContainerClick.bind(this)
      );
    
    this.currentZoomImage.alt = "";
    this.currentZoomImage.style.visibility = "hidden";
    this.currentZoomImage.onload = () => {
      this.zoomContainer.classList.remove(
        "gallery-viewer__zoom-container--loading"
      );
      this.currentZoomImage.style.visibility = "";
      this.currentZoomImage.style.top = `${
        this.clientHeight / 2 - this.currentZoomImage.clientHeight / 2
      }px`;
      this.currentZoomImage.style.left = `${
        this.clientWidth / 2 - this.currentZoomImage.clientWidth / 2
      }px`;
      this.setCurrentTransform(0, 0, 0); // centre, zoomed out
    };
    this.currentZoomImage.src = thumb.dataset.zoomUrl;
    this.zoomContainer.replaceChildren(this.currentZoomImage);
  }

  selectPreviousThumb(evt) {
    if (evt) evt.preventDefault();
    if (this.thumbContainer.childElementCount < 2) return;

    let previous = this.thumbContainer.querySelector(
      ".gallery-viewer__thumb--active"
    ).previousElementSibling;
    while (!previous || !previous.offsetParent) {
      if (!previous) {
        previous = this.thumbContainer.lastElementChild;
      } else {
        previous = previous.previousElementSibling;
      }
    }
    this.selectThumb(previous);
  }

  selectNextThumb(evt) {
    if (evt) evt.preventDefault();
    if (this.thumbContainer.childElementCount < 2) return;

    let next = this.thumbContainer.querySelector(
      ".gallery-viewer__thumb--active"
    ).nextElementSibling;
    while (!next || !next.offsetParent) {
      if (!next) {
        next = this.thumbContainer.firstElementChild;
      } else {
        next = next.nextElementSibling;
      }
    }
    this.selectThumb(next);
  }

  stopTrackingTouch() {
    this.pinchTracking.isTracking = false;
    this.touchTracking.isTracking = false;
  }

  trackInputMovement(evt) {
    evt.preventDefault();
    if (evt.type === "touchmove" && evt.touches.length > 0) {
      // pan
      const touch1 = evt.touches[0];
      if (!this.touchTracking.isTracking) {
        this.touchTracking.isTracking = true;
        this.touchTracking.lastTouchX = touch1.clientX;
        this.touchTracking.lastTouchY = touch1.clientY;
      } else {
        this.alterCurrentPanBy(
          (touch1.clientX - this.touchTracking.lastTouchX) *
            this.touchPanModifier,
          (touch1.clientY - this.touchTracking.lastTouchY) *
            this.touchPanModifier
        );
        this.touchTracking.lastTouchX = touch1.clientX;
        this.touchTracking.lastTouchY = touch1.clientY;
      }

      if (evt.touches.length === 2) {
        // pinch
        const touch2 = evt.touches[1];
        const pinchDistance = Math.sqrt(
          (touch1.clientX - touch2.clientX) ** 2 +
            (touch1.clientY - touch2.clientY) ** 2
        );
        if (!this.pinchTracking.isTracking) {
          this.pinchTracking.lastPinchDistance = pinchDistance;
          this.pinchTracking.isTracking = true;
        } else {
          const pinchDelta =
            pinchDistance - this.pinchTracking.lastPinchDistance;
          this.alterCurrentTransformZoomBy(
            pinchDelta * this.pinchZoomMultiplier
          );
          this.pinchTracking.lastPinchDistance = pinchDistance;
        }
      } else {
        this.pinchTracking.isTracking = false;
      }
    } else {
      // mousemove
      this.panZoomImageFromCoordinate(evt.clientX, evt.clientY);
    }
  }

  trackWheel(evt) {
    evt.preventDefault();
    if (evt.deltaY !== 0) {
      this.alterCurrentTransformZoomBy(evt.deltaY * this.wheelZoomMultiplier);
    }
  }

  onThumbClick(evt, thumb) {
    evt.preventDefault();
    this.selectThumb(thumb);
  }

  onZoomContainerClick(evt) {
    evt.preventDefault();

    if (this.currentTransform.zoom === 1.0) {
      this.currentTransform.zoom = 0;
      this.alterCurrentTransformZoomBy(0);
    } else {
      this.currentTransform.zoom = 1;
      this.alterCurrentTransformZoomBy(0);
      this.panZoomImageFromCoordinate(evt.clientX, evt.clientY);
    }
  }

  handleKeyup(evt) {
    switch (evt.key) {
      case "ArrowLeft":
        evt.preventDefault();
        this.selectPreviousThumb();
        break;
      case "ArrowRight":
        evt.preventDefault();
        this.selectNextThumb();
        break;
    }
  }
};

window.customElements.define("gallery-viewer", GalleryViewer);

class Modal extends HTMLElement {
  constructor() {
    super();
    this.addEventListener("click", this.handleClick.bind(this));
    var _this = this
    $('.js-close-modal').click(function() {
      _this.close();
    })
  }

  /**
   * Handles 'click' events on the modal.
   * @param {object} evt - Event object.
   */
  handleClick(evt) {
    if (evt.target !== this && !evt.target.matches(".js-close-modal")) return;
    this.close();
  }

  /**
   * Opens the modal.
   * @param {Element} opener - Modal opener element.
   */
  open(opener) {
    // Prevent page behind from scrolling when side drawer is open
    this.scrollY = window.scrollY;
    document.body.classList.add("fixed");
    document.body.style.top = `-${this.scrollY}px`;

    this.setAttribute("open", "");
    this.openedBy = opener;

    trapFocus(this);
    window.pauseAllMedia();

    // Add event handler (so the bound event listener can be removed).
    this.keyupHandler = (evt) => evt.key === "Escape" && this.close();

    // Add event listener (for while modal is open).
    this.addEventListener("keyup", this.keyupHandler);

    // Wrap tables in a '.scrollable-table' element for a better mobile experience.
    this.querySelectorAll("table").forEach((table) => {
      const wrapper = document.createElement("div");
      wrapper.className = "scrollable-table";
      table.parentNode.insertBefore(wrapper, table);
      wrapper.appendChild(table);
    });
  }

  /**
   * Closes the modal.
   */
  close() {
    // Restore page position and scroll behaviour.
    document.body.style.top = "";
    document.body.classList.remove("fixed");
    window.scrollTo(0, this.scrollY);

    this.removeAttribute("open");

    removeTrapFocus(this.openedBy);
    window.pauseAllMedia();

    // Remove event listener added on modal opening.
    this.removeEventListener("keyup", this.keyupHandler);
  }
}

customElements.define("gallery-modal-dialog", Modal);

$(document).ready(function () {
  const galleryModal = document.querySelector(
        ".js-media-zoom-template"
      ).content.firstElementChild.cloneNode(true);
  $('.show-gallery').click(function (evt) {
    evt.preventDefault();
    var clickedElement = this;

    if (!galleryModal.parentElement) {
      document.body.appendChild(galleryModal);
    }
    galleryModal.open(clickedElement);
    const viewer = galleryModal.querySelector("gallery-viewer");
    viewer.init(clickedElement.getAttribute("href"));
    viewer.focus();
  })
})