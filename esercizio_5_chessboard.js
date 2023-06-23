// esercizio 5.
// definire una fuzione chessboard che prende come parametro
// 'size' e stampa la scacchiera
// -----------------------------------------------------------------------------

function chessboard(size){

        let chessboardString = '';
        
    for (let i = 0; i < size; i++) { // i - righe
        for (let j = 0; j < size; j++) { // j - colonne
            if ((i - j) % 2 === 0){
                    chessboardString = chessboardString + '☐';
            }
                if ((i - j) % 2 !== 0){
                    chessboardString = chessboardString + '❤'; 
            }
        }
        chessboardString = chessboardString + "\n";
        }
    return chessboardString;
}
console.log('chessboard')
console.log(chessboard(19)); // 19 è la size

// CORRETTA