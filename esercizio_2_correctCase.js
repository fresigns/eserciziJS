// esercizio 2.
// definire una funzione 'correctCase' che prende in input una stringa e la restituisce
// trasformando la prima lettera in maiuscolo 'la casa blu' => 'La casa blu'
// -----------------------------------------------------------------------------


function correctCase (selectedString){
    if (selectedString === undefined ) { // se non è definita ritorno stringa vuota
//  if (!selectedString)    
        return 'senza stringa non funziona';
    }

        const firstChar = selectedString[0]; // primo carattere indice 0
        const firstCharUpper = firstChar.toUpperCase(); // maiuscolo solo sulla prima lettera 
        const restOfTheString = selectedString.slice(1); // slice = taglia | indico l'indice da cui voglio tagliare 
        const newString = firstCharUpper + restOfTheString; // fa una concatenazione 

        return newString; 
    }

    // viva pippo
    // 1 v
    // 2 V
    // 3 iva pippo
    // 4 Viva pippo

console.log('correct case:', correctCase('viva pippo'));

// CORRETTA