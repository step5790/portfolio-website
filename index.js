"use strict";

window.addEventListener("DOMContentLoaded", init);

function init() {
  buttonEvents();
  animateWave();
}

function buttonEvents() {
  document
    .querySelectorAll("article")
    .forEach((element) => element.addEventListener("mouseover", hover));

  document
    .querySelectorAll("article")
    .forEach((element) => element.addEventListener("mouseout", unhover));

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

function animateWave() {
  setTimeout(() => {
    document.getElementById("layerTwo").classList.add("wave");

    sounds();
    animateWave();
  }, 500);
}

function hover(element) {
  document.querySelector(`#${element.target.id}`).classList.add("hover");
  document.querySelector(`#${element.target.id}`).classList.add("blur");
}

function unhover(element) {
  document.querySelector(`#${element.target.id}`).classList.remove("hover");
  document.querySelector(`#${element.target.id}`).classList.remove("blur");
}

function sounds() {
  const waves = document.getElementById("waves");

  if (window.matchMedia("(max-device-width: 414px)").matches) {
    waves.pause();
  } else {
    waves.play();
    waves.volume = 0.1;
    waves.loop = true;
  }
}
