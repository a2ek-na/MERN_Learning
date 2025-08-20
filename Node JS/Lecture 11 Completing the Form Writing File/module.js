const fs = require('fs');
const { type } = require('os');

function initialization(request, response){
    console.log(request.url);
    console.log(request.method);
    console.log();
    response.writeHead(200,{'Content-Type' : 'text/html'});
    response.write(`<h1>Hey There, Welcome to my Website...</h1>`)
    response.write(`
        <h2>Fill the Registration form below...</h2>
            <button onclick="window.location.href='/form';">
            Start filling Now....
        </button>`)
    response.end();
}

function form(request, response){
    console.log(request.url);
    console.log(request.method);
    console.log();
    response.writeHead(200,{'Content-Type' : 'text/html'});
    response.write(`<h1>Fill the form below...</h1>`)
    response.write(`
        <form action="/submitForm" method="POST">
            <label for="name">Name:</label><br />
            <input type="text" id="name" name="name" required><br /><br />

            <label for="email">Email:</label><br />
            <input type="email" id="email" name="email" required><br /><br />

            <label for="message">Message:</label><br />
            <textarea id="message" name="message" rows="5" cols="30" required></textarea><br /><br />

            <button type="submit">Submit</button>
        </form>
    `)
    response.end();
}

function formSubmission(request, response){
    response.writeHead(200,{'Content-Type' : 'text/html'});
    response.write(`<h1>Thanks for filling the form Dude....</h1>`)
    response.end();

    const message = [];
    request.on("data", (chunkOfData)=>{
        console.log(chunkOfData);
        message.push(chunkOfData);
    });

    request.on("end", ()=>{
        const parsedMessage = Buffer.concat(message).toString();
        console.log(parsedMessage);
        const parameters = new URLSearchParams(parsedMessage);
        console.log(parameters);
        const messageObject = {};

        for(const[key, value] of parameters){
            messageObject[key] = value;
        }

        console.log(messageObject);

        const stringedMessage = JSON.stringify(messageObject);
        console.log(stringedMessage);
        fs.writeFileSync('file.txt', stringedMessage);
        console.log("This will appear after some time as main thread is busy in Writing the file....")
        console.log("But this is not the case when fs.writefile is used instead of fs.writefilesync");
    });
}

module.exports = {
    initialization, 
    form,
    formSubmission
};
