let myArray=[];
let rime=[];
const fs= require('fs');
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
    });

fs.readFile("vocabolario.txt", (error, data) => {
if (error) {
throw error;
}
 myArray =String(data).split("\n");
});


readline.question('inserisci la parola', parola => {
    console.log(`parola: ${parola}`);

    myArray.forEach(element => {
      let rParola =  parola.substring(parola. length - 3) 
      if(rParola== element.substring(element. length - 3)){
      rime.push(element);
      }
    });
console.log(rime);
    readline.close();
    });

