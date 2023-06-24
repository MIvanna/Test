const mainBody = document.querySelector(".options");
const cardSection = document.querySelector(".card-section");
const jacket = document.querySelector(".jacket");
const shirt = document.querySelector(".shirt");
const dress = document.querySelector(".dress");
const jeans = document.querySelector(".jeans");

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
         <button class="cartBtn">Add to card</button></div>
 		  </div>
 		`);
    })
    .join("");
};

const categoryFilter = (filteredArray, dummyData, category) => {
  for (let product of dummyData) {
    if (product.category === category) {
      filteredArray.push(product);
    }
  }
};

const jacketButton = (productsData) => {
  const filteredArray = [];
  categoryFilter(filteredArray, productsData, "jacket");
  jacket.addEventListener("click", () => {
    cardSection.innerHTML = "";
    displayData(filteredArray);
    jacket.classList.toggle("clickedButton");
  });
};

const shirtButton = (productsData) => {
  const filteredArray = [];
  categoryFilter(filteredArray, productsData, "shirt");
  shirt.addEventListener("click", () => {
    cardSection.innerHTML = "";
    displayData(filteredArray);
    shirt.classList.add("clickedButton");
  });
};

const jeansButton = (productsData) => {
  const filteredArray = [];
  categoryFilter(filteredArray, productsData, "jeans");
  jeans.addEventListener("click", () => {
    cardSection.innerHTML = "";
    displayData(filteredArray);
    jeans.classList.add("clickedButton");
  });
};
const dressButton = (productsData) => {
  const filteredArray = [];
  categoryFilter(filteredArray, productsData, "dress");
  dress.addEventListener("click", () => {
    cardSection.innerHTML = "";
    displayData(filteredArray);
    dress.classList.add("clickedButton");
  });
};

// Fetching data from local JSON file
const fetchLocalData = async () => {
  try {
    const res = await fetch("/Clothes Category/products.json");
    const data = await res.json();
    
    jacketButton(data);
    shirtButton(data);
    jeansButton(data);
    dressButton(data);
    displayData(data);
    allProductsButton(data);

    return data;
  } catch (error) {
    throw new Error(error);
  }
};
fetchLocalData();

categoryFilter(filteredArray, data);

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


