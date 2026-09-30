function somaImpares() {
    let soma = 0;

    for (let n = 1; n <= 500; n++) {
        if (n % 2 !== 0 && n % 3 === 0) {
            soma += n;
            console.log("Acumulado soma:" + soma);
            console.log(n);
        }
    }
}