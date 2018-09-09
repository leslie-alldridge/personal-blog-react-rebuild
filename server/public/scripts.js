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


var ready = () => {

  $('.tab').on('click', (e) => {
      var tabName = (e.currentTarget.attributes[0].nodeValue);
      removeActive();
    hideAll();
    console.log(tabName)
    $('#' + tabName).addClass('is-active');
    $('#' + tabName + '-content').removeClass('hidden');
  });

  var removeActive = () => {
    $('li').each(function() {
      $(this).removeClass('is-active');
    });
  }

  var hideAll = () => {
    $('#registerAgent-tab-content').addClass('hidden');
    $('#da-tab-content').addClass('hidden');
    $('#mindfulness2-tab-content').addClass('hidden');
  }

}

$(document).ready(ready);
$(document).on("page:load", ready);