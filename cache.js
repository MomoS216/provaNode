export function salvaDati(dict, key) {
    fetch("https://ws.progettimolinari.it/cache/set", {
      method: "Post",
      headers: {
        "content-type": "application/json",
        key: "73767eea-299e-4b9c-acb2-69d74db93374",
      },
      body: JSON.stringify({
        key: key,
        value: JSON.stringify(dict),
      }),
    })
      .then((element) => element.json())
      .then((element) => console.log(element))
      .catch((error) => console.error(error));
  }
  
 export function recuperaDati(chiave) {
    return new Promise((resolve, reject) => {
      fetch("https://ws.progettimolinari.it/cache/get", {
        method: "Post",
        headers: {
          "content-type": "application/json",
          key: "73767eea-299e-4b9c-acb2-69d74db93374",
        },
        body: JSON.stringify({ key: chiave }),
      })
        .then((element) => {
          resolve(element.json());
        })
        .catch((error) => reject(error));
    });
  }