function slide(){
  let slideValue = document.getElementById("slider").value;
  document.getElementById("img2").style.clipPath = "polygon(0 0," + slideValue + "% 0," + slideValue + "% 100%, 0 100%)";
}

var modal1 = document.getElementById("myModal1");
var modal2 = document.getElementById("myModal2");
var modal3 = document.getElementById("myModal3");
var modal4 = document.getElementById("myModal4");
var modal5 = document.getElementById("myModal5");
var modal6 = document.getElementById("myModal6");
var modal7 = document.getElementById("myModal7");
var modal8 = document.getElementById("myModal8");
var btn1 = document.getElementById("myBtn1");
var btn2 = document.getElementById("myBtn2");
var btn3 = document.getElementById("myBtn3");
var btn4 = document.getElementById("myBtn4");
var btn5 = document.getElementById("myBtn5");
var btn6 = document.getElementById("myBtn6");
var btn7 = document.getElementById("myBtn7");
var btn8 = document.getElementById("myBtn8");
var span = document.getElementsByClassName("close")[0];

btn1.onclick = function() {
  modal1.style.display = "flex";
}

btn2.onclick = function() {
  modal2.style.display = "flex";
}

btn3.onclick = function() {
  modal3.style.display = "flex";
}

btn4.onclick = function() {
  modal4.style.display = "flex";
}

btn5.onclick = function() {
  modal5.style.display = "flex";
}

btn6.onclick = function() {
  modal6.style.display = "flex";
}

btn7.onclick = function() {
  modal7.style.display = "flex";
}

btn8.onclick = function() {
  modal8.style.display = "flex";
}

span.onclick = function() {
  modal1.style.display = "none";
  modal2.style.display = "none";
  modal3.style.display = "none";
  modal4.style.display = "none";
  modal5.style.display = "none";
  modal6.style.display = "none";
  modal7.style.display = "none";
  modal8.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal1) {
    modal1.style.display = "none";
  }else if(event.target == modal2) {
    modal2.style.display = "none";
  }else if(event.target == modal3) {
    modal3.style.display = "none";
  }else if(event.target == modal4) {
    modal4.style.display = "none";
  }else if(event.target == modal5) {
    modal5.style.display = "none";
  }else if(event.target == modal6) {
    modal6.style.display = "none";
  }else if(event.target == modal7) {
    modal7.style.display = "none";
  }else if(event.target == modal8) {
    modal8.style.display = "none";
  }
}
