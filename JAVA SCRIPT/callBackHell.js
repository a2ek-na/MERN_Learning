function hey(say){
    console.log(`You are on Data ${say}`);
}

console.log("Calling Data 1...");
setTimeout(() =>{
    hey(1);
    console.log("Calling Data 2...");
    setTimeout(() => {
        hey(2);
        console.log("Calling Data 3...");
        setTimeout(() =>{
            hey(3);
            console.log("Calling Data 4...");
            setTimeout(() =>{
                hey(4);
                console.log("Calling Data 5...");
                setTimeout(() => {
                    hey(5);
                    console.log("And you can see that the representation is getiing harder to understand and manage, and that's what the CallBack Hell look like. ");
                }, 2000)
            }, 2000)
        }, 2000)
    }, 2000);
}, 2000);


console.log("The other work will keep on executing and this is \"This is Asynchoronous Programming\"");





// function hey(data, nextData){
//     console.log(`Getting ${data}...`);
//     setTimeout(()=>{
//         console.log(`You are on Data ${data}`);
//         if(nextData) nextData();
//     }, 5000);
// }

// hey(1, ()=>{
//     hey(2, ()=>{
//         hey(3, ()=>{
//             hey(4, ()=>{
//                 hey(5);
//             })
//         })
//     })
// })
