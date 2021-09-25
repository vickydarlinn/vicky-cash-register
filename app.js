"use strict";
const billAmount = document.querySelector("#billAmount");
const cashGiven = document.querySelector("#cashGiven");
const cashGivenDiv = document.querySelector(".cashGivenDiv");
const checkButton = document.querySelector(".check");
const nextButton = document.querySelector(".next");
const output = document.querySelectorAll(".noOfNotes");
const currencies = [2000, 500, 100, 20, 10, 5, 1];
let currencyGiven = [];

// taking bill amount& display cash given
nextButton.addEventListener("click", function () {
  if (billAmount.value === "") {
    alert("please enter bill amount");
  } else {
    checkButton.classList.remove("hidden");
    cashGivenDiv.classList.remove("hidden");
    nextButton.classList.add("hidden");
  }
});

//cash given
checkButton.addEventListener("click", function () {
  currencyGiven = [];

  if (cashGiven.value === "") {
    alert("please enter Cash given value");
  } else if (Number(billAmount.value) > Number(cashGiven.value)) {
    console.log("please give more");
    let balance = -(Number(cashGiven.value) - Number(billAmount.value));
    alert("please give more " + balance + " Rupees");
  } else if (Number(billAmount.value) === Number(cashGiven.value)) {
    alert("Thankyou for using our services");
  }
  {
    let balanceGivenBack = Number(cashGiven.value) - Number(billAmount.value);
    for (let i = 0; i < currencies.length; i++) {
      currencyGiven.push(Math.trunc(balanceGivenBack / currencies[i]));
      balanceGivenBack = Math.trunc(balanceGivenBack % currencies[i]);
    }
    console.log(currencyGiven);
    for (let i = 0; i < currencies.length; i++) {
      console.log(`${currencies[i]} Rupee k ${currencyGiven[i]} note`);
      output[i].innerHTML = currencyGiven[i];
    }
  }
});
