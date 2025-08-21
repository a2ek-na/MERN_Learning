const exp = require('express');
const hostRouter = require('./routes/hostRouters');
const userRouter = require('./routes/userRouters');
const PORT = 3000;
const application = exp();
const praser = require('body-parser');


application.use(praser.urlencoded());

application.use("/", (request, response, next) => {
    console.log(request.url, request.method);
    next();
});

application.use('/host', hostRouter);
application.use('/user', userRouter);

application.use((request, response, next) =>{
    response.status(404);
    response.send(`<h1> Galt aa gye bhai wapis jao...</h1>
        <h2> Buyer ho toh idhar click kro ->  <a href = "/user"> Go to Home Page</a> </h2> 
        <h2> Landlord ho toh idhar click kro ->  <a href = "/host"> Go to Home Page</a> </h2>`);
})
application.listen(PORT, ()=>{
    console.log(`User's Server started at http://localhost:${PORT}/user`);
    console.log(`Host's Server started at http://localhost:${PORT}/host`);
})