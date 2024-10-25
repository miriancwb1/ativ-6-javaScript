function multiplicarMatrizes(matrizA, matrizB) {
    const linhasA = matrizA.length;
    const colunasA = matrizA[0].length;
    const linhasB = matrizB.length;
    const colunasB = matrizB[0].length;

    // Verifica se a multiplicação é possível
    if (colunasA !== linhasB) {
        console.log("A multiplicação não é possível: número de colunas da matriz A deve ser igual ao número de linhas da matriz B.");
        return;
    }

    const resultado = [];
    for (let i = 0; i < linhasA; i++) {
        resultado[i] = [];
        for (let j = 0; j < colunasB; j++) {
            resultado[i][j] = 0; // Inicializa o elemento
            for (let k = 0; k < colunasA; k++) {
                resultado[i][j] += matrizA[i][k] * matrizB[k][j];
            }
        }
    }
    return resultado;
}

// Exemplo de uso
const matriz3 = [
    [1, 2],
    [3, 4]
];

const matriz4 = [
    [5, 6],
    [7, 8]
];

const resultadoMultiplicacao = multiplicarMatrizes(matriz3, matriz4);
console.log("Resultado da multiplicação:", resultadoMultiplicacao);