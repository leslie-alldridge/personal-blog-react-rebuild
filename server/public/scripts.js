$(function() {

    $(window).scroll(function() {
  
      var mass = Math.max(0.7, 1-0.0005*$(this).scrollTop());
  
      $('#lax').css('transform', 'scale(' + mass + ')');
    });
});

$('#title').mouseenter(function() {
  $('#menu').show();
});

$('header').mouseleave(function() {
  $('#menu').hide();
});




$('#nav nav a').on('click', function(event) {
  $(this).parent().find('a').removeClass('is-active');
  $(this).addClass('is-active');
});



$(window).on('scroll', function() {
  $('.target').each(function() {
      if($(window).scrollTop() >= $(this).offset().top) {
          var id = $(this).attr('id');
          $('#nav nav a').removeClass('is-active');
          $('#nav nav a[href=#'+ id +']').addClass('is-active');
      }
  });
});