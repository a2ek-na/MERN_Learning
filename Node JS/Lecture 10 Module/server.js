const http = require('http');
const required = require('./module');

const PORT = 5002;

const server = http.createServer((request, response)=>{
    if(request.url === '/') required.formModule(request, response);
});

server.listen(PORT, () =>{
    console.log(`Server start running on -> http://localhost:${PORT}`);
})