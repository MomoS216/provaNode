const n = 10;

function fibonacciAsync(n ) {
return new Promise((resolve , reject)=>{
   if (n === 2) {
      const F = [1,1];
      resolve(F);
   } else {
      setImmediate(() => {
         fibonacciAsync(n-1).then( (F) => {
            const len = F.length;
            F.push(F[len - 1] + F[len - 2]);
            resolve(F);
         })});
      }});  }


   fibonacciAsync(n).then((array)=>{console.log("Sync: " + array.join('-'));});