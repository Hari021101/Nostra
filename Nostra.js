// searchbar

var navSearch = document.querySelector(".navsearch")





var searchBar = document.getElementById("search")


var offerBar = document.querySelector(".offerbar")
var offerclose = document.getElementById("offerclose")
    .addEventListener("click", function () {
        offerBar.style.display = "none"
    })

var sideNavBar = document.querySelector(".side-navbar")
var navToggle = document.getElementById("side-navactivate")
navToggle.addEventListener("click", function () {
    sideNavBar.style.marginLeft = "0px"
})

var sideNavClose = document.getElementById("side-navclose")
sideNavClose.addEventListener("click", function () {
    sideNavBar.style.marginLeft = "-60%"
})

// slider

var sliderLeft = document.getElementById("slider-left-activate")
var sliderRight = document.getElementById("slider-right-activate")
var sliderContainer = document.querySelector(".slider-image-container")
var marginLeft = 0
sliderRight.addEventListener("click", function () {
    if (marginLeft >= 200) {
        marginLeft = 0
        sliderContainer.style.marginLeft = "-" + marginLeft + "vw"

    }
    else {
        marginLeft = marginLeft + 100
        sliderContainer.style.marginLeft = "-" + marginLeft + "vw"
    }
})

sliderLeft.addEventListener("click", function () {
    if (marginLeft == 0) {
        marginLeft = 200
        sliderContainer.style.marginLeft = "-" + marginLeft + "vw"
    }
    else {
        marginLeft = marginLeft - 100
        sliderContainer.style.marginLeft = "-" + marginLeft + "vw"
    }
})


// /Brands

var BrandsLeft = document.getElementById("brands-left-activate")
var BrandsRight = document.getElementById("brands-right-activate")
var Brands = document.querySelector(".brands")

rightt.addEventListener("click",function(){
    icon.scrollBy(
    {
        top:0,
        left:50
    })
})

leftt.addEventListener("click",function(){
    icon.scrollBy({
        top:0,
        left:-50
    })
})


