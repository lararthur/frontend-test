class FiltersView {

  constructor(controllerInstance) {
    this.controllerInstance = controllerInstance;
  }

  renderFilters() {
    const filtersForm = document.querySelector("#filtersForm");
    const filters = this.controllerInstance.getFilters();

    let filtersOptions = [];
    
    filters.map((item, index) => {
    
      const divEl = document.createElement("div");
    
      const imgEl = document.createElement("img");
      imgEl.setAttribute("src", item.image);
      imgEl.setAttribute("alt", item.name);
    
      divEl.appendChild(imgEl);
    
      const labelEl = document.createElement("label");
      labelEl.innerText = `${index + 1}. ${item.label}`;
    
      divEl.appendChild(labelEl);
    
      const selectEl = document.createElement("select");
      selectEl.addEventListener("change", (e) => this.controllerInstance.changeValue(item.name, e.target.value));

      const defaultOptionEl = document.createElement("option");
      defaultOptionEl.setAttribute("value", 0);
      defaultOptionEl.innerHTML = "Select...";

      selectEl.appendChild(defaultOptionEl);
    
      item.options.map(option => {
        const optionEl = document.createElement("option");
        optionEl.setAttribute("value", option.value);
        optionEl.innerHTML = option.text;
    
        selectEl.appendChild(optionEl);
      });
    
      divEl.appendChild(selectEl);
    
      filtersOptions.push(divEl);
    });
    
    filtersOptions.map(filter => {
      filtersForm.appendChild(filter);
    });
  }

}

export default FiltersView;