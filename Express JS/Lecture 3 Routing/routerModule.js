const exp = require('express');

const route = exp.Router();

route.get('/form', (request, response, next)=>{
    response.send(`
        <form action = "/submitForm" method = "POST">
        <input id = "fname" name = "firstName" placeholder='Enter First Name'></input><br>
        <input id = "lname" name = "lastName" placeholder='Enter Last Name'></input><br>
        <button type = "submit">Submit form</button>
        </form>`);
    
    response.end();
});

route.post("/submitForm", (request, response, next)=>{
     response.send(`
        <h1>Thank you so much for filling the form...</h1>`);
})

module.exports = route;