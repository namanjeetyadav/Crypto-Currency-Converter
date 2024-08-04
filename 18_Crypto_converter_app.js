const BASE_URL = "https://api.coincap.io/v2/assets"

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
        if (select.name === "from" && cryptoCurr === "bitcoin") {
            newOption.selected = "selected"
        }
        else if (select.name === "to" && cryptoCurr === "ethereum") {
            newOption.selected = "selected"
        }
        select.append(newOption);
    }
}


const updateExchangeRate = async () => {
    let amount = document.querySelector(".amount input");
    let amountValue = amount.value;
}

btn.addEventListener("click", async (evt) => {
    evt.preventDefault();
    let amount = document.querySelector(".amount input")
    let amountValue = amount.value;
    if (amountValue === "" || amountValue < 0.00000001) {
        amountValue = 1;
        amount.value = "1";
    }


    let a = fromCryptoCurr.value.toLowerCase();
    let b = toCryptoCurr.value.toLowerCase();
    console.log(a, b);



    const URL = `${BASE_URL}`;
    let response = await fetch(URL);
    let data = await response.json();
    
    //  code start here 

    let obj1 = data.data.find(obj => obj.id === a);
    let obj2 = data.data.find(obj => obj.id === b);

    if (obj1) {
        priceUsd1 = parseFloat(obj1.priceUsd)
        console.log(priceUsd1);
    }

    if (obj2) {
        priceUsd2 = parseFloat(obj2.priceUsd)
        console.log(priceUsd2);
    }

    //  code end here 

    let finalAmt = amountValue * priceUsd1 / priceUsd2;
    console.log(finalAmt);

    message.innerHTML = `${amountValue} ${fromCryptoCurr.value.toUpperCase()} = ${finalAmt} ${toCryptoCurr.value.toUpperCase()}`
});