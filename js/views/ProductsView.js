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
    console.log(this.products);
  }

}

export default ProductsView;