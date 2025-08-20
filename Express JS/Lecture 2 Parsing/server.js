const exp = require('express');
const bodyParser = require('body-parser');
const PORT = 3002;

const application = exp();

application.post('/submitForm', (request, response, next)=>{
    console.log(request.url, request.method);
    console.log(`Here the body is not defined yet....`);
    console.log(request.body);
    next();
});

application.use(bodyParser.urlencoded({extended: true}));

application.post('/submitForm', (request, response, next)=>{
    console.log(request.url, request.method);
    console.log(`The body is here defined.......`);
    console.log(request.body);
});

application.use('/', (request, response, next) =>{
    console.log(request.url, request.method);
    response.setHeader("content-type", "text/html");
    response.write(`
    <form action="/submitForm" method = "POST">
        <label for="fname">First name:</label><br>
        <input type="text" id="fname" name="fname" value="Abhishek"><br>
        <label for="lname">Last name:</label><br>
        <input type="text" id="lname" name="lname" value="Gupta"><br><br>
        <input type="submit" value="Submit">
    </form>`);
    response.end();
});


application.listen(PORT, ()=>{
    console.log(`Server started running on http://localhost:${PORT}`)
})
