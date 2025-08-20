const http = require('http');
const server = http.createServer((request, response) => {
    console.log(request.url, request.method)
    if(request.url === '/form' && request.method === 'GET'){
        response.writeHead(200, { 'Content-Type': 'text/html' });        

        response.write('<html>');
            response.write('<head>');
                response.write('<title>Abhishek Gupta</title>');
            response.write('</head>');
            response.write('<body>');
                response.write('<form action = "/submitForm" method = "POST"> ');
                    response.write('<label for = "Name">Enter your Name - </label>');
                    response.write('<input type = "text" name = "MyName" id = "Name"></input><br>');

                    response.write('<label for = "Age">Enter your Age - </label>');
                    response.write('<input type = "Number" name = "MyAge" id = "Age"></input><br>');

                    response.write('<label for = "Address">Enter your Address - </label>');
                    response.write('<input type = "text" name = "MyAddress" id = "Address"></input><br>');
                    response.write('<button type = "submit">Submit details </button>')
                    
                response.write('</form>');
            response.write('</body>');
            response.write('</html>');
            return response.end();
    }
    else if(request.url === '/submitForm' && request.method === "POST"){
        response.statusCode = 302;
        response.setHeader('location', "/");
        return response.end();
    }
    else {
        response.writeHead(200, { 'Content-Type': 'text/html' });
        response.write('<h1> Hey there,<br> Welcome to my Website......</h1>');
        response.write('<a href="/form"><button>Start filling the form right Now...</button></a>');
        return response.end();
    }
});
const PORT = 5001;

server.listen(PORT, ()=>{
    console.log(`Server start running on http://localhost:${PORT}`);
});
