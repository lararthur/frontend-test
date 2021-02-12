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

    console.log(this.products);


  }

}

export default ProductsView;