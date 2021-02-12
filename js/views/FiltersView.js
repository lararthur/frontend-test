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
      labelEl.setAttribute("class", "label");
      labelEl.innerText = `${index + 1}. ${item.label}`;
    
      divEl.appendChild(labelEl);
    
      // SELECT (HIDDEN)
      const selectEl = document.createElement("select");
      selectEl.setAttribute("name", item.name);
      selectEl.setAttribute("class", "hidden");
      selectEl.addEventListener("change", (e) => {
        this.controllerInstance.changeValue(e.target.name, e.target.value)
      });

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

      // **CUSTOM** SELECT STYLING
      let selectIsOpened = false;

      customSelectEl.setAttribute("class", "select");
      customSelectTextEl.setAttribute("class", "select__text");
      customOptionsEl.setAttribute("class", "select__options");
    
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

        customOptionEl.setAttribute("class", "select__option");

        customOptionsEl.appendChild(customOptionEl);
      });

      customOptionsEl.addEventListener("click", (e) => {
        for(item of e.path[1].children) {
          item.setAttribute("class", "select__option");
        }
        e.target.setAttribute("class", "select__option select__option--selected");
      });

      customSelectEl.appendChild(customOptionsEl);

      customSelectEl.addEventListener("click", () =>{
        selectIsOpened = !selectIsOpened;
        
        if(selectIsOpened) {
          customSelectEl.setAttribute("class", "select select--opened");
          return;
        }

        customSelectEl.setAttribute("class", "select");
      });
    
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