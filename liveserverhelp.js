var element = document.getElementById("current");
var scrollTop = element.scrollY;
function redirectToTarget() {
  if (window.scrollY !== scrollTop) {
    window.location.href = "#current";
  }
}
setInterval(redirectToTarget, 1000);
