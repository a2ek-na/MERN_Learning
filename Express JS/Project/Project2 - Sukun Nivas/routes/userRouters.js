const exp = require('express');
const routers = exp.Router();

routers.get('/', (request, response, next) => {
    response.sendFile(path.join(__dirname, "../", "views", "user", "home.html"));
});

routers.get('/rentHome', (request, response, next) => {
    response.sendFile(path.join(__dirname, "../", "views", "user", "rentHome.html"));
});

module.exports = routers;