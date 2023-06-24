const mainBody = document.querySelector(".options");
const earrings = document.querySelector(".earrings");
const cardSection = document.querySelector(".card-section");
const ring = document.querySelector(".ring");
const necklace = document.querySelector(".necklace");

const allProducts = document.querySelector(".allProducts");

const filteredArray = [];
const data = [];

const ProductInfo = (data) => {
  mainBody.innerHTML = `<div><h3>${data.title}</h3></div>
<div><p>${data.price}</p></div>`;
};


const displayData = (data) => {
  data
    .map((products) => {
      const productDiv = document.createElement("div");
      cardSection.appendChild(productDiv);
      productDiv.addEventListener("click", () => {
        console.log(data);
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

const earringsButton = (productsData) => {
  const filteredArray = [];
  typeFilter(filteredArray, productsData, "Earrings");
  earrings.addEventListener("click", () => {
    cardSection.innerHTML = "";
    displayData(filteredArray);
    earrings.classList.toggle("clickedButton");
  });
};

const ringButton = (productsData) => {
  const filteredArray = [];
  typeFilter(filteredArray, productsData, "Ring");
  ring.addEventListener("click", () => {
    cardSection.innerHTML = "";
    displayData(filteredArray);
    ring.classList.add("clickedButton");
  });
};

const necklaceButton = (productsData) => {
  const filteredArray = [];
  typeFilter(filteredArray, productsData, "Necklace");
  necklace.addEventListener("click", () => {
    cardSection.innerHTML = "";
    displayData(filteredArray);
    necklace.classList.add("clickedButton");
  });
};

// Fetching data from local JSON file
const fetchLocalData = async () => {
  try {
    const res = await fetch("/Jewelery Category/products.json");
    const data = await res.json();
    
    necklaceButton(data);
    ringButton(data);
    earringsButton(data);
    displayData(data);
    allProductsButton(data);

    return data;
  } catch (error) {
    throw new Error(error);
  }
};
fetchLocalData();

typeFilter(filteredArray, data);

//let alldata = [];
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


