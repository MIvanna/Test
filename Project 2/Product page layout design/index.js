const quantityElement = document.querySelector(".quantity-number");
const minusButton = document.querySelector(".minus");
const plusButton = document.querySelector(".plus");
const totalPrice = document.querySelector(".total-price");
const specificationsList = document.querySelector(".specifications-list");

let product = [
  {
    productTitle: "Product name",
    productDescription:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam numquam a eligendi quidem minus quo quae sapiente molestiae, tempore at sit officiis, rerum aut blanditiis quaerat sint. Ex, voluptate saepe.",
    productValue: 100,
    productImage: "../images/product_image.png",
  },
  (specifications = [
    {
      title: "Example 1",
      comment:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem blanditiis provident ullam iste suscipit labore consequatur, quod, incidunt, itaque tenetur minima! Eligendi dolore magnam soluta rerum provident esse, nisi expedita.",
    },
    {
      title: "Example 2",
      comment:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem blanditiis provident ullam iste suscipit labore consequatur, quod, incidunt, itaque tenetur minima! Eligendi dolore magnam soluta rerum provident esse, nisi expedita.",
    },
    {
      title: "Example 3",
      comment:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem blanditiis provident ullam iste suscipit labore consequatur, quod, incidunt, itaque tenetur minima! Eligendi dolore magnam soluta rerum provident esse, nisi expedita.",
    },
  ]),
];

totalPrice.innerHTML = product[0].productValue;
document.querySelector(".product-title").innerHTML = product[0].productTitle;
document.querySelector(".product-description").innerHTML =
  product[0].productDescription;
document.querySelector(
  ".product-image"
).innerHTML = `<img src=${product[0].productImage} alt="product-image" />`;
minusButton.addEventListener("click", () => {
  if (quantityElement.value < 2) {
    minusButton.disabled = true;
  } else {
    quantityElement.value--;
  }
  totalPrice.innerHTML = product[0].productValue * quantityElement.value;
});

plusButton.addEventListener("click", () => {
  quantityElement.value++;
  totalPrice.innerHTML = product[0].productValue * quantityElement.value;
  minusButton.disabled = false;
});

specifications.map(
  (specification) =>
    (specificationsList.innerHTML += `
<li><h3>${specification.title}</h3>
<p>${specification.comment}</p></li>`)
);
