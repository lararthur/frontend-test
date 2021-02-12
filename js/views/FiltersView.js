class FiltersView {

  constructor(controllerInstance) {
    this.controllerInstance = controllerInstance;
  }

  renderFilters() {
    const filtersForm = document.querySelector("#filtersForm");
    const filters = this.controllerInstance.getFilters();

    let filtersOptions = [];
    
    filters.map((item, index) => {
    
      // DIV
      const divEl = document.createElement("div");
      divEl.setAttribute("class", "filter");
    
      // IMG
      const imgEl = document.createElement("img");
      imgEl.setAttribute("class", "filter__image");
      imgEl.setAttribute("src", item.image);
      imgEl.setAttribute("alt", item.name);
    
      divEl.appendChild(imgEl);
    
      // LABEL
      const labelEl = document.createElement("label");
      labelEl.setAttribute("class", "filter__label");
      labelEl.innerText = `${index + 1}. ${item.label}`;
    
      divEl.appendChild(labelEl);
    
      // SELECT (HIDDEN)
      const selectEl = document.createElement("select");
      selectEl.setAttribute("class", "hidden")
      selectEl.addEventListener("change", (e) => this.controllerInstance.changeValue(item.name, e.target.value));

      const defaultOptionEl = document.createElement("option");
      defaultOptionEl.setAttribute("value", 0);
      defaultOptionEl.innerHTML = "Select...";

      selectEl.appendChild(defaultOptionEl);

      // **CUSTOM** SELECT
      const customSelectEl = document.createElement("div");
      const customSelectTextEl = document.createElement("p");
      customSelectTextEl.innerText = "Select...";
      customSelectEl.appendChild(customSelectTextEl);
      const customOptionsEl = document.createElement("div");
    
      item.options.map(option => {
        // SELECT OPTIONS
        const optionEl = document.createElement("option");
        optionEl.setAttribute("value", option.value);
        optionEl.innerHTML = option.text;
    
        selectEl.appendChild(optionEl);

        // **CUSTOM** SELECT OPTIONS
        const customOptionEl = document.createElement("p");
        customOptionEl.innerText = option.text;
        customOptionEl.addEventListener("click", () => {
          selectEl.value = option.value;
          customSelectTextEl.innerText = option.text;
          selectEl.dispatchEvent(new Event('change'));
        });

        customOptionsEl.appendChild(customOptionEl);
      });

      customSelectEl.appendChild(customOptionsEl);
    
      divEl.appendChild(selectEl);
      divEl.appendChild(customSelectEl);
    
      filtersOptions.push(divEl);
    });
    
    filtersOptions.map(filter => {
      filtersForm.appendChild(filter);
    });
  }

}

export default FiltersView;