import filtersView from './js/views/filtersView';

/* 
import sunImg from './images/illustrations/sun.png';
import waterImg from './images/illustrations/wateringcan.png';
import dogImg from './images/illustrations/dog.png';

const filtersForm = document.querySelector("#filtersForm");

const filters = [
  {
    name: "sun",
    label: "Set the amount of sunlight your plant will get",
    image: sunImg,
    options: [
      {
        value: "no",
        text: "No sunlight",
      },
      {
        value: "low",
        text: "Low sunlight",
      },
      {
        value: "high",
        text: "High sunlight",
      },
    ]
  },
  {
    name: "water",
    label: "How often do you want to water your plant?",
    image: waterImg,
    options: [
      {
        value: "rarely",
        text: "Rarely",
      },
      {
        value: "regularly",
        text: "Regularly",
      },
      {
        value: "daily",
        text: "Daily",
      },
    ]
  },
  {
    name: "pets",
    label: "Do you have pets? Do they chew plants?",
    image: dogImg,
    options: [
      {
        value: true,
        text: "Yes",
      },
      {
        value: false,
        text: "No/They don't care",
      },
    ]
  },
];

const changeValue = (value) => {
  console.log(value);
}

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
  selectEl.addEventListener("change", changeValue);

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
*/