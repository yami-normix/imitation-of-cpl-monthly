const form = document.getElementById("form")
const inputValue = document.getElementById("amount")
const searchButton = document.getElementById("search");
const container = document.querySelector("results")
let showIsss = document.getElementById("isss")
const showAFP = document.querySelector(".afp")
const showRenta = document.querySelector(".renta")
const showSalarioNeto = document.querySelector(".salario-neto")
const reload = document.querySelector(".reload")
const reloadButton = document.querySelector(".reload-button")

let percentageToadd;
let resta;
let applyPercentage;
let fee;
let renta;
let sumaTaxes;
let neto;

form.addEventListener('submit', e => {
    e.preventDefault();
    searchValue = inputValue.value
    if(!searchValue) {
        alert("Inserte una cantidad")
    } else {

        calculateISSS(searchValue)
        calculateAFP(searchValue)
        calculateRenta(searchValue)
    }
})

function calculateISSS(searchValue) {
    if(searchValue <= 1000.00) {
        const percentajeISSS = 0.03;
        isss = searchValue * percentajeISSS;
        showIsss.innerHTML = "    ISSS: " +"$" + isss.toFixed(2);
    } else {
        isss = 30.00;
        showIsss.innerHTML = "    ISSS: " +"$" + isss.toFixed(2);
    }
    
}

function calculateAFP(searchValue) {
    if(searchValue <= 7045.06) {
        const percentajeAFP = 0.0725;
        afp = searchValue * percentajeAFP;
        showAFP.innerHTML = "AFP: "+"$" +afp.toFixed(2);
    } else {
        alert("TU NO ERES DE EL SALVADOR")
    }
    
}

function calculateRenta(searchValue) {
    console.log("AFP: " + afp)
    console.log("ISSS: " + isss)
    const suma = isss + afp;
    const gravado = searchValue - suma;

    if(gravado <= 472.00){
        alert("SIN RETENTION");
        neto = searchValue - isss - afp;
        showSalarioNeto.innerHTML = "Salario neto: "+ "$"+ neto.toFixed(2);
        console.log("SALARIO NETO: " + neto)

    } else if(gravado >= 472.01 && gravado <= 895.24 ){
        percentageToadd = 0.1;
        resta = gravado - 472.00;
        applyPercentage = resta * percentageToadd;
        fee = 17.67;
        renta = applyPercentage + fee;
        showRenta.innerHTML = "Renta: "+"$"+ renta.toFixed(2);
        console.log("RENTA: " + renta)
        sumaTaxes = isss + afp + renta;
        neto = searchValue - sumaTaxes;
        showSalarioNeto.innerHTML = "Salario neto: "+ "$"+ neto.toFixed(2);
        console.log("SALARIO NETO: " + neto)

    } else if(gravado >= 895.25 && gravado <= 2038.10) {
        percentageToadd = 0.2;
        resta = gravado - 895.24;
        applyPercentage = resta * percentageToadd;
        fee = 60.00;
        renta = applyPercentage + fee;
        showRenta.innerHTML = "Renta: "+"$"+ renta.toFixed(2);
        console.log("RENTA: " + renta)
        sumaTaxes = isss + afp + renta;
        neto = searchValue - sumaTaxes;
        showSalarioNeto.innerHTML = "Salario neto: "+ "$"+ neto.toFixed(2);
        console.log("SALARIO NETO: " + neto)

    } else if(gravado>= 2038.11) {
        percentageToadd = 0.3;
        resta = gravado - 2038.10;
        applyPercentage = resta * percentageToadd;
        fee = 288.57;
        renta = applyPercentage + fee;
        showRenta.innerHTML = "Renta: "+"$"+ renta.toFixed(2);
        console.log("RENTA: " + renta)
        sumaTaxes = isss + afp + renta;
        neto = searchValue - sumaTaxes;
        showSalarioNeto.innerHTML = "Salario neto: "+ "$"+ neto.toFixed(2);
        console.log("SALARIO NETO: " + neto)

    }
        
    reloadButton.classList.remove("hidden");


}

reloadButton.addEventListener('click', () => {
    location.reload();
})

