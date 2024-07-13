const BASE_URL = "https://api.coinconvert.net/convert/btc/usd?amount=1"

// const 

const dropdown = document.querySelectorAll(".all-select select")

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

let apiUrl = fetch('https://api.coingecko.com/api/v3/coins/bitcoin')
apiUrl.then((value1) => {
    return value1.json()
}).then((value2) => {
    console.log(value2.image.large)


    var container = document.getElementById('image-container');

    var img = document.createElement('img');

    // Set the image source
    img.src = 'https://api.coingecko.com/api/v3/coins/bitcoin'; // Replace 'path/to/your/image.jpg' with the actual path to your image

    // (Optional) Set additional attributes like alt text or width/height
    img.alt = 'Description of your image';
    img.width = '2000';
    img.height = '1500';
    container.append(img);
})





// let apiUrl = fetch('https://api.coingecko.com/api/v3/coins/bitcoin');
// apiUrl.then((response) => {
//     return response.json();
// }).then((data) => {
//     console.log(data.image.large);

//     var container = document.getElementById('image-container');

//     var img = document.createElement('img');

//     // Set the image source to the URL fetched from the API
//     img.src = data.image.large;

//     // (Optional) Set additional attributes like alt text or width/height
//     img.alt = 'Bitcoin Logo';
//     img.width = 200; // Adjust as needed
//     img.height = 200; // Adjust as needed

//     // Append the image to the container
//     container.append(img);
// });

// let apiUrl = fetch('https://api.coingecko.com/api/v3/coins/bitcoin');
// apiUrl.then((response) => {
//     return response.json();
// }).then((data) => {
//     console.log(data.image.large);

//     var container = document.getElementById('image-container');

//     var img = document.createElement('img');

//     // Set the image source to the URL fetched from the API
//     img.src = data.image.large;

//     // (Optional) Set additional attributes like alt text or width/height
//     img.alt = 'Bitcoin Logo';
//     img.width = 200; // Adjust as needed
//     img.height = 200; // Adjust as needed

//     // Append the image to the container
//     container.append(img);
// });





