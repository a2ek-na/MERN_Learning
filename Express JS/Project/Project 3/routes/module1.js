const { randomBytes } = require('crypto');
const express = require('express');
const path = require('path');
const router = express.Router();

router.get('/contactUs', (request, response, next)=>{
    response.sendFile(path.join(__dirname, "../", "view", "form.html"));
});

router.post("/submitDetails", (request, response, next) =>{
    response.sendFile(path.join(__dirname, "../" ,"view", "submitForm.html"));
    console.log(request.body);
});

router.use((request, response, next)=>{
    console.log("MiddleWare1",request.url, request.method);
    next();
});

router.use((request, response, next)=>{
    console.log("MiddleWare2",request.url, request.method);
    next();
});

router.use('/', (request, response, next)=>{
    console.log(`Global Middleware.....`);
    response.writeHead(302, {Location : '/abhishek/contactUs'});
    response.end();
});

module.exports = router;