document.documentElement.style.fontSize = document.documentElement.offsetWidth / 60 + "px";
function setrem() {
  document.documentElement.style.fontSize = document.documentElement.offsetWidth / 60 + "px";
}
window.onresize = function () {
  setrem();
}