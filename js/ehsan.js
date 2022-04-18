"use strict";
console.log("fuck");
console.log(document.querySelector(".swper-overflow--icon").textContent);
document
  .querySelector(".main__bodylist-featur")
  .addEventListener("click", function () {
    console.log(document.querySelector(".main__bodylist-featur").textContent);
    document.querySelector(".main__bodylist-featur").style.visibility =
      "hidden";
    document.querySelector(".main--bodylist").style.left = "0.5rem";
  });
window.onclick = setInterval(function () {
  document.querySelector(".main__bodylist-featur").style.visibility = "visible";
  document.querySelector(".main--bodylist").style.left = "-3.5rem";
}, 3000);
var whiteMode = document.querySelector("#nav-icon3");
whiteMode.addEventListener("click", function () {
  document.body.style.background = "rgb(183,183,255)";
  document.body.style.background =
    "linear-gradient(90deg, rgba(183,183,255,1) 67%, rgba(240,250,255,1) 100%)";
  document.querySelector("#nav--bar").style.background = "#0f9ce3";
});
