const exp = require('express');
const routers = exp.Router();

routers.get('/', (request, response, next) => {
    response.end();
});

routers.get("/addHome", (request, response, next) => {
    response.end();
});

routers.post("/registerHome", (request, response, next) =>{
    console.log("Home Successfully Registered\n");
    console.log(request.body);
});

module.exports = routers;