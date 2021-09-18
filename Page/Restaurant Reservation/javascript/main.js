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


// Date Picker
let calendar = document.querySelector('.calendar')
var dayFocus = 0
var monthFocus = 0
var yearFocus = 0

const month_names = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

isLeapYear = (year) => {
    return (year % 4 === 0 && year % 100 !== 0 && year % 400 !== 0) || (year % 100 === 0 && year % 400 === 0)
}

getFebDays = (year) => {
    return isLeapYear(year) ? 29 : 28
}

generateCalendar = (month, year) => {

    let calendar_days = calendar.querySelector('.calendar-days')
    let calendar_header_year = calendar.querySelector('#year')

    let days_of_month = [31, getFebDays(year), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

    calendar_days.innerHTML = ''

    let currDate = new Date()
    if (!month) month = currDate.getMonth()
    if (!year) year = currDate.getFullYear()

    let curr_month = `${month_names[month]}`
    month_picker.innerHTML = curr_month
    calendar_header_year.innerHTML = year

    // get first day of month

    let first_day = new Date(year, month, 1)

    for (let i = 0; i <= days_of_month[month] + first_day.getDay() - 1; i++) {
        let day = document.createElement('div')

        if (i >= first_day.getDay()) {

            day.classList.add('calendar-day-hover')
            day.addEventListener('click', function() {
                day.classList.add('selected-date-start')
                dayFocus = i - first_day.getDay() + 1;
                monthFocus = month;
                yearFocus = year;
                // generateCalendar(monthFocus, yearFocus)
            });
            day.innerHTML = i - first_day.getDay() + 1
            day.innerHTML += `<span></span>
                            <span></span>
                            <span></span>
                            <span></span>`
            if (i - first_day.getDay() + 1 === currDate.getDate() && year === currDate.getFullYear() && month === currDate.getMonth()) {
                day.classList.add('curr-date')
            }
            if (i - first_day.getDay() + 1 == dayFocus && year == yearFocus && month == monthFocus) {
                day.classList.add('selected-date-start')
            }
        }

        calendar_days.appendChild(day)
    }
}

let month_list = calendar.querySelector('.month-list')



let month_picker = calendar.querySelector('#month-picker')

month_picker.onclick = () => {
    month_list.classList.add('show')
}

let currDate = new Date()

let curr_month = { value: currDate.getMonth() }
let curr_year = { value: currDate.getFullYear() }

generateCalendar(curr_month.value, curr_year.value)

document.querySelector('#prev-year').onclick = () => {
    --curr_month.value
    if (curr_month.value == -1) {
        curr_month.value = "11"
        curr_year.value--
    }
    console.log(curr_month.value)
    generateCalendar(curr_month.value, curr_year.value)
        --curr_month1.value

    if (curr_month1.value == -1) {
        curr_month1.value = "11"
        curr_year1.value--
    }
    console.log(curr_month1.value)
    generateCalendar1(curr_month1.value, curr_year1.value)
}

document.querySelector('#next-year').onclick = () => {
    ++curr_month.value

    if (curr_month.value == 12) {
        curr_year.value++;
        curr_month.value = "0";
    }
    generateCalendar(curr_month.value, curr_year.value)
    console.log(curr_month.value)
    console.log(curr_year.value)
}


// ----------------------------------------------------------------
let calendar1 = document.querySelector('.calendar-1')
var dayFocus1 = 0
var monthFocus1 = 0
var yearFocus1 = 0

const month_names1 = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

isLeapYear1 = (year) => {
    return (year % 4 === 0 && year % 100 !== 0 && year % 400 !== 0) || (year % 100 === 0 && year % 400 === 0)
}

getFebDays1 = (year) => {
    return isLeapYear1(year) ? 29 : 28
}

generateCalendar1 = (month, year) => {

    let calendar_days1 = calendar1.querySelector('.calendar-days-1')
    let calendar_header_year1 = calendar1.querySelector('#year-1')

    let days_of_month1 = [31, getFebDays1(year), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

    calendar_days1.innerHTML = ''

    let currDate1 = new Date()
    if (!month) month = currDate1.getMonth() + 1
    if (!year) year = currDate1.getFullYear()

    let curr_month1 = `${month_names1[month]}`
    month_picker1.innerHTML = curr_month1
    calendar_header_year1.innerHTML = year

    // get first day of month

    let first_day1 = new Date(year, month, 1)

    for (let i = 0; i <= days_of_month1[month] + first_day1.getDay() - 1; i++) {
        let day = document.createElement('div')

        if (i >= first_day1.getDay()) {
            day.classList.add('calendar-day-hover-1')
            day.addEventListener('click', function() {
                day.classList.add('selected-date-end')
            });
            day.innerHTML = i - first_day1.getDay() + 1
            day.innerHTML += `<span></span>
                            <span></span>
                            <span></span>
                            <span></span>`
            if (i - first_day1.getDay() + 1 === currDate1.getDate() && year === currDate1.getFullYear() && month === currDate1.getMonth()) {
                day.classList.add('curr-date-1')
            }
        }

        calendar_days1.appendChild(day)
    }
}

let month_list1 = calendar1.querySelector('.month-list-1')



let month_picker1 = calendar1.querySelector('#month-picker-1')

month_picker1.onclick = () => {
    month_list1.classList.add('show')
}

let currDate1 = new Date()

let curr_month1 = { value: currDate1.getMonth() + 1 }
let curr_year1 = { value: currDate1.getFullYear() }

generateCalendar1(curr_month1.value, curr_year1.value)



document.querySelector('#next-year-1').onclick = () => {
    ++curr_month1.value

    if (curr_month1.value == 12) {
        curr_year1.value++;
        curr_month1.value = "0";
    }
    generateCalendar1(curr_month1.value, curr_year1.value)
    console.log(curr_month1.value)
    console.log(curr_year1.value)
        ++curr_month.value

    if (curr_month.value == 12) {
        curr_year.value++;
        curr_month.value = "0";
    }
    generateCalendar(curr_month.value, curr_year.value)
    console.log(curr_month.value)
    console.log(curr_year.value)
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