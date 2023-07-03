const mainBody = document.querySelector(".main");
const womanCategory = document.querySelector(".woman");
const cardSection = document.querySelector(".card-section");
const kidsCategory = document.querySelector(".kids");
const mensCategory = document.querySelector(".mens");
const allProducts = document.querySelector(".all-products");

const filteredArray = [];
const data = [];

const ProductInfo = (data) => {
  mainBody.innerHTML = `<div><h3>${data.title}</h3></div>
<div><p>${data.price}</p></div>`;
};

const allProductsButton = (productsData) => {
  allProducts.addEventListener("click", () => {
    cardSection.innerHTML = "";
    displayData(productsData);
  });
};

const displayData = (data) => {
  data
    .map((products) => {
      if (products.subCategory == "shoes") {
        const productDiv = document.createElement("div");
        productDiv.classList.add("main-product-card-div");
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

const womanCategoryButton = (productsData) => {
  const filteredArray = [];
  categoryFilter(filteredArray, productsData, "woman");
  womanCategory.addEventListener("click", () => {
    cardSection.innerHTML = "";
    displayData(filteredArray);
    // womanCategory.classList.add("clickedButton");
  });
};

const kidsCategoryButton = (productsData) => {
  const filteredArray = [];
  categoryFilter(filteredArray, productsData, "kids");
  kidsCategory.addEventListener("click", () => {
    cardSection.innerHTML = "";
    displayData(filteredArray);
    // kidsCategory.classList.add("clickedButton");
  });
};

const mensCategoryButton = (productsData) => {
  const filteredArray = [];
  categoryFilter(filteredArray, productsData, "men's");
  mensCategory.addEventListener("click", () => {
    cardSection.innerHTML = "";
    displayData(filteredArray);
    // mensCategory.classList.add("clickedButton");
  });
};

// Fetching data from local JSON file
const fetchLocalData = async () => {
  try {
    const res = await fetch("../music/products.json");
    const data = await res.json();
    mensCategoryButton(data);
    kidsCategoryButton(data);
    womanCategoryButton(data);
    displayData(data);
    allProductsButton(data);
    return data;
  } catch (error) {
    throw new Error(error);
  }
};
fetchLocalData();

categoryFilter(filteredArray, data);
