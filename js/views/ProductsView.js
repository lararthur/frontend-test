// sun img
import high from '../../images/icons/high-sun.svg';
import low from '../../images/icons/low-sun.svg';
import no from '../../images/icons/no-sun.svg';
// water img
import rarely from '../../images/icons/1-drop.svg';
import regularly from '../../images/icons/2-drops.svg';
import daily from '../../images/icons/3-drops.svg';
// pet img
import pet from '../../images/icons/pet.svg';
import toxicity from '../../images/icons/toxic.svg';

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

    resultsPicks.innerHTML = '';

    console.log(this.products);

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

      // PRODUCT TAGS
      const productTagsEl = document.createElement("div");
      
      const sunTagEl = document.createElement("img");
      sunTagEl.setAttribute("class", "product__tag");
      if(product.sun === "high") sunTagEl.setAttribute("src", high);
      if(product.sun === "low") sunTagEl.setAttribute("src", low);
      if(product.sun === "no") sunTagEl.setAttribute("src", no);
      productTagsEl.appendChild(sunTagEl);

      const waterTagEl = document.createElement("img");
      waterTagEl.setAttribute("class", "product__tag");
      if(product.water === "daily") waterTagEl.setAttribute("src", daily);
      if(product.water === "regularly") waterTagEl.setAttribute("src", regularly);
      if(product.water === "rarely") waterTagEl.setAttribute("src", rarely);
      productTagsEl.appendChild(waterTagEl);

      const petTagEl = document.createElement("img");
      petTagEl.setAttribute("class", "product__tag");
      if(product.toxicity) {
        petTagEl.setAttribute("src", toxicity);
      } else {
        petTagEl.setAttribute("src", pet);
      };
      productTagsEl.appendChild(petTagEl);

      productInfoEl.appendChild(productTagsEl);

      // INSERTING THE PRODUCT AT THE PICKS
      resultsPicks.appendChild(productEl);

    });



  }

}

export default ProductsView;