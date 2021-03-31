var owl = $('.owl-carousel');
owl.owlCarousel({
    items:4,
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:1500,
    autoplayHoverPause:true
});
$('.play').on('click',function(){
    owl.trigger('play.owl.autoplay',[1500])
})
$('.stop').on('click',function(){
    owl.trigger('stop.owl.autoplay')
});
/*tabs*/
component.tabs.initTabs();

/*page top*/
$('.awesome-form input').focusout(function(){
	var text_val = $(this).val();
	if(text_val == '') {
		$(this).removeClass('has-value');
	}else {
		$(this).addClass('has-value');
	}
});

$('.awesome-form').submit(function(e){
  e.preventDefault();
  return false;
});


/*click to top*/
var $toTop = $('#to-top');
var $footer = $('#footer');
if ($(document).scrollTop() > 800) {
  $toTop.removeClass('is-hidden');
}
var prevTop = 0;
$(document).on('scroll', function(e) {
  var currentTop = $(this).scrollTop();
  if (prevTop !== currentTop) {
    prevTop = currentTop;
    // Hide icon in the first 100px from the top.
    if (currentTop < 100) {
      $toTop.addClass('is-hidden');
    }
    else {
      $toTop.removeClass('is-hidden');
    }
    // Park icon above the footer.
    var footerOffset = $footer.offset().top;
    var windowBottomPos = $(window).scrollTop() + $(window).height();
    // If footer is in the window.
    if (windowBottomPos > footerOffset) {
      var translate = Math.floor(windowBottomPos - footerOffset);
      translate = '-' + translate + 'px';
      $toTop.css('transform', 'translatey(' + translate + ')');
    }
    else {
      $toTop.css('transform', 'translatey(0)');
    }
  }
});

// Move the window back to the top of the page.
$(document).on('click', '#to-top', function(e) {
  e.preventDefault();
  $([document.documentElement, document.body]).animate({
    scrollTop: 0
  }, 800);
});