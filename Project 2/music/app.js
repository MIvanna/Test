const mainBody = document.querySelector(".main");
const guitars = document.querySelector(".guitars");
const cardSection = document.querySelector(".card-section");
const bassGuitars = document.querySelector(".bass-guitars");
const keys = document.querySelector(".keys");
const drums = document.querySelector(".drums");
const microphones = document.querySelector(".microphones");
const allProducts = document.querySelector(".all-products");
const quantityElement = document.querySelector(".quantity-number");
const minusButton = document.querySelector(".minus");
const plusButton = document.querySelector(".plus");
const totalPrice = document.querySelector(".total-price");
const produtCardDetails = document.querySelector(".product-card-details");

const filteredArray = [];
const data = [];

const displayData = (data) => {
  data
    .map((products) => {
      if (products.subCategory == "music-instruments") {
        const productDiv = document.createElement("div");
        cardSection.appendChild(productDiv);
        productDiv.addEventListener("click", () => {
          ProductInfo(products);
        });
        return (productDiv.innerHTML = `
 		<div class="product-card">
     <div class="product-card-header">
         <img src="${products.image}"></img>
       </div>
     <div class="product-card-details">
 		<p>${products.title}</h>
 				<h3>${products.price} $</h3>
 		</div>
 		  </div>
 		`);
      }
    })
    .join("");
};

const categoryFilter = (filteredArray, dummyData, category) => {
  for (let product of dummyData) {
    if (product.category == category) {
      filteredArray.push(product);
    }
  }
};

const allProductsButton = (productsData) => {
  allProducts.addEventListener("click", () => {
    cardSection.innerHTML = "";
    displayData(productsData);
  });
};

const guitarButton = (productsData) => {
  const filteredArray = [];
  categoryFilter(filteredArray, productsData, "guitar");
  guitars.addEventListener("click", () => {
    cardSection.innerHTML = "";
    displayData(filteredArray);
    // guitars.classList.add("clickedButton");
  });
};

const bassGuitarButton = (productsData) => {
  const filteredArray = [];
  categoryFilter(filteredArray, productsData, "bass-guitar");
  bassGuitars.addEventListener("click", () => {
    cardSection.innerHTML = "";
    displayData(filteredArray);
    // bassGuitars.classList.add("clickedButton");
  });
};

const keysButton = (productsData) => {
  const filteredArray = [];
  categoryFilter(filteredArray, productsData, "keys");
  keys.addEventListener("click", () => {
    cardSection.innerHTML = "";
    displayData(filteredArray);
    // keys.classList.add("clickedButton");
  });
};

const drumsButton = (productsData) => {
  const filteredArray = [];
  categoryFilter(filteredArray, productsData, "drums");
  drums.addEventListener("click", () => {
    cardSection.innerHTML = "";
    displayData(filteredArray);
    // drums.classList.add("clickedButton");
  });
};

const microphonesButton = (productsData) => {
  const filteredArray = [];
  categoryFilter(filteredArray, productsData, "microphones");
  microphones.addEventListener("click", () => {
    cardSection.innerHTML = "";
    displayData(filteredArray);
    // microphones.classList.add("clickedButton");
  });
};

// Fetching data from local JSON file
const fetchLocalData = async () => {
  try {
    const res = await fetch("/music/products.json");
    const data = await res.json();
    microphonesButton(data);
    drumsButton(data);
    keysButton(data);
    bassGuitarButton(data);
    guitarButton(data);
    displayData(data);
    allProductsButton(data);
    return data;
  } catch (error) {
    throw new Error(error);
  }
};
fetchLocalData();

categoryFilter(filteredArray, data);

const ProductInfo = (product) => {
  mainBody.innerHTML = ` <div class="container">
      <div class="product-div">
        <div class="product-image">
        <img src="${product.image}" alt="">
        </div>
        <div class="product-details">
          <h1 class="product-title">${product.title}</h1>
          <p class="product-description">${product.description}</p>
          <div class="product-quantity">
            <p>Quantity</p>
            <div class="product-quantity-buttons">
              <button type="button" class="minus" disabled>-</button>
              <input class="quantity-number" value="1" readonly></input>
              <button type="button" class="plus" onClick="${PlusButton(
                product.price
              )}">+</button>
            </div>
            <p class="product-price">${
              product.price
            }<b><span class="total-price"></span>$</b></p>
          </div>
          <div class="atc-buy-buttons">
            <button type="button" class="atc" >Add to cart</button>
            <button type="button" class="buy">Buy now</button>
          </div>
        </div>
      </div>
      <div class="product-specifications">
        <h2>Product specifications</h2>
        <br />
        <ul class="specifications-list">

        </ul>
      </div>
    </div>`;
};
const PlusButton = (product) => {
  plusButton.addEventListener("click", () => {
    quantityElement.value++;
    totalPrice.innerHTML = product.price * quantityElement.value;
    minusButton.disabled = false;
  });
};

const MinusButton = (product) => {
  minusButton.addEventListener("click", () => {
    if (quantityElement.value < 2) {
      minusButton.disabled = true;
    } else {
      quantityElement.value--;
    }
    totalPrice.innerHTML = product.price * quantityElement.value;
  });
};
