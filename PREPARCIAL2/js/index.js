// valor divisas 2022
let dict = {
    USD: 0.0069,
    EURO: 0.0071,
    LIBRA: 0.0063,

};

let selector = document.getElementById('selector-divisas');
selector.onclick = (event) => {
    event.preventDefault();
    document.getElementById('resultado-divisa').value = " "
}

let calculateBtn = document.getElementById('calculate-button');
calculateBtn.onclick = (event) => {
    event.preventDefault();
    let pesosIngresados = document.getElementById('pesos').value;
    let divisa = getDivisa(selector)
    if (pesosIngresados.length <= 2) {
        document.getElementById('resultado-divisa').value = calculoDivisa(pesosIngresados, divisa);
    } else {
        document.getElementById('resultado-divisa').value = calculoDivisa(pesosIngresados, divisa).toFixed(2);
    }
}

// OBTENER DIVISA Y SU VALOR
function getDivisa(selector) {
    let divisaIndex = selector.selectedIndex;
    let options = selector.querySelectorAll("option");
    let option;
    if (divisaIndex > options.length) {
        option = options[divisaIndex-1].value;
    } else {
        option = options[divisaIndex].value;
    }
    let divisa = dict[option];
    return divisa
}

// CALCULO FINAL
function calculoDivisa(pesos, divisa) {
    return pesos * divisa;
}


// AGREGAR DIVISA
let addCurrency = document.getElementById('new-currency');
addCurrency.onclick = (event) => {
    event.preventDefault();
    newCurrency = prompt("Ingrese el NOMBRE de la nueva divisa: ").toUpperCase();
    newCurrencyValue = parseInt(prompt("VALOR: 1 peso argentino equivale a $... de esta divisa "));
    dict[newCurrency] = newCurrencyValue;
    console.log(dict)
    nuevaDivisa(newCurrency);
}

function nuevaDivisa(name) {
    const select = document.getElementsByTagName("select")[0];
    const option = document.createElement("option");
    option.innerText = name.toLowerCase();
    option.setAttribute("value", name)
    select.appendChild(option);
}