const http = require('http');
const modules = require('./module');

const server = http.createServer((request, response)=>{
    if(request.url === '/'){
        modules.initialization(request, response);
    }
    else if(request.url === '/form'){
        modules.form(request,response);
    }
    else if(request.url === '/submitForm' && request.method === 'POST'){
        modules.formSubmission(request, response);
    }
});


const PORT = 5002;

server.listen (PORT, () =>{
    console.log(`Server start running on http://localhost:${PORT}`);
})