var myNav = document.getElementById('nav');
// var toTop = document.

document.addEventListener("DOMContentLoaded", function (event) {
    var width = window.innerWidth;
    window.onresize = function () {
        width = window.innerWidth
        window.onscroll()
    }
    window.onscroll = function () {
        if(document.scrollingElement.scrollTop > 589){
            // toTop.classList.add("toTopShow")
            // toTop.classList.remove("toTopHide");
        } else {
            // toTop.classList.add("toTopHide")
            // toTop.classList.remove("toTopShow");
        }
        if (document.scrollingElement.scrollTop >= 25 && width < 800) {
            myNav.classList.add("nav-colored");
            myNav.classList.remove("nav-transparent");
        } else if (document.scrollingElement.scrollTop > 380) {
            myNav.classList.add("nav-colored");
            myNav.classList.remove("nav-transparent");
        } else {
            myNav.classList.add("nav-transparent");
            myNav.classList.remove("nav-colored");
        }
    };
});