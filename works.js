"use strict";

window.addEventListener("DOMContentLoaded", init);

function init() {
  buttonEvents();
}

function buttonEvents() {
  document
    .querySelector(".hamburger-menu")
    .addEventListener("click", showHamburgerMenu);

  document
    .querySelector(".button-close")
    .addEventListener("click", hideHamburgerMenu);
}

function showHamburgerMenu() {
  document.querySelector(".option-menu").classList.add("slide");
  document.querySelector(".option-menu").classList.toggle("active");
}

function hideHamburgerMenu() {
  if (document.querySelector(".option-menu").classList.contains("slide")) {
    document.querySelector(".option-menu").classList.remove("slide");
    document.querySelector(".option-menu").classList.toggle("active");
  } else {
    document.querySelector(".option-menu").classList.add("slide");
  }
}
