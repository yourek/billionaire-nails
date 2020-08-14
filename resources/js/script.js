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

//document.querySelector('h1').style.color = 'red';
function adjustNavigatePaneYPosition(yScroll) {
  document.getElementById('test').scrollTop(50);
}

document.addEventListener('scroll', function (evnt) {
  var yPositionOfScroll = window.scrollY;
});
