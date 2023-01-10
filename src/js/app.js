import * as flsFunction from "./modules/function.js";

flsFunction.isWebp();

const burgerBtn = document.querySelector(".burgerMenu");
const navbar = document.querySelector("nav");
const close = document.querySelector(".navbar_close");
const navbarItem = document.querySelectorAll(".navbar_item");
const subMenu = document.querySelectorAll(".dropdown");
const body = document.body;

burgerBtn.addEventListener("click", openMenu);

function openMenu() {
  body.classList.toggle("noscroll");
  navbar.classList.add("active");
}
close.addEventListener("click", closeMenu);

function closeMenu() {
  body.classList.toggle("noscroll");
  navbar.classList.remove("active");
}

let prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  let currentScrollPos = window.pageYOffset;

  if (currentScrollPos >= 200 && currentScrollPos > prevScrollpos) {
    document.querySelector("header").style.top = "-200px";
  } else {
    document.querySelector("header").style.top = "0";
  }
  prevScrollpos = currentScrollPos;
};

navbarItem.forEach((item, i) => {
  item.addEventListener("click", () => {
    subMenu[i]?.classList.toggle("heigth");
  });
});
