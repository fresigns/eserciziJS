// esercizio 7.
// definire una funzione reverseString che da una stringa 
// la restituisca al contrario
// -----------------------------------------------------------------------------

// 'casa rosa' => 'asor asac'

// function stringReverse(selectedString){
//     for (let i = (selectedString.length - 1); i >= 0; i--) {
//         const char = selectedString[i];
//         console.log(char);
//     }
// } 

// console.log('reverse:', stringReverse('la casa rosa'));

//

function stringReverse(selectedString){
    let newString = ''; // accumulator

    for (let i = (selectedString.length - 1); i >= 0; i--) {
        const char = selectedString[i];
        newString = newString + char;
    }
    return newString;
} 
console.log('reverse:', stringReverse('la casa rosa'));


// CORRETTA