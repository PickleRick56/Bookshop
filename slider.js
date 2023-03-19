document.addEventListener("DOMContentLoaded", () => {
  sliderStarter();
});

function sliderStarter() {
  setInterval(() => forward(), 5000);
}

let position = 0;

let slider = document.querySelector(".slider");
let dots = document.querySelector(".dots");
let allDots = dots.children;
let cards = document.querySelector(".cards");

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

// BOOKS
(function () {
  fetch(
    'https://www.googleapis.com/books/v1/volumes?q="subject:Humor"&key=AIzaSyARaQbqJaGTu2k41QqIQHeM5DIhY69brqs&printType=books&startIndex=0&maxResults=6&langRestrict=en'
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);

      for (let i = 0; i < data.items.length; i++) {
        cards.innerHTML += `   <div class="card">
          <img class="card_cover" src="${
            data.items[i].volumeInfo.imageLinks.thumbnail
          }" alt="">
          <div class="description">
  
              <div class="author">${data.items[i].volumeInfo.authors}</div>
              <div class="title">${data.items[i].volumeInfo.title}</div>

              ${
                data.items[i].volumeInfo.ratingsCount
                  ? `<div class="ratingsCount">${data.items[i].volumeInfo.ratingsCount} &#9734;</div>`
                  : ` <div class="ratingsCount"> </div>`
              }

              <div class="review">${
                data.items[i].volumeInfo.description.length > 155
                  ? data.items[i].volumeInfo.description.slice(0, 155) + "..."
                  : data.items[i].volumeInfo.description
              }</div>

              ${
                data.items[i].saleInfo.retailPrice
                  ? `<div class="price">${data.items[i].saleInfo.retailPrice.amount}${data.items[i].saleInfo.retailPrice.currencyCode}</div>`
                  : `<div class="price">
                 ${data.items[i].saleInfo.saleability.replace(/_/g, " ")}
               </div>`
              }
  
          </div>
  
      </div>`;
      }
    })

    .catch(() => {
      console.log("error");
    });
})();
