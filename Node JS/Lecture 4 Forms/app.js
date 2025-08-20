const http = require('http');

const server = http.createServer((request, response) => {
    if(request.url === '/form'){
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
                    response.write('<button> type = "Submit" Submit details </button>')
                    
                response.write('</form>');
            response.write('</body>');
            response.write('</html>');
            return response.end();
    }
    if(request.url === '/submitForm'){
        response.write('<h1> Thanks for filling the Form....</h1>');
        return response.end();
    }
});

const PORT = 5001;
server.listen(PORT, ()=> {
    console.log(`Server started at http://localhost:${PORT}/form`);
})