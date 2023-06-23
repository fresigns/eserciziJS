// Esercizio 3.
// Definire una funzione 'min' che dati due numeri 
// restituisca il minore +
// -----------------------------------------------------------------------------

function numeroPiccolo(num1, num2) {
    if (num1 < num2) { // istruzione if che confronta i due numeri.
        return num1; // se vera esegue il blocco di codice all'interno delle parentesi graffe
    } else {
        return num2;
    }
}

let risultato = numeroPiccolo(5, 30); // chiamata alla funzione numeroPiccolo(5, 30) assegna il risultato della funzione alla variabile risultato
console.log(risultato); // stampa il valore di risultato sulla console del browser

// La funzione numeroPiccolo ha due parametri num1 e num2
// Viene eseguito un controllo: se num1 è minore di num2, 
// allora restituisce num1 come risultato, altrimenti restituisce num2. 

// -------soluzione classe-------
function min (firstNumber, secondNumber){
    if (firstNumber > secondNumber) {
        return secondNumber;
    } else {
        return firstNumber;
    }
}
console.log('195 min', min(5, 10));
// -------------------------------------------------------------------------------
// -------------------------------------------------------------------------------
// OPERATORE TERNARIO

// if (firstNumber < secondNumber) return secondNumber
//              controlla questa espressione 
//                                          se è true sostituisci dopo il ? 
const minimum = firstNumber > secondNumber ? secondNumber : firstNumber;
//                                                          se è false sostituisci dopo i :

// CORRETTA