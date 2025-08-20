function getData(data){
    return new Promise((resolve, reject) => {
        console.log(`Fetching Data ${data}...`);
        setTimeout(() => {
            console.log(`Data - ${data}`);
            resolve("Data delivered");
        }, 4000);
    });
}

console.log("Promise Chain Started...");
getData(1).then(() =>{
    return getData(2).then(() => {
        return getData(3).then(() => {
            return getData(4).then(() => {
                return getData(5).then(() => {
                    console.log("Done Sir, All data delivered!!!");
                });
            });
        });
    });
});