// esercizio 4.
// definire una funzione 'clamp' che prende come parametri:
// tre numeri: valore, massimo, e minimo 
// min MAX
// se valore è minore di minimo, restituisce minimo
// se valore è maggiore di massimo, restituisce MASSIMO
// altrimenti resituisce valore 
// -----------------------------------------------------------------------------

function clamp (value, min, max){
    if (value < min){
        return min;
    } else if (value > max){
        return max;
    } else {
        return value;
    }
}

console.log('clamp', clamp(12, 5, 10));

// ------------------------------------
// alternativa: 

    if (value < min) {
        return min;
    } 
    if (value > max) {
            return max;
    }        
            return value;


// CORRETTA