const burgerNav = document.querySelector(".burger");
const navLink = document.querySelector(".nav-link");
const overLay = document.querySelector(".overlay");
burgerNav.addEventListener("click", () => {
    navLink.classList.toggle("active");
    burgerNav.classList.toggle("active");
    overLay.classList.toggle("active");
});

//Animate on scroll
AOS.init({
    duration: 1000,
    delay: 400,
    once: true,
});