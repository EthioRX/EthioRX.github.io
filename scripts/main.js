document.addEventListener('scroll', function(e){ 
    const header = document.querySelector("header");
    if (window.scrollY < 1) {
        header.style.paddingTop = "50px";
    }
    else {
        header.style.paddingTop = "30px";
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const main = document.querySelector("main");
    const hamburger = document.querySelector(".hamburger");
    const navList = document.querySelector(".nav-list-menu");

    hamburger.addEventListener("click", function () {
        navList.style.display = navList.style.display === "flex" ? "none" : "flex";
    });

    main.addEventListener("click", function () {
        navList.style.display = navList.style.display === "flex" ? "none" : "none";
    });
});