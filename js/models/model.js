class Model {
  fetchResults(sun, water, pets) {

    const p = new Promise((resolve, reject) => {
      fetch(`https://front-br-challenges.web.app/api/v2/green-thumb/?sun=${sun}&water=${water}&pets=${pets}`)
        .then(response => response.json().then(data => resolve(data)));
    });

    return p.then(results => results);

  }
}

export default Model;