const BASE_URL = "https://api.coincap.io/v2/assets"

// https://api.coincap.io/v2/assets/ethereum

const dropdown = document.querySelectorAll(".all-select select")

const btn = document.querySelector("form button")

const fromCryptoCurr = document.querySelector(".from select")

const toCryptoCurr = document.querySelector(".to select")

const message = document.querySelector(".message");

for (let select of dropdown) {
    for (let cryptoCurr in cryptoList) {
        let newOption = document.createElement("option")
        newOption.innerText = cryptoList[cryptoCurr].toUpperCase();
        newOption.value = cryptoCurr;
        if (select.name === "from" && cryptoCurr === "BTC") {
            newOption.selected = "selected"
        }
        else if (select.name === "to" && cryptoCurr === "ETH") {
            newOption.selected = "selected"
        }
        select.append(newOption);
    }
}


const updateExchangeRate = async () =>{
    let amount = document.querySelector(".amount input");
    let amountValue = amount.value;
}
 
btn.addEventListener("click", async (evt) =>{
evt.preventDefault();
let amount = document.querySelector(".amount input")
let amountValue = amount.value;
if (amountValue === "" || amountValue < 0.00000001) {
    amountValue = 1;
    amount.value = "1";
}


    let a = fromCryptoCurr [fromCryptoCurr.selectedIndex].text.toLowerCase();
    let b = toCryptoCurr [toCryptoCurr.selectedIndex].text.toLowerCase();
    console.log(a, b);



const URL = `${BASE_URL}/${a}`;
const URL2 = `${BASE_URL}/${b}`;

let response = await fetch(URL);
let data = await response.json();
let priceUsd = data.data.priceUsd;
 

let response2 = await fetch(URL2);
let data2 = await response2.json();
let priceUsd2 = data2.data.priceUsd;

console.log(`Price in USD: ${priceUsd}`);
let finalAmt = amountValue * priceUsd / priceUsd2;


message.innerHTML = `${amountValue} ${fromCryptoCurr.value} = ${finalAmt} ${toCryptoCurr.value}`
});


