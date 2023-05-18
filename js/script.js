// DATA ENTRY DA PARTE DELL'UTENTE

//DICHIARAZIONE VARIABILI

const costo_km = 0.21;


//NOME E COGNOME UTENTE
let button = document.getElementById('submit');

button.addEventListener('click', function(){

    let user_name = document.getElementById('user_name').value;
    console.log(user_name);

    let km = document.getElementById('km').value;
    console.log(km);

    let eta = document.getElementById('eta').value;
    console.log(eta);

    if (eta == 'minorenne') {

        let pricemin = (km * costo_km * 0.8);
        console.log(pricemin);

    } else if (eta == 'over-65'){

        let price65 = (km * costo_km * 0.4);
        console.log(price65);

    } else if (eta == 'maggiorenne') {

        let prezzo_intero = (km * costo_km);
        console.log(prezzo_intero); 
    }
})

