const http = require('http');

const server = http.createServer((request, response)=>{
    if(request.url === "/products"){
        response.setHeader('Content-type','text/html');
        response.write("<html>");
        response.write("<head>");
        response.write("<title> Abhishek Gupta </title>");
        response.write("</head");
        response.write("<body>");
        response.write("<h1>Welcome to Products Page...</h1>");
        response.write("</body>");
        response.write("</html>");
        return response.end();
    }

    else if(request.url === "/services"){
        response.setHeader('Content-type','text/html');
        response.write("<html>");
        response.write("<head>");
        response.write("<title> Abhishek Gupta </title>");
        response.write("</head");
        response.write("<body>");
        response.write("<h1>Welcome to Services Page...</h1>");
        response.write("</body>");
        response.write("</html>");
        return response.end();
    }
    else {
        response.setHeader('Content-type','text/html');
        response.write("<html>");
        response.write("<head>");
        response.write("<title> Abhishek Gupta </title>");
        response.write("</head");
        response.write("<body>");
        response.write("<h1>Welcome to Home Page...</h1>");
        response.write("</body>");
        response.write("</html>");
        return response.end();
    }
});

server.listen(3001);