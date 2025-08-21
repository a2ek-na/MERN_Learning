const exp = require('express');
const routers = exp.Router();

routers.get('/', (request, response, next) => {
    response.end();
});

routers.get('/rentHome', (request, response, next) => {
});

module.exports = routers;