$(document).ready(function () {
    $('#stays').addClass('active');
    wow = new WOW({
        boxClass: "wow",
        animateClass: "animated",
        offset: 0,
        mobile: true,
        live: true,
    });
    wow.init();

    var hotelFormHeight = $(document).find("#search-hotel-form").height();

    if ($(window).width() >= 1200) {
        $(document).find(`#search-hotel-form`).css("bottom", `${hotelFormHeight}px`);
        $(document).find("#hotel-search-form").css("padding-right", `${$("#search-btn").width() + 20}px`);
        $(document).find(".search-hotel .carousel-caption").css("bottom", `${(hotelFormHeight * 2) }px`);
    } else {
        $(document).find("#search-hotel-form").css("bottom", `1rem`);
        $(document).find(".search-hotel .carousel-caption").css("bottom", `${hotelFormHeight}px`);
    }

    if ($(window).width() > 991) {
        $(document).find(".search-hotel .carousel-image").css("height", $(window).height()-172);
    }

    var now = new Date();
    var day = ("0" + now.getDate()).slice(-2);
    var month = ("0" + (now.getMonth() + 1)).slice(-2);
    var today = now.getFullYear()+"-"+(month)+"-"+(day);
    $(document).find('#check-in-date').val(today);
    $(document).find('#check-in-date').attr('min' ,today);

    $(document).find(".owl-carousel").owlCarousel({
        loop: true,
        margin:0,
        nav: true,
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        mouseDrag: true,
        touchDrag: true,
        responsive: {
            0: {
                items: 1,
            },
            576: {
                items: 1,
            },
            768: {
                items: 2,
            },
            992: {
                items: 3,
            },
            1200: {
                items: 3,
            },
        },
    });

    (function($) {
        var parallax = -0.4;
      
        var $bg_images = $(document).find(`*[data-type="background"]`);
        var offset_tops = [];
        $bg_images.each(function(i, el) {
          offset_tops.push($(el).offset().top);
        });
      
        $(window).scroll(function() {
          var dy = $(this).scrollTop();
          $bg_images.each(function(i, el) {
            var ot = offset_tops[i];
            $(el).css("background-position", "100% " + (dy - ot) * parallax + "px");
          });
        });
      })(jQuery);

      // room details increase decrease

      var personVal = 1;
      var childVal = 0;
      var roomVal = 1;

      function setDetailsVal() {
        var personSuffix, childSuffix, roomSuffix;

        if (personVal === 1) {
            personSuffix = ' Person, ';
        } else {
            personSuffix = ' People, ';
        }

        if (childVal === 1) {
            childSuffix = ' Child, ';
        } else if (childVal > 1) {
            childSuffix = ' Children, ';
        } else {
            childVal = '';
            childSuffix = '';
        }

        if (roomVal === 1) {
            roomSuffix = ' Room';
        } else {
            roomSuffix = ' Rooms';
        }

        if (personVal === 1) {
            $(document).find('#person-minus').removeClass('changeable');
        } else {
            $(document).find('#person-minus').addClass('changeable');
        }

        if (childVal === 0 || childVal === '') {
            $(document).find('#child-minus').removeClass('changeable');
            $(document).find('#child-minus').siblings('span.text').text('0');
        } else {
            $(document).find('#child-minus').addClass('changeable');
            $(document).find('#child-minus').siblings('span.text').text(childVal);
        }

        if (roomVal === 1) {
            $(document).find('#room-minus').removeClass('changeable');
        } else {
            $(document).find('#room-minus').addClass('changeable');
        }
        
        $(document).find('#person-minus').siblings('span.text').text(personVal);
        $(document).find('#room-minus').siblings('span.text').text(roomVal);

        var inputFinalValue = `${personVal}${personSuffix}${childVal}${childSuffix}${roomVal}${roomSuffix}`;

        $(document).find('#guest-details').val(inputFinalValue);
      }

      setDetailsVal();

      function roomBook(id) {

        if (id === 'person-minus') {
            if (personVal > 1) {
                personVal--;
            }
        } else if (id === 'person-plus') {
            if (personVal > 0) {
                personVal++;
            }
        } else if (id === 'child-minus') {
            if (childVal > 0) {
                childVal--;
            }
        } else if (id === 'child-plus') {
            if (childVal >= 0) {
                childVal++;
            }
        } else if (id === 'room-minus') {
            if (roomVal > 1) {
                roomVal--;
            }
        } else if (id === 'room-plus') {
            if (roomVal > 0) {
                roomVal++;
            }
        }

        setDetailsVal();
      }



      $(document).on('click','#room-details a',function (event){
            event.preventDefault();
            roomBook($(this).attr('id'));
      });

});