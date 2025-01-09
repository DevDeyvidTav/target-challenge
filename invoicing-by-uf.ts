function calcularPercentualFaturamento(estados: { estado: string, valor: number }[]): { [key: string]: number } {
    const total = estados.reduce((sum, e) => sum + e.valor, 0);
    return estados.reduce((percentuais, e) => {
        percentuais[e.estado] = (e.valor / total) * 100;
        return percentuais;
    }, {} as { [key: string]: number });
}

const faturamentoPorEstado = [
    { estado: 'SP', valor: 67836.43 },
    { estado: 'RJ', valor: 36678.66 },
    { estado: 'MG', valor: 29229.88 },
    { estado: 'ES', valor: 27165.48 },
    { estado: 'Outros', valor: 19849.53 },
];

console.log('Percentual de faturamento:', calcularPercentualFaturamento(faturamentoPorEstado));
