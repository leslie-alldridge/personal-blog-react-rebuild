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




$('#nav div a').on('click', function(event) {
  $(this).parent().find('a').removeClass('is-active');
  $(this).addClass('is-active');
});



$(window).on('scroll', function() {
  $('.target').each(function() {
      if($(window).scrollTop() >= $(this).offset().top) {
          var id = $(this).attr('id');
          $('#nav div a').removeClass('is-active');
          $('#nav div a[href=#'+ id +']').addClass('is-active');
      }
  });
});