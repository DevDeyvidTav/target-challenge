// 5. Inverter string
function inverterString(input: string): string {
    let invertida = '';
    for (let i = input.length - 1; i >= 0; i--) {
        invertida += input[i];
    }
    return invertida;
}

console.log('String invertida:', inverterString('Exemplo de string'));
