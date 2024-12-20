var modal1 = document.getElementById("myModal1");
var modal2 = document.getElementById("myModal2");
var modal3 = document.getElementById("myModal3");
var modal4 = document.getElementById("myModal4");
var btn1 = document.getElementById("myBtn1");
var btn2 = document.getElementById("myBtn2");
var btn3 = document.getElementById("myBtn3");
var btn4 = document.getElementById("myBtn4");

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

window.onclick = function(event) {
    if (event.target == modal1) {
        modal1.style.display = "none";
    }else if(event.target == modal2) {
        modal2.style.display = "none";
    }else if(event.target == modal3) {
        modal3.style.display = "none";
    }else if(event.target == modal4) {
        modal4.style.display = "none";
    }
}
