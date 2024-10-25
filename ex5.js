function somaElementosPorLinha(matriz) {
    for (let i = 0; i < matriz.length; i++) {
        let soma = 0;
        for (let j = 0; j < matriz[i].length; j++) {
            soma += matriz[i][j];
        }
        console.log(Soma da linha ${i}: ${soma});
    }
}

// Exemplo de uso
const matriz1 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
somaElementosPorLinha(matriz1);