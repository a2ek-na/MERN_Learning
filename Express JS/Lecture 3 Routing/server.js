const exp = require('express');
const router = require('./routerModule');

const application = exp();
const PORT = 10000;

application.use('/', router);

application.listen(PORT, ()=>{
    console.log(`Server started at http://localhost:${PORT}/form`);
})