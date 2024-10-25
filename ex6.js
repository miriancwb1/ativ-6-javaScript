function transporMatriz(matriz) {
    const transposta = [];
    for (let i = 0; i < matriz[0].length; i++) {
        transposta[i] = [];
        for (let j = 0; j < matriz.length; j++) {
            transposta[i][j] = matriz[j][i];
        }
    }
    return transposta;
}

// Exemplo de uso
const matriz2 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
const matrizTransposta = transporMatriz(matriz2);
console.log("Matriz Transposta:", matrizTransposta);