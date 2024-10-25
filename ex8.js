function imprimirDiagonalPrincipal(matriz) {
    for (let i = 0; i < matriz.length; i++) {
        console.log(Elemento da diagonal principal [${i}][${i}]: ${matriz[i][i]});
    }
}

// Exemplo de uso
const matriz5 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
imprimirDiagonalPrincipal(matriz5);