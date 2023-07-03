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
<li class="phone-menu-item middle-item"><a href="#">Contact</a></li>
<li class="phone-menu-item"><a href="../index.html">SEDC Home</a></li>
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
<li class="phone-menu-item middle-item"><a href="#">Contact</a></li>
<li class="phone-menu-item"><a href="../index.html">SEDC Home</a></li>
</ul>`;
};

const showCategories = () => {
  menu.innerHTML = `
  <svg class="back-arrow" stroke="currentColor" fill="currentColor" stroke-width="0" 
  viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
  <path d="M872 474H286.9l350.2-304c5.6-4.9 2.2-14-5.2-14h-88.5c-3.9 0-7.6 1.4-10.5 3.9L155 
  487.8a31.96 31.96 0 0 0 0 48.3L535.1 866c1.5 1.3 3.3 2 5.2 2h91.5c7.4 0 10.8-9.2 5.2-14L286.9 
  550H872c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z" ></path></svg>
  <li class="dropdown-li-phone border-dropdown"><a href="../clothes/index.html">Clothes</a></li>
  <li class="dropdown-li-phone border-dropdown"><a href="../shoes/index.html">Shoes</a></li>
  <li class="dropdown-li-phone border-dropdown"><a href="./index.html">Jewelery</a></li>
  <li class="dropdown-li-phone border-dropdown"><a href="../electronics/index.html">Electronics</a></li>
  <li class="dropdown-li-phone border-dropdown"><a href="../music/index.html">Music</a></li>
  <li class="dropdown-li-phone"><a href="../furniture/index.html">Furniture</a></li>`;


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
<li class="phone-menu-item middle-item"><a href="#">Contact</a></li>
<li class="phone-menu-item"><a href="../index.html">SEDC Home</a></li>
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


//MENU SECTION
const filteredArray = [];
const data = [];

const cardSection = document.querySelector(".card-section");

const displayData = (data) => {
  data
    .map((products) => {
      const productDiv = document.createElement("div");
      cardSection.appendChild(productDiv);
      productDiv.addEventListener("click", () => {
        console.log(data);
      });
      return (productDiv.innerHTML = `
 		<div class="product-card">
     <div class="product-card-header">
         <img src="${products.image}" width="900px" height="900px"></img>
       </div>
     <div class="product-card-details">
 		<p>${products.title}</h>
 				<h3>${products.price} $</h3>
        <button class="cartBtn">Add to card</button>
 		</div>
 		  </div>
 		`);
    })
    .join("");
};

const typeFilter = (filteredArray, dummyData, type) => {
  for (let product of dummyData) {
    if (product.type === type) {
      filteredArray.push(product);
    }
  }
};

const categoryFilter = (filteredArray, dummyData, type, description) => {
  for (let product of dummyData) {
    if (product.type === type && product.description === description) {
      filteredArray.push(product);
    }
  }
};

//earings sections
const earingsRose = document.querySelector(".earingsRose");
const earingsWhite = document.querySelector(".earingsWhite");
const earingsDiamond = document.querySelector(".earingsDiamond");
const allEarrings = document.querySelector(".allEarrings");

const earringsRoseBtn = (productsData) => {
  const filteredArray = [];
  categoryFilter(filteredArray, productsData, "Earrings", "Rose Gold");
  earingsRose.addEventListener("click", () => {
    cardSection.innerHTML = "";
    displayData(filteredArray);
    earingsRose.classList.toggle("clickedButton");
  });
};

const earingsWhiteBtn = (productsData) => {
  const filteredArray = [];
  categoryFilter(filteredArray, productsData, "Earrings", "White Gold");
  earingsWhite.addEventListener("click", () => {
    cardSection.innerHTML = "";
    displayData(filteredArray);
    earingsWhite.classList.toggle("clickedButton");
  });
};

const earringsDiamondBtn = (productsData) => {
  const filteredArray = [];
  categoryFilter(filteredArray, productsData, "Earrings", "Diamond");
  earingsDiamond.addEventListener("click", () => {
    cardSection.innerHTML = "";
    displayData(filteredArray);
    earingsDiamond.classList.toggle("clickedButton");
  });
};

const allEarringsBtn = (productsData) => {
  const filteredArray = [];
  typeFilter(filteredArray, productsData, "Earrings");
  allEarrings.addEventListener("click", () => {
    cardSection.innerHTML = "";
    displayData(filteredArray);
    allEarrings.classList.toggle("clickedButton");
  });
};

//rigns section
const ringsRose = document.querySelector(".ringsRose");
const ringsWhite = document.querySelector(".ringsWhite");
const ringsDiamond = document.querySelector(".ringsDiamond");
const allRings = document.querySelector(".allRings");

const ringsRoseBtn = (productsData) => {
  const filteredArray = [];
  categoryFilter(filteredArray, productsData, "Ring", "Rose Gold");
  ringsRose.addEventListener("click", () => {
    cardSection.innerHTML = "";
    displayData(filteredArray);
    ringsRose.classList.toggle("clickedButton");
  });
};

const ringsWhiteBtn = (productsData) => {
  const filteredArray = [];
  categoryFilter(filteredArray, productsData, "Ring", "White Gold");
  ringsWhite.addEventListener("click", () => {
    cardSection.innerHTML = "";
    displayData(filteredArray);
    ringsWhite.classList.toggle("clickedButton");
  });
};

const ringsDiamondBtn = (productsData) => {
  const filteredArray = [];
  categoryFilter(filteredArray, productsData, "Ring", "Diamond");
  ringsDiamond.addEventListener("click", () => {
    cardSection.innerHTML = "";
    displayData(filteredArray);
    ringsDiamond.classList.toggle("clickedButton");
  });
};

const allRingsBtn = (productsData) => {
  const filteredArray = [];
  typeFilter(filteredArray, productsData, "Ring");
  allRings.addEventListener("click", () => {
    cardSection.innerHTML = "";
    displayData(filteredArray);
    allRings.classList.add("clickedButton");
  });
};

//necklace section
const necklaceRose = document.querySelector(".necklaceRose");
const necklaceWhite = document.querySelector(".necklaceWhite");
const necklaceDiamond = document.querySelector(".necklaceDiamond");
const allNecklaces = document.querySelector(".allNecklaces");

const necklaceRoseBtn = (productsData) => {
  const filteredArray = [];
  categoryFilter(filteredArray, productsData, "Necklace", "Rose Gold");
  necklaceRose.addEventListener("click", () => {
    cardSection.innerHTML = "";
    displayData(filteredArray);
    necklace.classList.toggle("clickedButton");
  });
};

const necklaceWhiteBtn = (productsData) => {
  const filteredArray = [];
  categoryFilter(filteredArray, productsData, "Necklace", "White Gold");
  necklaceWhite.addEventListener("click", () => {
    cardSection.innerHTML = "";
    displayData(filteredArray);
    necklaceWhite.classList.toggle("clickedButton");
  });
};

const necklaceDiamondBtn = (productsData) => {
  const filteredArray = [];
  categoryFilter(filteredArray, productsData, "Necklace", "Diamond");
  necklaceDiamond.addEventListener("click", () => {
    cardSection.innerHTML = "";
    displayData(filteredArray);
    necklaceDiamond.classList.toggle("clickedButton");
  });
};

const allNecklacesBtn = (productsData) => {
  const filteredArray = [];
  typeFilter(filteredArray, productsData, "Necklace");
  allNecklaces.addEventListener("click", () => {
    cardSection.innerHTML = "";
    displayData(filteredArray);
    allNecklaces.classList.add("clickedButton");
  });
};

//See All Products Btn
const allProducts = document.querySelector(".allProducts");

const printAllProducts = (alldata, dummyData) => {
  for (let product of dummyData) 
    {
      alldata.push(product);
    }
  
};

const allProductsButton = (productsData) => {
  let alldata = [];
  printAllProducts(alldata, productsData);
  allProducts.addEventListener("click", () => {
    cardSection.innerHTML = "";
    displayData(alldata);
    allProducts.classList.toggle("clickedButton");
  });
};

// Fetching data from local JSON file
const fetchLocalData = async () => {
  try {
    const res = await fetch("products.json");
    const data = await res.json();
  
    displayData(data);

    allEarringsBtn(data);
    earringsRoseBtn(data);
    earingsWhiteBtn(data);
    earringsDiamondBtn(data);

    ringsRoseBtn(data);
    ringsWhiteBtn(data);
    ringsDiamondBtn(data);
    allRingsBtn(data);

    necklaceRoseBtn(data);
    necklaceWhiteBtn(data);
    necklaceDiamondBtn(data);
    allNecklacesBtn(data);

    allProductsButton(data);

    return data;
  } catch (error) {
    throw new Error(error);
  }
};
fetchLocalData();