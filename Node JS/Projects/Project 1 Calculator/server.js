const http = require('http');
const home = require('./homePage');
const calci = require('./calculator');
const resu = require('./result');
const { resolve } = require('path');

const server = http.createServer((request, response) => {
    if(request.url == "/"){
        home(request, response);
        response.end();
    }
    else if(request.url == "/calculatorPage"){
        calci(request, response);
        response.end();
    }
    else if(request.url == "/result" && request.method == "POST"){
        resu(request, response);
    }
    else {
        response.writeHead(404, { "Content-Type": "text/plain" });
        response.end("404 Not Found");
        response.end();
    }
});

const PORT = 8001;
server.listen(PORT, () => {
    console.log(`Server started at http://localhost:${PORT}`);
})