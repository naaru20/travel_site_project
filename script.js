const nav2 = document.querySelector(".nav-2");
const mobmenu = document.querySelector(".mob_menu");
const openmenu = document.querySelector(".menu-btn")
const closemenu = document.querySelector(".close-btn")

const navOpen = (() => {
    nav2.classList.add("show");
    mobmenu.classList.add("active")
    document.body.style = "visibility : visible; height : 100vh; width : 100%; overflow : hidden"
});

const navClose = (() => {
    nav2.classList.remove("show");
    mobmenu.classList.remove("active")
    document.body.style = "visibility : visible; height :  initial; width : 100%; overflow-x : hidden"
});



openmenu.addEventListener("click", navOpen);
closemenu.addEventListener("click", navClose);