const exp = require('express');
const routers = exp.Router();
const path = require('path');


let answer = [];

routers.post('/submitForm', (request, response, next) => {
    answer.push(request.body);
    console.log(answer);
    response.sendFile(path.join(__dirname, "../", "views", "submitForm.html"));
});

routers.use('/', (request, response, next) => {
    response.sendFile(path.join(__dirname, "../", "views", "form.html"));
});


module.exports = routers;