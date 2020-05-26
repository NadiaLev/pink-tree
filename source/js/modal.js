"use strict";
let form = document.querySelector("form");
let surname = form.querySelector("[name=surname]");
let name = form.querySelector("[name=name]");
let mail = form.querySelector("[name=mail]");
let error = document.querySelector(".modal--error");
let request = document.querySelector(".modal--request");
let errorclose = document.querySelector(".button--error");
let requestclose = document.querySelector(".button--request");

form.addEventListener("submit", function (evt) {
  if (!surname.value || !name.value || !mail.value) {
    evt.preventDefault();
    error.classList.add("modal--show");
  } else {
    request.classList.add("modal--show");
  }
});

errorclose.addEventListener("click", function (evt) {
  evt.preventDefault();
  error.classList.remove("modal--show");
  if (!surname.value) {
    surname.focus();
  } else if (!name.value) {
    name.focus();
  } else {
    mail.focus();
  }
});

requestclose.addEventListener("click", function (evt) {
  evt.preventDefault();
  request.classList.remove("modal--show");
});
