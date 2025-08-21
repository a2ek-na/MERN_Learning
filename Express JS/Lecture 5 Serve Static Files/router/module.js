const exp = require('express');
const routers = exp.Router();
const path = require('path');

routers.get('/', (request, response, next)=>{
    response.sendFile(path.join(__dirname, "../", "views", "hi.html"));
});

module.exports = routers;