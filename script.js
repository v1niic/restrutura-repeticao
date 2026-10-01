// A soma de todos os números ímpares múltiplos de 3 entre 1 e 500.

function somaImpares() {
    let soma = 0;

    for (let n = 1; n <= 500; n++) {
        if (n % 2 !== 0 && n % 3 === 0) {
            soma += n;
        }
    }

    console.log("A soma dos números ímpares múltiplos de 3 entre 1 e 500 é: " + soma);
}

// Mostrar a menor e a maior altura de um grupo de 15 pessoas.

function menorEMaiorAltura() {
    let menorAltura = Infinity;
    let maiorAltura = -Infinity;

    for (let pessoa = 1; pessoa <= 15; pessoa++) {
        const altura = Number(prompt("Informe a altura da pessoa " + pessoa + ":"));

        if (altura < menorAltura) {
            menorAltura = altura;
        }
        if (altura > maiorAltura) {
            maiorAltura = altura;
        }
    }

    console.log("Menor altura do grupo: " + menorAltura);
    console.log("Maior altura do grupo: " + maiorAltura);
}

// Calcular a média, as quantidades e os percentuais de valores positivos e negativos.

function mediaAritmetica() {
    let soma = 0;
    let quantidadeValores = 0;
    let quantidadePositivos = 0;
    let quantidadeNegativos = 0;
    let entrada;

    while (true) {
        entrada = prompt("Informe um número ou clique em Cancelar para finalizar:");

        if (entrada === null) {
            break;
        }

        const valor = Number(entrada);
        if (entrada.trim() === "" || !Number.isFinite(valor)) {
            alert("Digite um número válido.");
            continue;
        }

        soma += valor;
        quantidadeValores++;

        if (valor > 0) {
            quantidadePositivos++;
        } else if (valor < 0) {
            quantidadeNegativos++;
        }
    }

    if (quantidadeValores === 0) {
        console.log("Nenhum valor foi informado.");
        return;
    }

    const media = soma / quantidadeValores;
    const percentualPositivos = (quantidadePositivos / quantidadeValores) * 100;
    const percentualNegativos = (quantidadeNegativos / quantidadeValores) * 100;

    console.log("Média aritmética: " + media);
    console.log("Quantidade de valores positivos: " + quantidadePositivos);
    console.log("Quantidade de valores negativos: " + quantidadeNegativos);
    console.log("Percentual de valores positivos: " + percentualPositivos.toFixed(2) + "%");
    console.log("Percentual de valores negativos: " + percentualNegativos.toFixed(2) + "%");
}


// Contar valores nos intervalos de 0 a 100 até a entrada de um número negativo.

function quantidadeNosIntervalos() {
    let intervalo0a25 = 0;
    let intervalo26a50 = 0;
    let intervalo51a75 = 0;
    let intervalo76a100 = 0;
    let entrada;

    while (true) {
        entrada = prompt("Informe um número (negativo para finalizar):");

        if (entrada === null) {
            break;
        }

        const valor = Number(entrada);
        if (entrada.trim() === "" || !Number.isFinite(valor)) {
            alert("Digite um número válido.");
            continue;
        }

        if (valor < 0) {
            break;
        } else if (valor <= 25) {
            intervalo0a25++;
        } else if (valor >= 26 && valor <= 50) {
            intervalo26a50++;
        } else if (valor >= 51 && valor <= 75) {
            intervalo51a75++;
        } else if (valor >= 76 && valor <= 100) {
            intervalo76a100++;
        }
    }

    console.log("Quantidade no intervalo [0-25]: " + intervalo0a25);
    console.log("Quantidade no intervalo [26-50]: " + intervalo26a50);
    console.log("Quantidade no intervalo [51-75]: " + intervalo51a75);
    console.log("Quantidade no intervalo [76-100]: " + intervalo76a100);
}


// Contar pares e ímpares e calcular as médias até a entrada de zero.

