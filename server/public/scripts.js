$(function() {

    $(window).scroll(function() {
  
      var mass = Math.max(0.7, 1-0.0005*$(this).scrollTop());
  
      $('#lax').css('transform', 'scale(' + mass + ')');
    });
});

// $(function() {

//     $(window).scroll(function() {
  
//       var mass = Math.max(0.1, 0.95+0.0002*$(this).scrollTop());
  
//       $('#blogDetail').css('transform', 'scale(' + mass + ')');
//     });
// });

// $('#blogDetail').hover(function () {
//     $(this).animate({height: '100%'});
// },function(){
//       $(this).animate({height: '50%'});
// });