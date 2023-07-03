let slideIndex = 0;
const slideWidth = `100`;
const slides = document.getElementsByClassName("slide");
const carouselContent = document.querySelector(".carousel-content");
const scrollLeftBtn = document.querySelector(".prev-btn");
const scrollRightBtn = document.querySelector(".next-btn");

scrollLeftBtn.addEventListener("click", () => {
  slideIndex -= slideWidth;

  if (slideIndex < 0) slideIndex = 0;

  carouselContent.style.transform = `translateX(-${slideIndex}%)`;
});

scrollRightBtn.addEventListener("click", () => {
  slideIndex += slideWidth;

  if (slideIndex > (slides.length - 1) * slideWidth) {
    slideIndex = (slides.length - 1) * slideWidth;
  }

  carouselContent.style.transform = `translateX(-${slideIndex}%)`;
});

(function () {
  let slideshow = document.querySelector(".slideshow");
  let images = [
    "./images/electronics-sale-slideshow.jpg",
    "./images/summer-sale-slideshow.jpg",
    "./images/furniture-sale-slideshow.jpg",
  ];
  let currentImage = 0;

  function changeBackground() {
    slideshow.style.backgroundImage = `url(${images[currentImage]})`;
    currentImage = (currentImage + 1) % images.length;
  }

  setInterval(changeBackground, 4000);
})();

const menuButton = document.querySelector(".menu");
const menu = document.querySelector(".categories-and-deals-list-phone");
const categoriesButton = document.querySelector(".categories-phone-link");
const showSearchButton = document.querySelector(".search-button-phone");
const searchDisplay = document.querySelector(".search-display-phone");

