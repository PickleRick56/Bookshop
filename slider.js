document.addEventListener("DOMContentLoaded", () => {
  setInterval(() => forward(), 5000);
});

let position = 0;
let right = document.querySelector(".right");
let left = document.querySelector(".left");
let slider = document.querySelector(".slider");
let dots = document.querySelector(".dots");
let allDots = dots.children;
let linksDirectSelection = document.querySelector(".linksDirectSelection");

console.log(allDots.length);

const imageCollection = [
  "img/banner0.png",
  "img/banner1.png",
  "img/banner2.png",
];

slider.style.backgroundImage = "url('img/banner0.png')";

function forward() {
  position += 1;

  if (position > imageCollection.length - 1) {
    position = 0;
    slider.style.backgroundImage = `url(${imageCollection[position]})`;
  } else {
    slider.style.backgroundImage = `url(${imageCollection[position]})`;
  }
  for (let key of allDots) {
    key.style.backgroundColor = "#EFEEF6";
  }
  document.querySelector(`.dot${position}`).style.backgroundColor = "#9E98DC";
}

function backward() {
  position -= 1;
  if (position < 0) {
    position = imageCollection.length - 1;
    slider.style.backgroundImage = `url(${imageCollection[position]})`;
  } else {
    slider.style.backgroundImage = `url(${imageCollection[position]})`;
  }
}

function directSelection(evt) {
  let index = evt.target.className;
  index = index.slice(-1);
  position = index;
  for (let key of allDots) {
    key.style.backgroundColor = "#EFEEF6";
  }
  slider.style.backgroundImage = `url(${imageCollection[position]})`;
  document.querySelector(`.dot${position}`).style.backgroundColor = "#9E98DC";
}

dots.addEventListener("click", directSelection, false);
