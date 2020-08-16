$(document).ready(function () {
  var offsetOfSectionAndScroll = 65;

  var waypoint = new Waypoint({
    element: document.getElementsByClassName('js-about-me'),
    handler: function (direction) {
      if (direction == 'down') {
        $('.sticky-nav').addClass('sticky-class');
      } else {
        $('.sticky-nav').removeClass('sticky-class');
      }
    },
    offset: offsetOfSectionAndScroll,
  });

  // Select all links with hashes
  $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function (event) {
      // On-page links
      if (
        location.pathname.replace(/^\//, '') ==
          this.pathname.replace(/^\//, '') &&
        location.hostname == this.hostname
      ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length
          ? target
          : $('[name=' + this.hash.slice(1) + ']');
        // Does a scroll target exist?
        if (target.length) {
          // Only prevent default if animation is actually gonna happen
          event.preventDefault();
          $('html, body').animate(
            {
              scrollTop: target.offset().top - offsetOfSectionAndScroll,
            },
            1000
            /*function () {
              // Callback after animation
              // Must change focus!
              var $target = $(target);
              $target.focus();
              if ($target.is(':focus')) {
                // Checking if the target was focused
                return false;
              } else {
                $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                $target.focus(); // Set focus again
              }
            }
            */
          );
        }
      }
    });
});

var home = { lat: 52.244728, lng: 20.914467 };

// The map, centered at Uluru

var map = new google.maps.Map(document.getElementById('map'), {
  zoom: 16,
  center: home,
});

var marker = new google.maps.Marker({
  position: home,
  map: map,
  title: 'My Home!',
});
