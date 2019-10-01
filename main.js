// Initialize and add the map
function initMap() {
    // The location of Uluru
    var uluru = {lat: 43.872115, lng: -79.267063};
    // The map, centered at Uluru
    var map = new google.maps.Map(
        document.getElementById('map'), {zoom: 17, center: uluru});
    // The marker, positioned at Uluru
    var marker = new google.maps.Marker({position: uluru, map: map});
  }

function topFunction() {
    $('html, body').animate({
        scrollTop: $("#top").offset().top
    }, 2000);
}