# Explicação das Funções e Como Utilizá-las

## 1. Soma enquanto K < INDICE

**Função:** `calcularSoma`

Essa função calcula a soma incremental de `K` enquanto ele for menor que o valor de `INDICE` (13). A cada iteração, `K` é incrementado em 1, e seu valor é adicionado à variável `SOMA`.

### Uso:
```typescript
console.log('Soma final:', calcularSoma());
```
**Saída esperada:**
```
Soma final: 91
```

---

## 2. Verificar número na sequência de Fibonacci

**Função:** `pertenceFibonacci`

Essa função verifica se um número pertence à sequência de Fibonacci. A sequência é gerada incrementalmente até que o valor seja maior ou igual ao número informado.

### Uso:
```typescript
console.log('Pertence à sequência:', pertenceFibonacci(21));
```
**Saída esperada:**
```
Pertence à sequência: true
```

---

## 3. Análise de faturamento diário

**Função:** `analiseFaturamento`

Essa função analisa o faturamento diário a partir de um conjunto de dados JSON. Ela retorna:
- O menor valor de faturamento (ignorando dias com valor zero).
- O maior valor de faturamento.
- O número de dias com faturamento acima da média mensal.

### Uso:
```typescript
// const faturamento = [...]
console.log('Análise de faturamento:', analiseFaturamento(faturamento));
```
**Saída esperada:**
```
Análise de faturamento: { menor: 373.7838, maior: 48924.2448, diasAcimaMedia: 16 }
```

---

## 4. Percentual de faturamento por estado

**Função:** `calcularPercentualFaturamento`

Essa função calcula o percentual de participação de cada estado no faturamento total.

### Uso:
```typescript
const faturamentoPorEstado = [
    { estado: 'SP', valor: 67836.43 },
    { estado: 'RJ', valor: 36678.66 },
    { estado: 'MG', valor: 29229.88 },
    { estado: 'ES', valor: 27165.48 },
    { estado: 'Outros', valor: 19849.53 },
];

console.log('Percentual de faturamento:', calcularPercentualFaturamento(faturamentoPorEstado));
```
**Saída esperada:**
```
Percentual de faturamento: { SP: 37.53, RJ: 20.29, MG: 16.18, ES: 15.03, Outros: 10.97 }
```

---

## 5. Inverter string

**Função:** `inverterString`

Essa função inverte os caracteres de uma string sem utilizar métodos prontos como `reverse`.

### Uso:
```typescript
console.log('String invertida:', inverterString('Exemplo de string'));
```
**Saída esperada:**
```
String invertida: gnirts ed olpmexE
```
- Para testar cada função basta compilar os trechos de codigo em qualquer compilador typescript