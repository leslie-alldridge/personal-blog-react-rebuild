$(function() {
	$(window).scroll(function() {
		var mass = Math.max(0.7, 1 - 0.0005 * $(this).scrollTop());
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
		if ($(window).scrollTop() >= $(this).offset().top - 100) {
			var id = $(this).attr('id');
			$('#nav div a').removeClass('is-active');
			$('nav a[href="#' + id + '"]').addClass('is-active');
		}
	});
});

document.getElementById("navbar-burger").addEventListener ("click", toggleNav);
function toggleNav() {
        var nav = document.getElementById("navbar-menu");
        var className = nav.getAttribute("class");
        if(className == "nav-right nav-menu") {
            nav.className = "nav-right nav-menu is-active";
        } else {
            nav.className = "nav-right nav-menu";
        }
}