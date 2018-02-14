$(document).ready(function() {
  $('.menu-trigger').click(function() {
    $('#topnav').slideToggle(600);
  });

  $(window).resize(function() {
    if ( $(window).width() > 600 ) {
    $('#topnav').removeAttr('style');
    }
  });
});
