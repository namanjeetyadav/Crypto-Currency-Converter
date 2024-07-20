const BASE_URL = "https://api.coincap.io/v2/assets"

const dropdown = document.querySelectorAll(".all-select select")

const btn = document.querySelector("form button")

const fromCryptoCurr = document.querySelector(".from select")
const toCryptoCurr = document.querySelector(".from select")

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

btn.addEventListener("click")

let amount = document.querySelector(".amount imput")
let amountValue = amount.value;
if (amountValue === "" || amountValue < 0){
    amountValue = 1;
 amount.value = "1";
}

console.log(fromCryptoCurr.value, toCryptoCurr.value);

const URL = `${BASE_URL}/$fromCryptoCurr.value.toLowerCase().json`

let response = await fetch(URL);
let data = await response.json();
let rates = (data[fromCryptoCurr.value.toLowerCase()])
// console.log(rates);





