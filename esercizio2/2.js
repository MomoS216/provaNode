import fetch from "node-fetch";
import { createRequire } from "module";
process.env ['NODE_TLS_REJECT_UNAUTHORIZED']=0;
const require = createRequire(import.meta.url);
const stato=false;


const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
    });


function login(username, password) {
    return new Promise((resolve, reject) => {
      fetch("https://ws.progettimolinari.it/credential/login", {
        method: "Post",
        headers: {
          "content-type": "application/json",
          key: "73767eea-299e-4b9c-acb2-69d74db93374",
        },
        body: JSON.stringify({ username: username, password: password }),
      })
        .then((element) => element.json())
        .then((element) => {
          if (element.result) {
            resolve(true);
          } else {
            reject(false);
          };
        })
        .catch((error) => reject(error));
    });
  };



readline.question('Inserisci username ', valore => {
    console.log(`il valore: ${valore}`);
    readline.question('inserisci la password ', chiave => {
        console.log(`chiave: ${chiave}`);
        login(valore,chiave).then((response) => {
                console.log("esiste");
        }).catch((response) => {
            console.log("non esiste");
    })
        readline.close();
    });
});


    
           