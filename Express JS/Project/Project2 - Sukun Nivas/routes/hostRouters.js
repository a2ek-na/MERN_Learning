const exp = require('express');
const routers = exp.Router();
const path = require('path');

routers.get('/', (request, response, next) => {
    response.sendFile(path.join(__dirname, "../", "views", "host", "home.html"));
});

routers.get("/addHome", (request, response, next) => {
    response.sendFile(path.join(__dirname, "../", "views", "host", "addHome.html"));
});

routers.post("/registerHome", (request, response, next) =>{
    console.log("Home Successfully Registered\n");
    console.log(request.body);
    response.sendFile(path.join(__dirname, "../", "views", "host", "registerHome.html"));
});

module.exports = routers;