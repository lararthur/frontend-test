class Model {
  fetchProducts(sun, water, pets) {

    // I would use async/await, but i'm having problems with babel: https://github.com/babel/babel/issues/9849
    // and since i downloaded this from sandbox to my machine, i choose to use promises instead
    return new Promise((resolve, reject) => {
      fetch(`https://front-br-challenges.web.app/api/v2/green-thumb/?sun=${sun}&water=${water}&pets=${pets}`)
        .then(response => resolve(response.json()))
        .catch(err => err);
    });

  }
}

export default Model;