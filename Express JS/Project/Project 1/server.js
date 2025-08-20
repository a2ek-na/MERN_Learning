const http = require('http');
const exp = require('express');
const PORT = 9000;

const app = exp();
app.use('/contactUs', (request, response, next)=>{
    response.write(`
        <h1> 
            Please Fill up the form below
        </h1>
        <form action = "submitDetails" method = "POST" >
            <input name = "namee" placeholder='Enter your Name' type='text' id = 'naam'> </input>
            <input name = "age" placeholder='Enter your age' type='number' id = 'umar'> </input>
            <input name = "address" placeholder='Address' type='textBox' id = 'pata'> </input>
            <a href = "/submitDetails">
                <button type = "submit">Submit the details noww</button>
            </a>
        </form>`);
})

app.post("/submitDetails", (request, response, next) =>{
    response.write(`<h1> Thank you For visiting us...</h1>`)
    let content = [];
    request.on("data", (chunk) =>{
        content.push(chunk);
    })

    request.on("end", ()=>{
        let parsedContent = Buffer.concat(content).toString();
        const parameters = new URLSearchParams(parsedContent);
        const finalMessage = {};
        for(const [key, value] of parameters) finalMessage[key] = value;
        console.log(finalMessage);
    })

    response.end();
})

app.use((request, response, next)=>{
    console.log("MiddleWare1",request.url, request.method);
    next();
})

app.use((request, response, next)=>{
    console.log("MiddleWare2",request.url, request.method);
    next();
})
app.use('/', (request, response, next)=>{
    console.log(`Global Middleware.....`);
    response.writeHead(302, {Location : '/contactUs'});
    response.end();
})



const server = http.createServer(app);

app.listen(PORT, ()=>{
    console.log(`Server started running on http://localhost:${PORT}`);
})