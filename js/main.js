// HIEU UNG AN HIEN CAC THE
window.addEventListener('scroll', () => {
    let heightScrollVillaPhuQuoc = document.querySelector('.Villa__Phu__Quoc').getBoundingClientRect().top;
    let heightScrollFacilitices = document.querySelector('.Facilitices').getBoundingClientRect().top;
    let heightScrollTheVilla = document.querySelector('.The__villa').getBoundingClientRect().top;
    let heightScrollExplore = document.querySelector('.ExploreVitas').getBoundingClientRect().top;
    let heightScrollFooter = document.querySelector('.Footer').getBoundingClientRect().top;
    var rootElement = document.documentElement.getBoundingClientRect().top
    var bottomElement = document.documentElement.getBoundingClientRect().bottom


    if (heightScrollVillaPhuQuoc < 600) {
        document.querySelector('.Villa__Phu__Quoc').classList.add('in__viewport__active')
    } else {
        document.querySelector('.Villa__Phu__Quoc').classList.remove('in__viewport__active')
    }
    if (heightScrollFacilitices < 600) {
        document.querySelector('.Facilitices').classList.add('in__viewport__active')
    } else {
        document.querySelector('.Facilitices').classList.remove('in__viewport__active')
    }
    if (heightScrollTheVilla < 600) {
        document.querySelector('.The__villa').classList.add('in__viewport__active')
    } else {
        document.querySelector('.The__villa').classList.remove('in__viewport__active')
    }
    if (heightScrollExplore < 600) {
        document.querySelector('.ExploreVitas').classList.add('in__viewport__active')
    } else {
        document.querySelector('.ExploreVitas').classList.remove('in__viewport__active')
    }
    if (heightScrollFooter < 600) {
        document.querySelector('.Footer').classList.add('in__viewport__active')
    } else {
        document.querySelector('.Footer').classList.remove('in__viewport__active')
    }
})


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

// HIEU UNG CHUYEN DONG ONLICK FACILITICES
function FocusFacilitices(num) {
    for (var i = 1; i <= 7; i++) {
        document.getElementById(`text-${i}`).classList.remove('item__focus__facilitices')
        document.getElementById('background__Fa').classList.remove(`facilitices__img-${i}`)
    }
    document.getElementById(`text-${num}`).classList.add('item__focus__facilitices')
    document.getElementById('background__Fa').classList.add(`facilitices__img-${num}`)
}



$(document).on('ready', function() {
    $(".lazy").slick({
        lazyLoad: 'ondemand', // ondemand progressive anticipated
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
    });
});



// SLIDE SHOW 
$('.slick')
    .on('init', () => {
        $('.slick-slide[data-slick-index="-2"]').addClass('lt2');
        $('.slick-slide[data-slick-index="-1"]').addClass('lt1');
        $('.slick-slide[data-slick-index="1"]').addClass('gt1');
        $('.slick-slide[data-slick-index="2"]').addClass('gt2');
    })
    .slick({
        centerMode: true,
        centerPadding: 0,
        slidesToShow: 3,
        autoplay: true,
        autoplaySpeed: 2500,
    }).on('beforeChange', (event, slick, current, next) => {
        $('.slick-slide.gt2').removeClass('gt2');
        $('.slick-slide.gt1').removeClass('gt1');
        $('.slick-slide.lt1').removeClass('lt1');
        $('.slick-slide.lt2').removeClass('lt2');

        const lt2 = (current < next && current > 0) ? current - 1 : next - 2;
        const lt1 = (current < next && current > 0) ? current : next - 1;
        const gt1 = (current < next || next === 0) ? next + 1 : current;
        const gt2 = (current < next || next === 0) ? next + 2 : current + 1;

        $(`.slick-slide[data-slick-index="${lt2}"]`).addClass('lt2');
        $(`.slick-slide[data-slick-index="${lt1}"]`).addClass('lt1');
        $(`.slick-slide[data-slick-index="${gt1}"]`).addClass('gt1');
        $(`.slick-slide[data-slick-index="${gt2}"]`).addClass('gt2');

        // Clone processing when moving from 5 to 0
        if (current === 5 && next === 0) {
            $(`.slick-slide[data-slick-index="${current - 1}"]`).addClass('lt2');
            $(`.slick-slide[data-slick-index="${current}"]`).addClass('lt1');
            $(`.slick-slide[data-slick-index="${current + 2}"]`).addClass('gt1');
            $(`.slick-slide[data-slick-index="${current + 3}"]`).addClass('gt2');
        }

        // Clone processing when moving from 0 to 5
        if (current === 0 && next === 5) {
            $(`.slick-slide[data-slick-index="${current - 1}"]`).addClass('gt2');
            $(`.slick-slide[data-slick-index="${current}"]`).addClass('gt1');
            $(`.slick-slide[data-slick-index="${current - 2}"]`).addClass('lt1');
            $(`.slick-slide[data-slick-index="${current - 3}"]`).addClass('lt2');
        }

        console.log('beforeChange', current, ':', lt2, lt1, next, gt1, gt2);
    });


// 

function vitasNext() {
    var x = document.querySelector('.listVitas__show').style.transform
    if (document.querySelector('.listVitas__show').style.transform == `translate3d(-${6*404}px, 0px, 0px)`) {
        document.querySelector('.listVitas__show').style.transform = `translate3d(-${7*404}px, 0px, 0px)`
    }
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
    if (document.querySelector('.listVitas__show').style.transform == `translate3d(-${7*404}px, 0px, 0px)`) {
        document.querySelector('.listVitas__show').style.transform = `translate3d(-${6*404}px, 0px, 0px)`
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
    // DIALOG MENU
var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var btnscroll = document.getElementById("myBtn__scorll");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function() {
    modal.style.display = "block";
    modal.style.opacity = "1"
    document.querySelector('.Header__scorll').style.top = '-100px';
}
btnscroll.onclick = function() {
    modal.style.display = "block";
    modal.style.opacity = "1"
    document.querySelector('.Header__scorll').style.top = '-100px';
}
span.onclick = function() {
    modal.style.display = "none";
}
window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
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

// ----------------------
var scrollToTopBtn = document.getElementById("scrollToTopBtn")
var rootElement = document.documentElement

function scrollToTop() {
    // Scroll to top logic
    rootElement.scrollTo({
        top: 0,
        behavior: "smooth"
    })
}
scrollToTopBtn.addEventListener("click", scrollToTop)



// ----------------------------------------------------------------

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
}