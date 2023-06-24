(function () {
  var carousel = document.querySelector(".carousel");
  var carouselInner = carousel.querySelector(".carousel-inner");
  var carouselItems = carousel.querySelectorAll(".carousel-item");
  var currentItem = 0;
  var totalItems = carouselItems.length;
  var slideWidth = carousel.clientWidth;

  carouselInner.style.transform = "translateX(0)";

  function scrollToPreviousSlide() {
    if (currentItem === 0) {
      currentItem = totalItems - 1;
    } else {
      currentItem--;
    }
    carouselInner.style.transform = `translateX(-${
      slideWidth * currentItem
    }px)`;
  }

  function scrollToNextSlide() {
    if (currentItem === totalItems - 1) {
      currentItem = 0;
    } else {
      currentItem++;
    }
    carouselInner.style.transform = `translateX(-${
      slideWidth * currentItem
    }px)`;
  }

  var previousButton = document.getElementById("scroll-left");
  previousButton.addEventListener("click", scrollToPreviousSlide);

  var nextButton = document.getElementById("scroll-right");
  nextButton.addEventListener("click", scrollToNextSlide);
})();

(function () {
  var slideshow = document.querySelector(".slideshow");
  var images = [
    "./images/electronics-sale-slideshow.jpg",
    "./images/summer-sale-slideshow.jpg",
    "./images/furniture-sale-slideshow.jpg",
  ];
  var currentImage = 0;

  function changeBackground() {
    slideshow.style.backgroundImage = `url(${images[currentImage]})`;
    currentImage = (currentImage + 1) % images.length;
  }

  setInterval(changeBackground, 4000);
})();
