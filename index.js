let numBtn = document.getElementById("num-btn");
let solEl1 = document.getElementById("sol-1");
let solEl2 = document.getElementById("sol-2");
let solEl3 = document.getElementById("sol-3");

numBtn.addEventListener("click", function() {
    let inputAr = document.getElementById("input-area");
    let inputValue = Number(inputAr.value);
    
    let feet = inputValue * 3.281; 
    let kilogram = inputValue * 0.453592;
    let litre = inputValue * 3.78541; 
    let metre = inputValue * 0.3048; 
    let pounds = inputValue * 2.204; 
    let gallon = inputValue * 0.264;

    solEl1.innerHTML = `${inputValue} metres = ${feet.toFixed(2)} Feet | ${inputValue} Feet = ${metre.toFixed(2)} Metres.`; 
    solEl2.innerHTML = `${inputValue} Kilograms = ${pounds.toFixed(2)} Pounds | ${inputValue} Pounds = ${kilogram.toFixed(2)} Kilograms.`; 
    solEl3.innerHTML = `${inputValue} Litres = ${gallon.toFixed(2)} Gallons | ${inputValue} Gallons = ${litre.toFixed(2)} Litres.`;   
});
