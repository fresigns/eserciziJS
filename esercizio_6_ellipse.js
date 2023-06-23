// esercizio 6.
// definire una funzione 'ellipse' che prende come parametro una stringa
// se la stringa è minore di 20 caratteri la ritorna non modificata
// altrimenti la taglia a 20 caratteri (trim) e aggiunge 3 puntini
// 'ciao mamma!' => 'ciao mamma!'
// 'nel mezzo del cammin di nostra vita' => 'nel mezzo di cammin...'
// -----------------------------------------------------------------------------

// function ellipse(selectedString){

//     if (selectedString.length < 20) {
//             return selectedString;
//     } else {
//         const shortString = selectedString.slice(0,20); // gli do due parametri
//         const ellipsedString = shortString + '...';
//             return ellipsedString;
//     }
// }

// console.log('ellipse:', ellipse('Nel mezzo del cammin di nostra vita'));

// CORRETTA


// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------
// alternativa: 

function ellipse(selectedString, size=20, endString= '...'){ // indico dei defalut 

    if (selectedString.length < size) {
            return selectedString;
    } else {
        const shortString = selectedString.slice(0, size); // gli do due parametri
        const ellipsedString = shortString + endString;
            return ellipsedString;
    }
}
console.log('ellipse:', ellipse('Nel mezzo del cammin di nostra vita'));
console.log('ellipse:', ellipse('Nel mezzo del cammin di nostra vita', 3));
console.log('ellipse:', ellipse('Nel mezzo del cammin di nostra vita', 10, '***'));

// CORRETTA