// DIALOG SIGN IN
var SignIn = document.getElementById("Sign_in");
var openSignIn_1 = document.getElementById("open_Sign_in");
var openSignIn_2 = document.getElementById("open_Sign_in_two");
var closeSignIn = document.getElementById("close_Sign_in");
openSignIn_1.onclick = function() {
    SignIn.style.display = "block";
    SignIn.style.opacity = "1"
    document.querySelector('.Header__scorll').style.top = '-100px';
}
openSignIn_2.onclick = function() {
    SignIn.style.display = "block";
    SignIn.style.opacity = "1"
    document.querySelector('.Header__scorll').style.top = '-100px';
}
closeSignIn.onclick = function() {
        SignIn.style.display = "none";
    }
    // DIALOG JOIN US
var JoinUs = document.getElementById("Join_us")
var openJoinUs = document.getElementById("open_Join_us")
var closeJoinUs = document.getElementById("close_Join_us")
openJoinUs.onclick = function() {
    SignIn.style.display = "none";
    JoinUs.style.display = "block";
    JoinUs.style.opacity = "1"
    document.querySelector('.Header__scorll').style.top = '-100px';
}
closeJoinUs.onclick = function() {
    JoinUs.style.display = "none"
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