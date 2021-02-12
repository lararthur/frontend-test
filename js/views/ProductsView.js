class ProductsView {
  constructor(controllerInstance) {
    this.controllerInstance = controllerInstance;
    this.products = [];
    this.controllerInstance.subscribe(this.subscriber);
  }

  subscriber = (products) => {
    this.products = products;
    this.renderProducts();
  }

  renderProducts() {
    /* if(this.products.length === 0 || this.products.error) {
      document.querySelector("#results").setAttribute("class", "hidden");
      document.querySelector("#noResults").setAttribute("class", "empty wrapper");
      return;
    } */

    document.querySelector("#noResults").setAttribute("class", "hidden");
    document.querySelector("#results").setAttribute("class", "results");
    const resultsPicks = document.querySelector("#resultsPicks");

    this.products.map(product => {
      // PRODUCT DIV
      const productEl = document.createElement("div");
      productEl.setAttribute("class", "product");
  
      // PRODUCT IMAGE
      const productImageEl = document.createElement("img");
      productImageEl.setAttribute("class", "product__image");
      productImageEl.setAttribute("src", product.url);
      productImageEl.setAttribute("alt", product.name);

      productEl.appendChild(productImageEl);

      // PRODUCT TITLE
      const productTitleEl = document.createElement("p");
      productTitleEl.innerText = product.name;

      productEl.appendChild(productTitleEl);

      // PRODUCT INFO BOX
      const productInfoEl = document.createElement("div");
      productInfoEl.setAttribute("class", "product__info");

      productEl.appendChild(productInfoEl);

      // PRODUCT PRICE
      const productPriceEl = document.createElement("p");
      productPriceEl.setAttribute("class", "product__price");
      productPriceEl.innerText = "$" + product.price;

      productInfoEl.appendChild(productPriceEl);

      // INSERTING THE PRODUCT AT THE PICKS
      resultsPicks.appendChild(productEl);

    });



  }

}

export default ProductsView;