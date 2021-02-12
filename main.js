import Controller from './js/controllers/Controller';

import FiltersView from './js/views/FiltersView';
import ProductsView from './js/views/ProductsView';

const controllerInstance = new Controller();
const filtersViewInstance = new FiltersView(controllerInstance);
const productsViewInstance = new ProductsView(controllerInstance);

filtersViewInstance.renderFilters();
productsViewInstance.renderProducts();