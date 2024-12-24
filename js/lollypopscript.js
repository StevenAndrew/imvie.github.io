var modal1 = document.getElementById("myModal1");
var modal2 = document.getElementById("myModal2");
var btn1 = document.getElementById("myBtn1");
var btn2 = document.getElementById("myBtn2");

btn1.onclick = function() {
    modal1.style.display = "flex";
}

btn2.onclick = function() {
    modal2.style.display = "flex";
}


window.onclick = function(event) {
    if (event.target == modal1) {
        modal1.style.display = "none";
    }else if(event.target == modal2) {
        modal2.style.display = "none";
    }
}
