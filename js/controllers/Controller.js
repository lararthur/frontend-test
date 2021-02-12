import Model from '../models/Model';

import sunImg from '../../images/illustrations/sun.png';
import waterImg from '../../images/illustrations/wateringcan.png';
import dogImg from '../../images/illustrations/dog.png';

const modelInstace = new Model();

class Controller {
  constructor(products) {
    this.products = products;
    this.subscribrers = [];
    this.filters = [
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
  }

  subscribe(subscriber) {
    this.subscribrers.push(subscriber);
  }

  notify() {
    this.subscribrers.map(subscriber => subscriber(this.products));
  }

  getFilters() {
    return this.filters;
  }
  
  changeValue(name, value) {
    this[name] = value;

    if((this.sun && this.sun !== '0') && (this.water && this.water !== '0') && (this.pets && this.pets !== '0')) {
      this.products = modelInstace.fetchProducts(
        this.sun,
        this.water,
        this.pets
      ).then(data => {
        this.products = data;
        this.notify();
      });
    }

  }
}

export default Controller;