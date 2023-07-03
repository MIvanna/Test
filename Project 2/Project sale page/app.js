
fetch('https://fakestoreapi.com/products')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not OK');
    }
    return response.json();
  })
  .then(data => {
    const productListDiv = document.getElementById('productList');

    let html = '';
    html += '<div class="product-container">';
    data.forEach(product => {
      html += `<div class="product">
                  <img src="${product.image}" alt="${product.title}" />
                  <h3>${product.title}</h3>
                  <p>${product.price}$</p>
                  <span class="sale">-30%</span>
               </div>`;
    });
    html += '</div>';

    productListDiv.innerHTML = html;
  })
  .catch(error => {
    console.error('Error:', error);
  });