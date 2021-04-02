// Get the modal
var modal = document.getElementById("myModal");
var modal2 = document.getElementById("myModal2");
var modal3 = document.getElementById("myModal3");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");
var btn2 = document.getElementById("myBtn2");
var btnP1 = document.getElementById("myBtnP1");
var btnP2 = document.getElementById("myBtnP2");
var btnP3 = document.getElementById("myBtnP3");
var btnP4 = document.getElementById("myBtnP4");
var btnP5 = document.getElementById("myBtnP5");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
var span2 = document.getElementsByClassName("close")[1];
var span3 = document.getElementsByClassName("delBtnY")[0];
var span4 = document.getElementsByClassName("delBtnN")[0];


// When the user clicks the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}

btn2.onclick = function() {
    modal2.style.display = "block";
}

btnP1.onclick = function() {
    modal3.style.display = "block";
}
btnP2.onclick = function() {
    modal3.style.display = "block";
}
btnP3.onclick = function() {
    modal3.style.display = "block";
}
btnP4.onclick = function() {
    modal3.style.display = "block";
}
btnP5.onclick = function() {
    modal3.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

span2.onclick = function() {
    modal2.style.display = "none";
}

span3.onclick = function() {
    modal3.style.display = "none";
}
span4.onclick = function() {
    modal3.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

window.onclick = function(event) {
    if (event.target == modal2) {
        modal2.style.display = "none";
    }
}

window.onclick = function(event) {
    if (event.target == modal3) {
        modal3.style.display = "none";
    }
}