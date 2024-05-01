"use strict";

//input 
const fahrenheitInput = document.getElementById("fahrenheitInput")

//buttons
const convertBtn = document.getElementById("convertBtn");

//output
const celsiusField = document.getElementById("celsiusField")

window.onload = init;

function init(){

    convertBtn.onclick = onconvertBtnClicked;
   
}                


function onconvertBtnClicked(){

    //get the values I know
    let fahrenheit = Number(fahrenheitInput.value);
   

    //compute the values I don't know
    let celsuis = (fahrenheit - 32) * (5 / 9);


    //display the result.
    celsiusField.value = celsuis;
    

}