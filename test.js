const url = 'https://api.coingecko.com/api/v3/coins/markets';
const params = {
    vs_currency: 'usd',
    order: 'market_cap_desc',
    per_page: 100,
    page: 1,
    sparkline: false
};

const queryString = new URLSearchParams(params).toString();
const fullUrl = `${url}?${queryString}`;

fetch(fullUrl)
    .then(response => response.json())
    .then(data => {
        data.forEach(coin => {
            console.log(`Name: ${coin.name}, Logo URL: ${coin.image}`);
        });
    })
    .catch(error => {
        console.error('Error:', error);
    });
