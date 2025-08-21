const exp = require('express');
const routers = exp.Router();
const path = require('path');

routers.post('/submitForm', (request, response, next) => {
    response.sendFile(path.join(__dirname, "../", "views", "submitForm.html"));
});

routers.use('/', (request, response, next) => {
    response.sendFile(path.join(__dirname, "../", "views", "form.html"));
});


module.exports = routers;