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



// MENU scroll
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