function algoritmoEstruturado() {
    let quantidadePares = 0;
    let quantidadeImpares = 0;
    let somaPares = 0;
    let somaTotal = 0;
    let quantidadeTotal = 0;
    let entrada;

    while (true) {
        entrada = prompt("Informe um número inteiro positivo (0 para finalizar):");

        if (entrada === null) {
            break;
        }

        const valor = Number(entrada);
        if (entrada.trim() === "" || !Number.isInteger(valor) || valor < 0) {
            alert("Digite um número inteiro positivo ou 0 para finalizar.");
            continue;
        }

        if (valor === 0) {
            break;
        }

        quantidadeTotal++;
        somaTotal += valor;

        if (valor % 2 === 0) {
            quantidadePares++;
            somaPares += valor;
        } else {
            quantidadeImpares++;
        }
    }

    console.log("Quantidade de números pares: " + quantidadePares);
    console.log("Quantidade de números ímpares: " + quantidadeImpares);

    if (quantidadePares > 0) {
        console.log("Média dos valores pares: " + somaPares / quantidadePares);
    } else {
        console.log("Média dos valores pares: não há valores pares.");
    }

    if (quantidadeTotal > 0) {
        console.log("Média geral: " + somaTotal / quantidadeTotal);
    } else {
        console.log("Média geral: nenhum número foi informado.");
    }
}


// Escrever os números ímpares entre 100 e 200.

function imparesEntre100E200() {
    for (let numero = 101; numero < 200; numero += 2) {
        console.log(numero);
    }
}


// Mostrar a tabuada de um número entre 1 e 10.

function tabuadaDeN() {
    let numero;

    while (true) {
        const entrada = prompt("Informe um número inteiro de 1 a 10:");

        if (entrada === null) {
            return;
        }

        numero = Number(entrada);
        if (entrada.trim() !== "" && Number.isInteger(numero) && numero >= 1 && numero <= 10) {
            break;
        }

        alert("Digite um número inteiro de 1 a 10.");
    }

    for (let multiplicador = 0; multiplicador <= 10; multiplicador++) {
        console.log(multiplicador + " x " + numero + " = " + multiplicador * numero);
    }
}


// Gerar e escrever 10 termos de uma progressão aritmética.

function progressaoAritmetica() {
    const entradaInicial = prompt("Informe o valor inicial A:");
    if (entradaInicial === null) {
        return;
    }

    const entradaRazao = prompt("Informe a razão R:");
    if (entradaRazao === null) {
        return;
    }

    let termo = Number(entradaInicial);
    const razao = Number(entradaRazao);

    if (
        entradaInicial.trim() === "" ||
        entradaRazao.trim() === "" ||
        !Number.isFinite(termo) ||
        !Number.isFinite(razao)
    ) {
        alert("Informe valores numéricos válidos para A e R.");
        return;
    }

    for (let posicao = 1; posicao <= 10; posicao++) {
        console.log("Termo " + posicao + ": " + termo);
        termo += razao;
    }
}


// Gerar e escrever 10 termos de uma progressão geométrica.

function progressaoGeometrica() {
    const entradaInicial = prompt("Informe o valor inicial A:");
    if (entradaInicial === null) {
        return;
    }

    const entradaRazao = prompt("Informe a razão R:");
    if (entradaRazao === null) {
        return;
    }

    let termo = Number(entradaInicial);
    const razao = Number(entradaRazao);

    if (
        entradaInicial.trim() === "" ||
        entradaRazao.trim() === "" ||
        !Number.isFinite(termo) ||
        !Number.isFinite(razao)
    ) {
        alert("Informe valores numéricos válidos para A e R.");
        return;
    }

    for (let posicao = 1; posicao <= 10; posicao++) {
        console.log("Termo " + posicao + ": " + termo);
        termo *= razao;
    }
}


// Mostrar a expressão e o resultado do fatorial de um número inteiro não negativo.

function variavelSequencial() {
    let numero;

    while (true) {
        const entrada = prompt("Informe um número inteiro não negativo:");

        if (entrada === null) {
            return;
        }

        const valor = entrada.trim();
        if (/^\d+$/.test(valor)) {
            numero = BigInt(valor);
            break;
        }

        alert("Digite um número inteiro não negativo.");
    }

    let resultado = 1n;
    const fatores = [];

    for (let fator = numero; fator >= 1n; fator--) {
        fatores.push(fator.toString());
        resultado *= fator;
    }

    const expressao = fatores.length > 0 ? fatores.join(" X ") : "1";
    console.log(numero + "! = " + expressao + " = " + resultado);
}


