const http = require('http');
const express = require('express');

const app = express();

app.use((request, response, next) =>{
    console.log("In the First Middleware");
    next();
});

app.use((request, response, next) =>{
    console.log("In the Second Middleware");
    response.send(`<h1>Welcome to Gupta general store</h1 <h2>Kaise ho aap??</h2>`);
});

const server = http.createServer(app);

const PORT = 7001;
server.listen(PORT, () =>{
    console.log(`Server start running on http://localhost:${PORT}`);
})