function todosElementosPositivos(matriz) {
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            if (matriz[i][j] < 0) {
                console.log("Nem todos os elementos são positivos.");
                return false;
            }
        }
    }
    console.log("Todos os elementos são positivos.");
    return true;
}

// Exemplo de uso
const matriz4 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
todosElementosPositivos(matriz4);

const matriz5 = [
    [1, -2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
todosElementosPositivos(matriz5);