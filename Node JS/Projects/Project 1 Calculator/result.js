function result(request, response){
    let content = [];
    request.on('data' , (chunk) =>{
        content.push(chunk);
    })

    let finalContent = {};
    request.on('end', ()=>{
        const parsedContent = Buffer.concat(content).toString();
        const paramters = new URLSearchParams(parsedContent);

        for(const[key, value] of paramters.entries()){
            finalContent[key] = value;
        }
        console.log(finalContent);         
        let num1 = parseFloat(finalContent.number1);
        let num2 = parseFloat(finalContent.number2);
        console.log(num1);
        console.log(num2);
        response.write(
            `<body>
                <h1> The result of summation is -- ${num1+num2}</h1>
            </body>`);

    })
}

module.exports = result;