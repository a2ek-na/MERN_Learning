const http = require('http');

const server = http.createServer((request, response)=> {
    
    if(request.url == "/"){
        response.setHeader('Content-Type', 'text/html');
        response.end(`
            <html>
                <head>
                    <title>Reading Chunks...</title>
                </head>
                <body>
                    <form action = "/submitForm" method = "POST">
                        <label for = "Name">Enter your Name - </label>
                        <input type = "text" name = "MyName" id = "Name"></input><br>

                        <label for = "Age">Enter your Age - </label>
                        <input type = "Number" name = "MyAge" id = "Age"></input><br>

                        <label for = "Address">Enter your Address - </label>
                        <input type = "text" name = "MyAddress" id = "Address"></input><br>
                        <button type = "submit">Submit details </button>'
                    </form>
                </body>
            </html>
        `);
    }

    else if(request.url == '/submitForm'){
        const body = [];
        request.on('data', (chunk)=>{
            console.log(chunk);
            body.push(chunk);
        });
        request.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const parameters = new URLSearchParams(parsedBody);
            const jsonObject = {};

            for(const [key, value] of parameters.entries()){
                jsonObject[key] = value;
            }

            console.log(jsonObject);
        })
    }
});

const PORT = 5000;

server.listen(PORT, ()=>{
    console.log(`Server start running on  address as http://localhost:${PORT}`);
})
