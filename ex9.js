function somaDiagonalSecundaria(matriz) {
    let soma = 0;
    const n = matriz.length; // Assume que a matriz é quadrada
    for (let i = 0; i < n; i++) {
        soma += matriz[i][n - 1 - i];
    }
    return soma;
}

// Exemplo de uso
const matriz6 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log("Soma da diagonal secundária:", somaDiagonalSecundaria(matriz6));