function hey(say){
    console.log(`You are on Data ${say}`);
}

function getData(say){
    console.log("Here, I am Promising that I will, give you the data After 10 seconds.");
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(say > 10) reject("I have Data till 10 Only.");
            else {
                hey(say);
                resolve("Data delivered.")
            }
        }, 10000);
    });
};