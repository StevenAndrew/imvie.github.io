if (window.location.pathname.endsWith('.html')) {
  var newUrl = window.location.pathname.slice(0, -5);  // Remove .html
  window.history.replaceState(null, '', newUrl);
}

var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "flex";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

function slide(){
  let slideValue = document.getElementById("slider").value;
  document.getElementById("img2").style.clipPath = "polygon(0 0," + slideValue + "% 0," + slideValue + "% 100%, 0 100%)";
}