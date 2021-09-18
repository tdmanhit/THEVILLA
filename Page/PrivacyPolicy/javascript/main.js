var modal = document.getElementById("myModal");

var btn = document.getElementById("myBtn");

var span = document.getElementsByClassName("close")[0];
var btnscroll = document.getElementById("myBtn__scorll");


btn.onclick = function() {
    modal.style.display = "block";
    modal.style.opacity = "1"
}

span.onclick = function() {
    modal.style.display = "none";
    modal.style.opacity = "0"
}
btnscroll.onclick = function() {
    modal.style.display = "block";
    modal.style.opacity = "1"
    document.querySelector('.Header__scorll').style.top = '-100px';

}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        modal.style.opacity = "0"
    }
}





var scrollToTopBtn = document.getElementById("scrollToTopBtn")
var rootElement = document.documentElement

function scrollToTop() {
    rootElement.scrollTo({
        top: 0,
        behavior: "smooth"
    })
}
scrollToTopBtn.addEventListener("click", scrollToTop)


var prevScrollpos = 0;
window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (currentScrollPos > 700) {
        if (prevScrollpos > currentScrollPos) {
            document.querySelector('.Header__scorll').style.top = '0';
        } else {
            document.querySelector('.Header__scorll').style.top = '-100px';
        }
    } else {
        document.querySelector('.Header__scorll').style.top = '-100px';
    }
    prevScrollpos = currentScrollPos;
}