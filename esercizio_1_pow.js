// esercizio 1. 
// definire una funzione 'pow' che NON faccia uso dell'operatore '**'
// ne della libreria Math
// -----------------------------------------------------------------------------

let result = 1;

    function pow (base, exponent){
        for (let i = 0; i < exponent; i++){
            result = result * base;            
        }

        return result;
    }
    console.log('pow', pow(5, 4));

    // CORRETTA