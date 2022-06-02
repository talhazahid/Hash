

// $('.center').slick({
//  centerMode: true,
//  centerPadding: '60px',
//  dots: true,
//  variableWidth: true,
//  slidesToShow: 4,
//  responsive: [
//   {
//    breakpoint: 768,
//    settings: {
//     arrows: false,
//     centerMode: true,
//     centerPadding: '40px',
//     slidesToShow: 3
//    }
//   },
//   {
//    breakpoint: 480,
//    settings: {
//     arrows: false,
//     centerMode: true,
//     centerPadding: '40px',
//     slidesToShow: 1
//    }
//   }
//  ]
// });





// var lFollowX = 0,
//  lFollowY = 0,
//  x = 0,
//  y = 0,
//  friction = 5 / 30;

// function moveBackground() {
//  x += (lFollowX - x) * friction;
//  y += (lFollowY - y) * friction;

//  translate = 'translate(' + x + 'px, ' + y + 'px) scale(1.1)';

//  $('.hero-image').css({
//   '-webit-transform': translate,
//   '-moz-transform': translate,
//   'transform': translate
//  });

//  window.requestAnimationFrame(moveBackground);
// }

// $(window).on('mousemove click', function (e) {

//  var lMouseX = Math.max(-100, Math.min(100, $(window).width() / 2 - e.clientX));
//  var lMouseY = Math.max(-100, Math.min(100, $(window).height() / 2 - e.clientY));
//  lFollowX = (20 * lMouseX) / 100; // 100 : 12 = lMouxeX : lFollow
//  lFollowY = (10 * lMouseY) / 100;

// });

// moveBackground();











var menu = new MmenuLight(document.querySelector("#mobile_menu"), "all");

var navigator = menu.navigation({
 // selectedClass: 'Selected',
 // slidingSubmenus: true,
 theme: 'dark',
 title: 'NFT'
});

var drawer = menu.offcanvas({
 // position: 'left'
});

//	Open the menu.
document
 .querySelector('a[href="#mobile_menu"]')
 .addEventListener("click", (evnt) => {
  evnt.preventDefault();
  drawer.open();
 });


/**
>>>>>>>

Wanna include in your project?

More documentation on github:

https://github.com/cant89/gianni-accordion-js

>>>>>>>
**/



