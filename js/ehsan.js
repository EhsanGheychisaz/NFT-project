"use strict";
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
}, 6000);
var whiteMode = document.querySelector("#nav-icon3");
whiteMode.addEventListener("click", function () {
  document.body.style.background = "rgb(183,183,255)";
  document.body.style.background =
    "linear-gradient(90deg, rgba(183,183,255,1) 67%, rgba(240,250,255,1) 100%)";
  document.querySelector("#nav--bar").style.background = "#0f9ce3";
});
window.onscroll = function () {
  scrollfunc();
};
function scrollfunc() {
  if (window.pageYOffset > 0) {
    document.querySelector("#nav--bar").style.width = "92%";
    document.querySelector("#nav--bar").style.margin = "3%";
    document.querySelector("#nav--bar").style.opacity = "95%";
  } else {
    document.querySelector("#nav--bar").style.margin = "0%";
    document.querySelector("#nav--bar").style.width = "100%";
    document.querySelector("#nav--bar").style.opacity = "100%";
  }
}

for (let i = 1; i < 6; i++) {
  var name = "#nav_icon" + i;
  var list = document.querySelector(`${name}`);
  console.log(list);
  list.addEventListener("click", function (list) {
    var name1 = "#nav--textoverflow" + i;
    document.querySelector(`${name1}`).style.height = "7rem";
    document.querySelector(`${name1}`).style.visibility = "visible";
    console.log(document.querySelectorAll("#nave-overflow-text"));
    var name2 = document.querySelectorAll("#nave-overflow-text");
    console.log(name2[i]);
    setInterval(function () {
      document.querySelector(`${name1}`).style.visibility = "hidden";
      document.querySelector(`${name1}`).style.height = "0rem";
    }, 5000);
  });
}

// }
var overlay = document.querySelector(".center");
/*
window.addEventListener("load", function () {
  overlay.style.display = "none";
});*/
const loading = setInterval(() => {
  overlay.style.display = "none";
}, 1000);
