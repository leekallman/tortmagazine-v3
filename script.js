"use strict";
var heading = document.getElementsByClassName("heading")[0],
  footer = document.getElementsByClassName("footer")[0],
  split = heading.getElementsByClassName("split")[0],
  h1 = heading.getElementsByTagName("h1")[0],
  ih = window.innerHeight,
  sh = document.body.offsetHeight,
  w = split.offsetWidth,
  pw = window.innerWidth,
  dw = heading.getElementsByClassName("def")[0].offsetWidth,
  s = window.getComputedStyle(document.getElementsByClassName("t-l")[0]),
  fl = parseInt(s.getPropertyValue("font-size"));
s = window.getComputedStyle(document.querySelectorAll("section p")[0]);
var dl = parseInt(s.getPropertyValue("font-size"));
window.scrollTo(0, 0),
  (window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  });
var prev = 0,
  down = !0,
  to = {},
  onScroll = function () {
    clearTimeout(to);
    var e =
      window.pageYOffset ||
      (document.documentElement || document.body.parentNode || document.body)
        .scrollTop;
    if (!(e < 0)) {
      if (e < ih) {
        var t = e / ih;
        (split.style.width = w + (pw - w) * t + "px"),
          (heading.style.height = ih - (ih - dl) * t + "px"),
          (split.style.fontSize = fl - (fl - dl) * t + "px");
      } else to = setTimeout(autoScroll, 40);
      if (e >= ih && e <= sh - footer.offsetHeight) {
        var o = (e - ih) / (sh - ih - footer.offsetHeight);
        split.style.width = pw - (pw - dw) * o + "px";
      }
      if (e >= footer.offsetTop - ih) {
        var n = (e - footer.offsetTop + ih) / footer.offsetHeight;
        console.log(n), (split.style.width = dw + (pw - dw) * n + "px");
      }
      (prev = e), ih + e >= sh && window.scrollTo(0, ih);
    }
  };
onScroll(),
  window.addEventListener("scroll", onScroll, !1),
  document.addEventListener("gesturechange", onScroll, !1);
var autoScroll = function () {
  var e =
    (window.pageYOffset ||
      (document.documentElement || document.body.parentNode || document.body)
        .scrollTop) + 1;
  window.scrollTo(0, e);
};
window.addEventListener(
  "resize",
  function () {
    "ontouchstart" in document.documentElement || window.location.reload();
  },
  !1
),
  (window.onload = function () {
    document.documentElement.classList.remove("noscroll");
  })
  // document
  //   .getElementsByClassName("privacy__link")[0]
  //   .addEventListener("click", function (e) {
  //     e.preventDefault(),
  //       document
  //         .getElementsByClassName("privacy")[0]
  //         .classList.toggle("active");
  //   });