!function (e) { var t = {}; function n(i) { if (t[i]) return t[i].exports; var s = t[i] = { i: i, l: !1, exports: {} }; return e[i].call(s.exports, s, s.exports, n), s.l = !0, s.exports } n.m = e, n.c = t, n.d = function (e, t, i) { n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: i }) }, n.r = function (e) { "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 }) }, n.t = function (e, t) { if (1 & t && (e = n(e)), 8 & t) return e; if (4 & t && "object" == typeof e && e && e.__esModule) return e; var i = Object.create(null); if (n.r(i), Object.defineProperty(i, "default", { enumerable: !0, value: e }), 2 & t && "string" != typeof e) for (var s in e) n.d(i, s, function (t) { return e[t] }.bind(null, s)); return i }, n.n = function (e) { var t = e && e.__esModule ? function () { return e.default } : function () { return e }; return n.d(t, "a", t), t }, n.o = function (e, t) { return Object.prototype.hasOwnProperty.call(e, t) }, n.p = "", n(n.s = 0) }([function (e, t) { function n(e, t) { for (var n = 0; n < t.length; n++) { var i = t[n]; i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i) } } window.gianniAccordion = function () { var e, t, i; function s(e) { var t = this; !function (e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, s), this.setDefaultData(), this.setCustomData(e), [].forEach.call(document.querySelectorAll(this.elements), function (e, n) { t.els.push({ wrapper: e, trigger: e.querySelector(t.trigger), content: e.querySelector(t.content) }); var i = t.els[n]; t.openAtLandingIndex !== n ? (i.content.style.height = t.collapsedHeight, i.wrapper.classList.add(t.collapsedClass), t.setCollapsedAria(i)) : (i.selected = !0, i.wrapper.classList.add(t.selectedClass), i.wrapper.classList.add(t.expandedClass), t.setExpandedAria(i), t.fire("elementSelectedAtLanding", i)) }), this.attachEvents() } return e = s, (t = [{ key: "transitionendEventName", value: function () { var e, t = document.createElement("div"), n = { transition: "transitionend", OTransition: "otransitionend", MozTransition: "transitionend", WebkitTransition: "webkitTransitionEnd" }; for (e in n) if (n.hasOwnProperty(e) && void 0 !== t.style[e]) return n[e] } }, { key: "expand", value: function (e) { var t = function (n) { var i = this; n.target == e.content && (e.content.removeEventListener(this.transitionendevent, t), e.isOpen && requestAnimationFrame(function () { e.content.style.transition = "0", e.content.style.height = "auto", requestAnimationFrame(function () { e.content.style.height = null, e.content.style.transition = null, i.setExpandedAria(e), e.wrapper.classList.add(i.expandedClass), i.trySetTabIndex(e.content, 0), i.fire("elementOpened", e) }) })) }.bind(this); e.content.addEventListener(this.transitionendevent, t), e.isOpen = !0, e.wrapper.classList.remove(this.collapsedClass), e.content.style.height = e.content.scrollHeight + "px" } }, { key: "collapse", value: function (e) { var t = this, n = function (t) { t.target == e.content && (e.content.removeEventListener(this.transitionendevent, n), e.isOpen || (this.fire("elementClosed", e), this.setCollapsedAria(e), e.wrapper.classList.add(this.collapsedClass), this.trySetTabIndex(e.content, -1))) }.bind(this); e.content.addEventListener(this.transitionendevent, n), e.isOpen = !1, e.wrapper.classList.remove(this.expandedClass), requestAnimationFrame(function () { e.content.style.transition = "0", e.content.style.height = e.content.scrollHeight + "px", requestAnimationFrame(function () { e.content.style.transition = null, e.content.style.height = t.collapsedHeight }) }) } }, { key: "open", value: function (e) { e.selected = !0, this.fire("elementSelected", e), this.expand(e), e.wrapper.classList.add(this.selectedClass) } }, { key: "close", value: function (e) { e.selected = !1, this.fire("elementUnselected", e), this.collapse(e), e.wrapper.classList.remove(this.selectedClass) } }, { key: "toggle", value: function (e) { var t = this; e.selected ? this.close(e) : (this.open(e), this.oneAtATime && this.els.filter(function (t) { return t != e && t.selected }).forEach(function (e) { t.close(e) })) } }, { key: "trySetTabIndex", value: function (e, t) { var n = e.querySelectorAll(this.defaultElements); n && n.forEach(function (e) { e.setAttribute("tabindex", t) }) } }, { key: "setExpandedAria", value: function (e) { e.trigger.setAttribute("aria-expanded", "true"), e.content.setAttribute("aria-hidden", "false") } }, { key: "setCollapsedAria", value: function (e) { e.trigger.setAttribute("aria-expanded", "false"), e.content.setAttribute("aria-hidden", "true") } }, { key: "attachEvents", value: function () { var e = this; this.els.forEach(function (t, n) { t.trigger.addEventListener("click", e.toggle.bind(e, t)) }) } }, { key: "setDefaultData", value: function () { this.els = [], this.events = { elementSelected: [], elementOpened: [], elementUnselected: [], elementClosed: [] }, this.transitionendevent = this.transitionendEventName(), this.oneAtATime = !0, this.selectedClass = "selected", this.expandedClass = "expanded", this.collapsedClass = "collapsed", this.trigger = "[data-accordion-element-trigger]", this.content = "[data-accordion-element-content]", this.collapsedHeight = "0px", this.defaultElements = ["a", "button", "input"], this.openAtLandingIndex = -1 } }, { key: "setCustomData", value: function (e) { for (var t = Object.keys(e), n = 0; n < t.length; n++)this[t[n]] = e[t[n]] } }, { key: "fire", value: function (e, t) { for (var n = this.events[e], i = 0; i < n.length; i++)n[i](t) } }, { key: "on", value: function (e, t) { this.events[e] && this.events[e].push(t) } }]) && n(e.prototype, t), i && n(e, i), s }() }]);



var myAccordion = new gianniAccordion({
 elements: ".card article",
 trigger: "[data-accordion-element-trigger]",
 content: "[data-accordion-element-content]",
});

myAccordion.on("elementSelected", (data) => {
 console.log("elementOpened", data);
});


$(function () {
 var shrinkHeader = 300;
 $(window).scroll(function () {
  var scroll = getCurrentScroll();
  if (scroll >= shrinkHeader) {
   $('.header').addClass('shrink');
  }
  else {
   $('.header').removeClass('shrink');
  }
 });
 function getCurrentScroll() {
  return window.pageYOffset || document.documentElement.scrollTop;
 }
});



$(document).on('click', 'a[href^="#"]', function (event) {
 event.preventDefault();
 $('html, body').animate({
  scrollTop: $($.attr(this, 'href')).offset().top + -100
 }, 1000);
});


$(document).scroll(function () {
 var y = $(this).scrollTop();
 if (y > 600) {
  $('.top').fadeIn();
 } else {
  $('.top').fadeOut();
 }
});








$('.desktop-menu li a').on('click', function () {
 $('.desktop-menu li a.current-menu').removeClass('current-menu');
 $(this).addClass('current-menu');
});