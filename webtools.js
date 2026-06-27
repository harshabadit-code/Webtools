const { createElement } = require("react");

let items = document.querySelectorAll(".par12");

items.forEach(function (item) {
  item.onclick = function () {
    items.forEach(function (other) {
      other.classList.remove("active");
    });

    item.classList.add("active");
  };
});

// for the butttons... ->


popup_trigers = document.getElementsByClassName("open-popup");

popup = document.getElementsByClassName("popup");
popup_trigers.onclick = hide()

hide(){
  popup.style.display = "hidden"

}