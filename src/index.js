import {validCard} from './validator.js';

function validarFormulario() {

    let cardNumber = document.getElementById("cardNumber").value;
    
    if (cardNumber === ""){
        alert("Debe ingresar numero de tarjeta")
        return
    }

        let valid = validCard(cardNumber);
    if (valid === true ){
        alert("Tu numero de tarjeta es valido");
    }else{
        alert("Tu numero de tarjeta es invalido");
    }
    return;
}
    

    
document.getElementById("btnPay").onclick=validarFormulario;
