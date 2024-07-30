let apiUrl = fetch('https://api.coincap.io/v2/assets/ethereum')
apiUrl.then((value1) => {
    return value1.json()
}).then((value2) => {
    console.log(value2)
})
