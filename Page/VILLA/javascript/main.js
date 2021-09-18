window.addEventListener('scroll', () => {
    for (var i = 1; i <= 5; i++) {
        if (document.getElementById(`list_Villa_${i}`).getBoundingClientRect().top < 600) {
            document.getElementById(`list_Villa_${i}`).classList.add('in__viewport__active')
        } else {
            document.getElementById(`list_Villa_${i}`).classList.remove('in__viewport__active')
        }
    }

})



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


// footer

var scrollToTopBtn = document.getElementById("scrollToTopBtn")
var rootElement = document.documentElement

function scrollToTop() {
    rootElement.scrollTo({
        top: 0,
        behavior: "smooth"
    })
}
scrollToTopBtn.addEventListener("click", scrollToTop)


//

window.onscroll = function() {
    var height = document.getElementById("list_Villa").getBoundingClientRect().top
    console.log(height)
    if (height > 0) {
        for (var i = 1; i <= 5; i++) {
            document.getElementById(`item_menu_Slide_${i}`).style.width = "0px"
            document.getElementById(`name_Villa_${i}`).style.color = "#a59a9a"
        }
        document.getElementById(`item_menu_Slide_1`).style.width = "50px"
        document.getElementById(`name_Villa_1`).style.color = "#282828"

    }
    if (height < 0) {
        for (var i = 1; i <= 5; i++) {
            document.getElementById(`name_Villa_${i}`).style.color = "#a59a9a"
            document.getElementById(`item_menu_Slide_${i}`).style.width = "0px"
        }
        document.getElementById(`item_menu_Slide_2`).style.width = "50px"
        document.getElementById(`name_Villa_2`).style.color = "#282828"

    }
    if (height < -590) {
        for (var i = 1; i <= 5; i++) {
            document.getElementById(`item_menu_Slide_${i}`).style.width = "0px"
            document.getElementById(`name_Villa_${i}`).style.color = "#a59a9a"
        }
        document.getElementById(`name_Villa_3`).style.color = "#282828"
        document.getElementById(`item_menu_Slide_3`).style.width = "50px"

    }
    if (height < -1190) {
        for (var i = 1; i <= 5; i++) {
            document.getElementById(`name_Villa_${i}`).style.color = "#a59a9a"
            document.getElementById(`item_menu_Slide_${i}`).style.width = "0px"
        }
        document.getElementById(`item_menu_Slide_4`).style.width = "50px"
        document.getElementById(`name_Villa_4`).style.color = "#282828"

    }
    if (height < -1790) {
        for (var i = 1; i <= 5; i++) {
            document.getElementById(`name_Villa_${i}`).style.color = "#a59a9a"
            document.getElementById(`item_menu_Slide_${i}`).style.width = "0px"
        }
        document.getElementById(`item_menu_Slide_5`).style.width = "50px"
        document.getElementById(`name_Villa_5`).style.color = "#282828"
    }
}

document.getElementById(`name_Villa_1`).addEventListener('mouseenter', function(e) {
    e.target.style.color = "#282828"
    e.fromElement.querySelectorAll(`.focus_left_text`)[0].style.width = "25px"
    setTimeout(function() {
        e.target.style.color = ""
        e.fromElement.querySelectorAll(`.focus_left_text`)[0].style.width = ""
    }, 1000);
}, false)
document.getElementById(`name_Villa_2`).addEventListener('mouseenter', function(e) {
    e.target.style.color = "#282828"
    e.fromElement.querySelectorAll(`.focus_left_text`)[1].style.width = "25px"
    setTimeout(function() {
        e.target.style.color = ""
        e.fromElement.querySelectorAll(`.focus_left_text`)[1].style.width = ""
    }, 1000);
}, false)
document.getElementById(`name_Villa_3`).addEventListener('mouseenter', function(e) {
    e.target.style.color = "#282828"
    e.fromElement.querySelectorAll(`.focus_left_text`)[2].style.width = "25px"
    setTimeout(function() {
        e.target.style.color = ""
        e.fromElement.querySelectorAll(`.focus_left_text`)[2].style.width = ""
    }, 1000);
}, false)
document.getElementById(`name_Villa_4`).addEventListener('mouseenter', function(e) {
    e.target.style.color = "#282828"
    e.fromElement.querySelectorAll(`.focus_left_text`)[3].style.width = "25px"
    setTimeout(function() {
        e.target.style.color = ""
        e.fromElement.querySelectorAll(`.focus_left_text`)[3].style.width = ""
    }, 1000);
}, false)
document.getElementById(`name_Villa_5`).addEventListener('mouseenter', function(e) {
    e.target.style.color = "#282828"
    e.fromElement.querySelectorAll(`.focus_left_text`)[4].style.width = "25px"
    setTimeout(function() {
        e.target.style.color = ""
        e.fromElement.querySelectorAll(`.focus_left_text`)[4].style.width = ""
    }, 1000);
}, false)


document.getElementById(`name_Villa_1`).addEventListener('click', function() {
    for (var i = 1; i <= 5; i++) {
        document.getElementById(`name_Villa_${i}`).style.color = "#a59a9a"
        document.getElementById(`item_menu_Slide_${i}`).style.width = "0px"
    }
    document.getElementById(`item_menu_Slide_1`).style.width = "50px"
    document.getElementById(`name_Villa_1`).style.color = "#282828"
    rootElement.scrollTo({
        top: 600,
        behavior: "smooth"
    })
})
document.getElementById(`name_Villa_2`).addEventListener('click', function() {
    for (var i = 1; i <= 5; i++) {
        document.getElementById(`name_Villa_${i}`).style.color = "#a59a9a"
        document.getElementById(`item_menu_Slide_${i}`).style.width = "0px"
    }
    document.getElementById(`item_menu_Slide_2`).style.width = "50px"
    document.getElementById(`name_Villa_2`).style.color = "#282828"
    rootElement.scrollTo({
        top: 1250,
        behavior: "smooth"
    })
})
document.getElementById(`name_Villa_3`).addEventListener('click', function() {
    rootElement.scrollTo({
        top: 1850,
        behavior: "smooth"
    })
    for (var i = 1; i <= 5; i++) {
        document.getElementById(`name_Villa_${i}`).style.color = "#a59a9a"
        document.getElementById(`item_menu_Slide_${i}`).style.width = "0px"
    }
    document.getElementById(`item_menu_Slide_3`).style.width = "50px"
    document.getElementById(`name_Villa_3`).style.color = "#282828"
})
document.getElementById(`name_Villa_4`).addEventListener('click', function() {
    rootElement.scrollTo({
        top: 2450,
        behavior: "smooth"
    })
    for (var i = 1; i <= 5; i++) {
        document.getElementById(`name_Villa_${i}`).style.color = "#a59a9a"
        document.getElementById(`item_menu_Slide_${i}`).style.width = "0px"
    }
    document.getElementById(`item_menu_Slide_4`).style.width = "50px"
    document.getElementById(`name_Villa_4`).style.color = "#282828"
})
document.getElementById(`name_Villa_5`).addEventListener('click', function() {
    rootElement.scrollTo({
        top: 3050,
        behavior: "smooth"
    })
    for (var i = 1; i <= 5; i++) {
        document.getElementById(`name_Villa_${i}`).style.color = "#a59a9a"
        document.getElementById(`item_menu_Slide_${i}`).style.width = "0px"
    }
    document.getElementById(`item_menu_Slide_5`).style.width = "50px"
    document.getElementById(`name_Villa_5`).style.color = "#282828"
})