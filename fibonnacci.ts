// 2. Verificar número na sequência de Fibonacci
function pertenceFibonacci(numero: number): boolean {
    let a = 0, b = 1, temp;
    while (b < numero) {
        temp = a + b;
        a = b;
        b = temp;
    }
    return numero === b || numero === 0;
}

console.log('Pertence à sequência:', pertenceFibonacci(21));