const menuDisplay = () => {
  searchDisplay.style.display = "none";

  if (menu.style.display === "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }

  menu.innerHTML = `
  <li class="phone-menu-item">
 <div class="categories-menu-phone">
   <ul class="categories-ul-phone">
     <li>
       <div class="categories-phone-link" onclick='showCategories()'>Categories</div>
     </li>
   </ul>
 </div>
</li>
<li class="phone-menu-item middle-item"><a href="#">Deals</a></li>
<li class="phone-menu-item"><a href="#">Contact</a></li>
</ul>`;
};

const collapseMenu = () => {
  if (menu.style.display === "block") {
    menu.style.display = "none";
  }

  if (searchDisplay.style.display === "block") {
    searchDisplay.style.display = "none";
  }
  menu.innerHTML = `
   <li class="phone-menu-item">
  <div class="categories-menu-phone">
    <ul class="categories-ul-phone">
      <li>
        <div class="categories-phone-link" onclick='showCategories()'>Categories</div>
      </li>
    </ul>
  </div>
</li>
<li class="phone-menu-item middle-item"><a href="#">Deals</a></li>
<li class="phone-menu-item"><a href="#">Contact</a></li>
</ul>`;
};

const showCategories = () => {
  menu.innerHTML = `  
  <svg class="back-arrow" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M872 474H286.9l350.2-304c5.6-4.9 2.2-14-5.2-14h-88.5c-3.9 0-7.6 1.4-10.5 3.9L155 487.8a31.96 31.96 0 0 0 0 48.3L535.1 866c1.5 1.3 3.3 2 5.2 2h91.5c7.4 0 10.8-9.2 5.2-14L286.9 550H872c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z" ></path></svg>
  <li class="dropdown-li-phone border-dropdown"><a href="#">Clothes</a></li>
  <li class="dropdown-li-phone border-dropdown"><a href="#">Shoes</a></li>
  <li class="dropdown-li-phone border-dropdown"><a href="./jewellery/index.html">Jewellery</a></li>
  <li class="dropdown-li-phone border-dropdown"><a href="#">Electronics</a></li>
  <li class="dropdown-li-phone border-dropdown"><a href="#">Music</a></li>
  <li class="dropdown-li-phone"><a href="#">Furniture</a></li>`;

  const backArrow = document.querySelector(".back-arrow");

  backArrow.addEventListener("click", () => {
    menu.innerHTML = `
    <li class="phone-menu-item">
   <div class="categories-menu-phone">
     <ul class="categories-ul-phone">
       <li>
         <div class="categories-phone-link" onclick='showCategories()'>Categories</div>
       </li>
     </ul>
   </div>
  </li>
  <li class="phone-menu-item middle-item"><a href="#">Deals</a></li>
  <li class="phone-menu-item"><a href="#">Contact</a></li>
  </ul>`;
  });
};

const showSearch = () => {
  menu.style.display = "none";

  if (searchDisplay.style.display === "block") {
    searchDisplay.style.display = "none";
  } else {
    searchDisplay.style.display = "block";
  }
};

const showMoreBtn = document.querySelector(".show-more-btn");
const todaysDealsDiv = document.querySelector(".todays-deals-list");

showMoreBtn.addEventListener("click", () => {
  showMoreBtn.style.display = "none";

  todaysDealsDiv.innerHTML += ` <div class="todays-list-item item1">
  <img src="images/sedc-logo.webp" alt="">
  <div class="prices-and-btn">
    <div class="deal-text">
      <div class="deal">20% off</div>
      <span class="new-price">24.00$</span>
      <span class="old-price"><s>30.00$</s></span>
    </div>
    <div class="buy-btn">
      <button>Buy Now</button>
    </div>
  </div>
</div>

<div class="todays-list-item item2">
  <img src="images/sedc-logo.webp" alt="">
  <div class="prices-and-btn">
    <div class="deal-text">
      <div class="deal">20% off</div>
      <span class="new-price">24.00$</span>
      <span class="old-price"><s>30.00$</s></span>
    </div>
    <div class="buy-btn">
      <button>Buy Now</button>
    </div>
  </div>
</div>

<div class="todays-list-item item3">
  <img src="images/sedc-logo.webp" alt="">
  <div class="prices-and-btn">
    <div class="deal-text">
      <div class="deal">20% off</div>
      <span class="new-price">24.00$</span>
      <span class="old-price"><s>30.00$</s></span>
    </div>
    <div class="buy-btn">
      <button>Buy Now</button>
    </div>
  </div>
</div>

<div class="todays-list-item item4">
  <img src="images/sedc-logo.webp" alt="">
  <div class="prices-and-btn">
    <div class="deal-text">
      <div class="deal">20% off</div>
      <span class="new-price">24.00$</span>
      <span class="old-price"><s>30.00$</s></span>
    </div>
    <div class="buy-btn">
      <button>Buy Now</button>
    </div>
  </div>
</div>

<div class="todays-list-item item5">
  <img src="images/sedc-logo.webp" alt="">
  <div class="prices-and-btn">
    <div class="deal-text">
      <div class="deal">20% off</div>
      <span class="new-price">24.00$</span>
      <span class="old-price"><s>30.00$</s></span>
    </div>
    <div class="buy-btn">
      <button>Buy Now</button>
    </div>
  </div>
</div>

<div class="todays-list-item item6">
  <img src="images/sedc-logo.webp" alt="">
  <div class="prices-and-btn">
    <div class="deal-text">
      <div class="deal">20% off</div>
      <span class="new-price">24.00$</span>
      <span class="old-price"><s>30.00$</s></span>
    </div>
    <div class="buy-btn">
      <button>Buy Now</button>
    </div>
  </div>
</div>

<div class="todays-list-item item7">
  <img src="images/sedc-logo.webp" alt="">
  <div class="prices-and-btn">
    <div class="deal-text">
      <div class="deal">20% off</div>
      <span class="new-price">24.00$</span>
      <span class="old-price"><s>30.00$</s></span>
    </div>
    <div class="buy-btn">
      <button>Buy Now</button>
    </div>
  </div>
</div>

<div class="todays-list-item item8">
  <img src="images/sedc-logo.webp" alt="">
  <div class="prices-and-btn">
    <div class="deal-text">
      <div class="deal">20% off</div>
      <span class="new-price">24.00$</span>
      <span class="old-price"><s>30.00$</s></span>
    </div>
    <div class="buy-btn">
      <button>Buy Now</button>
    </div>
  </div>
</div>

<div class="todays-list-item item9">
  <img src="images/sedc-logo.webp" alt="">
  <div class="prices-and-btn">
    <div class="deal-text">
      <div class="deal">20% off</div>
      <span class="new-price">24.00$</span>
      <span class="old-price"><s>30.00$</s></span>
    </div>
    <div class="buy-btn">
      <button>Buy Now</button>
    </div>
  </div>
</div>

<div class="todays-list-item item10">
  <img src="images/sedc-logo.webp" alt="">
  <div class="prices-and-btn">
    <div class="deal-text">
      <div class="deal">20% off</div>
      <span class="new-price">24.00$</span>
      <span class="old-price"><s>30.00$</s></span>
    </div>
    <div class="buy-btn">
      <button>Buy Now</button>
    </div>
  </div>
</div>

<div class="todays-list-item item10">
  <img src="images/sedc-logo.webp" alt="">
  <div class="prices-and-btn">
    <div class="deal-text">
      <div class="deal">20% off</div>
      <span class="new-price">24.00$</span>
      <span class="old-price"><s>30.00$</s></span>
    </div>
    <div class="buy-btn">
      <button>Buy Now</button>
    </div>
  </div>
</div>

<div class="todays-list-item item10">
  <img src="images/sedc-logo.webp" alt="">
  <div class="prices-and-btn">
    <div class="deal-text">
      <div class="deal">20% off</div>
      <span class="new-price">24.00$</span>
      <span class="old-price"><s>30.00$</s></span>
    </div>
    <div class="buy-btn">
      <button>Buy Now</button>
    </div>
  </div>
</div>`;
});
