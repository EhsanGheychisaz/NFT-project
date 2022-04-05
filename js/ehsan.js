"use strict";

document
  .querySelector(".main__bodylist-featur")
  .addEventListener("click", function () {
    console.log(document.querySelector(".main__bodylist-featur").textContent);
    document.querySelector(".main__bodylist-featur").style.visibility =
      "hidden";
    document.querySelector(".main--bodylist").style.left = "0.5rem";
  });
