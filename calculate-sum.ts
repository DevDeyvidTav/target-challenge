// 1. Soma enquanto K < INDICE
function calcularSoma(): number {
    let INDICE = 13, SOMA = 0, K = 0;
    while (K < INDICE) {
        K += 1;
        SOMA += K;
    }
    return SOMA;
}

console.log('Soma final:', calcularSoma());