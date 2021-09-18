var modal = document.getElementById("myModal");

var btn = document.getElementById("myBtn");

var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
    modal.style.display = "block";
    modal.style.opacity = "1"
}

span.onclick = function() {
    modal.style.display = "none";
    modal.style.opacity = "0"
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        modal.style.opacity = "0"
    }
}


// back to top
var scrollToTopBtn = document.getElementById("scrollToTopBtn")
var rootElement = document.documentElement

function scrollToTop() {
    rootElement.scrollTo({
        top: 0,
        behavior: "smooth"
    })
}
scrollToTopBtn.addEventListener("click", scrollToTop)



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


// EXPLORE LA VISTA
function vitasNext() {
    var x = document.querySelector('.listVitas__show').style.transform
    if (document.querySelector('.listVitas__show').style.transform == `translate3d(-${5*404}px, 0px, 0px)`) {
        document.querySelector('.listVitas__show').style.transform = `translate3d(-${6*404}px, 0px, 0px)`
    }
    if (document.querySelector('.listVitas__show').style.transform == `translate3d(-${4*404}px, 0px, 0px)`) {
        document.querySelector('.listVitas__show').style.transform = `translate3d(-${5*404}px, 0px, 0px)`
        document.getElementById('events').classList.remove('menu__explore__focus')
        document.getElementById('services').classList.remove('menu__explore__focus')
        document.getElementById('activities').classList.remove('menu__explore__focus')
        document.getElementById('activities').classList.add('menu__explore__focus')
    }
    if (document.querySelector('.listVitas__show').style.transform == `translate3d(-${3*404}px, 0px, 0px)`) {
        document.querySelector('.listVitas__show').style.transform = `translate3d(-${4*404}px, 0px, 0px)`
    }
    if (document.querySelector('.listVitas__show').style.transform == `translate3d(-${2*404}px, 0px, 0px)`) {
        document.querySelector('.listVitas__show').style.transform = `translate3d(-${3*404}px, 0px, 0px)`
    }
    if (document.querySelector('.listVitas__show').style.transform == `translate3d(-404px, 0px, 0px)`) {
        document.querySelector('.listVitas__show').style.transform = `translate3d(-808px, 0px, 0px)`
        document.getElementById('events').classList.remove('menu__explore__focus')
        document.getElementById('services').classList.remove('menu__explore__focus')
        document.getElementById('activities').classList.remove('menu__explore__focus')
        document.getElementById('events').classList.add('menu__explore__focus')
    }
    if (document.querySelector('.listVitas__show').style.transform == `translate3d(0px, 0px, 0px)`) {
        document.querySelector('.listVitas__show').style.transform = `translate3d(-404px, 0px, 0px)`
        document.querySelector('.icon__frev').style.display = 'none'
        document.querySelector('.icon__frev__show').style.display = 'inline'
    }


    console.log(document.querySelector('.listVitas__show').style.transform)
}

function vitasPrev() {
    var x = document.querySelector('.listVitas__show').style.transform
    if (document.querySelector('.listVitas__show').style.transform == `translate3d(-${1*404}px, 0px, 0px)`) {
        document.querySelector('.listVitas__show').style.transform = `translate3d(-${0*404}px, 0px, 0px)`
        document.getElementById('events').classList.remove('menu__explore__focus')
        document.getElementById('services').classList.remove('menu__explore__focus')
        document.getElementById('activities').classList.remove('menu__explore__focus')
        document.getElementById('services').classList.add('menu__explore__focus')
    }
    if (document.querySelector('.listVitas__show').style.transform == `translate3d(-${2*404}px, 0px, 0px)`) {
        document.querySelector('.listVitas__show').style.transform = `translate3d(-${1*404}px, 0px, 0px)`
    }
    if (document.querySelector('.listVitas__show').style.transform == `translate3d(-${3*404}px, 0px, 0px)`) {
        document.querySelector('.listVitas__show').style.transform = `translate3d(-${2*404}px, 0px, 0px)`
    }
    if (document.querySelector('.listVitas__show').style.transform == `translate3d(-${4*404}px, 0px, 0px)`) {
        document.querySelector('.listVitas__show').style.transform = `translate3d(-${3*404}px, 0px, 0px)`
        document.getElementById('events').classList.remove('menu__explore__focus')
        document.getElementById('services').classList.remove('menu__explore__focus')
        document.getElementById('activities').classList.remove('menu__explore__focus')
        document.getElementById('events').classList.add('menu__explore__focus')
    }
    if (document.querySelector('.listVitas__show').style.transform == `translate3d(-${5*404}px, 0px, 0px)`) {
        document.querySelector('.listVitas__show').style.transform = `translate3d(-${4*404}px, 0px, 0px)`
    }
    if (document.querySelector('.listVitas__show').style.transform == `translate3d(-${6*404}px, 0px, 0px)`) {
        document.querySelector('.listVitas__show').style.transform = `translate3d(-${5*404}px, 0px, 0px)`
    }
    console.log(x)
}

var ServicesVitas = document.getElementById('services')
var EventVitas = document.getElementById('events')
var ActiviticesVitas = document.getElementById('activities')

ServicesVitas.onclick = function() {
    document.getElementById('events').classList.remove('menu__explore__focus')
    document.getElementById('services').classList.remove('menu__explore__focus')
    document.getElementById('activities').classList.remove('menu__explore__focus')
    document.getElementById('services').classList.add('menu__explore__focus')
    document.querySelector('.listVitas__show').style.transform = `translate3d(-${0*404}px, 0px, 0px)`
}
EventVitas.onclick = function() {
    document.getElementById('events').classList.remove('menu__explore__focus')
    document.getElementById('services').classList.remove('menu__explore__focus')
    document.getElementById('activities').classList.remove('menu__explore__focus')
    document.getElementById('events').classList.add('menu__explore__focus')
    document.querySelector('.listVitas__show').style.transform = `translate3d(-808px, 0px, 0px)`
}
ActiviticesVitas.onclick = function() {
    document.getElementById('events').classList.remove('menu__explore__focus')
    document.getElementById('services').classList.remove('menu__explore__focus')
    document.getElementById('activities').classList.remove('menu__explore__focus')
    document.getElementById('activities').classList.add('menu__explore__focus')
    document.querySelector('.listVitas__show').style.transform = `translate3d(-${5*404}px, 0px, 0px)`
}



// 

$(document).on('ready', function() {
    $(".lazy").slick({
        lazyLoad: 'ondemand', // ondemand progressive anticipated
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
    });
});



// 
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
//
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    captionText.innerHTML = dots[slideIndex - 1].alt;
}