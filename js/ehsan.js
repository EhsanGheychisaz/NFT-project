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
