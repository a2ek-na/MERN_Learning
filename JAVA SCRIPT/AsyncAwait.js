function getData(data){
    return new Promise((resolve, reject) => {
        console.log(`Getting Data for -> ${data}........`)
        setTimeout(() => {
            console.log(`Data -> ${data}\n`);
            resolve("200")
        }, 5000); 
    });
}


(async function () {
    console.log("Here, the Script will stop working  and Hence the Asynchronous nature will dominate.");
    await getData(200);
})();


getData(100);
console.log("Here, the Script does not stop working and Hence the synchronous nature will dominate.");