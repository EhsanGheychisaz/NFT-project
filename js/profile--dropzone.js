window.onscroll = function () {
  scrollfunc();
};
function scrollfunc() {
  if (window.pageYOffset > 0) {
    document.querySelector("#nav--bar").style.width = "90%";
    document.querySelector("#nav--bar").style.margin = "3%";
    document.querySelector("#nav--bar").style.opacity = "85%";
    document.querySelector(".nav--icon2-white").style.right = "13.5rem";
    document.querySelector("#nav--bar").style.background = "#14141f";
  } else {
    document.querySelector("#nav--bar").style.margin = "0%";
    document.querySelector("#nav--bar").style.width = "98%";
    document.querySelector("#nav--bar").style.opacity = "100%";
    document.querySelector(".nav--icon2-white").style.right = "16.5rem";
    document.querySelector("#nav--bar").style.background =
      "url('/images/bg.jpg')";
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
Dropzone.autoDiscover = false;
Dropzone.options.myGreatDropzone1 = {
  // camelized version of the `id`
  paramName: "file", // The name that will be used to transfer the file
  maxFilesize: 2, // MB
  accept: function (file, done) {
    if (file.name == "justinbieber.jpg") {
      done();
    } else {
      done();
    }
  },
};
