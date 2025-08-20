const http = require('http');
const portNumber = 3000;

const server = http.createServer((request, response) => {
    console.log(request);
});


server.listen(portNumber, ()=>{
    console.log(`Server start running on  address as http://localhost:${portNumber}/`);
});
