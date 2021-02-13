import Controller from './js/controllers/Controller';

import FiltersView from './js/views/FiltersView';
import ProductsView from './js/views/ProductsView';

const controllerInstance = new Controller();
const filtersViewInstance = new FiltersView(controllerInstance);
const productsViewInstance = new ProductsView(controllerInstance);

filtersViewInstance.renderFilters();
productsViewInstance.renderProducts();

window.addEventListener("click", (e) => {
  filtersViewInstance.manageOpenedSelects(e);
})

const buttonToTop = document.querySelector("#toTop");
buttonToTop.addEventListener("click", () => {
  window.scrollTo({top: 0, behavior: 'smooth'});
});