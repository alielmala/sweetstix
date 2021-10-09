var topNavbarDisplay = document.getElementById("top-navbar");
var topNavbarElements = document.getElementById("top-navbar").getElementsByTagName("*");

var searchBoxController = document.querySelector(".search-box");
searchBoxController.style.display = "none";
var searchBoxControllerSmall = document.querySelector(".search-box-small");
searchBoxControllerSmall.style.display = "none";

var secondaryNavbar = document.getElementById("secondary-navbar");
var sticky = secondaryNavbar.offsetTop;

var smallNavbar = document.getElementById("small-nav");
var stickySmall = smallNavbar.offsetTop;

var offcanvasShopMenu = document.querySelector(".offcanvas-shop-menu");
var offcanvasShopMenuItems = document.querySelector(".offcanvas-shop-menu").getElementsByTagName("*");


window.onscroll = function () { fixedNavbar() };
function fixedNavbar() {
  if (window.pageYOffset >= sticky) {
    secondaryNavbar.classList.add("sticky")
  } else {
    secondaryNavbar.classList.remove("sticky");
  }
}

if (innerWidth <= 974) {
  window.onscroll = function () { fixedNavbarSmall() };
}

function fixedNavbarSmall() {
  if (window.pageYOffset >= stickySmall) {
    smallNavbar.classList.add("sticky");
  } else {
    smallNavbar.classList.remove("sticky");
  }
}
// Set the date we're counting down to
var countDownDate = new Date("Sep 30, 2021 15:37:25").getTime();

// Update the count down every 1 second
var count = setInterval(function () {

  var now = new Date().getTime();

  var distance = countDownDate - now;  // Find the distance between now and the count down date


  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Output the result
  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours
  document.getElementById("minutes").innerHTML = minutes
  document.getElementById("seconds").innerHTML = seconds

  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(count);
    document.getElementById("counter").innerHTML = "EXPIRED";
  }
}, 1000);

function closeTopNavbarFunc() {
  for (var i = 0; i < topNavbarElements.length; i++) {
    topNavbarElements[i].style.display = 'none';
  }
  topNavbarDisplay.style.height = "0px";
}

function searchBoxFunc() {
  if (searchBoxController.style.display === "none") {
    searchBoxController.style.display = "block";
  } else {
    searchBoxController.style.display = "none";
  }
}
function searchBoxFuncSmall() {
  if (searchBoxControllerSmall.style.display === "none") {
    searchBoxControllerSmall.style.display = "block";
  } else {
    searchBoxControllerSmall.style.display = "none";
  }
}

function offcanvasNavItemMenu() {
  if (offcanvasShopMenu.style.display === "block") {
    offcanvasShopMenu.style.display = "none";

  }
  else {
    offcanvasShopMenu.style.display = "block";
    for (var i = 0; i < offcanvasShopMenuItems.length; i++) {
      offcanvasShopMenuItems[i].style.display = 'block';
    }
  }
}

