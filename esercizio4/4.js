let F = [];

function fibbonacci(n, F) {
    let i = F.length;

    if (i < n) {
        if (i < 2) {
            F = [1, 1];
        } else {
            F.push(F[i - 1] + F[i - 2]);
        }

        setImmediate(() => fibbonacci(n, F));
    }

    return F;
}

let prova = fibbonacci(10, F);

prova.forEach(element => {
    console.log(element);
});

