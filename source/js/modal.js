"use strict";

var form = document.querySelector("form");
var surname = form.querySelector("[name=surname]");
var name = form.querySelector("[name=name]");
var mail = form.querySelector("[name=mail]");
var error = document.querySelector(".modal--error");
var request = document.querySelector(".modal--request");
var errorclose = document.querySelector(".button--error");
var requestclose = document.querySelector(".button--request");

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
