

$('.center').slick({
 centerMode: true,
 centerPadding: '60px',
 dots: true,
 variableWidth: true,
 slidesToShow: 4,
 responsive: [
  {
   breakpoint: 768,
   settings: {
    arrows: false,
    centerMode: true,
    centerPadding: '40px',
    slidesToShow: 3
   }
  },
  {
   breakpoint: 480,
   settings: {
    arrows: false,
    centerMode: true,
    centerPadding: '40px',
    slidesToShow: 1
   }
  }
 ]
});



const items = document.querySelectorAll(".accordion button");

function toggleAccordion() {
 const itemToggle = this.getAttribute('aria-expanded');

 for (i = 0; i < items.length; i++) {
  items[i].setAttribute('aria-expanded', 'false');
 }

 if (itemToggle == 'false') {
  this.setAttribute('aria-expanded', 'true');
 }
}

items.forEach(item => item.addEventListener('click', toggleAccordion));


var lFollowX = 0,
 lFollowY = 0,
 x = 0,
 y = 0,
 friction = 5 / 30;

function moveBackground() {
 x += (lFollowX - x) * friction;
 y += (lFollowY - y) * friction;

 translate = 'translate(' + x + 'px, ' + y + 'px) scale(1.1)';

 $('.hero-image').css({
  '-webit-transform': translate,
  '-moz-transform': translate,
  'transform': translate
 });

 window.requestAnimationFrame(moveBackground);
}

$(window).on('mousemove click', function (e) {

 var lMouseX = Math.max(-100, Math.min(100, $(window).width() / 2 - e.clientX));
 var lMouseY = Math.max(-100, Math.min(100, $(window).height() / 2 - e.clientY));
 lFollowX = (20 * lMouseX) / 100; // 100 : 12 = lMouxeX : lFollow
 lFollowY = (10 * lMouseY) / 100;

});

moveBackground();













