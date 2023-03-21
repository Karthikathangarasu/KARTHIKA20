$(document).ready(function() {
    // Initialize slick carousal for desktop and mobile separately #}
    // For Desktop site, scroll 2 slides at a time
    $(document).ready(function() {
        $('.event-slick').on('init', function(slick) {
            $('.slider').fadeIn(3000);
        }).slick({
            dots: true,
            speed: 1000,
            autoplay: true,
            autoplaySpeed: 5000,
            arrows: true,
            slidesToScroll: 1,
            slidesToShow: 2,
            infinite: false,
            draggable: true,
            cssEase: 'ease',
            mobileFirst: true,
            variableWidth: true,
            responsive: [{
                breakpoint: 1175,
                settings: {
                    slidesToShow: 4,
                    arrows: true,
                }
            }, {
                breakpoint: 720,
                settings: {
                    slidesToShow: 3,
                    arrows: true,
                }
            }, {
                breakpoint: 359,
                settings: {
                    slidesToShow: 2,
                    arrows: false,
                }
            }]
        });
    });
});

function openBookingLink(event, booking_link) {
    event.preventDefault();
    event.stopImmediatePropagation();

    let win = window.open(booking_link, '_blank');
    if (win) {
        //Browser has allowed it to be opened
        win.focus();
    }
}