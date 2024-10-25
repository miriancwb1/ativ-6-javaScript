[11:20, 10/25/2024] Mirian Pereira: function maiorElementoMatriz(matriz) {
    let maior = matriz[0][0]; // Inicializa com o primeiro elemento
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            if (matriz[i][j] > maior) {
                maior = matriz[i][j];
            }
        }
    }
    return maior;
}

// Exemplo de uso
const matriz3 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log("Maior elemento:", maiorElementoMatriz(matriz3));
[11:20, 10/25/2024] Mirian Pereira: 