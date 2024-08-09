export function validateWinner(table){
    const winnigCombinations = [ //se crea un array con las combinaciones ganadoras
        [0,1,2], //horizontal
        [3,4,5], //horizontal
        [6,7,8], //horizontal
        [0,3,6], //vertical
        [1,4,7], //vertical
        [2,5,8], //vertical
        [0,4,8], //diagonal
        [2,4,6] //diagonal
    ];

    for(const combination of winnigCombinations){ //se recorre el array de combinaciones ganadoras
        const [a,b,c] = combination; //se crea un array con las combinaciones ganadoras
        if(table[a] && table[a] === table[b] && table[a] === table[c]){ //se verifica si la tabla tiene una combinacion ganadora
            return table[a]; //si es asi se retorna el valor de la tabla
        }
    }
}

export function isBoardFull(table){
    return table.every(cell => cell !== null); //con esto se verifica si la tabla esta llena

}