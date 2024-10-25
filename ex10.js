function matrizSimetrica(matriz) {
    const n = matriz.length; // Assume que a matriz é quadrada
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (matriz[i][j] !== matriz[j][i]) {
                console.log("A matriz não é simétrica.");
                return false;
            }
        }
    }
    console.log("A matriz é simétrica.");
    return true;
}

// Exemplo de uso
const matriz7 = [
    [1, 2, 3],
    [2, 4, 5],
    [3, 5, 6]
];
matrizSimetrica(matriz7);