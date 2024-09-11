let prevScrollpos = window.pageYOffset;
const header = document.getElementById("header");

window.onscroll = function() {
  let currentScrollPos = window.pageYOffset;

  if (prevScrollpos > currentScrollPos) {
    header.style.top = "0";
  } else {
    header.style.top = "-60px";
  }

  prevScrollpos = currentScrollPos;
}