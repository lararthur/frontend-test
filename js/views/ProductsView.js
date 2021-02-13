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
    if(this.products.length === 0 || this.products.error) {
      document.querySelector("#results").setAttribute("class", "hidden");
      document.querySelector("#noResults").setAttribute("class", "empty wrapper");
      return;
    }

    document.querySelector("#noResults").setAttribute("class", "hidden");
    document.querySelector("#results").setAttribute("class", "results");
    const resultsPicks = document.querySelector("#resultsPicks");

    resultsPicks.innerHTML = '';
    // SETTING STAFF FAVORITES UP FRON OF ARRAAY;
    const favorites = this.products.filter(product => {
      return product.staff_favorite;
    });

    const otherProducts = this.products.filter(product => {
      return !product.staff_favorite;
    });

    this.products = [...favorites, ...otherProducts];

    this.products.map((product, index) => {
      // PRODUCT DIV
      const productEl = document.createElement("div");
      let productClass = "";
      if(index === 0) {
        productClass = "product highlight"
      } else {
        productClass = "product"
      }
      productEl.setAttribute("class", productClass);

      // STAFF FAVORITE TAG
      if(product.staff_favorite) {
        const staffFavEl = document.createElement("div");
        staffFavEl.setAttribute("class", "product__staffFav");

        const staffFavTextEl = document.createElement("p");
        staffFavTextEl.setAttribute("class", "product__staffFavText");
        staffFavTextEl.innerText = "Staff favorite";

        staffFavEl.appendChild(staffFavTextEl);
        productEl.appendChild(staffFavEl);
      }

      // PRODUCT IMAGE WRAPPER
      const productImageWrapperEl = document.createElement("div");
      productImageWrapperEl.setAttribute("class", "product__imageWrapper");

      productEl.appendChild(productImageWrapperEl);
  
      // PRODUCT IMAGE
      const productImageEl = document.createElement("img");
      productImageEl.setAttribute("class", "product__image");
      productImageEl.setAttribute("src", product.url);
      productImageEl.setAttribute("alt", product.name);

      productImageWrapperEl.appendChild(productImageEl);

      // PRODUCT INFO BOX
      const productInfoEl = document.createElement("div");
      productInfoEl.setAttribute("class", "product__info");

      productEl.appendChild(productInfoEl);

      // PRODUCT TITLE
      const productTitleEl = document.createElement("p");
      productTitleEl.setAttribute("class", "product__title");
      productTitleEl.innerText = product.name;

      productInfoEl.appendChild(productTitleEl);

      // PRODUCT INFO BOTTOM
      const productInfoBottomEl = document.createElement("div");
      productInfoBottomEl.setAttribute("class", "product__infoBottom");

      productInfoEl.appendChild(productInfoBottomEl);

      // PRODUCT PRICE
      const productPriceEl = document.createElement("p");
      productPriceEl.setAttribute("class", "product__price");
      productPriceEl.innerText = "$" + product.price;

      productInfoBottomEl.appendChild(productPriceEl);

      // PRODUCT TAGS
      const productTagsEl = document.createElement("div");

      const petTagEl = document.createElement("img");
      petTagEl.setAttribute("class", "product__tag");
      if(product.toxicity) {
        petTagEl.setAttribute("src", toxicity);
      } else {
        petTagEl.setAttribute("src", pet);
      };
      productTagsEl.appendChild(petTagEl);
      
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

      productInfoBottomEl.appendChild(productTagsEl);

      // INSERTING THE PRODUCT AT THE PICKS
      resultsPicks.appendChild(productEl);

    });



  }

}

export default ProductsView;