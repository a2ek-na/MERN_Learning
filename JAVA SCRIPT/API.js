let listUrl = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies.json";

(async () => {
    // Fetch full list of currency codes and names
    let listRes = await fetch(listUrl);
    let listData = await listRes.json();
    console.log(listData);

    // Prompt user for two currency codes
    let country1 = prompt("Enter the code of Country 1").trim().toLowerCase();
    let country2 = prompt("Enter the code of Country 2").trim().toLowerCase();

    // Fetch the base‐currency file (it contains rates to all others)
    let baseUrl = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${country1}.json`;
    let rateRes = await fetch(baseUrl);
    let rateData = await rateRes.json();

    // // Extract and log the rate
    let rate = rateData[country2];
    console.log(`1 ${country1.toUpperCase()} = ${rate} ${country2.toUpperCase()}`);
})();
