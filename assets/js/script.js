'use strict';





/**
 * PRELOADER
 */

const preloader = document.querySelector("[data-preloader]");
const circle = document.querySelector("[data-circle]");

window.addEventListener("load", function () {
  circle.style.animation = "none";
  preloader.classList.add("loaded");
});


